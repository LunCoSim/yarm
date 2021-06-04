<template>
    <v-treeview
        activatable
        :items="this.$store.state.treeData"
        @update:active="selectNode"
    >
        <template slot="label" slot-scope="{ item }">
            <a @click="selectNode(item)">{{ item.name }}</a>
        </template>
    </v-treeview>
</template>

<script lang="ts">
import Vue from "vue";

import { findTreeNodeById } from "@/utils/findTreeNodeById";

const _activeNode: any = {};

export default Vue.extend({
    name: "TreeView",
    props: {
       
    },
    data: () => {
        return ({
            drawer: true,
            activeNode: _activeNode,
        });
    },
    watch: {
        
    },
    mounted() {
        console.log('asdkaksldj');
    },
    methods: {
        selectNode(id: string | any) {
            const _ids = id?.id ? [id.id] : id;

            this.activeNode = findTreeNodeById(_ids[0], this.$store.state.treeData);

            this.$emit("nodeActivated", this.activeNode);
        },
    }
})
</script>

<style scoped>

</style>