import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import pkg from './package.json';
const buildId=(process.env.GITHUB_SHA||process.env.GIT_COMMIT_SHA||'local').slice(0,7);
export default defineConfig({define:{__APP_VERSION__:JSON.stringify(pkg.version),__BUILD_ID__:JSON.stringify(buildId)},base:'/GardenOS/',plugins:[react(),VitePWA({registerType:'autoUpdate',includeAssets:['icon.svg'],manifest:{name:'GardenOS',short_name:'GardenOS',description:'Your garden, planned and growing.',theme_color:'#183b30',background_color:'#f6f7f1',display:'standalone',start_url:'/GardenOS/',scope:'/GardenOS/',icons:[{src:'icon.svg',sizes:'any',type:'image/svg+xml',purpose:'any'}]}})]});
