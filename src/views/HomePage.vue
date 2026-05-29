<template>
  <main>
    <section class="home-hero">
      <img class="home-hero__image" :src="`${baseUrl}images/home-room.png`" alt="阳光照进安静房间的暖色照片" />
      <div class="home-hero__shade" aria-hidden="true"></div>

      <div class="home-hero__content">
        <p class="eyebrow">Bondly conversation companion</p>
        <h1>你的情绪，不该自己扛</h1>
        <p class="home-hero__subtitle">Bondly帮你分析每一段对话，拆解你的自我与内耗</p>
        <router-link to="/download" class="primary-button">免费下载App</router-link>
      </div>

      <button class="home-stickman" type="button" @click="speechOpen = !speechOpen" aria-label="让 Bondly 打招呼">
        <span class="speech-bubble" :class="{ 'speech-bubble--open': speechOpen }">嗨，我是Bondly</span>
        <StickFigure pose="lying" />
      </button>
    </section>

    <section class="section section--tight">
      <div class="container">
        <div class="highlight-grid">
          <article v-for="item in highlights" :key="item.title" class="highlight-card">
            <div class="icon-box" aria-hidden="true">
              <component :is="item.icon" />
            </div>
            <h2>{{ item.title }}</h2>
            <p>{{ item.body }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section home-closing">
      <div class="container home-closing__inner">
        <div>
          <p class="eyebrow">Start gently</p>
          <h2>先把一段让你难受的对话，交给Bondly看看。</h2>
        </div>
        <router-link to="/download" class="secondary-button">开始使用Bondly</router-link>
      </div>
    </section>
  </main>
</template>

<script setup>
import { h, ref } from 'vue'
import StickFigure from '@/components/StickFigure.vue'

const speechOpen = ref(false)
const baseUrl = import.meta.env.BASE_URL

const RecordIcon = {
  render() {
    return h('svg', { viewBox: '0 0 28 28', fill: 'none' }, [
      h('rect', { x: '6', y: '4', width: '16', height: '20', rx: '4', stroke: 'currentColor', 'stroke-width': '1.8' }),
      h('path', { d: 'M11 10h6M11 14h6M11 18h4', stroke: 'currentColor', 'stroke-width': '1.8', 'stroke-linecap': 'round' }),
    ])
  },
}

const MomentIcon = {
  render() {
    return h('svg', { viewBox: '0 0 28 28', fill: 'none' }, [
      h('path', { d: 'M14 4v20M4 14h20', stroke: 'currentColor', 'stroke-width': '1.8', 'stroke-linecap': 'round' }),
      h('circle', { cx: '14', cy: '14', r: '7', stroke: 'currentColor', 'stroke-width': '1.8' }),
      h('path', { d: 'M18 9 9 18', stroke: 'currentColor', 'stroke-width': '1.8', 'stroke-linecap': 'round' }),
    ])
  },
}

const CompanionIcon = {
  render() {
    return h('svg', { viewBox: '0 0 28 28', fill: 'none' }, [
      h('circle', { cx: '10', cy: '10', r: '4', stroke: 'currentColor', 'stroke-width': '1.8' }),
      h('circle', { cx: '19', cy: '13', r: '4', stroke: 'currentColor', 'stroke-width': '1.8' }),
      h('path', { d: 'M4 23c1-5 4-8 8-8M14 24c1-4 4-6 8-6', stroke: 'currentColor', 'stroke-width': '1.8', 'stroke-linecap': 'round' }),
    ])
  },
}

const highlights = [
  {
    icon: RecordIcon,
    title: '录下来就能分析',
    body: '上传聊天记录截图或录音，不用自己反复想',
  },
  {
    icon: MomentIcon,
    title: '认出那些让你不舒服的瞬间',
    body: 'AI帮你找到人际关系中的潜在优势与劣势',
  },
  {
    icon: CompanionIcon,
    title: '有个伙伴陪你复盘',
    body: '和Bondly陪伴聊聊，它不会评判你',
  },
]
</script>
