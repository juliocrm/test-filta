import { createServer } from "miragejs";
import contentData from "../data/db.json" assert { type: "json" };

export function makeServer() {
  let server = createServer({
    routes() {
      this.namespace = "api";

      this.get("/landing-page", () => contentData.landingPage);
      this.get("/section-images", () => contentData.sectionImages);
      this.get("/background-colors", () => contentData.backgroundColors);
    }
  });

  return server;
}
