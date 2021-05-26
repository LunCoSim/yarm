import Vue from 'vue'
import Vuex from 'vuex'
import {TreeNode} from "@/entities/TreeNode";
import defaultStoreData from "@/store/defaultStoreData";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        treeData: defaultStoreData,
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
    actions: {},
    modules: {}
})
