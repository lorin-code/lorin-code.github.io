# Lorin's personal website

Personal website for [lorin-code](https://github.com/lorin-code), built with semantic HTML, responsive CSS and vanilla JavaScript.

Live site: https://lorin-code.github.io/

## Local preview

```sh
python3 -m http.server 8097 --bind 127.0.0.1
```

Open http://127.0.0.1:8097/. No build step, external font, runtime dependency or API key is required.

## Publish

GitHub Pages publishes the root of the `main` branch. `.nojekyll` keeps the site as plain static files.

The technology names and project links are editable in `index.html`; design tokens and responsive rules live in `styles.css`.
