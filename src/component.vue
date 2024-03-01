<script setup lang="ts">
import numeral from "numeral";
import { onMounted, onUnmounted, ref } from "vue";

const props = withDefaults(
  defineProps<{
    width?: number;
    height?: number;
    maxRatio?: number;
    resize?: boolean;
  }>(),
  {
    width: 375,
    height: 603,
    maxRatio: 1,
    resize: true,
  },
);

const style = ref(getStyle());

function resize() {
  if (props.resize) {
    style.value = getStyle();
  }
}

function getStyle() {
  const { width, height, maxRatio } = props;
  const windowSize = {
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  };
  let ratioX = numeral(windowSize.width).divide(width).value() as number;
  let ratioY = numeral(windowSize.height).divide(height).value() as number;
  let ratio = ratioX < ratioY ? ratioX : ratioY;
  if (ratio > maxRatio) ratio = maxRatio;
  let left = numeral(windowSize.width)
    .subtract(numeral(width).multiply(ratio).value())
    .divide(2)
    .value() as number;
  let top = numeral(windowSize.height)
    .subtract(numeral(height).multiply(ratio).value())
    .divide(2)
    .value() as number;
  if (left < 0) left = 0;
  if (top < 0) top = 0;
  return {
    position: "absolute",
    "transform-origin": "left top",
    width: `${width}px`,
    height: `${height}px`,
    transform: `scale(${ratio},${ratio})`,
    left: `${left}px`,
    top: `${top}px`,
  };
}

onMounted(() => {
  window.addEventListener("resize", resize);
});

onUnmounted(() => {
  window.removeEventListener("resize", resize);
});
</script>

<template lang="pug">
  .one-size-container(:style="style")
    slot
</template>
