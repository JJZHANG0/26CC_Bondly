<template>
  <main class="page-shell">
    <section class="page-intro">
      <div class="container">
        <p class="eyebrow">Pricing</p>
        <h1>简单直接的价格</h1>
        <p>没有隐藏收费，按你喜欢的方式选</p>
      </div>
    </section>

    <section class="section pricing-section">
      <div class="container pricing-grid">
        <article class="pricing-card">
          <StickFigure pose="standing" />
          <h2>免费版</h2>
          <div class="price">0元</div>
          <ul>
            <li>上传对话分析和基础话术识别</li>
            <li>每月3次复盘聊天</li>
            <li>可以看看关系图谱的样子</li>
          </ul>
          <router-link to="/download" class="secondary-button">开始免费使用</router-link>
        </article>

        <article class="pricing-card pricing-card--vip">
          <div class="tea-note">每天不到5毛钱</div>
          <StickFigure pose="tea" />
          <h2>VIP</h2>
          <div class="price">月付 19元 / 月 <span>首月仅xxx元</span></div>
          <p class="year-price">按年付 149元 / 年（平均一个月12块多）</p>
          <ul>
            <li>无限次复盘聊天</li>
            <li>无限次情景模拟（沙盒复盘）</li>
            <li>性格与社交特征深度分析</li>
            <li>人格自测，基于你性格的个性化建议</li>
            <li>导出报告</li>
          </ul>
          <router-link to="/download" class="primary-button">升级到VIP</router-link>
        </article>
      </div>

      <p class="payment-note">支持微信支付和支付宝。订阅后随时可以取消，取消后VIP到期才失效，不会马上不能用。</p>
    </section>
  </main>
</template>

<script setup>
import StickFigure from '@/components/StickFigure.vue'
</script>
