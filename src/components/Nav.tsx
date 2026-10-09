import { useEffect, useState } from 'react';
import { PROFILE } from '../data';
import { Icon } from './Icon';

const LINKS = [
  { href: '#sobre-mi', label: 'Sobre mí' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#experiencia', label: 'Experiencia' },
  { href: '#habilidades', label: 'Habilidades' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''} ${open ? 'nav--open' : ''}`}>
      <div className="nav__inner">
        <a className="nav__brand" href="#inicio" onClick={() => setOpen(false)}>
          <img src="./duan.jpg" alt="" width={28} height={28} />
          <span>{PROFILE.short}</span>
        </a>
        <nav className="nav__links" aria-label="Secciones">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
        </nav>
        <a className="btn btn--primary btn--sm nav__cta" href="#contacto" onClick={() => setOpen(false)}>Contáctame</a>
        <button className="nav__toggle" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} onClick={() => setOpen(!open)}>
          <Icon name={open ? 'close' : 'menu'} size={22} />
        </button>
      </div>
    </header>
  );
}
