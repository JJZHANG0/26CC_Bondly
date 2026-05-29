<template>
  <main class="page-shell">
    <section class="page-intro">
      <div class="container">
        <p class="eyebrow">Product</p>
        <h1>Bondly能帮你做什么</h1>
        <p>三个功能，帮你把关系看清楚</p>
      </div>
    </section>

    <section class="section product-list">
      <article v-for="feature in features" :key="feature.title" class="product-feature">
        <div class="product-feature__copy">
          <p class="feature-index">{{ feature.index }}</p>
          <h2>{{ feature.title }}</h2>
          <p>{{ feature.body }}</p>
        </div>
        <div class="product-feature__visual">
          <StickFigure :pose="feature.pose" />
          <div v-if="feature.kind === 'phone'" class="mini-phone">
            <span></span>
            <mark>你是不是太敏感了？</mark>
            <span></span>
          </div>
          <div v-if="feature.kind === 'chat'" class="mini-chat">
            <span>当时你最想说什么？</span>
            <span>如果换一种说法呢？</span>
          </div>
          <div v-if="feature.kind === 'network'" class="mini-network" aria-hidden="true">
            <i v-for="dot in 6" :key="dot"></i>
          </div>
        </div>
      </article>
    </section>

    <section class="section ip-block">
      <div class="container ip-block__inner">
        <div>
          <p class="eyebrow">Bondly IP</p>
          <h2>小Bondly，想多陪陪你</h2>
          <p>之后我们可能会做一些小火柴人的周边，比如贴纸、手机壳。也可能和别的品牌联名出一些好玩的东西。不为圈钱，就是想让它多陪陪你。</p>
        </div>
        <div class="ip-block__visual">
          <StickFigure pose="wave" />
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import StickFigure from '@/components/StickFigure.vue'

const features = [
  {
    index: '01',
    title: '录一段，就知道哪里不对劲',
    body: '聊天记录截图、录音、或者随便写几段话，AI会自动找出关系里可能让你不舒服的地方。不用自己反复琢磨，AI帮你先看一遍。',
    pose: 'phone',
    kind: 'phone',
  },
  {
    index: '02',
    title: '有个伙伴陪你复盘',
    body: '每次聊完觉得心累，可以找“Bondly陪伴”聊一聊。它会问你一些问题：当时你最想说什么、你觉得对方是什么意思、如果你换一种说法会怎样。你也可以提前模拟一场难的对话，先练练怎么说。它不会骂你笨，也不会说你想太多。',
    pose: 'chat',
    kind: 'chat',
  },
  {
    index: '03',
    title: '慢慢看清你的关系网',
    body: '用久了，Bondly会帮你整理出你和不同人的相处模式。哪些关系让你越来越轻松，哪些让你越来越累，时间长了会看得越来越清楚。不是为了让你讨厌谁，而是帮你把力气留给对的人。',
    pose: 'network',
    kind: 'network',
  },
]
</script>
