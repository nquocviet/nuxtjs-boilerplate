<script lang="ts" setup>
defineProps<{
  icon?: string;
}>();

defineOptions({
  inheritAttrs: false,
});

const model = defineModel();
</script>

<template>
  <div :class="$style.wrapper">
    <span :class="$style.icon" v-if="icon">
      <Icon :name="icon" size="22" color="var(--white)" />
    </span>
    <input :class="$style.input" v-model="model" v-bind="$attrs" />
  </div>
</template>

<style module>
.wrapper {
  display: flex;
  align-items: stretch;
  width: 100%;
  height: 3rem;
  border: 1px solid var(--gray-300);
  border-radius: 0.625rem;
  overflow: hidden;
  transition: border-color 0.15s ease-in-out;
}

.wrapper:focus-within {
  border-color: var(--primary-600);
}

.icon {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 3.5rem;
  height: 3rem;
  background-color: var(--primary-600);
}

.input {
  width: 100%;
  border: none;
  outline: none;
  padding: 0.5rem 1rem;
}

.input::placeholder {
  color: var(--gray-400);
}
</style>
