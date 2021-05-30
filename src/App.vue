<template>
  <v-app id="inspire">
    <v-navigation-drawer
        v-model="drawer"
        app
    >
      <v-container class="grey lighten-5">
        <v-file-input
            truncate-length="15"
            @change="loadFile"
        ></v-file-input>
      </v-container>

      <v-treeview
          activatable
          :items="this.$store.state.treeData"
          @update:active="selectNode"
      ></v-treeview>

    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container class="grey lighten-5">
        <v-row no-gutters>
          <v-col
              key="2"
              cols="12"
          >
            <v-card
                class="pa-2"
                outlined
                tile
            >
              <Editor :activeNode="activeNode"/>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

    </v-main>
  </v-app>
</template>

<script>
import "yreqif/tests/test_reqif"; //Demonstation import of reqif. Check web console for output

import Editor from "@/components/Editor";
import {findTreeNodeById} from "@/utils/findTreeNodeById";



export default {
  components: {Editor},
  data: () => {
    return ({
      drawer: true,
      activeNode: null,
    })
  },
  mounted() {
    this.$store.commit('restoreTree')
    this.activeNode = this.$store.state.treeData[0];
  },
  methods: {
    selectNode(id) {
      this.activeNode = findTreeNodeById(id, {children: this.$store.state.treeData})
    },
    loadFile(files) {
      var reader = new FileReader();
      const commit = this.$store.commit;
      reader.onload = function(){
        var text = reader.result;
        commit('updateTree', JSON.parse(text))
      };
      reader.readAsText(files);
    }
  }
}

</script>
