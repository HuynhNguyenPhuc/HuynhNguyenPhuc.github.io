import { Link } from "react-router-dom";
import PostList from "../components/PostList.jsx";
import XRayFilm from "../components/XRayFilm.jsx";
import { experience, honors, profile, projects, research } from "../content.js";
import usePageTitle from "../usePageTitle.js";

function Section({ id, title, children }) {
  return (
    <section className="block" id={id} aria-labelledby={`${id}-h`}>
      <h2 id={`${id}-h`}>{title}</h2>
      {children}
    </section>
  );
}

export default function Home() {
  usePageTitle("");

  return (
    <>
      <section className="hero" aria-labelledby="top">
        <div>
          <h1 id="top">{profile.name}</h1>
          <p className="lead">{profile.lead}</p>
          <ul className="links">
            <li>
              <a href={profile.github}>GitHub</a>
            </li>
            <li>
              <a href={profile.linkedin}>LinkedIn</a>
            </li>
            <li>
              <a href={`mailto:${profile.email}`}>Email</a>
            </li>
          </ul>
        </div>
        <XRayFilm />
      </section>

      <Section id="research" title="Research">
        <div>
          {research.map((item) => (
            <article className="entry" key={item.title}>
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
            <article className="entry" key={item.title}>
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
            <li key={p.name}>
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
              <span className="year">{h.year}</span> {h.text}
            </li>
          ))}
        </ul>
      </Section>

      <Section id="blog" title="Blog">
        <div>
          <PostList limit={3} />
          <p className="more">
            <Link to="/blog">All posts</Link>
          </p>
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <div className="entry">
          <p>
            The best way to reach me is email at <a href={`mailto:${profile.email}`}>{profile.email}</a>. You can also
            find me on <a href={profile.linkedin}>LinkedIn</a> and <a href={profile.github}>GitHub</a>.
          </p>
        </div>
      </Section>
    </>
  );
}
