<script lang="ts" setup>
const currentTime = ref("");
const intervalId = ref();

const updateTime = () => {
  let date = new Date();
  let hh: string | number = date.getHours();
  let mm: string | number = date.getMinutes();

  if (hh === 0) {
    hh = 12;
  }

  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;

  currentTime.value = `${hh}:${mm}`;
};

updateTime();

onMounted(() => {
  intervalId.value = setInterval(updateTime, 1000);
});

onUnmounted(() => {
  clearInterval(intervalId.value);
});
</script>

<template>
  <div :class="$style['phone-container']">
    <header :class="$style['phone-header']">
      <span :class="$style['phone-timer']">{{ currentTime }}</span>
      <div :class="$style['phone-widget']">
        <Icon name="ph:cell-signal-full-bold" size="18" />
        <Icon name="ph:wifi-high-bold" size="18" />
        <Icon name="ph:battery-full-fill" size="18" />
      </div>
    </header>
    <main :class="$style['phone-content']">
      <slot></slot>
    </main>
    <slot name="footer"></slot>
  </div>
</template>

<style module>
.phone-container {
  --p-width: 375px;
  --p-height: 667px;
  --p-radius: 32px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  max-width: var(--p-width);
  height: var(--p-height);
  background-color: var(--white);
  border-radius: var(--p-radius);
  box-shadow: var(--shadow-lg);
  padding: 1rem;
  overflow: hidden;
}

.phone-header {
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
}

.phone-timer {
  font-size: var(--fs-text-sm);
  font-weight: var(--fw-semibold);
}

.phone-widget {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.phone-content {
  flex-grow: 1;
  overflow-x: hidden;
  overflow-y: auto;
  margin-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-left: -1rem;
  margin-right: -1rem;
}
</style>
