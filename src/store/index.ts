import Vue from 'vue'
import Vuex from 'vuex'
import {TreeNode} from "@/entities/TreeNode";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    treeData: [
      {
        id: 1,
        name: 'Applications :',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad, cupiditate dolores ducimus ea earum, error, exercitationem molestias nostrum obcaecati optio perferendis perspiciatis porro qui quidem quod repellat sequi voluptas.',
        children: [
          { id: 2, name: 'Calendar : app',         desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad, cupiditate dolores ducimus ea earum, error, exercitationem molestias nostrum obcaecati optio perferendis perspiciatis porro qui quidem quod repellat sequi voluptas.',
          },
          { id: 3, name: 'Chrome : app',         desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad, cupiditate dolores ducimus ea earum, error, exercitationem molestias nostrum obcaecati optio perferendis perspiciatis porro qui quidem quod repellat sequi voluptas.',
          },
          { id: 4, name: 'Webstorm : app',         desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad, cupiditate dolores ducimus ea earum, error, exercitationem molestias nostrum obcaecati optio perferendis perspiciatis porro qui quidem quod repellat sequi voluptas.',
          },
        ],
      },
      {
        id: 5,
        name: 'Documents :',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad, cupiditate dolores ducimus ea earum, error, exercitationem molestias nostrum obcaecati optio perferendis perspiciatis porro qui quidem quod repellat sequi voluptas.',
        children: [
          {
            id: 6,
            name: 'vuetify :',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad, cupiditate dolores ducimus ea earum, error, exercitationem molestias nostrum obcaecati optio perferendis perspiciatis porro qui quidem quod repellat sequi voluptas.',
            children: [
              {
                id: 7,
                name: 'src :',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad, cupiditate dolores ducimus ea earum, error, exercitationem molestias nostrum obcaecati optio perferendis perspiciatis porro qui quidem quod repellat sequi voluptas.',
                children: [
                  { id: 8, name: 'index : ts',         desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad, cupiditate dolores ducimus ea earum, error, exercitationem molestias nostrum obcaecati optio perferendis perspiciatis porro qui quidem quod repellat sequi voluptas.',
                  },
                  { id: 9, name: 'bootstrap : ts',         desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad, cupiditate dolores ducimus ea earum, error, exercitationem molestias nostrum obcaecati optio perferendis perspiciatis porro qui quidem quod repellat sequi voluptas.',
                  },
                ],
              },
            ],
          },
          {
            id: 10,
            name: 'material2 :',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad, cupiditate dolores ducimus ea earum, error, exercitationem molestias nostrum obcaecati optio perferendis perspiciatis porro qui quidem quod repellat sequi voluptas.',
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
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad, cupiditate dolores ducimus ea earum, error, exercitationem molestias nostrum obcaecati optio perferendis perspiciatis porro qui quidem quod repellat sequi voluptas.',
        children: [
          { id: 16, name: 'October : pdf' },
          { id: 17, name: 'November : pdf' },
          { id: 18, name: 'Tutorial : html' },
        ],
      },
      {
        id: 19,
        name: 'Videos :',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad, cupiditate dolores ducimus ea earum, error, exercitationem molestias nostrum obcaecati optio perferendis perspiciatis porro qui quidem quod repellat sequi voluptas.',
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
    ]
  },
  mutations: {
    selectNode(state, node) {
      console.log(node);
    },
    updateTree(state, nodes: TreeNode[]) {
      Vue.set(state, 'treeData', nodes);
      localStorage.setItem('items', JSON.stringify(nodes));
    },
    restoreTree(state) {
      if (localStorage.getItem('items')) {
        Vue.set(state, 'treeData', JSON.parse(localStorage.getItem('items') as string));
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
