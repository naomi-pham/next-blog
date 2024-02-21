# Next Blog

This is a simple blog built with [Next.js](https://nextjs.org/) and [Tailwind CSS (styling)](https://tailwindcss.com/docs/). It also demonstrates the uses of Next.js (pages directory) server-side rendering methods: [`getServerSideProps`](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-server-side-props) and [`getStaticProps`](https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props).

## Installation

### Install Next App with Tailwind CSS: 

```bash
npx create-next-app@latest
```
``
### Install Prettier to format code for consistency: 

```bash
npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier
```

### Install Eslint to spot code errors: 

```bash
npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-import-resolver-typescript
```

Add rules for Eslint and Prettier in `.prettierrc.json` and `.eslintrc.json` files.

## Tailwind configuration

### Add custom colors: 

```ts
// tailwind.config.ts

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        neutral: {
          black: '#263238',
          darkGrey: '#444444',
          grey: '#666666',
          lightGrey: '#999999',
          greyBlue: '#E7E7E7',
          silver: '#F9F9F9',
          white: '#FFFFFF',
        },
      }
    },
  },
}
```

### Add custom font sizes:

```ts
module.exports = {
  theme: {
    fontSize: {
      'heading-1': [
        '2.25rem',
        {
          lineHeight: '2.75rem',
          fontWeight: '500',
        },
      ],
      ...
    }
  }
}
```

### Install plugin to sort Tailwind classes automatically

```bash
npm i prettier-plugin-tailwindcss
```

```ts
//.prettierrc.json
{
    "plugins": ["prettier-plugin-tailwindcss"]
}
```

## Data fetching

Mock data for the project is provided by [Mock API](https://mockapi.io/). The data is fetched using two server-side rendering methods from Next.js: `getStaticProps` and `getServerSideProps`

### getStaticProps

`getStaticProps` is used to pre-fetch data on the server at build time (Data is available before user request). 

Using `getStaticProps` to fetch posts data from an external API: 

```ts
// pages/index.tsx

export const getStaticProps = (async () => {

  // fetch posts data from external api
  const res = await fetch(`${process.env.NEXT_PUBLIC_MOCK_API}/posts`)
  const errorCode = res.ok ? false : res.status

  const posts = (await res.json()) as IPost[]

  // return post data
  return { props: { errorCode, posts } }
}) satisfies GetStaticProps<{
  errorCode: number | boolean
  posts: IPost[]
}>
```

Displaying the fetched data: 

```ts
export default function Home({
  errorCode,
  posts,
}: InferGetServerSidePropsType<typeof getStaticProps>) {

  // Render built-in Error page if there's an error
  if (errorCode) {
    return <Error statusCode={errorCode} />
  }

  return (
    <main>
      {Array.isArray(posts) && posts?.length > 0 ? (
        <PostList posts={posts} />
      ) : null}
    </main>
  )
}
```

### getServerSideProps

`getStaticProps` is used to pre-fetch data on the server on request.  

Using `getStaticProps` to fetch post detail based on id: 

```ts
// pages/posts/[id].tsx

export const getServerSideProps = (async (context) => {
  // get query id from url
  const { id } = context.query

  if (typeof id !== 'string') {
    return {
      notFound: true,
    }
  }

  // fetch post data based on id
  const res = await fetch(`${process.env.NEXT_PUBLIC_MOCK_API}/posts/${id}`)
  const errorCode = res.ok ? false : res.status

  const post = (await res.json()) as IPost

  // return post data
  return { props: { errorCode, post } }
}) satisfies GetServerSideProps<{ errorCode: number | boolean; post: IPost }>

```

## Dark mode with Tailwind CSS

The project uses `next-theme` library to quickly set up the Dark/Light mode toggle within the Next.js app: 

```bash
npm i next-theme
```

### Add Theme Provider

```ts

import { ThemeProvider } from 'next-themes'

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider attribute="class">
      <div
        className={`${montserrat.className} min-h-screen bg-neutral-white text-body-3 text-neutral-lightGrey dark:bg-neutral-black dark:text-neutral-silver sm:text-body-2`}
      >
        <Header />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default MainLayout

```

### Enable Tailwind dark mode with `class` strategy

```ts
// tailwind.config.ts

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  // ...
}
```

### Create Theme Toggle Button

```ts
import { useTheme } from 'next-themes'
import { ChangeEvent, useEffect, useState } from 'react'

const ThemeToggler = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  const handleThemeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setTheme(e.target.value)
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <select value={theme} onChange={handleThemeChange}>
      <option value="dark">Dark</option>
      <option value="light">Light</option>
    </select>
  )
}

export default ThemeToggler

``` 

## Deployment

The project is deployed with [Vercel](https://vercel.com/dashboard).

Link to project: https://naomi-blog.vercel.app

## Run the project locally

In your terminal, run the following command: 

```bash
git clone https://github.com/naomi-pham/next-blog.git
```

```
npm install
npm run dev
```
