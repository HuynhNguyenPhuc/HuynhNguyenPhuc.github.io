import { experience, honors, profile, projects, research } from "../content.js";
import Icons from "../components/Icons.jsx";
import usePageTitle from "../usePageTitle.js";

function Section({ id, title, children }) {
  return (
    <section className="block" id={id} aria-labelledby={`${id}-h`}>
      <h2 id={`${id}-h`}>{title}</h2>
      {children}
    </section>
  );
}

export default function About() {
  usePageTitle("About");

  return (
    <>
      <section className="intro" aria-labelledby="top">
        <h1 id="top">About me</h1>
        <p className="lead">{profile.lead}</p>
        <Icons />
      </section>

      <Section id="research" title="Research">
        <div>
          {research.map((item) => (
            <article className="card" key={item.title}>
              <h3>
                <a href={item.href}>{item.title}</a>
              </h3>
              <p className="meta">{item.meta}</p>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="experience" title="Experience">
        <div>
          {experience.map((item) => (
            <article className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p className="meta">{item.meta}</p>
              {item.body && <p>{item.body}</p>}
              {item.bullets && (
                <ul>
                  {item.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </Section>

      <Section id="projects" title="Projects">
        <ul className="repos">
          {projects.map((p) => (
            <li className="card" key={p.name}>
              <span className="name">
                <a href={p.href}>{p.name}</a>
                {p.lang && <span className="lang">{p.lang}</span>}
              </span>
              <p>{p.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="honors" title="Honors">
        <ul className="plain-list">
          {honors.map((h) => (
            <li key={h.text}>
              <span className="year">{h.year}</span>
              <span>{h.text}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="contact" title="Contact">
        <div className="card">
          <p>
            The best way to reach me is email at <a href={`mailto:${profile.email}`}>{profile.email}</a>. You can also
            find me on <a href={profile.linkedin}>LinkedIn</a> and <a href={profile.github}>GitHub</a>.
          </p>
        </div>
      </Section>
    </>
  );
}
