<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    color?: "white";
    label: string;
  }>(),
  {
    color: "white",
  }
);
</script>

<template>
  <span :class="[$style.badge, $style[`badge-${props.color}`]]">
    {{ props.label }}
  </span>
</template>

<style module>
.badge {
  display: inline-block;
  border-radius: 0.625rem;
  font-size: var(--fs-text-xs);
  font-weight: var(--fw-medium);
  padding: 0.125rem 0.375rem;
}

.badge-white {
  background-color: var(--white);
  color: var(--black);
}
</style>
