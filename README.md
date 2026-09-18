# VGenNext Website

Modern multi-page React + Vite + TypeScript + Tailwind CSS website for VGenNext.

## Run

```bash
npm install
npm run dev
```

Then open the local URL printed by Vite.

## Build

```bash
npm run build
```

## AI chatbot

The chatbot currently has a local demo fallback. To connect the existing VGenNext AI backend, create `.env`:

```env
VITE_CHATBOT_API_URL=http://localhost:YOUR_PORT/api/chat
```

The frontend sends:

```json
{
  "message": "user message",
  "history": []
}
```

and expects:

```json
{
  "reply": "assistant response"
}
```

## Important production replacements

- Replace placeholder email/phone with the approved company contact details.
- Replace legal placeholder pages with approved Privacy Policy and Terms.
- Connect the Contact form to the VGenNext backend/CRM.
- Connect `VITE_CHATBOT_API_URL` to the existing VGenNext AI service.
- Add real company statistics only after they are verified.
- Add approved company photography/assets under `src/assets`.
