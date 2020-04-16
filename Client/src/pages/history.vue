<template>
  <div class="container">
      <line-chart class="test" :data="{ '2017-05-13': 2, '2017-05-14': 5, '2017-05-15': 5, '2017-05-16': 20, '2017-05-17': 5, '2017-05-18': 5, '2017-05-19': 5 }"></line-chart>
  </div>
</template>


<style scoped>
.test{
    max-width: 600px !important;
}
</style>