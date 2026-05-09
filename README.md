# Nike Store — E-Commerce Next.js App

A full-stack e-commerce application built with:

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4** for styling
- **Drizzle ORM** for type-safe database queries
- **Neon PostgreSQL** (serverless) as the database
- **Better Auth** for authentication
- **Zustand** for client-side state management (cart)

## Getting Started

### Prerequisites

- Node.js 20+
- A [Neon](https://neon.tech) PostgreSQL database

### Setup

1. Clone the repository:

```bash
git clone https://github.com/Bagaya24/e-commerce-next.git
cd e-commerce-next
```

2. Install dependencies:

```bash
npm install
```

3. Copy the environment file and fill in your values:

```bash
cp .env.example .env.local
```

4. Push the database schema:

```bash
npm run db:push
```

5. Seed the database with sample Nike products:

```bash
npm run db:seed
```

6. Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## Scripts

| Command            | Description                          |
| ------------------ | ------------------------------------ |
| `npm run dev`      | Start the development server         |
| `npm run build`    | Build for production                 |
| `npm run start`    | Start the production server          |
| `npm run lint`     | Run ESLint                           |
| `npm run db:push`  | Push schema changes to the database  |
| `npm run db:seed`  | Seed the database with Nike products |
| `npm run db:studio`| Open Drizzle Studio                  |

## Project Structure

```
src/
├── app/                  # Next.js App Router
│   ├── api/auth/         # Better Auth API route
│   ├── layout.tsx        # Root layout with nav & cart
│   ├── page.tsx          # Homepage — queries DB, renders products
│   └── globals.css       # Global styles
├── components/           # React components
│   ├── cart-button.tsx   # Cart icon with item count
│   ├── product-card.tsx  # Individual product card
│   └── product-list.tsx  # Product grid
├── db/                   # Database layer
│   ├── index.ts          # Drizzle client (Neon)
│   ├── schema.ts         # Product table schema
│   └── seed.ts           # Seed script
├── lib/                  # Shared utilities
│   ├── auth.ts           # Better Auth server config
│   └── auth-client.ts    # Better Auth client
└── store/
    └── cart-store.ts     # Zustand cart store
```
