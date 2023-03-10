# Nextjs Boilerplate

Nextjs Boilerplate is a template that comes with the necessary preconfiguration for a profesional react project.

## What technologies does this project use?
|[<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/nodejs.png>](https://nodejs.org)|[<img width=190 src=https://cdn.rawgit.com/standard/standard/master/docs/logos/npm.png>](https://www.npmjs.com)|[<img width=190 src=https://user-images.githubusercontent.com/106139113/204472746-9231d0ff-40db-49a6-bf3b-f759ff206231.svg>](https://nextjs.org/)|[<img width=190 src=https://user-images.githubusercontent.com/106139113/204473760-13746fa1-c52e-4fda-ab41-ff3f8ec3e9db.svg>](https://reactjs.org/)
|---|---|---|---|

|[<img width=190 src=https://user-images.githubusercontent.com/59535805/206945924-1cbf791a-2cfe-4ce0-af0f-3c8412d8cdd2.svg>](https://www.npmjs.com/package/license)|[<img width=190 src=https://user-images.githubusercontent.com/59535805/206946221-8cc5b214-4605-4e39-a1ca-eeaa36833abf.svg>](https://prettier.io/)|[<img width=190 src=https://user-images.githubusercontent.com/59535805/206931257-724a9801-906e-4009-82bf-d6a63f349298.svg>](https://eslint.org/)|[<img width=190 src=https://user-images.githubusercontent.com/59535805/206952616-2b759e75-c92a-49ac-8a02-c9a5c42672f9.svg>](https://www.typescriptlang.org/)
|---|---|---|---|

|[<img width=190 src=https://user-images.githubusercontent.com/59535805/206962097-3e2203a1-a00f-4db1-9eae-b0cab850146c.svg>](https://jestjs.io/)|[<img width=190 src=https://user-images.githubusercontent.com/59535805/206964935-1fe8db08-4ffb-492b-adf4-4730acd031d5.svg>](https://testing-library.com/)
|---|---|

## How was this project created?

### 1. Add Git
```bash
git init
npx cli-gitignore
SELECT node
npm i -g gitmoji-cli
```

### 2. Initialize the proyect:
```bash
npm init -y
git add .
gitmoji -c
```

### 3. [Create README.MD](https://www.makeareadme.com/)
```bash
echo ""> README.MD
```

### 4. Add Next and React
```bash
yarn add next react react-dom
```
run these commands to add in scripts of package.json
```bash
npm pkg set scripts.dev="next"
npm pkg set scripts.build="next build"
npm pkg set scripts.start="next start"
```
create file index.tsx and create a first component to test that everything is OK
```bash
touch index.tsx && mkdir pages && mv index.tsx $_
```

### 5. Create a license:
```bash
npx license MIT
install license? › yes
```


### 6. Add prettier for code formatting
```bash
yarn add -D --exact prettier
npm pkg set scripts.prettier="node_modules/.bin/prettier -w \"**/*.{ts,tsx}\""
echo {}> .prettierrc && echo {}> .prettierignore
```
Add this config to .prettierrc
```bash
{
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "semi": false,
  "singleQuote": true,
  "quoteProps": "as-needed",
  "jsxSingleQuote": false,
  "trailingComma": "all",
  "bracketSpacing": true,
  "bracketSameLine": true,
  "arrowParens": "avoid"
}

```
Add this config to .prettierignore
```bash
**/node_modules/*
dist
yarn.lock
.next
```
run this command to add in scripts of package.json
```bash
npm pkg set scripts.format="prettier --write ."
```

### 7. Add Eslint for catching bugs
```bash
npm pkg set scripts.lint="next lint"
yarn lint
SELECT Strict (Recommended)
npx eslint --init
```
```bash
- How would you like to use ESLint? › To check syntax, find problems, and enforce code style
- What type of modules does your project use? › JavaScript modules (import/export)
- Which framework does your project use? › React
- Does your project use TypeScript? › Yes
- Where does your code run? › Browser
- How would you like to define a style for your project? › Use a popular style guide
- Which style guide do you want to follow? › Standard
- What format do you want your config file to be in? › JSON
  Check that you have the following dependencies installed: 
      eslint-plugin-react@latest
      eslint-config-standard-with-typescript@latest 
      @typescript-eslint/eslint-plugin@^5.0.0 
      eslint@^8.0.1 
      eslint-plugin-import@^2.25.2 
      eslint-plugin-n@^15.0.0 
      eslint-plugin-promise@^6.0.0 
      typescript@*
- Would you like to install them now? › Yes
- Which package manager do you want to use? › yarn
```
Install this plugin for coexistence between Eslint and Prettier
```bash
yarn add -D eslint-config-prettier
```
Add or replace in the .eslintrc file the following configuration
```json
"extends": [
    "next/core-web-vitals",
    "eslint-config-prettier"
],
...
"settings": {
    "react": {
        "version": "detect"
    }
}
```

### 8. Ajust Typescript
run this command to update typescript
```bash
yarn add -D typescript
```
Add this config in .eslintrc
```json
  "parserOptions": {
    "project": ["./tsconfig.json"]
  }
```
Add or replace in tsconfig.json
```json
  "target": "ES2021"
  "lib": ["ES2021"]
  "strict": true
  "isolatedModules": true,
  "strictNullChecks": true
```

### 9. Add testing with Jest and RTL (React Testing Library)
```bash
yarn add jest
npm pkg set scripts.test="jest"
yarn test --init
```
```bash
- Would you like to use Typescript for the configuration file? › yes
- Choose the test environment that will be used for testing › node
- Do you want Jest to add coverage reports? yes
- Which provider should be used to instrument code for coverage? › babel
- Automatically clear mock calls, instances, contexts and results before every test? › yes
```
Run this commmad to add all the necessary dependecies
```bash
yarn add -D @testing-library/react @testing-library/jest-dom @testing-library/user-event identity-obj-proxy ts-node typescript jest-environment-jsdom eslint eslint-plugin-jest @types/jest
```
Add to jest.config.ts
```ts
import nextJest from 'next/jest'

const createJestCofig = nextJest({dir: '.'})

const customJestConfig = {
  testEnvironment: 'jsdom',
  clearMocks: true,
  moduleDirectories: ['node_modules', 'src'],
  setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
  coverageDirectory: 'coverage',
  testPathIgnorePatterns: [],
  collectCoverageFrom: [
    '<rootDir>/pages/**/*.(tsx|ts)',
    '!<rootDir>/pages/**/*.test.(tsx|ts)'
  ],
  collectCoverage: true,
  coverageReporters: ['lcov', 'text-summary']
}

module.exports = createJestCofig(customJestConfig)
```
Create file and add to setupTests.ts this import
```bash
echo {}> setupTests.ts
```
```js
import '@testing-library/jest-dom/extend-expect';
```

### 10. Add Sonar
Create image
```bash
echo ""> docker-compose.yaml
```
Add this config in docker-compose.yaml
```yaml
version: "3"

services:
  sonarqube:
    image: sonarqube:8.2-community
    expose:
      - 9000
    ports:
      - "127.0.0.1:9000:9000"
    networks:
      - sonarnet
    environment:
      - SONARQUBE_JDBC_URL=jdbc:postgresql://db:5432/sonar
      - SONARQUBE_JDBC_USERNAME=sonar
      - SONARQUBE_JDBC_PASSWORD=sonar
    volumes:
      - sonarqube_conff:/opt/sonarqube/conf
      - sonarqube_dataa:/opt/sonarqube/data
      - sonarqube_extensionss:/opt/sonarqube/extensions
      - sonarqube_bundled-pluginss:/opt/sonarqube/lib/bundled-plugins
    deploy:
      resources:
        limits:
          cpus: '0.001'
          memory: 500M
        reservations:
          cpus: '0.0001'
          memory: 200M

  db:
    image: postgres
    networks:
      - sonarnet
    environment:
      - POSTGRES_USER=sonar
      - POSTGRES_PASSWORD=sonar
    volumes:
      - postgresqll:/var/lib/postgresql
      - postgresql_dataa:/var/lib/postgresql/data

networks:
  sonarnet:

volumes:
  sonarqube_conff:
  sonarqube_dataa:
  sonarqube_extensionss:
  sonarqube_bundled-pluginss:
  postgresqll:
  postgresql_dataa:
```
Run this command to mount the image
```bash
docker-compose up -d
```
```bash
yarn add -D jest-sonar-reporter
```
Add to jest.config.ts
```json
"testResultsProcessor": "jest-sonar-reporter",
```
Add to .gitignore
```gitignore
.scannerwork
test-report.xml
```

