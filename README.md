# semperMade

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

semperMade is a React and TypeScript based marketing site showcasing a subscription service for unlimited bug fixes, CI/CD setup, and improved test coverage. The project features a modern UI built with shadcn and Tailwind CSS and deploys as a static site via GitHub Pages.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Setup](#setup)
  - [Simple Mode Setup](#simple-mode-setup)
  - [Advanced Mode Setup](#advanced-mode-setup)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [FAQ](#faq)
- [License](#license)
- [Acknowledgements](#acknowledgements)
- [Contact](#contact)

## Features

- Responsive React landing page with smooth scrolling navigation
- Three-tier pricing table for subscription plans
- shadcn UI components styled with Tailwind CSS
- Toast notifications and tooltip utilities
- Supabase client integration prepared for backend features
- React Router with a custom 404 page
- React Query for data fetching and caching
- Unit tests powered by Vitest
- ESLint and TypeScript for a type-safe codebase
- GitHub Actions for linting, testing and page deployment

## Demo

A live demo is deployed to GitHub Pages: [https://sempermade.github.io/](https://sempermade.github.io/)

## Setup

The project uses Vite. Node.js 20+ and npm are recommended.

### Simple Mode Setup

1. **Clone the Repository**
   ```bash
   git clone <repo-url>
   cd semperMade.github.io
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Configure Environment**

   ```bash
   cp .env.example .env.local
   ```

   Required variables:

   * `VITE_SUPABASE_URL=`
   * `VITE_SUPABASE_ANON_KEY=`

4. **Run the App**

   ```bash
   npm run dev
   ```

### Advanced Mode Setup

Advanced users can modify the Supabase project or extend the CI/CD pipeline. Update `.env.local` with your custom Supabase credentials and adjust `.github/workflows` as needed for additional deployment targets.

## Usage

Run `npm run dev` and open `http://localhost:8080` in your browser. Navigate through the sections (About, Problem, Services, Pricing, Why, Contact) using the menu or by scrolling. Each pricing card links to the call‑to‑action section where users can start their subscription or book a demo.

## Deployment

The repository includes GitHub Actions workflows that build and test the project before deploying the contents of `dist` to GitHub Pages. Any push to `main` triggers the deployment.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project)

## Contributing

Contributions are welcome! Fork this repo, create a feature branch, commit your changes and open a pull request. Please run `npm run lint` and `npm test` before submitting.

## FAQ

**Q: Do I need a Supabase account to run the demo?**

A: The demo uses the included public Supabase credentials. Replace them in `.env.local` if you wish to connect your own project.

**Q: How do I run tests?**

A: After installing dependencies, run `npm test` to execute Vitest unit tests.

**Q: Can I deploy this elsewhere?**

A: Yes. Build with `npm run build` and host the `dist` folder on any static hosting service.

## License

This project is licensed under the MIT license.

## Acknowledgements

- [React](https://react.dev)
- [Vite](https://vitejs.dev)
- [shadcn/ui](https://ui.shadcn.com)
- [Supabase](https://supabase.com)
- [Tailwind CSS](https://tailwindcss.com)

## Contact

For support or inquiries, open an issue on GitHub or contact [maintainer](https://github.com/semperMade).

