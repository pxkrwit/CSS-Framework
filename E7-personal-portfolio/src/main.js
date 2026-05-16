import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

// Init theme before mount to prevent flash
const saved = localStorage.getItem('theme')
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
if (saved === 'dark' || (!saved && prefersDark)) {
  document.documentElement.classList.add('dark')
}

createApp(App).mount('#app')
