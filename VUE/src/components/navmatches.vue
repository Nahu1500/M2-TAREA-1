<template>
  <span>
    <v-navigation-drawer app v-model="drawer" class="orange accent-4" dark disable-resize-watcher>
      <v-list>
        <template v-for="(item, index) in items">
          <v-list-tile :key="index">
            <v-list-tile-content>
              {{item.title}}
            </v-list-tile-content>
          </v-list-tile>
          <v-divider :key="`divider-${index}`"></v-divider>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar id="container">
      <v-toolbar-side-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-spacer class="hidden-md-and-up"></v-spacer>
      <v-btn flat class="hidden-sm-and-down" to='#' color="deep-orange accent-3">DATE</v-btn>
      <v-btn flat class="hidden-sm-and-down" to='#' color="deep-orange accent-3">TEAM</v-btn>
      <v-btn flat class="hidden-sm-and-down" to='#' color="deep-orange accent-3">POSITION</v-btn>
      <v-btn flat class="hidden-sm-and-down" to='#' color="deep-orange accent-3">STATISTICS</v-btn>
    </v-toolbar>
    <hola id="chau"></hola>
  </span>
</template>
<script>
import hola from '../components/hola'
export default {
  name: 'navmatches',
  data() {
    return {
      drawer: false,
      items: [
        {title: 'DATE'},
        {title: 'TEAM'},
        {title: 'POSITION'},
        {title: 'STATISTICS'}
      ]
    };
  },
  components:{
    hola
  }
};
</script>

<style scoped="">
#container{
  display: flex;
  justify-content: center;
}
#chau{

}
</style>
