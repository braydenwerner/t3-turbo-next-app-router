# t3-turbo-next-app-router

## About

- Next.js (using app router, server components, server actions)
- Zact (validated and typesafe, server actions)
- TypeScript
- Prisma
- Tailwind
- NextAuth
- Turborepo
- [shadcn/ui](https://github.com/shadcn/ui) components
- Light / dark theme support, check out `apps/web/src/app/styles/globals.css`

> Using server actions over REST/GraphQL/tRPC, etc.

```
.github
  └─ workflows
        └─ CI with pnpm cache setup
.vscode
  └─ Recommended extensions and settings for VSCode users
apps
  └─ web
      ├─ Next.js 13 (app router, server components, server actions)
      ├─ React 18
      └─ Tailwind CSS
packages
 ├─ api
 |   └─ tRPC v10 router definition
 ├─ auth
 |   └─ authentication using next-auth
 ├─ config
 |   └─ shared config files for eslint and tailwind
 ├─ db
 |   └─ typesafe db-calls using Prisma
 └─ utils
     └─ shared utility files
```

> You are able to add more apps under the `apps` directory, which may use the packages in the `packages` folder.

> `@acme` is a placeholder for package names. You can replace it with your own organization or project name. You can use find-and-replace to change all the instances of `@acme/` to something like `@my-company/` or `@project-name/`.

## Quick Start

To get it running, follow the steps below:

### Setup dependencies

```diff
# Install dependencies
pnpm i

# In packages/db/prisma update schema.prisma, if you are using Planetscale to host your db uncomment the line below
+ relationMode = "prisma"

# In packages/db/prisma update schema.prisma provider to use your own database provider
- provider = "mysql"
+ provider = "postgres"

# Configure environment variables.
# There is an `.env.example` in the root directory you can use for reference
cp .env.example .env

# Push the Prisma schema to your database
pnpm db:push
```

> You can install dependencies for a single app with `pnpm install --filter <workspace>`

### Run development script

```diff
turbo dev
```

View root `package.json` for more scripts.

## Deployment

![deployment steps](https://raw.githubusercontent.com/braydenwerner/t3-turbo-next-app-router/master/.github/deployment.png)

Check out [create-t3-turbo](https://github.com/t3-oss/create-t3-turbo).

## References

This template is modified from [create-t3-turbo](https://github.com/t3-oss/create-t3-turbo).

The stack originates from [create-t3-app](https://github.com/t3-oss/create-t3-app).

UI components are from [shadcn/ui](https://github.com/shadcn/ui)
