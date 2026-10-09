# Duan Gómez — Portafolio

Portafolio personal de **Duan Esteban Gómez Rojas**, desarrollador de software en Medellín y
fundador de [Dcodea](https://www.instagram.com/dcod.ea/).

Hecho con **React 19 + TypeScript + Vite**, sin librerías de UI: diseño inspirado en Apple,
animaciones con CSS e `IntersectionObserver`, y totalmente responsive.

## Ejecutar en local

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # genera dist/
```

## Contenido

Todo el texto (perfil, proyectos, experiencia, habilidades) está en `src/data.ts`.
Las capturas de los proyectos están en `public/projects/` y la foto en `public/duan.jpg`.

## Publicar en GitHub Pages

1. Sube este repositorio a GitHub. Si lo nombras **`DuanGomez.github.io`**, quedará en
   `https://duangomez.github.io/`; con cualquier otro nombre quedará en
   `https://duangomez.github.io/<nombre-del-repo>/` (el sitio usa rutas relativas, así que
   funciona en ambos casos).
2. En el repositorio: **Settings → Pages → Source: GitHub Actions** (no uses las plantillas
   "Jekyll" ni "Static HTML").
3. Cada push a `main` ejecuta `.github/workflows/deploy-pages.yml` y publica el sitio.
# Portafolio
