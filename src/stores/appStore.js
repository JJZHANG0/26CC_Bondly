import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAppStore = defineStore('app', () => {
  // Theme
  const isDark = ref(false)

  // Language
  const language = ref('en')

  // Modal states
  const showLoginModal = ref(false)
  const showSignupModal = ref(false)

  // Init from localStorage
  function initFromStorage() {
    const savedTheme = localStorage.getItem('auraloop-theme')
    const savedLang = localStorage.getItem('auraloop-lang')
    if (savedTheme === 'dark') {
      isDark.value = true
      document.documentElement.classList.add('dark')
    }
    if (savedLang) {
      language.value = savedLang
    }
  }

  function toggleTheme() {
    isDark.value = !isDark.value
    if (isDark.value) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('auraloop-theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('auraloop-theme', 'light')
    }
  }

  function setLanguage(lang) {
    language.value = lang
    localStorage.setItem('auraloop-lang', lang)
  }

  function toggleLanguage() {
    setLanguage(language.value === 'en' ? 'zh' : 'en')
  }

  function openLogin() {
    showSignupModal.value = false
    showLoginModal.value = true
  }

  function openSignup() {
    showLoginModal.value = false
    showSignupModal.value = true
  }

  function closeModals() {
    showLoginModal.value = false
    showSignupModal.value = false
  }

  return {
    isDark,
    language,
    showLoginModal,
    showSignupModal,
    initFromStorage,
    toggleTheme,
    setLanguage,
    toggleLanguage,
    openLogin,
    openSignup,
    closeModals,
  }
})
