# DHIVAKAR B — Full Stack Developer Portfolio

A responsive dark-modern portfolio built with React + Vite. Includes a featured project section for **DHIVARA — Smart Queue Prediction System** (React, FastAPI, Python, MySQL).

## 1. Install what you need

1. Install Node.js LTS from https://nodejs.org/
2. After installation, open **Command Prompt** (press `Win + R`, type `cmd`, press Enter).
3. Check that Node and npm are installed:

   ```bash
   node -v
   npm -v
   ```

   If both commands show version numbers, continue.

## 2. Run the website on Windows

1. Extract the ZIP file.
2. Open the extracted `dhivakar-portfolio` folder.
3. Click the File Explorer address bar, type `cmd`, and press Enter. Command Prompt will open in that folder.
4. Run these commands one by one:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL Vite shows, usually `http://localhost:5173`.
6. Keep the Command Prompt window open while testing. Press `Ctrl + C` to stop the development server.

## 3. Personalize before publishing

Open `src/main.jsx` in VS Code or Notepad and find these values near the start of `App()`:

```js
const email = "your.email@example.com";
const github = "https://github.com/your-github-username";
const linkedin = "https://www.linkedin.com/in/your-linkedin-username/";
```

Replace them with your real email, GitHub URL, and LinkedIn URL. These are placeholders until you replace them.

To add a real GitHub/demo link for DHIVARA, find the project object in `projects` and set `link` to your public repository or live demo URL. Do not publish private keys, passwords, database credentials, or personal data.

Update the skills list if needed. Only list technologies you can explain in an interview. The dashboard preview is a visual mock-up, not a live connection to your queue backend.

## 4. Build-check before deployment

In the portfolio folder, run:

```bash
npm run build
```

If it succeeds, Vite creates a `dist` folder. You can preview the production build using:

```bash
npm run preview
```

## 5. Publish free with Vercel

1. Create/sign in to GitHub: https://github.com/
2. Create a **new public repository** named `dhivakar-portfolio`.
3. Upload the extracted project files to that repository (upload the files inside the project folder, including `package.json`, `index.html`, `src`, and `vite.config.js` if present; do not upload `node_modules`).
4. Create/sign in to Vercel: https://vercel.com/
5. Choose **Add New → Project**, import `dhivakar-portfolio` from GitHub.
6. Vercel should detect Vite. Use:
   - Framework preset: **Vite**
   - Build command: `npm run build`
   - Output directory: `dist`
7. Click **Deploy**. When it finishes, Vercel gives you a public URL similar to `https://dhivakar-portfolio.vercel.app`. The exact URL depends on availability and your account/project settings.
8. Open the URL on your phone or in an incognito window to confirm it is public.

Alternative: GitHub Pages can host static sites too, but Vercel is usually the simpler first deployment for a Vite project.

## 6. Add the URL to LinkedIn

1. Open your LinkedIn profile.
2. Click the pencil/edit icon in the intro section, or open **Contact info**.
3. Add your deployed portfolio URL under **Website** if that field is available.
4. You can also add a Featured item: **Add profile section → Recommended → Add featured → Add a link** (labels can vary).
5. Use a title such as **My Developer Portfolio** and save.

## Troubleshooting

- **`npm` is not recognized:** install Node.js LTS, close Command Prompt, reopen it, and check `npm -v`.
- **`npm install` errors:** make sure Command Prompt is in the project folder where `package.json` exists.
- **Vite URL doesn't open:** keep `npm run dev` running and use the exact local URL printed in the terminal.
- **Deployment build fails:** run `npm run build` locally and read the first error shown.
- **Links open the wrong account:** replace all placeholder URLs before deployment.

## Project structure

```text
dhivakar-portfolio/
├── index.html
├── package.json
├── README.md
├── .gitignore
└── src/
    ├── main.jsx
    └── styles.css
```
