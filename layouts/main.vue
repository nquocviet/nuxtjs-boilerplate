<script lang="ts" setup>
import DefaultLayout from "~/layouts/default.vue";
</script>

<template>
  <DefaultLayout>
    <div :class="$style.container">
      <div :class="$style.content">
        <slot></slot>
      </div>
    </div>
    <template v-slot:footer>
      <Navbar />
    </template>
  </DefaultLayout>
</template>

<style module>
.container {
  padding-bottom: 1.5rem;
}
</style>
