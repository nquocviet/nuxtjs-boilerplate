<template>
  <NuxtLink :class="$style.link">
    <slot></slot>
  </NuxtLink>
</template>

<style module>
.link {
  text-decoration: none;
  color: var(--primary-600);
}

.link:focus {
  outline-color: var(--primary-600);
}
</style>
