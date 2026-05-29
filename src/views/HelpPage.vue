<template>
  <main class="page-shell">
    <section class="page-intro">
      <div class="container">
        <p class="eyebrow">Help</p>
        <h1>常见问题</h1>
        <p>你想知道的，都在这里</p>
      </div>
    </section>

    <section class="section faq-section">
      <div class="container faq-grid">
        <div class="faq-list">
          <details v-for="item in faqs" :key="item.q" class="faq-item" open>
            <summary>{{ item.q }}</summary>
            <p>{{ item.a }}</p>
          </details>
        </div>

        <aside class="faq-side">
          <StickFigure pose="question" />
          <p>还有什么想问的吗？加个邮箱我们手动回你</p>
          <form class="mini-email-form" @submit.prevent="submitted = true">
            <input v-model="email" type="email" required placeholder="你的邮箱" />
            <button type="submit">{{ submitted ? '收到' : '提交' }}</button>
          </form>
          <small>或者发邮件到</small>
          <a href="mailto:help@bondly.com">help@bondly.com</a>
        </aside>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import StickFigure from '@/components/StickFigure.vue'

const email = ref('')
const submitted = ref(false)

const faqs = [
  {
    q: '要下载什么东西才能用？',
    a: '只用下载Bondly的App就行，不用买手环，也不用连别的设备。手机上就能完成所有分析。',
  },
  {
    q: '上传聊天记录安全吗？',
    a: '所有分析都是在手机上完成的，你也可以选择不让数据上传到云端。任何时候都可以删除你的记录。你的对话，永远是你自己的。',
  },
  {
    q: '我能匿名用吗？',
    a: '可以。你可以不绑定真实信息，随便起个昵称就行。',
  },
  {
    q: '这个能代替心理咨询吗？',
    a: '不能。Bondly是做关系分析和对话复盘的，不是用来治病的。如果你觉得自己需要专业帮助，我们会给你推荐正规的心理咨询渠道。',
  },
  {
    q: '免费版和VIP有什么区别？',
    a: '免费版可以上传对话看基础分析，每个月可以免费复盘3次。VIP可以无限次复盘、玩情景模拟、做性格分析、拿到基于你性格的个性化建议。VIP可以按月付也可以按年付，年付更划算。',
  },
  {
    q: '怎么取消订阅？',
    a: '在App Store或者支付宝/微信的支付设置里直接取消就行。取消之后，VIP还能一直用到到期的那天。',
  },
]
</script>
