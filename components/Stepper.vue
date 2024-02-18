<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    currentStep: number;
    totalSteps: number;
    nextText?: string;
    confirmText?: string;
    onNextStep: () => void;
    onSkipStep: () => void;
  }>(),
  {
    nextText: "Next",
    confirmText: "Get started",
  }
);

const buttonText = computed(() =>
  props.currentStep === props.totalSteps - 1
    ? props.confirmText
    : props.nextText
);
</script>

<template>
  <div :class="$style['stepper-container']">
    <div :class="$style['stepper-header']">
      <div :class="$style['stepper-dots']">
        <Dots
          v-for="(_, index) in props.totalSteps"
          :key="index"
          :size="10"
          :color="
            currentStep === index ? 'var(--primary-600)' : 'var(--primary-100)'
          "
        />
      </div>
      <Button variant="text-only" @click="$props.onSkipStep">skip</Button>
    </div>
    <div :class="$style['stepper-content']">
      <slot></slot>
    </div>
    <div :class="$style['stepper-footer']">
      <Button @click="props.onNextStep">{{ buttonText }}</Button>
    </div>
  </div>
</template>

<style module>
.stepper-container {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  height: 100%;
}

.stepper-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.stepper-dots {
  display: flex;
  align-items: center;
  gap: 0.375rem;
}

.stepper-content {
  flex-grow: 1;
}

.stepper-footer {
  margin-bottom: 1rem;
}
</style>
