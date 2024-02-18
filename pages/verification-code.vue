<script lang="ts" setup>
const otpCode = ref("");
</script>

<template>
  <div :class="$style.container">
    <Logo />
    <h1 :class="$style.title">Verify account</h1>
    <div :class="$style.content">
      <NuxtImg src="/images/verify-account.svg" width="180" />
      <p :class="$style['support-text']">
        Please enter the verification number<br />we send to your email
      </p>
      <div>
        <OtpInput :digit-count="4" @update:otp="otpCode = $event" />
        <p :class="$style['support-text']">
          Don&apos;t receive a code?
          <Button variant="text-only">Resend</Button>
        </p>
      </div>
      <Button type="button" role="link" class="mt-auto">Confirm</Button>
    </div>
  </div>
</template>

<style module>
@import url("~/assets/css/auth.css");
</style>
