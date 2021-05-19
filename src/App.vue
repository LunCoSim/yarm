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
                  :items="items"
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
              <Editor />
            </v-card>
          </v-col>
        </v-row>
      </v-container>

    </v-main>
  </v-app>
</template>

<script>
import Editor from "@/components/Editor";
export default {
  components: {Editor},
  data: () => {
    return ({
      drawer: false,
      items: [
        {
          id: 1,
          name: 'Applications :',
          children: [
            { id: 2, name: 'Calendar : app' },
            { id: 3, name: 'Chrome : app' },
            { id: 4, name: 'Webstorm : app' },
          ],
        },
        {
          id: 5,
          name: 'Documents :',
          children: [
            {
              id: 6,
              name: 'vuetify :',
              children: [
                {
                  id: 7,
                  name: 'src :',
                  children: [
                    { id: 8, name: 'index : ts' },
                    { id: 9, name: 'bootstrap : ts' },
                  ],
                },
              ],
            },
            {
              id: 10,
              name: 'material2 :',
              children: [
                {
                  id: 11,
                  name: 'src :',
                  children: [
                    { id: 12, name: 'v-btn : ts' },
                    { id: 13, name: 'v-card : ts' },
                    { id: 14, name: 'v-window : ts' },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 15,
          name: 'Downloads :',
          children: [
            { id: 16, name: 'October : pdf' },
            { id: 17, name: 'November : pdf' },
            { id: 18, name: 'Tutorial : html' },
          ],
        },
        {
          id: 19,
          name: 'Videos :',
          children: [
            {
              id: 20,
              name: 'Tutorials :',
              children: [
                { id: 21, name: 'Basic layouts : mp4' },
                { id: 22, name: 'Advanced techniques : mp4' },
                { id: 23, name: 'All about app : dir' },
              ],
            },
            { id: 24, name: 'Intro : mov' },
            { id: 25, name: 'Conference introduction : avi' },
          ],
        },
      ],
    })
  },
}
</script>
