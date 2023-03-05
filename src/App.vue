<template>
  <div class="asd">
    <div class="wrapper">
    
    <router-view/>
  </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/variables.scss';

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Comfortaa';
  background: #152A3D;
  color: #2c3e50;
}

.wrapper {
  width: 900px;
  margin: 0 auto;
  padding-top: 100px;
}
</style>
