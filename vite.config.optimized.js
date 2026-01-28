import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import compression from 'vite-plugin-compression'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      // Optimize Fast Refresh
      fastRefresh: true,
      // Extract CSS properly for better tree-shaking
      jsxImportSource: 'react',
    }),
    // Add compression plugin for gzip/brotli
    compression({
      verbose: true,
      disable: false,
      threshold: 1024, // Only compress files > 1KB
      algorithm: 'brotli', // Use brotli for better compression
      ext: '.br',
    }),
    compression({
      verbose: true,
      disable: false,
      algorithm: 'gzip',
      ext: '.gz',
    }),
  ],
  
  // Optimize build output
  build: {
    // Code splitting strategy for better caching
    rollupOptions: {
      output: {
        // Manual chunks for better control
        manualChunks: {
          // Vendor libraries
          'vendor-core': ['react', 'react-dom', 'react-router-dom'],
          'vendor-3d': ['three', '@react-three/fiber', '@react-three/drei'],
          'vendor-animation': ['framer-motion', 'gsap', '@gsap/react'],
          'vendor-ui': ['lucide-react', 'react-icons', 'embla-carousel-react'],
        },
        // Optimize chunk naming for better caching
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg|webp)$/.test(name ?? '')) {
            return 'img/[name]-[hash][extname]'
          } else if (/\.css$/.test(name ?? '')) {
            return 'css/[name]-[hash][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        },
      },
    },
    // Increase chunk size warning limit (for 3D models)
    chunkSizeWarningLimit: 600,
    // Source maps only in development
    sourcemap: process.env.NODE_ENV === 'development',
    // Minify aggressively
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
        drop_debugger: true,
      },
    },
  },
  
  // Optimize dependencies
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'framer-motion',
      'three',
      '@react-three/fiber',
      '@react-three/drei',
    ],
  },

  // Server config for development
  server: {
    // Enable compression during dev
    compression: 'gzip',
  },
})
