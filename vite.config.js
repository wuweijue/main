import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
const path = require('path');
import mdPlugin from 'vite-plugin-markdown';
const translateLoader = require('./lib/vite-loader/vite-translate-loader');
export default defineConfig({
    plugins: [
        react(),
        mdPlugin({
            mode: ['react']
        })
    ],
    server: {
        port: 4000,
        open: true,
        headers: {
            'Access-Control-Allow-Origin': '*', // 允许来自任何源的请求  
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS', // 允许的 HTTP 方法  
        },
    },
    build: {
        rollupOptions: {
            plugins: [
                // translateLoader()
            ]
        }
    },
    resolve: {
        alias: {
            'useTranslate': '/src/utils/useTranslate',
            '@utils': '/src/utils',
            '@store': '/src/store'
        }
    }
})