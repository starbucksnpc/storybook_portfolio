import { resolve } from 'path'
import { defineConfig, rollupVersion } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({}) => {
  const config = { 
    plugins: [react()],
    base: process.env.BUILD_PATH_PREFIX || undefined
  }

  if (process.env.BUILD_COMBINED === "true" && process.env.BUILD_TYPE === "storybook") {
    return { ...config,
      base: config.base ? config.base + "/storybook" : "/storybook"
    }
  }
  return { ...config,
    
  }
})