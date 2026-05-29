<template>
  <footer class="site-footer">
    <div class="site-footer__inner">
      <div>
        <router-link to="/" class="brand-mark">
          <span class="brand-mark__symbol" aria-hidden="true">
            <svg viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="13.5" stroke="currentColor" stroke-width="1.4" />
              <path d="M8 18.8c2.8-5.4 5.3-5.6 7.9-.7 2.5 4.7 5.2 4.7 8.1-.9" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" />
            </svg>
          </span>
          <span>Bondly</span>
        </router-link>
        <p>帮你把说不清的关系感受，慢慢看清楚。</p>
      </div>

      <nav class="site-footer__links" aria-label="页脚导航">
        <router-link to="/products">产品</router-link>
        <router-link to="/download">下载App</router-link>
        <router-link to="/about">关于我们</router-link>
        <router-link to="/help">帮助</router-link>
        <router-link to="/pricing">价格</router-link>
      </nav>
    </div>
    <div class="site-footer__bottom">© 2026 Bondly. help@bondly.com</div>
  </footer>
</template>
