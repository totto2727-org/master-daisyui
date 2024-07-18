/** @jsxImportSource jsr:@hono/hono@4.5.0/jsx */

import { Hono } from "jsr:@hono/hono@4.5.0";
import { logger } from "jsr:@hono/hono@4.5.0/logger";
import { serveStatic } from 'jsr:@hono/hono@4.5.0/deno'
import { cache } from 'jsr:@hono/hono@4.5.0/cache'
import { masterCssMiddleware } from "jsr:@totto/hono-mastercss@0.2.0";
import * as path from "jsr:@std/path@1.0.0"

import masterDaisyUi, { dark, light } from "../mod.ts";
import config from "./static/js/master.css.js"

const app = new Hono();

app.use(logger());

app.use("/content", masterCssMiddleware({
  ...masterDaisyUi,
  ...config
}));

app.get("/content", (c) =>
  c.html(
    <html>
      <head>
        <meta charset="utf-8" />
        <title>Hello World!!!</title>
        <link rel="preload" as="script" href="https://unpkg.com/htmx.org@2.0.0" />
        <script src="https://unpkg.com/htmx.org@2.0.0"></script>
        <link rel="preload" as="style" href="https://esm.sh/@master/normal.css@rc?css" />
        <link rel="stylesheet" href="https://esm.sh/@master/normal.css@rc?css" />
        <link rel="modulepreload" href="https://esm.sh/@master/css-runtime@rc" />
        <link rel="modulepreload" href="./static/js/master.css.js" />
        <link rel="modulepreload" href="./static/js/init-mastercss.js" />
        <script type="module" src="./static/js/init-mastercss.js"></script>
      </head>
      <body class={`${light} ${dark} bg:base-100`}>
        <div class="flex flex-direction:column align-items:center">
          <div>Hello World!!!</div>
          <button hx-get="/api/content">
            Put To Messages
          </button>
        </div>
        <div class="flex flex-direction:column align-items:center">
          <div class="fg:primary-content bg:primary">primary</div>
          <div class="fg:secondary-content bg:secondary">secondary</div>
          <div class="fg:accent-content bg:accent">accent</div>
          <div class="fg:neutral-content bg:neutral">neutral</div>
          <div class="fg:info-content bg:info">info</div>
          <div class="fg:success-content bg:success">success</div>
          <div class="fg:warning-content bg:warning">warning</div>
          <div class="fg:error-content bg:error">error</div>
        </div>
      </body>
    </html>,
  ));

app.get(
  "/api/content",
  (c) => c.html(<div class="fg:red">Dynamic Style!!!</div>),
);

app.use(
  '/static/*',
  cache({
    cacheName: 'static',
    cacheControl: 'max-age=86400',
    wait: true,
  })
)
app.use('/static/*', serveStatic({ root: `${path.relative(".", import.meta.dirname ?? ".")}/static`, rewriteRequestPath: (path) => path.replace("/static", "") },));

Deno.serve(app.fetch);
