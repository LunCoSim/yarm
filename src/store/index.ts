import Vue from 'vue'
import Vuex from 'vuex'

import {TreeNode} from "@/entities/TreeNode";

//----------------
//Some ReqIF magic

import {getTreeNodes} from "@/utils/yReqIFVisualiser";

import { yparse, extract } from "yreqif/src/yreqif/yparser";

import { sample_xml, sample_xml1, sample_xml2 } from "yreqif/tests/sample_xml";

const data = yparse(sample_xml1); //sample_xml2 is not supported yet
const yreqif = extract(data);

//----------------

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    treeData: getTreeNodes(yreqif)
  },
  mutations: {
    selectNode(state, node) {
      console.log(node);
    },
    updateTree(state, text: string) {
      const data = yparse(text); //sample_xml2 is not supported yet
      const yreqif = extract(data);
      const nodes = getTreeNodes(yreqif);

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
