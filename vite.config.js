import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(async () => ({
    plugins: [react()],

    clearScreen: false,
    server: {
        port: 3000,
        host: '0.0.0.0',
        strictPort: true,
        watch: {
            ignored: ["**/src-tauri/**"],
        },
    },
}));
