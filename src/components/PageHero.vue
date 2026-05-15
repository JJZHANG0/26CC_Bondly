<template>
  <section class="page-hero border-b" :class="isDark ? 'border-white/8 is-dark' : 'border-black/6 is-light'">
    <img class="page-hero__image" :src="bannerSrc" :alt="`${eyebrow} banner`" />
    <div class="page-hero__shade" aria-hidden="true"></div>
    <div class="page-hero__inner">
      <div class="page-hero__copy">
        <p class="page-hero__eyebrow reveal" :class="isDark ? 'text-white/35' : 'text-black/35'">
          {{ eyebrow }}
        </p>
        <h1 class="page-hero__title reveal reveal-delay-1" :class="isDark ? 'text-white' : 'text-black'">
          {{ title }}
        </h1>
        <p
          v-if="subtitle"
          class="page-hero__subtitle reveal reveal-delay-2"
          :class="isDark ? 'text-white/50' : 'text-black/45'"
        >
          {{ subtitle }}
        </p>
        <div v-if="$slots.default" class="page-hero__actions reveal reveal-delay-3">
          <slot />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  eyebrow: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: '',
  },
  bannerSrc: {
    type: String,
    required: true,
  },
  isDark: {
    type: Boolean,
    required: true,
  },
})
</script>
