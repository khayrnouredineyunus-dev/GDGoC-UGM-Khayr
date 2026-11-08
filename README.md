# GDGoC UGM Open Recruitment Website

A responsive website for Google Developer Groups on Campus Universitas Gadjah Mada, built from the provided Figma design and connected to the GDGoC UGM Open Recruitment API.

Submitted for the **Hacker Front-End study case**, GDGoC UGM Open Recruitment 2026/2027.

- **Live site:** https://gdgoc-ugm.vercel.app
- **Demo video:** [Youtube](https://youtu.be/jHW5pYOsx_E)
- **Design:** [Figma UI Design Track](https://www.figma.com/design/yx06YRA90jBEX0Mmu64RBx/GDGoC-%E2%80%93-Open-Recruitment)
- **API:** https://gdgoc-ugm-api.vercel.app/api

## Pages

All four pages from the design are implemented.

| Page     | Route       | Content from the API                                |
| -------- | ----------- | --------------------------------------------------- |
| Landing  | `/`         | Learning tracks                                     |
| Overview | `/overview` | Learning tracks, learning formats, learning journey |
| About    | `/about`    | Community values, contribution roles                |
| Contact  | `/contact`  | Inquiry categories, FAQs                            |

Navigation and footer data (`/navigation`, `/stats`) are shared by every page. Unknown routes show a 404 page.

## Tech stack

- **React 19** with **TypeScript** (strict mode)
- **Vite** as the build tool
- **Tailwind CSS v4**, with the Figma colors and font set up as design tokens in `src/index.css`
- **React Router** for client-side routing
- **Vitest** for unit tests
- **ESLint** and **Prettier** (with the Tailwind class sorting plugin)
- Deployed on **Vercel**

## Getting started

Requires Node.js 20.19 or newer.

```bash
git clone https://github.com/khayrnouredineyunus-dev/GDGoC-UGM-Khayr.git
cd GDGoC-UGM-Khayr
npm install
npm run dev
```

The app runs at http://localhost:5173. No environment variables are needed. To point the app at another API, set `VITE_API_URL` in a `.env` file.

| Script            | What it does                        |
| ----------------- | ----------------------------------- |
| `npm run dev`     | Start the development server        |
| `npm run build`   | Type-check and build for production |
| `npm run preview` | Preview the production build        |
| `npm run lint`    | Run ESLint                          |
| `npm run format`  | Format the code with Prettier       |
| `npm run test`    | Run the unit tests                  |

## Project structure

```
src/
├── api/            # API client (fetchApi) and TypeScript types for every endpoint
├── assets/         # Images and icons exported from Figma
├── components/
│   ├── layout/     # Navbar, Footer, Layout, ScrollToTop
│   ├── ui/         # Small reusable pieces: Container, ButtonLink, TextLink, SectionLabel
│   ├── states/     # LoadingState, ErrorState, EmptyState, ErrorBoundary
│   ├── shared/     # Components used on more than one page (track and format cards, invitation panel)
│   ├── home/       # Landing page sections
│   ├── overview/   # Overview page sections
│   ├── about/      # About page sections
│   └── contact/    # Contact page sections, form, and validation logic
├── hooks/          # useApi, usePersistentState, useActiveSection, useInquiryCategory
├── pages/          # One component per route
└── utils/          # Small text helpers
```

Components that fetch data are kept separate from components that only display it. For example, `TrackGrid` fetches `/tracks` and handles the loading, error, and empty states, while `TrackCard` only receives one track through props.

## API integration

### How data is fetched

1. `fetchApi` (`src/api/client.ts`) calls an endpoint, checks the `{ success, data, error }` response, and returns only `data`. A failed request throws an error with the API's message.
2. `useApi` (`src/hooks/useApi.ts`) wraps `fetchApi` for components. It returns `data`, `loading`, `error`, and a `retry` function, and cancels the request with an `AbortController` if the component unmounts.
3. Each section renders one of four states:
   - **Loading:** skeleton blocks shaped like the real content
   - **Error:** a message with a "Try again" button that calls `retry`
   - **Empty:** a friendly message when the API returns an empty list
   - **Success:** the real content

If a component crashes while rendering, an **Error Boundary** shows a fallback with a reload button instead of a blank page. It resets on every route change, so an error on one page does not follow the user to the next.

### Endpoint usage

| Endpoint              | Used in           | Notes                                                          |
| --------------------- | ----------------- | -------------------------------------------------------------- |
| `/navigation`         | Navbar, Footer    | Falls back to a built-in list if the request fails             |
| `/stats`              | Footer            | Instagram handle and tagline, with fallbacks                   |
| `/tracks`             | Landing, Overview | Track artwork is matched to each track by `id`                 |
| `/formats`            | Overview          |                                                                |
| `/journey`            | Overview          |                                                                |
| `/values`             | About             |                                                                |
| `/roles`              | About             |                                                                |
| `/inquiry-categories` | Contact           | One request shared by the category cards and the form dropdown |
| `/faqs`               | Contact           | Quick answers, filtered by the selected category               |
| `/tracks/:id`         | Not used          | The design has no track detail page                            |

### Design vs. API content

Some API content does not match the Figma copy for the same section. I followed one rule: **use the API when its data matches what the design section shows, and keep the Figma content static when it does not.**

- **Static from Figma:** hero and intro copy, the Landing formats section (the Figma text differs from `/formats`), the three Landing FAQs (different questions from `/faqs`), the outcome table, and the Contact guidance tips (the `guidance` field does not line up with the design's tips).
- **From the API, with design details added:** cards use the API text, while icons, artwork, and accent colors come from Figma, matched by `id`. The API's icons are emojis, which would not match the design's line icons.
- **Fallbacks:** if the API adds a new item that has no Figma icon yet, the card shows the API's emoji and color instead of an empty space.

## Additional challenges

### Advanced frontend logic

- **Client-side filtering:** the Contact page shows quick answers for the selected category. All FAQs are fetched once and filtered in the browser, so switching categories is instant. The API also supports `?category=`, but that would mean a new request on every click.
- **State in the URL:**
  - `/overview?track=design-creativity` highlights that track card and scrolls to it. The "Explore this track" links on the Landing page use this.
  - `/contact?category=collaboration` keeps the selected category after a refresh and makes it shareable. The category cards and the form dropdown stay in sync through this value.
- **State in localStorage:**
  - The open Landing FAQ item is remembered.
  - The contact form saves a draft as you type, restores it after a refresh, and clears it after sending. The consent checkbox is never saved, so it is always a deliberate choice.
- Sorting and pagination were not added. The lists are short (three tracks, at most five FAQs per category), so they would make the pages harder to use rather than easier.

### Code quality

- TypeScript strict mode, with a type for every API response
- ESLint and Prettier, with no `any`, `@ts-ignore`, or disabled lint rules
- Reusable hooks for data fetching, persisted state, and scroll tracking
- Form validation lives in a plain function (`contactValidation.ts`), separate from the form UI
- **16 unit tests** (Vitest) for the API client, form validation, and text helpers. The API client tests replace `fetch` with a mock, so they do not depend on the live API.
- Small commits following [Conventional Commits](https://www.conventionalcommits.org) (`feat:`, `fix:`, `refactor:`, `test:`, `chore:`, `perf:`)

### Data understanding

- **Quick answers on Contact:** the `category` field of each FAQ matches the `id` of an inquiry category, so the two endpoints can be joined. Picking a category card shows the related answers right below it.
- **Track links across pages:** track `id`s from the API connect the Landing page to the matching card on the Overview page.
- **Text cleanup:** em dashes in FAQ answers are replaced with commas when displayed (`removeEmDash`), while ranges like "2–4 hours" are kept.

## Accessibility

- Semantic HTML: one `h1` per page, a real `<table>` for the outcome table, `<nav>` landmarks, and a native `<details>` accordion for quick answers
- Accordions and the mobile menu use `aria-expanded`, and the selected category card uses `aria-pressed`
- Form fields have labels, and invalid fields use `aria-invalid` and `aria-describedby` so screen readers read the error. On submit, focus moves to the first invalid field.
- Decorative images use empty `alt` text, and icon-only links have an `aria-label`

## Notes

- The contact form validates everything in the browser, but there is no endpoint to send messages to. After a valid submission, the page says clearly that this is a demo.
- The live site deploys automatically from the `main` branch on Vercel. `vercel.json` rewrites all routes to `index.html` so refreshing any page works.

## Author

**Khayr Nouredine Yunus**, Software Engineering Technology (TRPL), Universitas Gadjah Mada
