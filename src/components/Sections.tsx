import { EDUCATION, EXPERIENCE, LANGUAGES, PROFILE, SKILLS, SOFT_SKILLS } from '../data';
import { Icon } from './Icon';

export function Experience() {
  return (
    <section className="section" id="experiencia">
      <div className="container">
        <div className="section__head reveal">
          <p className="eyebrow">Trayectoria</p>
          <h2 className="section__title">Experiencia y formación.</h2>
        </div>

        <div className="journey">
          <div className="timeline">
            {EXPERIENCE.map((job) => (
              <article className="timeline__item reveal" key={job.company}>
                <span className="timeline__dot"><Icon name="briefcase" size={15} /></span>
                <header>
                  <h3>{job.role} <span>· {job.company}</span></h3>
                  <p className="timeline__period">{job.period}</p>
                </header>
                <ul>
                  {job.points.map((pt) => <li key={pt}>{pt}</li>)}
                </ul>
              </article>
            ))}
          </div>

          <aside className="education reveal">
            <h3><Icon name="cap" size={20} /> Educación</h3>
            <ol>
              {EDUCATION.map((e) => (
                <li key={e.title}>
                  <strong>{e.title}</strong>
                  <span>{e.place}</span>
                  <em>{e.status}</em>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section className="section section--dark" id="habilidades">
      <div className="container">
        <div className="section__head reveal">
          <p className="eyebrow eyebrow--light">Habilidades</p>
          <h2 className="section__title">Herramientas con las que construyo.</h2>
        </div>

        <div className="bento">
          {SKILLS.map((group, i) => (
            <article className={`bento__card bento__card--${i} reveal`} key={group.area}>
              <span className="bento__icon"><Icon name={group.icon} size={22} /></span>
              <h3>{group.area}</h3>
              <ul>
                {group.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}

          <article className="bento__card bento__card--soft reveal">
            <span className="bento__icon"><Icon name="heart" size={22} /></span>
            <h3>Habilidades blandas</h3>
            <ul>
              {SOFT_SKILLS.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </article>

          <article className="bento__card bento__card--lang reveal">
            <span className="bento__icon"><Icon name="globe" size={22} /></span>
            <h3>Idiomas</h3>
            {LANGUAGES.map((l) => (
              <div className="lang" key={l.name}>
                <div><strong>{l.name}</strong><span>{l.level}</span></div>
                <div className="lang__bar"><i style={{ width: `${l.value}%` }} /></div>
              </div>
            ))}
            <p className="bento__note">Metodología: Scrum</p>
          </article>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section className="section contact" id="contacto">
      <div className="container contact__inner reveal">
        <p className="eyebrow">Contacto</p>
        <h2 className="contact__title">Hablemos.</h2>
        <p className="section__lead">
          ¿Tienes una vacante o un proyecto en mente? Escríbeme y te respondo pronto.
        </p>
        <div className="contact__actions">
          <a className="btn btn--primary" href={`mailto:${PROFILE.email}`}><Icon name="mail" size={16} /> {PROFILE.email}</a>
          <a className="btn btn--ghost" href={PROFILE.whatsapp} target="_blank" rel="noopener"><Icon name="whatsapp" size={16} /> WhatsApp</a>
        </div>
        <ul className="contact__list">
          <li><Icon name="phone" size={16} /> {PROFILE.phone}</li>
          <li><Icon name="pin" size={16} /> {PROFILE.location}</li>
          <li><a href={PROFILE.github} target="_blank" rel="noopener"><Icon name="github" size={16} /> github.com/DuanGomez</a></li>
        </ul>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>© {new Date().getFullYear()} {PROFILE.name}</p>
        <a className="footer__dcodea" href={PROFILE.dcodea} target="_blank" rel="noopener">
          <img src="./dcodea.png" alt="" width={20} height={20} /> Fundador de <strong>Dcodea</strong>
        </a>
      </div>
    </footer>
  );
}
