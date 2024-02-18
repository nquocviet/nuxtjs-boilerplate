<script lang="ts" setup>
definePageMeta({
  layout: "main",
});
</script>

<template>
  <div :class="$style.header">
    <div :class="$style['header-title']">{{ getCurrentMonthYear() }}</div>
    <Button size="xs" :fluid="false">
      <Icon name="ph:plus-bold" size="14" />
      Add task
    </Button>
  </div>
</template>

<style module>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.header-title {
  font-size: var(--fs-display-xs);
  font-weight: var(--fw-semibold);
}
</style>
