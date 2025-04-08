import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), dts({ rollupTypes: true })],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/main.ts"),
      name: "wanwan-kit",
      fileName: format => `wanwan-kit.${format}.js`
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue" // UMD 格式下的全局变量名
        }
      }
    }
  }
});
