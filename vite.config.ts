
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import * as path from "path";
// import { visualizer } from "rollup-plugin-visualizer";
// import { componentTagger } from "lovable-tagger";

// export default defineConfig(({ mode }) => ({
//   server: {
//     host: "::",
//     port: 8080,
//     allowedHosts: [
//       'localhost',
//       '127.0.0.1',
//       '924004a2-a83a-4090-8318-4bc288f1086c.lovableproject.com',
//       '.lovableproject.com'
//     ]
//   },
//   plugins: [
//     react({
//       jsxRuntime: 'automatic',
//       babel: {
//         plugins: [],
//       },
//     }),
//     mode === 'production' && visualizer({
//       open: false,
//       gzipSize: true,
//       brotliSize: true,
//     }),
//     mode === 'development' && componentTagger(),
//   ].filter(Boolean),
//   build: {
//     outDir: 'dist',
//     rollupOptions: {
//       output: {
//         manualChunks: (id) => {
//           if (id.includes('node_modules')) {
//             if (id.includes('react') || id.includes('react-dom')) {
//               return 'vendor-react';
//             }
//             return 'vendor'; // all other deps
//           }
//         },
//       },
//     },
//     minify: 'terser',
//     terserOptions: {
//       compress: {
//         drop_console: mode === 'production',
//       },
//     },
//     sourcemap: true,
//   },
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//       "react": path.resolve(__dirname, "./node_modules/react"),
//       "react-dom": path.resolve(__dirname, "./node_modules/react-dom"),
//       "next": false, // Disable next.js if it's being accidentally imported
//     },
//   },
//   optimizeDeps: {
//     include: ['react', 'react-dom'],
//     force: true,
//     esbuildOptions: {
//       define: {
//         global: 'globalThis',
//       }
//     }
//   },
// }));

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { visualizer } from "rollup-plugin-visualizer";
import type { PluginOption } from 'vite';
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
      'localhost',
      '127.0.0.1',
      '924004a2-a83a-4090-8318-4bc288f1086c.lovableproject.com',
      '.lovableproject.com'
    ]
  },
  plugins: [
    react({
      jsxRuntime: 'automatic',
      babel: {
        plugins: [],
      },
    }),
    mode === 'production' && visualizer({
      open: false,
      gzipSize: true,
      brotliSize: true,
    }) as PluginOption,
    mode === 'development' && componentTagger(),
  ].filter(Boolean) as PluginOption[],
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: (id: string) => {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor-react';
            }
            return 'vendor';
          }
        },
      },
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: mode === 'production',
      },
    },
    sourcemap: true,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "react": resolve(__dirname, "./node_modules/react"),
      "react-dom": resolve(__dirname, "./node_modules/react-dom"),
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom'],
    force: true,
    esbuildOptions: {
      define: {
        global: 'globalThis',
      }
    }
  },
}));