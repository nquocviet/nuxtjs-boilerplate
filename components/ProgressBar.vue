<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    label?: string;
    progress: number;
    size?: number;
  }>(),
  {
    size: 4,
  }
);
</script>

<template>
  <div :class="$style.container">
    <div :class="$style.text" v-if="props.label">{{ props.label }}</div>
    <div
      :class="$style.progress"
      :style="{
        '--p-size': `${props.size}px`,
        '--p-progress': props.progress,
      }"
    ></div>
    <div :class="[$style.text, $style.percent]">{{ props.progress }}%</div>
  </div>
</template>

<style module>
.container {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 0.125rem;
}

.text {
  font-size: var(--fs-text-xs);
  font-weight: var(--fw-regular);
}

.progress {
  position: relative;
  z-index: var(--z-elevate);
  width: 100%;
  height: var(--p-size);
  background-color: var(--gray-800);
  border-radius: var(--p-size);
  overflow: hidden;
}

.progress::after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: calc(var(--p-progress) * 1%);
  background-color: var(--white);
}

.percent {
  text-align: right;
}
</style>
