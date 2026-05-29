<template>
  <svg class="stick-figure" :class="`stick-figure--${pose}`" viewBox="0 0 220 180" fill="none" role="img" :aria-label="label">
    <g v-if="pose === 'lying'" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="62" cy="106" r="16" />
      <path d="M80 111c28 10 56 10 83-3" />
      <path d="M113 111 94 136" />
      <path d="M129 111 151 135" />
      <path d="M162 108l28-15" />
      <path d="M84 110 70 86" />
      <path d="M42 132h132" opacity=".24" />
    </g>

    <g v-else-if="pose === 'phone'" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
      <rect x="120" y="36" width="54" height="94" rx="8" />
      <path d="M132 58h30M132 76h22M132 94h30" />
      <path d="M128 76h38" class="stick-accent" />
      <circle cx="67" cy="58" r="18" />
      <path d="M67 78v48M67 96 45 116M67 98l34-18M67 126 49 154M67 126l22 154" />
      <path d="M96 79c9-5 16-7 24-5" />
    </g>

    <g v-else-if="pose === 'chat'" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="58" cy="74" r="17" />
      <path d="M58 91v42M58 108 37 122M58 108l22 14M58 133 42 158M58 133l19 25" />
      <circle cx="152" cy="74" r="17" />
      <path d="M152 91v42M152 108l-22 14M152 108l22 14M152 133l-18 25M152 133l20 25" />
      <path d="M82 42h48a10 10 0 0 1 10 10v22a10 10 0 0 1-10 10h-20l-14 13 4-13H82a10 10 0 0 1-10-10V52a10 10 0 0 1 10-10Z" />
      <path d="M91 62h32" opacity=".45" />
    </g>

    <g v-else-if="pose === 'network'" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="110" cy="88" r="18" />
      <path d="M110 106v36M110 123 88 137M110 123l24 14M110 142 92 166M110 142l20 24" />
      <circle cx="45" cy="42" r="8" />
      <circle cx="177" cy="40" r="8" />
      <circle cx="42" cy="140" r="8" />
      <circle cx="182" cy="134" r="8" />
      <path d="M52 46 96 80M169 45l-43 35M50 137l43-31M174 132l-48-27" />
      <path d="M45 42c32 4 58 18 65 46" class="stick-accent" />
    </g>

    <g v-else-if="pose === 'wave'" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="95" cy="55" r="19" />
      <path d="M95 75v50M95 96 72 116M95 96l31-16M95 125l-20 30M95 125l22 30" />
      <path d="M128 76c18-20 31-30 44-31M132 61c10-14 20-22 30-25" />
      <path d="M164 74l8-8M177 91l12-4" class="stick-accent" />
    </g>

    <g v-else-if="pose === 'worried'" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
      <rect x="24" y="112" width="152" height="12" rx="6" opacity=".18" />
      <circle cx="92" cy="56" r="18" />
      <path d="M83 62c7 5 14 5 21 0" opacity=".5" />
      <path d="M92 74v46M92 92 69 111M92 92l24 20M92 120l-22 28M92 120l26 28" />
      <path d="M42 38h34M42 50h26" opacity=".35" />
    </g>

    <g v-else-if="pose === 'hope'" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="92" cy="62" r="18" />
      <path d="M92 80v44M92 98 68 116M92 98l28 16M92 124l-20 31M92 124l24 31" />
      <circle cx="152" cy="66" r="8" class="stick-accent" />
      <path d="M152 42v8M152 82v8M128 66h8M168 66h8" class="stick-accent" />
    </g>

    <g v-else-if="pose === 'question'" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
      <path d="M111 37c0-17 34-18 34 1 0 17-22 16-22 34" />
      <circle cx="123" cy="92" r="2.5" fill="currentColor" />
      <circle cx="91" cy="82" r="18" />
      <path d="M91 100v42M91 116 67 132M91 116l25 13M91 142l-21 26M91 142l23 26" />
    </g>

    <g v-else-if="pose === 'tea'" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="76" cy="62" r="18" />
      <path d="M76 80v42M76 98 56 112M76 98l25 15M76 122l-19 28M76 122l22 28" />
      <path d="M118 123h58M128 103h30a8 8 0 0 1 0 16h-30Z" />
      <path d="M136 94c-4-7 5-8 0-15M148 94c-4-7 5-8 0-15" opacity=".4" />
    </g>

    <g v-else stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="94" cy="56" r="18" />
      <path d="M94 74v48M94 92 70 108M94 92l26 15M94 122l-19 32M94 122l22 32" />
    </g>
  </svg>
</template>

<script setup>
defineProps({
  pose: {
    type: String,
    default: 'standing',
  },
  label: {
    type: String,
    default: 'Bondly 火柴人',
  },
})
</script>
