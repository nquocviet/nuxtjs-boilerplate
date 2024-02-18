<script lang="ts" setup>
const props = defineProps<{
  defaultValue?: string;
  digitCount: number;
}>();
const emit = defineEmits(["update:otp"]);

const digits: Array<string | null> = reactive([]);
const otpCont = ref<HTMLDivElement | null>(null);

if (props.defaultValue && props.defaultValue.length === props.digitCount) {
  for (let i = 0; i < props.digitCount; i++) {
    digits[i] = props.defaultValue.charAt(i);
  }
} else {
  for (let i = 0; i < props.digitCount; i++) {
    digits[i] = null;
  }
}

const isDigitsFull = function () {
  for (const elem of digits) {
    if (elem == null || elem == undefined) {
      return false;
    }
  }

  return true;
};

const handleKeyDown = function (event: KeyboardEvent, index: number) {
  if (
    event.key !== "Tab" &&
    event.key !== "ArrowRight" &&
    event.key !== "ArrowLeft"
  ) {
    event.preventDefault();
  }

  if (!otpCont.value) return;

  if (event.key === "Backspace") {
    digits[index] = null;

    if (index != 0) {
      (otpCont.value.children[index - 1] as HTMLInputElement).focus();
    }

    return;
  }

  if (new RegExp("^([0-9])$").test(event.key) && !isDigitsFull()) {
    digits[index] = event.key;

    if (index != props.digitCount - 1) {
      (otpCont.value.children[index + 1] as HTMLInputElement).focus();
    }
  }

  if (isDigitsFull()) {
    emit("update:otp", digits.join(""));
  }
};
</script>

<template>
  <div ref="otpCont">
    <input
      type="text"
      :class="$style['digit-box']"
      v-for="(_, index) in digits"
      :key="index"
      v-model="digits[index]"
      :autofocus="index === 0"
      @keydown="handleKeyDown($event, index)"
      maxlength="1"
    />
  </div>
</template>

<style module>
.digit-box {
  height: 4rem;
  width: 3.125rem;
  border: none;
  border-bottom: 3.5px solid var(--primary-500);
  display: inline-block;
  margin: 5px;
  text-align: center;
  font-size: var(--fs-display-md);
  font-weight: var(--fw-semibold);
  outline: none;
}
</style>
