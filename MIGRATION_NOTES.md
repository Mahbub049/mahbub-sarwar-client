# V2 → V3 Migration Notes

## Old frontend

- React 19
- Create React App / `react-scripts`
- JavaScript / JSX
- Tailwind CSS 3
- Framer Motion
- Montserrat globally
- large set of navbar links
- many repeated glass cards / gradients
- portfolio data hard-coded inside each component

## New frontend

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Motion (`motion/react`)
- Space Grotesk display typography + Manrope body typography
- simplified navigation
- content centralized in `lib/site-data.ts`
- Next metadata, sitemap, robots, optimized Image component
- stronger server/client component boundaries

## Files intentionally removed from the old architecture

The following CRA concepts are no longer used:

```text
src/index.js
src/App.js
src/App.css
public/index.html
react-scripts
react-router-dom (not required for this one-page App Router version)
react-simple-typewriter
AOS
@material-tailwind/react
react-vertical-timeline-component
```

## Contact API migration

Old frontend:

```text
Axios instance → /api/contact
```

New frontend:

```text
fetch(`${NEXT_PUBLIC_API_URL}/api/contact`)
```

The backend contract remains:

```json
{
  "name": "...",
  "email": "...",
  "subject": "...",
  "message": "..."
}
```

The cleaned server version additionally:

- validates required fields
- validates email format
- uses Gmail account as `from`
- uses visitor email as `replyTo`
- restricts CORS
- disables `x-powered-by`
- adds `/api/health`
- adds a real `npm start` script
