<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    type?: "default" | "full";
    width?: number;
  }>(),
  {
    type: "default",
    width: 300,
  }
);
const isDefault = computed(() => props.type === "default");
</script>

<template>
  <NuxtImg
    :src="isDefault ? '/images/logo.svg' : '/images/logo-full.svg'"
    :width="width"
    :class="{ [$style.logo]: !isDefault }"
  />
</template>

<style module>
.logo {
  transform: translateY(-50%);
}
</style>
