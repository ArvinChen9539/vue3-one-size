# vue3-one-size
[![NPM version](https://img.shields.io/npm/v/vue3-one-size.svg?style=flat)](https://npmjs.com/package/vue-one-size) [![NPM downloads](https://img.shields.io/npm/dm/vue3-one-size.svg?style=flat)](https://npmjs.com/package/vue-one-size)

基于[vue-one-size](https://github.com/ROYL-Design/vue-one-size) 做 vue3重构

[Demo](https://ArvinChen9539.github.io/vue3-one-size/)

## Install

```bash
yarn add vue3-one-size
```

## Usage

use it locally:

```vue
<template>
  <OneSizeContainer>
    ...
  </OneSizeContainer>
</template>

<script>
import OneSize from 'vue-one-size'

export default {
  ...
  components: {
    OneSizeContainer: OneSize.container
  }
}
</script>
```

## Props

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Default</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>width</td>
      <td>375</td>
      <td>Width of the page.</td>
    </tr>
    <tr>
      <td>height</td>
      <td>603</td>
      <td>Height of the page.</td>
    </tr>
    <tr>
      <td>maxRatio</td>
      <td>1</td>
      <td>The maximal ratio to scale up.</td>
    </tr>
    <tr>
      <td>resize</td>
      <td>true</td>
      <td>Whether to resize when window resized.</td>
    </tr>
  </tbody>
</table>
