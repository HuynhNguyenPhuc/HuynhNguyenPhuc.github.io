import { useCallback, useEffect, useRef, useState } from "react";

const FRAMES = 120;
const STEP_DEG = 3;

// Deterministic point cloud so the drawing is identical on every visit.
// Each point is x, y, z, weight; y is up and z points toward the viewer.
function buildPoints() {
  let seed = 7;
  const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const gauss = () => (rnd() + rnd() + rnd() + rnd() - 2) / 2;
  const pts = [];
  const add = (x, y, z, w) => pts.push(x, y, z, w);

  // Spine: 24 vertebrae stacked along the back.
  for (let v = 0; v < 24; v++) {
    const y = -1 + (v * 2) / 23;
    for (let i = 0; i < 70; i++) {
      add(gauss() * 0.16, y + (rnd() - 0.5) * 0.05, -0.38 + gauss() * 0.12, 1.4);
    }
    for (let i = 0; i < 10; i++) {
      add(gauss() * 0.03, y + (rnd() - 0.5) * 0.04, -0.5 - rnd() * 0.06, 1.1);
    }
  }

  // Ribs: ten pairs, each an elliptical arc from the spine round to the front.
  for (let level = 0; level < 10; level++) {
    const yTop = 0.78 - level * 0.14;
    const a = 0.46 + 0.34 * Math.sin(((level + 1) / 11) * Math.PI);
    for (const side of [-1, 1]) {
      for (let i = 0; i < 130; i++) {
        const t = (i / 129) * 0.93;
        const theta = t * Math.PI;
        add(
          side * a * Math.sin(theta) + gauss() * 0.014,
          yTop - 0.17 * t + gauss() * 0.014,
          0.04 - 0.42 * Math.cos(theta) + gauss() * 0.014,
          1,
        );
      }
    }
  }

  // Sternum and clavicles.
  for (let i = 0; i < 260; i++) {
    add(gauss() * 0.06, 0.72 - rnd() * 0.72, 0.47 + gauss() * 0.02, 1.2);
  }
  for (const side of [-1, 1]) {
    for (let i = 0; i < 100; i++) {
      const t = rnd();
      add(side * (0.05 + t * 0.7) + gauss() * 0.01, 0.84 + 0.03 * t + gauss() * 0.012, 0.3 - t * 0.35, 1.1);
    }
  }

  // Soft tissue haze inside the chest.
  for (let i = 0; i < 2600; i++) {
    let x, y, z;
    do {
      x = (rnd() * 2 - 1) * 0.72;
      y = (rnd() * 2 - 1) * 0.9;
      z = (rnd() * 2 - 1) * 0.44;
    } while ((x * x) / 0.52 + (y * y) / 0.81 + (z * z) / 0.19 > 1);
    add(x, y, z, 0.32);
  }

  return Float32Array.from(pts);
}

const POINTS = buildPoints();

export default function XRayFilm() {
  const canvasRef = useRef(null);
  const drag = useRef(null);
  const [frame, setFrame] = useState(0);
  const [playing, setPlaying] = useState(
    () => !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [themeTick, setThemeTick] = useState(0);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = Math.round(canvas.clientWidth * dpr);
    const h = Math.round(canvas.clientHeight * dpr);
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }

    const phi = (frame * STEP_DEG * Math.PI) / 180;
    const cos = Math.cos(phi);
    const sin = Math.sin(phi);
    const scale = Math.min(w, h * 0.98) * 0.42;
    const size = Math.max(1.5, 1.7 * dpr);
    const film = getComputedStyle(document.documentElement).getPropertyValue("--film").trim();

    ctx.globalCompositeOperation = "source-over";
    ctx.globalAlpha = 1;
    ctx.fillStyle = film || "#0d1922";
    ctx.fillRect(0, 0, w, h);

    // Additive blending: overlapping structures add up like X-ray absorption.
    ctx.globalCompositeOperation = "lighter";
    ctx.fillStyle = "#b9dcea";
    for (let i = 0; i < POINTS.length; i += 4) {
      const sx = w / 2 + (POINTS[i] * cos + POINTS[i + 2] * sin) * scale;
      const sy = h / 2 - POINTS[i + 1] * scale;
      ctx.globalAlpha = 0.055 * POINTS[i + 3];
      ctx.fillRect(sx - size / 2, sy - size / 2, size, size);
    }
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = "source-over";
  }, [frame, themeTick]);

  useEffect(draw, [draw]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const observer = new ResizeObserver(draw);
    observer.observe(canvas);
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onTheme = () => setThemeTick((t) => t + 1);
    media.addEventListener("change", onTheme);
    return () => {
      observer.disconnect();
      media.removeEventListener("change", onTheme);
    };
  }, [draw]);

  useEffect(() => {
    if (!playing) return undefined;
    const id = setInterval(() => setFrame((f) => (f + 1) % FRAMES), 80);
    return () => clearInterval(id);
  }, [playing]);

  const goTo = (n) => setFrame((((Math.round(n) % FRAMES) + FRAMES) % FRAMES));
  const degrees = frame * STEP_DEG;

  const onPointerDown = (e) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    drag.current = { x: e.clientX, frame };
    setPlaying(false);
  };
  const onPointerMove = (e) => {
    if (!drag.current) return;
    const dx = e.clientX - drag.current.x;
    goTo(drag.current.frame - (dx / e.currentTarget.clientWidth) * FRAMES);
  };
  const endDrag = () => {
    drag.current = null;
  };

  return (
    <figure className="film">
      <div className="film-frame">
        <canvas
          ref={canvasRef}
          role="img"
          aria-label="Schematic chest X-ray of a rib cage that rotates as you drag or move the slider"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
        />
        <div className="film-controls">
          <output htmlFor="view">
            View {frame + 1} of {FRAMES}, {degrees}&deg;
          </output>
          <button type="button" aria-pressed={!playing} onClick={() => setPlaying((p) => !p)}>
            {playing ? "Pause" : "Play"}
          </button>
          <input
            id="view"
            type="range"
            min="0"
            max={FRAMES - 1}
            step="1"
            value={frame}
            aria-label="View angle"
            aria-valuetext={`${degrees} degrees`}
            onChange={(e) => {
              setPlaying(false);
              goTo(Number(e.target.value));
            }}
          />
        </div>
      </div>
      <figcaption>
        A schematic rib cage drawn as absorption along each ray. My X-ray research renders 120 views at 3&deg; steps
        around each CT volume. Drag the film or use the slider to step through them.
      </figcaption>
    </figure>
  );
}
