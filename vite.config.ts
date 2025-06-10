import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { visualizer } from "rollup-plugin-visualizer";
import type { PluginOption } from "vite";
import { componentTagger } from "lovable-tagger";

// Add this if lovable-tagger has no types
declare module "lovable-tagger" {
  export function componentTagger(): PluginOption;
}

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    allowedHosts: [
      "localhost",
      "127.0.0.1",
      "924004a2-a83a-4090-8318-4bc288f1086c.lovableproject.com",
      ".lovableproject.com",
    ],
  },
  plugins: [
    react({
      jsxRuntime: "automatic",
      babel: {
        plugins: [],
      },
    }),
    mode === "production" &&
      (visualizer({
        open: false,
        gzipSize: true,
        brotliSize: true,
      }) as PluginOption),
    mode === "development" && componentTagger(),
  ].filter(Boolean) as PluginOption[],
  build: {
    outDir: "dist",
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom"],
          "vendor-ui": [
            "@radix-ui/react-dialog",
            "@radix-ui/react-dropdown-menu",
            "@radix-ui/react-popover",
            "@radix-ui/react-select",
            "@radix-ui/react-tabs",
          ],
          "vendor-utils": ["axios", "clsx", "date-fns", "zod"],
        },
      },
    },
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: mode === "production",
        drop_debugger: true,
      },
      mangle: {
        safari10: true,
      },
    },
    sourcemap: mode === "development",
    target: "es2015",
    cssTarget: "chrome80",
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom"],
  },
  optimizeDeps: {
    include: ["react", "react-dom"],
    exclude: ["lovable-tagger"],
  },
  esbuild: {
    logOverride: { "this-is-undefined-in-esm": "silent" },
  },
}));
