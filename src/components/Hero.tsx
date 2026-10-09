import { PROFILE, STATS } from '../data';
import { Icon } from './Icon';

export function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__glow" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__photo rise" style={{ animationDelay: '60ms' }}>
          <img src="./duan.jpg" alt="Foto de Duan Gómez" width={168} height={168} />
          <span className="hero__status"><i /> Disponible para trabajar</span>
        </div>

        <p className="eyebrow rise" style={{ animationDelay: '140ms' }}>
          {PROFILE.role} · Fundador de <a href={PROFILE.dcodea} target="_blank" rel="noopener">Dcodea</a>
        </p>
        <h1 className="hero__title rise" style={{ animationDelay: '220ms' }}>
          Hola, soy Duan.
          <br />
          <span className="gradient-text">Construyo software que se siente bien hecho.</span>
        </h1>
        <p className="hero__lead rise" style={{ animationDelay: '320ms' }}>
          Desarrollador full-stack en {PROFILE.location}. Creo productos de punta a punta con
          Angular, React, Node.js y Java&nbsp;/&nbsp;Spring&nbsp;Boot.
        </p>

        <div className="hero__actions rise" style={{ animationDelay: '420ms' }}>
          <a className="btn btn--primary" href="#proyectos">Ver proyectos <Icon name="arrow" size={16} /></a>
          <a className="btn btn--ghost" href={PROFILE.github} target="_blank" rel="noopener"><Icon name="github" size={16} /> GitHub</a>
        </div>

        <dl className="hero__stats rise" style={{ animationDelay: '520ms' }}>
          {STATS.map((s) => (
            <div key={s.label}>
              <dt>{s.value}</dt>
              <dd>{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function DcodeaBand() {
  return (
    <section className="dcodea" aria-labelledby="dcodea-title">
      <div className="container dcodea__inner reveal">
        <img className="dcodea__mark" src="./dcodea.png" alt="Isotipo de Dcodea" width={88} height={88} />
        <div>
          <p className="eyebrow eyebrow--light">Mi estudio</p>
          <h2 id="dcodea-title">
            Fundador de <span className="gradient-text">Dcodea</span>.
          </h2>
          <p className="dcodea__text">
            Dcodea es mi estudio de código y diseño: desarrollo web, software a medida y merch para
            developers. Ahí diseño y construyo proyectos completos —desde la interfaz hasta el
            despliegue— con obsesión por el detalle.
          </p>
        </div>
        <a className="btn btn--light" href={PROFILE.dcodea} target="_blank" rel="noopener">
          Conocer Dcodea <Icon name="external" size={15} />
        </a>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section className="section" id="sobre-mi">
      <div className="container about">
        <div className="reveal">
          <p className="eyebrow">Sobre mí</p>
          <h2 className="section__title">Aprendo rápido, entrego con cuidado.</h2>
        </div>
        <div className="about__body reveal">
          <p>{PROFILE.summary}</p>
          <p>
            Busco seguir creciendo en un equipo donde pueda aportar mis habilidades técnicas y de
            trabajo en equipo, y ampliar mis conocimientos en distintas áreas de la programación.
          </p>
          <ul className="about__facts">
            <li><Icon name="pin" size={16} /> {PROFILE.location}</li>
            <li><Icon name="cap" size={16} /> Ingeniería de Software · TdeA</li>
            <li><Icon name="globe" size={16} /> Español nativo · Inglés intermedio</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
