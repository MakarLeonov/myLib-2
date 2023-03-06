<template>
  <div>
    <div class="asd" @click="this.$store.commit('changePopupActive')"> Open popup </div>
    <div class="wrapper">
    
      <router-view/>
    </div>
    <popup />
  </div>
</template>

<script>
import popup from '@/components/popup.vue'

export default {
  components: {
    popup,
  }
}
</script>

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
