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
      >
        <template slot="label" slot-scope="{ item }">
          <a @click="selectNode(item)">{{ item.name }}</a>
        </template>
      </v-treeview>

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
              <Editor :activeNode="activeNode" @input="onChangeNode"/>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

    </v-main>
  </v-app>
</template>


<script lang="ts">
import Vue from 'vue'

import Editor from "@/components/Editor.vue";

import {findTreeNodeById} from "@/utils/findTreeNodeById";

const _activeNode: any = null

export default Vue.extend({
  name: 'App.vue',
  components: {Editor},
  data: () => {
    return ({
      drawer: true,
      activeNode: _activeNode,
    })
  },
  mounted() {
    this.$store.commit('restoreTree')
  },
  methods: {
    selectNode(id: string | any) {
      const _ids = id?.id ? [id.id] : id;
      this.activeNode = findTreeNodeById(_ids[0], {children: this.$store.state.treeData, id: 0, name: '', desc: ''})
    },
    loadFile(files: any) {
      const reader = new FileReader();
      const commit = this.$store.commit;
      reader.onload = function () {
        commit('updateTree', reader.result);
      };
      reader.readAsText(files);
    },
    onChangeNode(desc: string) {
      if (this.activeNode) {
        console.log(desc)
        this.activeNode.desc = desc;
        const tree = JSON.parse(JSON.stringify(this.$store.state.treeData));
        this.$store.commit('updateStorage', tree);
      }
    }
  }
})
</script>
