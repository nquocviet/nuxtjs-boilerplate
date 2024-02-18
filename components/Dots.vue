<script lang="ts" setup>
withDefaults(
  defineProps<{
    color: string;
    size?: number;
  }>(),
  {
    size: 8,
  }
);
</script>

<template>
  <span
    :style="{
      '--d-color': $props.color,
      '--d-size': `${$props.size}px`,
    }"
    :class="$style.dot"
  ></span>
</template>

<style module>
.dot {
  background-color: var(--d-color);
  width: var(--d-size);
  height: var(--d-size);
  border-radius: 50%;
}
</style>
