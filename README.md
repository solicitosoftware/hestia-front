# Development

Steps to launch the application in development

1. Raise the Postgres DB

```
docker compose up -d
```

2. Install node modules with package.json

```
yarn
```

3. Run the development server:

```
yarn dev
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

# INIT

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The project home page is located at `src/app/page.tsx`.
