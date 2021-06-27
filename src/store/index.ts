import Vue from 'vue'
import Vuex from 'vuex'

import { TreeNode } from "@/entities/TreeNode";
import defaultStoreData from "@/store/defaultStoreData";

//----------------
//Some ReqIF magic

import { getTreeNodes } from "@/utils/yReqIFVisualiser";

import { yparse, importXML, exportXML  } from "yreqif/src/yreqif/yparser";


//----------------

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        treeData: defaultStoreData,
    },
    mutations: {
        selectNode(state, node) {
            console.log(node);
        },
        updateTree(state, text) {
            const data = yparse(text); //sample_xml2 is not supported yet
            const yreqif = importXML(data);
            const nodes = getTreeNodes(yreqif);

            Vue.set(state, 'treeData', nodes);
            localStorage.setItem('reqif_file', exportXML(yreqif));
        },
        updateStorage(state, nodes: TreeNode[]) {
            console.error('updateStorage not implemented');
            // localStorage.setItem('items', JSON.stringify(nodes));
            // localStorage.setItem('reqif_file', exportXML(yreqif));
        },
        restoreTree(state) {
            if (localStorage.getItem('reqif_file')) {
                const yreqif = importXML(localStorage.getItem('reqif_file') as string);
                const nodes = getTreeNodes(yreqif);

                Vue.set(state, 'treeData', nodes);
            }
        }
    },
    actions: {},
    modules: {}
})
