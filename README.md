# The Mind Museum

Personal site for Shreeya Kurapati. Plain HTML, CSS, and JavaScript with **no dependencies**, so there is nothing to install and nothing to build.

## Run it locally
Option 1 (Node, any recent version):
```
npm start
```
Then open http://localhost:8080. (`npm start` just runs `server.js`, a 20-line static server.)

Option 2 (Python): `python3 -m http.server 8080`

Option 3: double-click `index.html`. It works from a file, but use a server when testing.

Web fonts (Fraunces, Inter, JetBrains Mono) load from Google Fonts, so you need to be online to see them. Offline it falls back to Georgia and system fonts.

## Deploy
The site is fully static and uses hash routes (`#/s/lab`), so any host works with no server settings.
- **GitHub Pages:** push this folder to a repo, then Settings → Pages → deploy from the main branch, root folder. For the repo `shreeyakurapati/shreeyakurapati` the address will be `https://shreeyakurapati.github.io/shreeyakurapati/`. A repo named `shreeyakurapati.github.io` gives the cleaner `https://shreeyakurapati.github.io/`.
  Note: that repo's `README.md` is also her GitHub profile page. Replace it with a short intro and a link to the site if you deploy from there.
- **Netlify / Vercel / Cloudflare Pages:** drag the folder in, or connect the repo. No build command, publish directory is `/`.

## Edit content (all in `js/content.js`)
| What | Where |
|---|---|
| The five sections and their position in the network | `S` |
| Projects, research, writing | `P`. Copy one entry, change `id`, `s` (section key), `t`, `d`, `tags`, `rel` (ids of related projects), `meta`, `tl` (timeline), `sec` |
| Page sections | `sec`. Any value of `0` shows a dashed "Placeholder" box. Replace it with text. Add or remove keys freely |
| Questions on the Observatory page | `Q` |
| Field notes | `N` |
| Links to documents | `DOCS` (only entries with a `url` appear) |
| Contact email | `CONTACT.email` |

Tags drive the **Curiosity map** and **search**, so reuse tags across projects to create connections.

## Structure
```
index.html        page shell
css/style.css     all styling and animation
js/content.js     YOUR CONTENT
js/app.js         router, page templates, chart, curiosity map
js/network.js     canvas neural network
js/fx.js          custom cursor, magnetic buttons, previews, reveals, parallax
assets/           favicon (put images and PDFs here)
server.js         optional local server
```

## Interactions
Neural network (drifting neurons, cursor-reactive synapses, pulses; hover or tap a cluster, then enter), custom cursor with context labels (desktop), magnetic nav and buttons, hover previews, fog-wipe page transitions, scroll reveals, parallax fog, per-section lighting, section dots, expandable experiment logs, animated timelines, a data chart with tooltips (tap on phones), a curiosity map, and a museum index. Press `/` to search. Everything respects `prefers-reduced-motion`. Custom cursor and magnetic effects are desktop only.

## Still needed (placeholders)
- Real photos, posters, graphs, and PDFs for each project (put files in `assets/`, link from `sec` text or `DOCS`).
- A resume PDF (`DOCS.resume.url`) and a contact email (`CONTACT.email`).
- Essays and field notes.
- Confirm "Best Village High School Project nominee (Rock the Plastics)" on the iGEM 2025 timeline. It came from her Drive resume notes.

## Privacy note
The Drive documents found for this project (resume, ForREST project doc, iGEM notes) are private or unlisted. Do not link them until sharing is set to "anyone with the link" and the content is meant to be public. Do not publish her phone number. Prefer a resume PDF without it.
