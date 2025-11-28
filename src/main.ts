import { KarinFactory } from "@karin-js/core";
import { HonoAdapter } from "@karin-js/platform-hono";
import { AppController } from "./app/app.controller";

const app = await KarinFactory.create(new HonoAdapter(), {
  scan: false,
  controllers: [AppController],
});

await app.init();

const fetch = (app.getHttpAdapter() as any).fetch;

// @ts-ignore
if (typeof Deno !== "undefined" && typeof Deno.serve === "function") {
  // @ts-ignore
  Deno.serve(fetch);
}

export default { fetch };
