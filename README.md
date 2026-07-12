# dilo-landing

Landing de descarga de [Dilo](https://github.com/aacontn/dilo) — dictado por voz offline, es-first, para vibe coders LATAM.

Estático puro: `index.html` + `styles.css` + `app.js`, sin frameworks ni build. Las fuentes van bundled (woff2, licencias OFL) y no hay trackers.

## Desarrollo

Abrir `index.html` en el navegador. Ya.

## Deploy

Cloudflare Pages, proyecto `dilo`:

```bash
npx wrangler pages deploy . --project-name dilo
```

## Estructura

- `index.html` — todo el contenido (copy en español, voz de marca según el spec del repo principal)
- `styles.css` — design tokens de Dilo (tinta `#0D1117`, mango `#FF9E1B`, menta `#2EE6A8`)
- `app.js` — detección de OS para el botón de descarga + demo autodictada del hero
- `assets/` — fuentes y OG image (`og.svg` fuente → `og.png` con `rsvg-convert -w 1200 -h 630`)
