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
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'mjs' : 'js'}`
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@mui/material', '@mui/icons-material', '@emotion/react', '@emotion/styled'],
      output: [
        {
          format: 'cjs',
          entryFileNames: 'index.js',
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
            '@mui/material': 'MaterialUI',
            '@mui/icons-material': 'MaterialUIIcons',
            '@emotion/react': 'emotionReact',
            '@emotion/styled': 'emotionStyled'
          }
        },
        {
          format: 'es',
          entryFileNames: 'index.mjs',
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
            '@mui/material': 'MaterialUI',
            '@mui/icons-material': 'MaterialUIIcons',
            '@emotion/react': 'emotionReact',
            '@emotion/styled': 'emotionStyled'
          }
        }
      ]
    }
  }
})