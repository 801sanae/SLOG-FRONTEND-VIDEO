# Svelte Study
인프런 : [here](https://www.inflearn.com/course/svelte-rest-api-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8/dashboard)<br>
유투브 : [here](https://www.youtube.com/watch?v=PuY054WWs0U&list=PLEU9vwKdoCqSOCmW55QZM2k2RE3EKChHY)
<br><br>
해당 Svelte Prject는 [Vite](https://ko.vite.dev/guide/)를 통해 프로젝트를 init한다.

```bash
## 1. 옛날방식인듯 --template 생략가능
npm create vite@latest SLOG-FRONTEND-VIDEO --template svelte 
## 2. 프로젝트로 들어가서
cd projectName
## 3. 패키지 설치
npm install
## 4. 시작
npm run dev
```

<br><hr><br>

Back-End : [here](https://github.com/freeseamew/SLOG-FASTIFY-PRISMA-SERVER)

```bash
npm install
npm start
```

Design : [here](https://github.com/freeseamew/slog-with-tailwindcss)

[컴퍼넌트 배치 관련](https://www.inflearn.com/courses/lecture?courseId=330724&unitId=152825&tab=curriculum&subtitleLanguage=ko)

## Routing

Svelte + tinro

```bash
npm i -D tinro
```
> [SvelteKit](https://github.com/sveltejs/kit#readme)은 라우터를 포함한다.

## 서버통신 설정

```bash
npm install axios
```





<hr><br>
<hr><br>
<hr><br>






# Svelte + Vite

This template should help get you started developing with Svelte in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode).

## Need an official Svelte framework?

Check out [SvelteKit](https://github.com/sveltejs/kit#readme), which is also powered by Vite. Deploy anywhere with its serverless-first approach and adapt to various platforms, with out of the box support for TypeScript, SCSS, and Less, and easily-added support for mdsvex, GraphQL, PostCSS, Tailwind CSS, and more.

## Technical considerations

**Why use this over SvelteKit?**

- It brings its own routing solution which might not be preferable for some users.
- It is first and foremost a framework that just happens to use Vite under the hood, not a Vite app.

This template contains as little as possible to get started with Vite + Svelte, while taking into account the developer experience with regards to HMR and intellisense. It demonstrates capabilities on par with the other `create-vite` templates and is a good starting point for beginners dipping their toes into a Vite + Svelte project.

Should you later need the extended capabilities and extensibility provided by SvelteKit, the template has been structured similarly to SvelteKit so that it is easy to migrate.

**Why `global.d.ts` instead of `compilerOptions.types` inside `jsconfig.json` or `tsconfig.json`?**

Setting `compilerOptions.types` shuts out all other types not explicitly listed in the configuration. Using triple-slash references keeps the default TypeScript setting of accepting type information from the entire workspace, while also adding `svelte` and `vite/client` type information.

**Why include `.vscode/extensions.json`?**

Other templates indirectly recommend extensions via the README, but this file allows VS Code to prompt the user to install the recommended extension upon opening the project.

**Why enable `checkJs` in the JS template?**

It is likely that most cases of changing variable types in runtime are likely to be accidental, rather than deliberate. This provides advanced typechecking out of the box. Should you like to take advantage of the dynamically-typed nature of JavaScript, it is trivial to change the configuration.

**Why is HMR not preserving my local component state?**

HMR state preservation comes with a number of gotchas! It has been disabled by default in both `svelte-hmr` and `@sveltejs/vite-plugin-svelte` due to its often surprising behavior. You can read the details [here](https://github.com/sveltejs/svelte-hmr/tree/master/packages/svelte-hmr#preservation-of-local-state).

If you have state that's important to retain within a component, consider creating an external store which would not be replaced by HMR.

```js
// store.js
// An extremely simple external store
import { writable } from 'svelte/store'
export default writable(0)
```
