<template>
  <v-app id="inspire">
    <v-navigation-drawer
        v-model="drawer"
        app
    >
      
      <LoadFile />

      <TreeView @nodeActivated="onNodeActivated" />

    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Yarm</v-toolbar-title>
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
import LoadFile from "@/components/LoadFile.vue";
import TreeView from "@/components/TreeView.vue";

import { TreeNode } from '@/entities/TreeNode';

const _activeNode: any = null;

export default Vue.extend({
  name: 'App.vue',
  components: {
        Editor, 
        LoadFile,
        TreeView
    },
  data: () => {
    return {
      drawer: true,
      activeNode: _activeNode,
    }
  },
  mounted() {
    this.$store.commit('restoreTree')
  },
  methods: {
    onNodeActivated(newNode: TreeNode) {
      this.activeNode = newNode;
    },
    onChangeNode(desc: string) {
      console.log(desc);
      
        //ToDo: Implement checks and do save
    //   if(this.activeNode) {
    //     console.log(desc)
    //     this.activeNode.desc = desc;
    //     const tree = JSON.parse(JSON.stringify(this.$store.state.treeData));
    //     this.$store.commit('updateStorage', tree);
    //   }
    }
  }
})
</script>
