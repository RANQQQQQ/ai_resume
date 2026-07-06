# May / 南瓜头 — HTML Resume

A dependency-free, bilingual single-page portfolio resume built from `HTML_Resume_Agent_Brief_May.md`.

## Preview

Open `index.html` directly, or run a local server:

```bash
python3 -m http.server 4173 --directory may-resume
```

Then visit `http://127.0.0.1:4173`.

## Maintain the content

Most frequently changing information lives in **`content.js`**:

- contact details;
- honours and awards;
- public project links.

Each bilingual item uses `{ zh, en }`. Leaving a contact `value` empty preserves the visible placeholder automatically.

Less frequent structural content remains in `index.html`. Visual design and breakpoints live in `styles.css`; interactions and content rendering live in `script.js`.

- Portrait: replace the `.portrait-placeholder` block in `index.html` with an `<img>`.
- English level: search `index.html` for `English level to be added`.
- Project screenshot: the current CSS mockup is self-contained and can be replaced with a real screenshot later.

## Publish with GitHub Pages

The repository includes `.github/workflows/deploy-may-resume.yml`. On every push to `main`, it publishes only the `may-resume` directory.

1. Create a GitHub repository and push this repository to it.
2. In GitHub, open **Settings → Pages**.
3. Set **Source** to **GitHub Actions**.
4. Run the “Deploy May Resume to GitHub Pages” workflow, or push a change under `may-resume/`.

The public URL will normally be `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`.
