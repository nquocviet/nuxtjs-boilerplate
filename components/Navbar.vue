<script lang="ts" setup>
import { ROUTES } from "~/constants/routes";

const navLinks = ref([
  {
    link: ROUTES.HOME,
    icon: "ph:house-fill",
    label: "Home",
  },
  {
    link: ROUTES.CALENDAR,
    icon: "eva:calendar-fill",
    label: "Calendar",
  },
  {
    link: ROUTES.PROFILE,
    icon: "typcn:user",
    label: "Profile",
  },
]);
</script>

<template>
  <nav :class="$style.nav">
    <NuxtLink
      v-for="{ link, icon, label } in navLinks"
      :key="link"
      :to="link"
      :aria-label="label"
      :class="$style['nav-item']"
    >
      <Icon :name="icon" size="32" />
    </NuxtLink>
  </nav>
</template>

<style module>
.nav {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: var(--white);
  margin-left: -1rem;
  margin-right: -1rem;
  margin-bottom: -1rem;
  padding-top: 0.25rem;
  padding-bottom: 0.5rem;
  box-shadow: 0px -1px 20px rgb(0, 110, 233, 10%);
}

.nav-item {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 3.5rem;
  height: 3.5rem;
  color: var(--primary-300);
}
</style>
