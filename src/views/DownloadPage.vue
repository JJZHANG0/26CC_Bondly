<template>
  <main class="page-shell">
    <section class="download-hero">
      <div class="container download-hero__inner">
        <div class="download-hero__copy">
          <p class="eyebrow">Download</p>
          <h1>Bondly正在准备中</h1>
          <p>留个邮箱，上线了第一时间告诉你</p>

          <form class="waitlist-form" @submit.prevent="submitted = true">
            <input v-model="email" type="email" required placeholder="你的邮箱" />
            <button type="submit">{{ submitted ? '已收到' : '通知我' }}</button>
          </form>
        </div>

        <div class="download-hero__visual">
          <div class="phone-mockup">
            <div class="phone-mockup__screen">
              <p>Bondly</p>
              <h2>第一次对话分析</h2>
              <div class="analysis-row">
                <span>情绪压力</span>
                <strong>偏高</strong>
              </div>
              <div class="analysis-row">
                <span>关系信号</span>
                <strong>需要复盘</strong>
              </div>
              <div class="analysis-chip">可以先说说你当时哪里不舒服</div>
            </div>
          </div>
          <div class="peek-stickman">
            <StickFigure pose="standing" />
            <p>我已经准备好了，你呢</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--tight">
      <div class="container">
        <p class="download-note">第一次打开App会有几页引导，大约两三分钟就能看到第一次分析结果。什么都不用准备，有聊天记录或者随便一段录音就行。</p>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import StickFigure from '@/components/StickFigure.vue'

const email = ref('')
const submitted = ref(false)
</script>
