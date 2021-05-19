<template>
  <v-app id="inspire">
    <v-navigation-drawer
        v-model="drawer"
        app
    >
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container class="grey lighten-5">
        <v-row no-gutters>
          <v-col
              cols="12"
              sm="3"
          >
            <v-file-input
                truncate-length="15"
            ></v-file-input>
          </v-col>
          <v-col
              cols="12"
              sm="6"
          >
          </v-col>
        </v-row>
      </v-container>
      <v-container class="grey lighten-5">
        <v-row no-gutters>
          <v-col
              key="1"
              cols="12"
              sm="4"
          >
            <v-card
                class="pa-2"
                outlined
                tile
            >
              <v-treeview
                  activatable
                  :items="this.$store.state.treeData"
                  @update:active="selectNode"
              ></v-treeview>
            </v-card>
          </v-col>
          <v-col
              key="2"
              cols="12"
              sm="8"
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
import Editor from "@/components/Editor";
import {findTreeNodeById} from "@/utils/findTreeNodeById";

export default {
  components: {Editor},
  data: () => {
    return ({
      drawer: false,
      activeNode: null,
    })
  },
  mounted() {
    this.activeNode = this.$store.state.treeData[0];
  },
  methods: {
    selectNode(id) {
      this.activeNode = findTreeNodeById(id, {children: this.$store.state.treeData})
    }
  }
}

</script>
