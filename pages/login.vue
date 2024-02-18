<script lang="ts" setup>
import { ROUTES } from "~/constants/routes";

const form = ref({
  email: "",
  password: "",
});
</script>

<template>
  <div :class="$style.container">
    <Logo />
    <h1 :class="$style.title">Login to your account</h1>
    <form @submit.prevent :class="$style.form">
      <Input
        v-model="form.email"
        type="email"
        icon="basil:envelope-solid"
        placeholder="Email"
      />
      <div :class="$style['input-wrapper']">
        <Input
          v-model="form.password"
          type="password"
          icon="uis:lock-alt"
          placeholder="Password"
        />
        <HyperLink :class="$style['support-text']">
          Forgot password?
        </HyperLink>
      </div>
      <Button type="submit">Login</Button>
      <DividerText text="Or login with" />
      <SocialMedia />
      <p :class="$style['support-text']">
        Don&apos;t have an account?
        <HyperLink :to="ROUTES.REGISTER">Sign up</HyperLink>
      </p>
    </form>
  </div>
</template>

<style module>
@import url("~/assets/css/auth.css");

.input-wrapper {
  text-align: right;
}
</style>
