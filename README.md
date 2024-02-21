# Next Blog

This is a simple blog built with [Next.js](https://nextjs.org/) and [Tailwind CSS (styling)](https://tailwindcss.com/docs/). It also demonstrates the uses of Next.js (pages directory) server-side rendering methods:

- `getStaticProps`: used to pre-fetch data on the server at build time (Data is available before user request). 
- `getServerSideProps`: used to pre-fetch data on the server on request.

## Installation

### Clone the project

In your terminal, run the following command: 

```bash
git clone https://github.com/naomi-pham/next-blog.git
```

```
npm install
```

### Add API URL to `.env` file

Create mock data at [Mock API](https://mockapi.io/) and add the API link to your `.env` file: 

Example: 

```
// .env
NEXT_PUBLIC_MOCK_API = https://65d4c1213f1ab8c63435ed16.mockapi.io/api
```

## Run the project locally

```bash
npm run dev
```

Navigate to `locahost:3000` to view the project.

## Deployment

Steps to deploy with the [Vercel](https://vercel.com/dashboard): 

1. Log in to Vercel account
2. Click on `Create a new project`
3. Import your project's Github repository
4. Add environment keys (.env file)
5. Click on `Build`

Demo link: https://naomi-blog.vercel.app

