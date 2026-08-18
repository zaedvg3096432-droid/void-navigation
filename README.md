# Void Navigation

Void Navigation is a TypeScript web experiment built around a **cosmic minimalism** visual direction. It explores how restrained layouts, dark space-inspired colors, subtle motion, and clear interaction states can create a focused landing-page experience.

## Design direction

The interface is organized around a small visual system:

- Deep navy and charcoal surfaces inspired by outer space.
- Soft cyan and muted violet accents for links and emphasis.
- Clear hierarchy with generous spacing and restrained decoration.
- Subtle fade, hover, glow, and scroll interactions.
- Responsive navigation and focused content sections.

The detailed design rationale is documented in [`ideas.md`](ideas.md).

## Technology

- React and TypeScript
- Vite
- Express
- Tailwind CSS
- Radix UI primitives
- Framer Motion
- Wouter
- Zod
- Recharts

## Scripts

```bash
pnpm install
pnpm dev
```

Build the client and server bundle:

```bash
pnpm build
```

Run the production bundle after building:

```bash
pnpm start
```

Validate the TypeScript project:

```bash
pnpm check
```

## Project structure

```text
client/       Frontend application and UI components
server/       Server entry point and backend-side code
shared/       Shared types and utilities
ideas.md      Design rationale and visual specification
vite.config.ts
package.json
```

## Project status

This is an exploratory web project focused on frontend structure, visual design, and interaction. It is separate from my current C++ learning track and represents an earlier web-development experiment.

## Author

Ahmed Alaa Bahr — [LinkedIn](https://www.linkedin.com/in/ahmed-alaa-897a633a8)
