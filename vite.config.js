import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react()],
  server:{
    host: "0.0.0.0"
  },
})
