# survivor star signs

A full-stack web app that matches Survivor TV show contestants with their zodiac signs and astrological properties. Browse all contestants, view random selections, and filter by zodiac sign and gender.

## Stack

| Layer        | Technology                                                    |
| ------------ | ------------------------------------------------------------- |
| Client       | React 19, TypeScript 6, Tailwind CSS 4, TanStack Query        |
| Server       | Node.js, Express 5, Winston, Morgan                           |
| UI           | shadcn/ui, Radix UI, Embla Carousel, Lucide Icons             |
| Build        | Vite 8, SWC                                                   |
| Testing      | Vitest, Testing Library                                       |
| Code Quality | Prettier, Husky, lint-staged                                  |

## Project Structure

```
survivor-star-signs/
├── client/                     # React frontend
│   ├── components/             # UI components
│   │   ├── ui/                 # shadcn/ui + custom components
│   │   ├── AllSurvivors.tsx    # Grid of all contestant avatars
│   │   ├── SurvivorCarousel.tsx # Embla carousel display
│   │   └── QueryByCategory.tsx # Filter by zodiac sign/gender
│   ├── hooks/                  # TanStack Query hooks
│   ├── lib/                    # API client, utilities, helpers
│   ├── providers/              # QueryProvider, ThemeProvider
│   ├── App.tsx                 # Root component
│   ├── main.tsx                # Entry point
│   └── tailwind.css            # Theme and design tokens
├── server/                     # Express backend
│   ├── api/                    # Route definitions
│   ├── constants/              # Centralized constants
│   ├── db/                     # JSON database + seed scripts
│   ├── lib/                    # Logger, error classes
│   ├── middleware/             # Security, errors, logging
│   └── services/              # Business logic layer
├── shared/                     # Shared types (client + server)
├── index.html                  # HTML entry point
├── vite.config.ts              # Vite configuration
├── vitest.config.ts            # Test configuration
└── tsconfig.json               # TypeScript project references
```

## Getting Started

```bash
# Install dependencies
pnpm install

# Copy environment variables
cp .env.example .env

# Start both client and server in development
pnpm dev
```

The client runs on `http://localhost:5173` with hot reload.

The server runs on `http://localhost:3000` with file watching. API requests from the client are proxied to the server automatically.

**Note:** The `public/` directory (contestant photos and fonts) is gitignored due to file size. You will need the assets locally for the app to display images.

## Scripts

| Command             | Description                         |
| ------------------- | ----------------------------------- |
| `pnpm dev`          | Start client + server concurrently  |
| `pnpm dev:client`   | Start Vite dev server only          |
| `pnpm dev:server`   | Start Express server only           |
| `pnpm build`        | Type-check and build for production |
| `pnpm start`        | Run the production server           |
| `pnpm preview`      | Build and start production locally  |
| `pnpm test`         | Run all tests                       |
| `pnpm test:watch`   | Run tests in watch mode             |
| `pnpm format`       | Format all files with Prettier      |
| `pnpm format:check` | Check formatting without writing    |

## API Endpoints

| Method | Endpoint                              | Description                           |
| ------ | ------------------------------------- | ------------------------------------- |
| GET    | `/api/health`                         | Health check                          |
| GET    | `/api/survivors`                      | All contestants                       |
| GET    | `/api/random`                         | 32 random contestants                 |
| GET    | `/api/survivors/filter?sign=&gender=` | Filter by zodiac sign and/or gender   |

## Environment Variables

| Variable        | Default                 | Description                                          |
| --------------- | ----------------------- | ---------------------------------------------------- |
| `PORT`          | `3000`                  | Server port                                          |
| `NODE_ENV`      | `development`           | Environment mode                                     |
| `LOG_LEVEL`     | `debug`                 | Winston log level (`debug`, `info`, `warn`, `error`) |
| `CLIENT_ORIGIN` | `http://localhost:5173` | Allowed CORS origin in development                   |
