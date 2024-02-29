<style>
.one-size-container {
  font-family: "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
  background: #f6f6f6;
  text-align: center;
}

h1 {
  color: #2c3e50;
  font-size: 40px;
}

p {
  padding: 0 15px;
  font-size: 20px;
  line-height: 1.6;
}

a {
  text-decoration: none;
  color: #34495e;
}
</style>

<template>
  <div id="app">
    <OneSizeContainer :width="375" :height="667" :maxRatio="1.1">
      <p>vue3适配</p>
      <h1>One Size</h1>
      <p>
        One size fits on all screens.
        <br />
        <a href="https://github.com/ArvinChen9539/vue3-one-size">Github</a>
      </p>
    </OneSizeContainer>
  </div>
</template>

<script>
import OneSize from "../src";

export default {
  components: {
    OneSizeContainer: OneSize,
  },
};
</script>
