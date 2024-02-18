<script lang="ts" setup>
import { ROUTES } from "~/constants/routes";

const props = defineProps<{
  id: number;
  title: string;
  period: number;
  progress: number;
  color: string;
}>();
</script>

<template>
  <div :class="$style.container" :style="{ '--t-color': props.color }">
    <div :class="$style.header">
      <Badge :label="pluralize(props.period, 'day')" />
    </div>
    <div :class="[$style.title, 'line-clamp']" style="--line: 2">
      {{ props.title }}
    </div>
    <ProgressBar label="Progress" :progress="progress" />
    <HiddenLink :to="`${ROUTES.PRIORITY_TASK}/${props.id}`" />
  </div>
</template>

<style module>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  flex-shrink: 0;
  gap: 1rem;
  position: relative;
  width: 8.125rem;
  height: 11.25rem;
  background-color: var(--t-color);
  color: var(--white);
  padding: 0.75rem 0.625rem;
  border-radius: 1.25rem;
  overflow: hidden;
}

.container::after {
  content: "";
  position: absolute;
  z-index: 0;
  inset: 0;
  background: url("/images/task-bg.svg") center center no-repeat;
  color: var(--t-color);
}

.container > * {
  position: relative;
  z-index: var(--z-elevate);
}

.header {
  display: flex;
  justify-content: flex-end;
}

.title {
  font-size: var(--fs-text-md);
  font-weight: var(--fw-semibold);
}
</style>
