# Shreeya Kurapati: personal website

Plain HTML, CSS, and JavaScript. No dependencies, nothing to install or build.

## Run it locally
- `npm start`, then open http://localhost:8080 (this runs `server.js`, a small static server), or
- `python3 -m http.server 8080`

Fonts (Fraunces, Inter, JetBrains Mono) load from Google Fonts. Offline, the site falls back to Georgia and system fonts.

## Deploy to GitHub Pages
1. Put the files from inside this folder at the top level of the repo (`index.html` must be in the root, with the `css`, `js`, and `assets` folders next to it).
2. Settings → Pages → Deploy from a branch → `main` / root → Save.
3. The site appears at https://shreeyakurapati.github.io/shreeyakurapati/ after a minute or two.

Netlify, Vercel, and Cloudflare Pages also work: no build command, publish directory `/`.

## Edit content
Everything is in `js/content.js`.
- `S`: the five sections.
- `P`: every project page. Copy an entry to add one. `s` is the section key, `tags` drive the topic map and search, `rel` lists related project ids, `tl` is the timeline, and `sec` holds the page sections (a section with no text is hidden).
- `Q` and `IDEAS`: the Questions section. `N`: notes. `CONTACT`: email address.
- `DOCS`: links to documents shown on a project page, as `{projectId:[{label,url}]}`. It is empty on purpose; add only documents that are public.

## Files
```
index.html        page shell
css/style.css     styling and animation
js/content.js     content
js/app.js         pages, router, chart, topic map, resume
js/network.js     homepage network diagram
js/fx.js          cursor, hover previews, scroll effects
assets/           favicon (add images and PDFs here)
```

## Notes
- The resume page (`#/resume`) prints cleanly; use Print and choose Save as PDF.
- Exact results from the IEEE red blood cell paper are left out until it is published.
- Photos and poster PDFs are not included yet. Add each file to `assets/` and link it from the project text once its permissions are confirmed.
- Reduced-motion settings are respected. The custom cursor and magnetic effects only run with a mouse.
