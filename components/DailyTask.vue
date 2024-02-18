<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    title: string;
    finished?: boolean;
  }>(),
  {
    finished: false,
  }
);
</script>

<template>
  <label
    :class="[
      $style.container,
      {
        [$style.active]: props.finished,
      },
    ]"
  >
    <p :class="$style.title">{{ props.title }}</p>
    <span :class="$style.checkbox"></span>
    <input type="checkbox" :class="$style.input" />
  </label>
</template>

<style module>
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  border-radius: 0.625rem;
  border: 1px solid var(--primary-100);
  padding: 0.75rem 1rem;
  overflow: hidden;
  cursor: pointer;
  transition: background-color 0.15s ease-in-out;
}

.container:hover {
  background-color: var(--primary-50);
}

.container.active .title {
  color: var(--primary-600);
}

.container.active .checkbox::after {
  content: "";
  width: 100%;
  height: 100%;
  background-color: var(--primary-600);
  border-radius: 50%;
}

.container:not(:last-child) {
  margin-bottom: 0.5rem;
}

.title {
  font-size: var(--fs-text-sm);
  font-weight: var(--fw-medium);
}

.checkbox {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 1.375rem;
  height: 1.375rem;
  border-radius: 50%;
  border: 2px solid var(--primary-600);
  overflow: hidden;
  padding: 2px;
}

.input {
  display: none;
}
</style>
