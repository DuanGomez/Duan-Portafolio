import type { CSSProperties } from 'react';
import { ACADEMIC, PROJECTS, type Project } from '../data';
import { Icon } from './Icon';

function BrowserFrame({ src, alt, url }: { src: string; alt: string; url?: string }) {
  return (
    <div className="frame">
      <div className="frame__bar">
        <span className="frame__dots"><i /><i /><i /></span>
        {url && <span className="frame__url">{url.replace('https://', '')}</span>}
      </div>
      <img src={src} alt={alt} loading="lazy" decoding="async" />
    </div>
  );
}

function ProjectPanel({ project, index }: { project: Project; index: number }) {
  const style = { '--accent': project.accent } as CSSProperties;
  return (
    <article className={`project reveal ${index % 2 ? 'project--flip' : ''}`} style={style}>
      <div className="project__copy">
        <p className="project__kicker">{project.kicker}</p>
        <h3 className="project__name">{project.name}</h3>
        <p className="project__summary">{project.summary}</p>
        <ul className="project__highlights">
          {project.highlights.map((h) => (
            <li key={h}><Icon name="sparkle" size={14} /> {h}</li>
          ))}
        </ul>
        <ul className="project__stack" aria-label="Tecnologías">
          {project.stack.map((s) => <li key={s}>{s}</li>)}
        </ul>
        <div className="project__actions">
          {project.demo && (
            <a className="btn btn--primary btn--sm" href={project.demo} target="_blank" rel="noopener">
              Ver demo en vivo <Icon name="external" size={14} />
            </a>
          )}
          {project.repo && (
            <a className="btn btn--ghost btn--sm" href={project.repo} target="_blank" rel="noopener">
              <Icon name="github" size={14} /> Código
            </a>
          )}
        </div>
      </div>

      <div className="project__visual">
        {project.image && <BrowserFrame src={project.image} alt={`Captura de ${project.name}`} url={project.demo} />}
        {project.gallery?.[0] && (
          <div className="project__second">
            <BrowserFrame src={project.gallery[0]} alt={`Otra vista de ${project.name}`} />
          </div>
        )}
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section className="section section--tint" id="proyectos">
      <div className="container">
        <div className="section__head reveal">
          <p className="eyebrow">Proyectos</p>
          <h2 className="section__title">Productos reales, listos para probar.</h2>
          <p className="section__lead">
            Cada proyecto tiene una demo publicada: puedes entrar, iniciar sesión con los usuarios
            de prueba y usarlo como si fuera producción.
          </p>
        </div>

        <div className="projects">
          {PROJECTS.map((p, i) => <ProjectPanel key={p.id} project={p} index={i} />)}
        </div>

        <article className="academic reveal">
          <div className="academic__icon"><Icon name="code" size={26} /></div>
          <div>
            <p className="project__kicker">{ACADEMIC.kicker}</p>
            <h3>{ACADEMIC.name}</h3>
            <p>{ACADEMIC.summary}</p>
          </div>
          <ul className="project__stack">
            {ACADEMIC.stack.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </article>
      </div>
    </section>
  );
}
