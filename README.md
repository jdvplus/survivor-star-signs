# survivor star signs

A full-stack web app that explores the zodiac signs of Survivor contestants. Browse an animated gallery of all contestants, view randomized selections, and filter by zodiac sign and gender.

## Getting Started

```bash
pnpm install
cp .env.example .env
pnpm dev
```

Client runs on `http://localhost:5173`, server on `http://localhost:3000`.

**Note:** Contestant photos in `public/` are gitignored due to file size.

## API Endpoints

| Method | Endpoint                              | Description                         |
| ------ | ------------------------------------- | ----------------------------------- |
| GET    | `/api/health`                         | Health check                        |
| GET    | `/api/survivors`                      | All contestants                     |
| GET    | `/api/random`                         | 32 random contestants               |
| GET    | `/api/survivors/filter?sign=&gender=` | Filter by zodiac sign and/or gender |
