<template>
    <v-container class="grey lighten-5">
        <v-file-input
            truncate-length="15"
            @change="loadFile"
        ></v-file-input>
    </v-container>
</template>

<script lang="ts">
import Vue from "vue";

// const _editor: any = {}

export default Vue.extend({
  name: "LoadFile",
  props: {
    
  },
  data: () => ({

  }),
  watch: {
    
  },
  mounted() {
    console.log('Mounted LoadFile.vue');
  },
  methods: {
    loadFile(file: Blob) {
      const reader = new FileReader();
      const commit = this.$store.commit;
      reader.onload = function () {
        commit('updateTree', reader.result);
      };
      reader.readAsText(file);
    },
  }
})
</script>

<style scoped>

</style>
