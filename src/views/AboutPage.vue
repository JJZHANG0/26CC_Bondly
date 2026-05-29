<template>
  <main class="page-shell">
    <section class="page-intro">
      <div class="container">
        <p class="eyebrow">About</p>
        <h1>我们是谁</h1>
        <p>为什么做Bondly，以及我们和你一样</p>
      </div>
    </section>

    <section class="section story-section">
      <div class="container story-grid">
        <div class="story-copy">
          <article>
            <p>很多人有过这种感觉——和某个人聊完天，明明没吵架，但就是很累。说不上哪里不对，但胸口闷闷的。想找人说，怕对方觉得自己想太多。想写下来，也不知道从哪里写起。</p>
          </article>
          <article>
            <p>我们也经历过这些。晚上躺在床上反复想“我是不是太敏感了”、“那句话到底是什么意思”。后来我们觉得，与其自己硬扛，不如做一个工具，帮自己把这些乱糟糟的想法理清楚。</p>
          </article>
          <article>
            <p>Bondly就是这么开始的。它不是一个高高在上的专家，它更像一个陪你一起复盘的朋友。你不必再一个人想太多。</p>
          </article>
        </div>

        <aside class="story-visual">
          <StickFigure pose="worried" />
          <StickFigure pose="hope" />
          <p>以前我也这样，现在好多了</p>
        </aside>
      </div>
    </section>

    <section class="section team-section">
      <div class="container team-grid">
        <div>
          <p class="eyebrow">Team</p>
          <h2>我们是谁</h2>
          <p>我们是一群在校中学生。我们不是专家，但Bondly是我们最想给自己用的产品。我们相信，很多关系里的“累”，不是你不正常，而是对方的话术本身就有问题。</p>
        </div>
        <div class="team-photo">
          <div class="team-photo__people">
            <span>Amy P</span>
            <span>Bondly Team</span>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import StickFigure from '@/components/StickFigure.vue'
</script>
