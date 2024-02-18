<script lang="ts" setup>
const socials = ref([
  {
    icon: "/images/google.svg",
  },
  {
    icon: "/images/facebook.svg",
  },
  {
    icon: "/images/twitter.svg",
  },
]);
</script>

<template>
  <div :class="$style.wrapper">
    <button v-for="({ icon }, key) in socials" :class="$style.item" :key="key">
      <NuxtImg :src="icon" :class="$style.icon" />
    </button>
  </div>
</template>

<style module>
.wrapper {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.item {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 4.375rem;
  height: 4.375rem;
  background-color: var(--white);
  border: 1px solid var(--primary-100);
  border-radius: 0.625rem;
  cursor: pointer;
  outline: none;
}

.item:hover {
  box-shadow: var(--shadow-md);
}

.item:focus {
  border-color: var(--primary-400);
}

.icon {
  width: 1.875rem;
  height: 1.875rem;
}
</style>
