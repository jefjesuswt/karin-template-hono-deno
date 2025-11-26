import { KarinFactory } from "@karin-js/core";
import { HonoAdapter } from "@karin-js/platform-hono";

async function bootstrap() {
  const app = await KarinFactory.create(new HonoAdapter(), {
    scan: "./src/**/*.controller.ts",
  });

  app.listen(3000);
}

bootstrap();
