export default defineNuxtRouteMiddleware((to, from) => {
  const isAuthenticated = () => true;
  if (isAuthenticated() === false) {
    return navigateTo("/login");
  }
});
