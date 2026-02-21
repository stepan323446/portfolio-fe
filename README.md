# Portfolio (Frontend part)

This is the frontend part of web application **Portfolio** which is based on Nuxt framework

## Project Overview

The Frontend Portfolio provides a visual representation of the website. The design idea was taken from a template and extensively modified by me. [Nuxt](https://nuxt.com/) was chosen as the framework, with Pinia used for state management. No UI libraries were applied.

## Features
- Separation of business logic into entities/.
- Modular architecture, dividing components into `Shared`, `Features`, and `Widgets`.
- Styles written with **Tailwind CSS**. No UI libraries were used.
- **SSR rendering** powered by Nuxt, with SEO optimization and high Lighthouse scores.

## Installing

### Manually

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

1. Make sure to install dependencies:

```bash
# npm
npm install
```

2. Create a `.env` file and fill it out using `.env.example` as a template

3. Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

4. Production

Build the application for production:

```bash
# npm
npm run build
```
