# Development

View > command Palette > Markdown

Steps to launch the application in development

1. Raise the Postgres DB

```
docker compose up -d
```

2. Install node modules with package.json

```
yarn
```

3. Replace environment variables
4. Run commands Prisma
5. Run the development server:

```
yarn dev
```

# Prisma Commands

```
Documentation: https://www.prisma.io/docs/orm/prisma-schema/data-model
npx prisma init
npx prisma migrate dev --name dev
npx prisma generate
```

IMPORTANTE !!

```
npx prisma db pull (Only if the DB already exists to download the models)
npx prisma db push (always the structure of the DB changes)
```

# Recommended versions

```
Command: node --v  Version: v18.19.0
Command: yarn --v  Version: 1.22.19
Command: docker --version  Version: Docker version 25.0.2
Command: docker pull postgres:15.3  Version: postgres:15.3
```

# Recommended installations

Open [https://gist.github.com/klerith/2d46749155918952b593e952dc7cf5c8](https://gist.github.com/klerith/2d46749155918952b593e952dc7cf5c8)

# Docs

Prisma [https://www.prisma.io/docs/orm/prisma-schema/data-model](https://www.prisma.io/docs/orm/prisma-schema/data-model)

# INIT

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The project home page is located at `src/app/page.tsx`.

# Commands Snippets

```
Command: prc  Archive: Page.tsx
Command: rafce Archive: Component.tsx
```

# Upgrade packages

```
Install npm-check-updates
```
