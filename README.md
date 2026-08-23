# Mahbub Sarwar Portfolio V3

A full visual and engineering refresh of the previous Create React App portfolio.

## What changed

- Migrated from Create React App to **Next.js App Router + TypeScript**.
- Upgraded the styling foundation to **Tailwind CSS v4**.
- Replaced the Montserrat-everywhere typography with **Space Grotesk (display)** + **Manrope (body)** through `next/font`.
- Replaced `framer-motion` usage with the current **Motion for React** package (`motion/react`).
- Completely redesigned the Hero with an animated AI / WEB / XAI / EDU orbit, SVG network paths, pointer tilt, restrained glow, and reduced-motion support.
- Reworked Education into an editorial timeline.
- Reworked Experience into an interactive career timeline/detail panel.
- Removed artificial skill/proficiency percentages.
- Reworked Projects into screenshot-first editorial case cards with filters.
- Reworked Achievements into a bento layout.
- Gave Research its own high-contrast visual section.
- Simplified navigation so every minor section does not fight for navbar space.
- Added light/dark themes, scroll progress, SEO metadata, Open Graph metadata, robots and sitemap.
- Kept the existing Express/MongoDB contact workflow, with a cleaned and safer backend version in `/server`.

## Project structure

```text
portfolio-v3/
├─ app/
│  ├─ globals.css
│  ├─ layout.tsx
│  ├─ page.tsx
│  ├─ robots.ts
│  └─ sitemap.ts
├─ components/
├─ lib/
│  └─ site-data.ts
├─ public/
│  ├─ images/
│  └─ Mahbub-CV.pdf
├─ server/
├─ .env.example
├─ next.config.ts
├─ package.json
└─ tsconfig.json
```

## 1. Prerequisites

Use Node.js 20.9 or newer. Node 22 LTS is a good choice.

Check:

```bash
node -v
npm -v
```

## 2. Frontend local setup

From the project root:

```bash
cp .env.example .env.local
```

Windows PowerShell:

```powershell
Copy-Item .env.example .env.local
```

Edit `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Then:

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## 3. Backend local setup

Open another terminal:

```bash
cd server
cp .env.example .env
npm install
npm run dev
```

Windows PowerShell:

```powershell
cd server
Copy-Item .env.example .env
npm install
npm run dev
```

Fill the server `.env` with your real values:

```env
PORT=5000
MONGO_URI=...
MY_EMAIL=...
EMAIL_PASS=...
ALLOWED_ORIGINS=http://localhost:3000
ALLOW_VERCEL_PREVIEWS=false
```

The email password should be the Gmail App Password already used by the portfolio backend, not your normal Gmail password.

Check the API:

```text
http://localhost:5000/api/health
```

Expected response:

```json
{"ok":true,"service":"portfolio-api"}
```

## 4. Where to edit portfolio content

All major content has been centralized in:

```text
lib/site-data.ts
```

Edit this file for:

- name / role / intro
- social links
- education
- experience
- teaching
- extracurricular activities
- skills
- projects
- achievements
- publications

This is intentionally structured so the data can later be replaced by CMS/API data without redesigning every component.

## 5. Replace assets

Profile photo:

```text
public/images/profile.jpg
```

Project screenshots:

```text
public/images/projects/
```

CV:

```text
public/Mahbub-CV.pdf
```

Use WebP/AVIF where practical for newly added screenshots. Next/Image will optimize displayed images automatically.

## 6. Pre-deployment checks

Always run:

```bash
npm run build
```

Do not deploy until that command succeeds.

Then manually check:

- 360–390 px mobile width
- 768 px tablet width
- 1366/1440 px desktop
- light theme
- dark theme
- navbar and mobile menu
- every navigation anchor
- CV download
- LinkedIn / GitHub links
- all project live links
- project filters and View All
- experience timeline tabs
- contact form success and error states
- browser console has no errors
- no horizontal scrolling
- image crops look correct
- keyboard tab navigation works
- `prefers-reduced-motion` does not leave important information hidden
- `/robots.txt` loads
- `/sitemap.xml` loads

## 7. Deploy backend to Render

If your existing Render service is working, you can keep it and only update its code later. For the cleaned backend in this package:

1. Push this project to GitHub.
2. In Render, create/update a Web Service from the repository.
3. Set **Root Directory** to `server`.
4. Build command: `npm install`.
5. Start command: `npm start`.
6. Add environment variables:
   - `MONGO_URI`
   - `MY_EMAIL`
   - `EMAIL_PASS`
   - `ALLOWED_ORIGINS`
   - `ALLOW_VERCEL_PREVIEWS` (optional)
7. Deploy.
8. Open `https://YOUR-RENDER-URL/api/health` and confirm `ok: true`.

For the first Vercel preview you can temporarily set:

```env
ALLOW_VERCEL_PREVIEWS=true
```

After your final domain is known, add it to `ALLOWED_ORIGINS`. You can then turn preview access off if you want stricter CORS.

## 8. Deploy frontend to Vercel

1. Push the repository to GitHub.
2. Import the repository in Vercel.
3. Keep the Next.js project root as the repository root (`.`).
4. Vercel should detect Next.js automatically.
5. Add environment variables:

```env
NEXT_PUBLIC_API_URL=https://YOUR-RENDER-SERVICE.onrender.com
NEXT_PUBLIC_SITE_URL=https://YOUR-VERCEL-PROJECT.vercel.app
```

6. Deploy.
7. Test the Vercel preview thoroughly.

Do not manually set a CRA-style output directory. Let Vercel use its Next.js defaults.

## 9. Connect your final domain

After adding your custom domain in Vercel:

1. Change `NEXT_PUBLIC_SITE_URL` to the final `https://your-domain.com` URL.
2. Add the same final domain to the backend `ALLOWED_ORIGINS`.
3. Redeploy both sides if required.
4. Test the contact form again.
5. Confirm `/robots.txt` and `/sitemap.xml` now contain the final domain.

## 10. Safest migration from the old React deployment

Do not delete the old working deployment first.

Recommended flow:

```text
old main branch / live site
        ↓
create v3-next branch
        ↓
push this V3 code
        ↓
Vercel preview deployment
        ↓
full QA + contact-form test
        ↓
merge to main
        ↓
production deployment
```

If your Vercel project previously had custom Create React App settings, reset them to the detected Next.js defaults before the production deploy.

## 11. Performance rules for future edits

- Prefer CSS/SVG/Motion graphics before adding heavy 3D libraries.
- Do not autoplay videos in the Hero.
- Keep Hero animation decorative; core text must render immediately.
- Use `next/image` for site images.
- Keep large screenshots in `public/images/projects` and compress them before committing.
- Do not make every section animated. Motion should reinforce hierarchy.
- Test mobile after every large visual change.
- Keep the exact dependency versions in `package.json`; update intentionally, not automatically during a production fix.

## 12. Before committing to GitHub

Run:

```bash
npm run build
git status
```

Make sure you are **not** committing:

```text
.env
.env.local
server/.env
node_modules/
.next/
```

Only the `.env.example` files should be in Git.
