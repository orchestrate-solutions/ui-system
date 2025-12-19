import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'HybridUISystem',
      fileName: 'index'
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@mui/material', '@mui/icons-material', '@emotion/react', '@emotion/styled'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@mui/material': 'MaterialUI',
          '@mui/icons-material': 'MaterialUIIcons',
          '@emotion/react': 'emotionReact',
          '@emotion/styled': 'emotionStyled'
        }
      }
    }
  }
})