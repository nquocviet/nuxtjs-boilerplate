<script lang="ts" setup>
import { ROUTES } from "~/constants/routes";

const form = ref({
  username: "",
  email: "",
  password: "",
});
</script>

<template>
  <div :class="$style.container">
    <Logo />
    <h1 :class="$style.title">Create your account</h1>
    <form @submit.prevent :class="$style.form">
      <Input
        v-model="form.username"
        type="text"
        icon="typcn:user"
        placeholder="Username"
      />
      <Input
        v-model="form.email"
        type="email"
        icon="basil:envelope-solid"
        placeholder="Email"
      />
      <Input
        v-model="form.password"
        type="password"
        icon="uis:lock-alt"
        placeholder="Password"
      />
      <Button type="submit">Register</Button>
      <DividerText text="Or register with" />
      <SocialMedia />
      <p :class="$style['support-text']">
        Already have an account?
        <HyperLink :to="ROUTES.LOGIN">Sign in</HyperLink>
      </p>
    </form>
  </div>
</template>

<style module>
@import url("~/assets/css/auth.css");
</style>
