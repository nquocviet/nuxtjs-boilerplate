<script lang="ts" setup>
import { ROUTES } from "~/constants/routes";

const steps = ref([
  {
    image: "/images/time-management.svg",
    title: "Easy Time Management",
    description:
      "With management based on priority and daily tasks, it will give you convenience in managing and determining the tasks that must be done first.",
  },
  {
    image: "/images/work-effectiveness.svg",
    title: "Increase Work Effectiveness",
    description:
      "Time management and the determination of more important tasks will give your job statistics better and always improve.",
  },
  {
    image: "/images/reminder-notification.svg",
    title: "Reminder Notification",
    description:
      "The advantage of this application is that it also provides reminders for you so you don't forget to keep doing your assignments well and according to the time you have set.",
  },
]);
const currentStep = ref(0);
const step = computed(() => steps.value[currentStep.value]);

const onSkipStep = () => {
  navigateTo(ROUTES.LOGIN);
};

const onNextStep = () => {
  if (currentStep.value === steps.value.length - 1) {
    onSkipStep();
    return;
  }
  currentStep.value++;
};
</script>

<template>
  <Stepper
    :currentStep="currentStep"
    :totalSteps="steps.length"
    :onNextStep="onNextStep"
    :onSkipStep="onSkipStep"
  >
    <div :class="$style.container">
      <NuxtImg :src="step.image" width="260" />
      <h1 :class="$style.title">{{ step.title }}</h1>
      <p :class="$style.description">{{ step.description }}</p>
    </div>
  </Stepper>
</template>

<style module>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 3rem;
  height: 100%;
}

.title {
  font-size: var(--fs-text-lg);
  font-weight: var(--fw-semibold);
  margin-top: 1.5rem;
  margin-bottom: 1rem;
}

.description {
  font-size: var(--fs-text-sm);
}
</style>
