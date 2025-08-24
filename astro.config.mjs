import { defineConfig } from "astro/config";
import astroIcon from "astro-icon";

export default defineConfig({
  integrations: [
    astroIcon({
      collections: {
        local: "./src/icons",
        tabler: async () =>
          await (
            await import("@iconify-json/tabler")
          ).default,
      },
    }),
  ],
});
