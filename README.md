# TODO -

Minimum Requirements
As a user,
● I can search for movies and see a paginated list of results
● I can filter search results by genre
● I can navigate through the next and previous pages of the paginated results
● I see the total count of search results
● I see notable information for each search result, such as the summary, poster,
duration, rating, etc.

whimsical~

# Highlight something in your project that you thought was especially interesting or significant to your overall implementation.

I love Redux. So much. It's the first thing I install on any project, because at somepoint, you need a way to handle state across multiple layers of components. I don't leave home without it!

# Tell us what you are most pleased or proud of with your implementation.

Really love how the scffold project is setup - React, Typescript, prettier, eslint... all the things I install while on my clients!

# Given more time, what next feature or improvement would you like to add to your project?

I'm really cross with Redux Toolkit Query! On paper it's supposed to handle API calls and load them directly into state, but it kept fighting me and the documentation isn't that great. I had this same issue with my Cat App - it can work for a simple thing, but the instant you pull it out of the sandbox and take it for a spin, it explodes on the side of the road... sigh....

I wanted to use GraphQL! "Schema Introspection Failure. Introspection is disabled on this endpoint. Enable introspection to populate your schema."

I also updated the package.json - Next and Storybook are both a major version behind in the template. I use NCU to manage this. When I saw that eslint conflicted with eslint-config-next, I opetd to keep the existing version of eslint. This is something I'd look into at a later date. In this Javascript ecosystem, I keep my finger on the pulse of the package.json. An old one can lead to issues, or usually, project crippling tech debt.

- A note - I know how to git rebase and have clean, simple commits that go into a pull request. When I build on a repo that's just for me, it can get messy at times and I just commit to main because I'm lazy. :)

# next-react-query-tailwind starter kit

This starter kit features **Next.js**, **React Query**, and **Tailwind CSS**.

## Overview

### Tech Stack

- [Next.js v12.x](https://nextjs.org)
- [React v17.x](https://reactjs.org)
- [React Query v3.x](https://react-query.tanstack.com/)
- [Tailwind CSS v3.x](https://tailwindcss.com/)

### Included Tooling

- [Jest](https://jestjs.io/) - Test runner
- [Typescript](https://www.typescriptlang.org/) - Type checking
- [Storybook](https://storybook.js.org/) - Component library
- [Mock Service Worker](https://mswjs.io/) - Mock REST / GraphQL API
- [ESLint](https://eslint.org/) - Code linting
- [Prettier](https://prettier.io/) - Code formatting

### Example directory

```
- UserRepos.test.tsx - Unit tests for the UserRepos component
- UserRepos.stories.tsx - Storybook UI for the UserRepos component
- UserRepos.mocks.tsx - Mock response for the UserRepos query
- UserRepos.query.tsx - GraphQL query for the UserRepos component
- UserRepos.data.tsx - Data fetching component for the UserRepos component
- UserRepos.view.tsx - View component for the UserRepos component
- UserRepos.module.css - CSS module for UserRepos component
```

## Demo Implementation

[Repository](https://github.com/thisdot/starter.dev-github-showcases/tree/main/next-react-query-tailwind)

[Live Application](https://next-react-query-tailwind.starter.dev/)

The demo for this starter kit is a partial implementation of some GitHub functionality. It uses the NextAuth library to authenticate users with their GitHub accounts and uses the GitHub GraphQL API with codegen and React Query to fetch data from the GitHub API. Check out the link above to learn more or check out the demo!
