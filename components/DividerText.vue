<script lang="ts" setup>
defineProps<{
  text: string;
}>();
</script>

<template>
  <div :class="$style.divider">
    {{ text }}
  </div>
</template>

<style module>
.divider {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.375rem;
  font-size: var(--fs-text-sm);
  font-weight: var(--fw-regular);
}

.divider::after,
.divider::before {
  content: "";
  width: 0.75rem;
  border-top: 1px solid var(--primary-600);
}
</style>
