<script lang="ts" setup>
import { ROUTES } from "~/constants/routes";
</script>

<template>
  <div :class="$style.container">
    <Logo />
    <h1 :class="$style.title">Verify account</h1>
    <div :class="$style.content">
      <NuxtImg src="/images/verify-success.svg" width="240" />
      <p :class="$style['support-text']">
        Your Account has been<br />Verified Successfully!
      </p>
      <Button
        type="button"
        role="link"
        class="mt-auto"
        @click="$router.push(ROUTES.HOME)"
      >
        Go to Dashboard
      </Button>
    </div>
  </div>
</template>

<style module>
@import url("~/assets/css/auth.css");
</style>
