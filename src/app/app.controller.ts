import { Controller, Get } from "@karin-js/core";

@Controller("/")
export class AppController {
  @Get("/")
  simple() {
    return { hello: "karin!" };
  }
}
