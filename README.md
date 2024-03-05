# astro-ssr-vue-render-bug

This repo is a minimal reproduction of a bug in Astro: in SSR mode, server-only
Vue component fail to render nested components.

## Repro steps:

1. First install deps and start the server:

```sh
npm i
npm start
```

2. Open [http://localhost:8080/](http://localhost:8080/) and notice that the
page only says "Hi 👋🏼"

![Screenshot from step 2](https://github.com/chriscalo/astro-ssr-vue-render-bug/assets/867717/6599aa18-9e02-43e9-851e-c1713d4b490a)


3. Find the file `ui/pages/index.astro` and add a `client:load` attribute to the
`<IndexPage/>` component.

```diff
  ---
  import HtmlDocument from "!/layouts/HtmlDocument.astro";
  import IndexPage from "./_IndexPage.vue";
  ---
  <HtmlDocument>
-   <IndexPage/>
+   <IndexPage client:load/>
  </HtmlDocument>
```

4. Refresh the page and notice that there's now an interactive button labeled
"Count is: 0".

![Screenshot from step 4](https://github.com/chriscalo/astro-ssr-vue-render-bug/assets/867717/d3a81847-463a-44ff-b2d9-2365a2aecc34)


## Expected

Nested Vue components should always render.

## Actual

When the `client:load` attribute is not present, nested Vue components don't
render.
