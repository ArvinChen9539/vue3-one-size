<template lang="pug">
  .one-size-container(:style="style")
    slot
</template>

<script>
import numeral from "numeral";

export default {
  props: {
    width: {
      type: Number,
      default: 375,
    },
    height: {
      type: Number,
      default: 603,
    },
    maxRatio: {
      type: Number,
      default: 1,
    },
    resize: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      style: this.getStyle(),
    };
  },
  mounted() {
    window.addEventListener("resize", () => {
      if (this.resize) {
        this.style = this.getStyle();
      }
    });
  },
  methods: {
    getStyle() {
      const { width, height, maxRatio } = this;
      const windowSize = {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
      };
      let ratioX = numeral(windowSize.width).divide(width).value();
      let ratioY = numeral(windowSize.height).divide(height).value();
      let ratio = ratioX < ratioY ? ratioX : ratioY;
      if (ratio > maxRatio) ratio = maxRatio;
      let left = numeral(windowSize.width)
        .subtract(numeral(width).multiply(ratio).value())
        .divide(2)
        .value();
      let top = numeral(windowSize.height)
        .subtract(numeral(height).multiply(ratio).value())
        .divide(2)
        .value();
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
    },
  },
};
</script>
