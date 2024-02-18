<script lang="ts" setup>
import { ROUTES } from "~/constants/routes";

setTimeout(() => navigateTo(ROUTES.ONBOARDING), 3000);
</script>

<template>
  <div :class="$style['splash-container']">
    <Logo type="full" />
  </div>
</template>

<style module>
.splash-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
