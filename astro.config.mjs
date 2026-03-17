// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Docs",
      logo: {
        src: "./src/assets/houston.webp",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/nahpu",
        },
      ],
      sidebar: [
        {
          label: "General Usages",
          autogenerate: { directory: "usages" },
        },
      ],
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
