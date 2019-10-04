<template>
  <div id="app">
    <h2>{{ title }}</h2>
    <app-counter></app-counter>
    <app-second-counter></app-second-counter>
    <hr>
    <app-actions></app-actions>
  </div>
</template>

<script>
import Counter from './Counter'
import Actions from './Acrtions'
import SecondCounter from './SeconCounter'
export default {
  // name: 'app',
  components: {
    appCounter: Counter,
    appActions: Actions,
    appSecondCounter: SecondCounter
  },
  computed: {
    title(){
      return this.$store.getters.title
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
