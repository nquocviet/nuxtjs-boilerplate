<script lang="ts" setup>
withDefaults(
  defineProps<{
    variant?: "filled" | "outline" | "text-only";
    size?: "xs" | "sm" | "md";
    fluid?: boolean;
  }>(),
  {
    variant: "filled",
    size: "md",
    fluid: true,
  }
);
</script>

<template>
  <button
    :class="[
      $style.button,
      $style[`button-${$props.variant}`],
      $style[`button-${$props.size}`],
      fluid && $style['button-fluid'],
    ]"
  >
    <slot></slot>
  </button>
</template>

<style module>
.button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  font-weight: var(--fw-medium);
  border-radius: 0.625rem;
  border-width: 1px;
  border-style: solid;
  outline: none;
  cursor: pointer;
}

.button:focus {
  outline: 1px solid var(--primary-600);
  outline-offset: 3px;
}

.button-fluid {
  width: 100%;
}

.button-filled {
  border-color: var(--primary-600);
  background-color: var(--primary-600);
  color: var(--white);
}

.button-outline {
  border-color: var(--primary-600);
  background-color: var(--white);
  color: var(--primary-600);
}

.button-text-only {
  width: auto;
  height: auto;
  border: none;
  background-color: transparent;
  color: var(--primary-600);
  padding: 0.25rem;
}

.button-xs {
  height: 2.25rem;
  font-size: var(--fs-text-xs);
}

.button-sm {
  height: 3rem;
  font-size: var(--fs-text-xs);
}

.button-md {
  height: 3rem;
  font-size: var(--fs-text-sm);
}
</style>
