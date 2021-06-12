<template>
  <div id="editorjs"></div>
</template>

<script lang="ts">
import { TreeNode } from "@/entities/TreeNode";
import EditorJS from "@editorjs/editorjs";
import Vue from "vue";

const _editor: any = {};

export default Vue.extend({
  name: "Editor",
  props: {
    activeNode: {
      type: Object,
    },
  },
  data: () => ({
    editor: { ..._editor },
  }),
  watch: {
    activeNode: function(newVal: TreeNode, oldVal?: TreeNode) {
      console.log("activeNode");
      console.log(oldVal);
      console.log(newVal);

      if(this.editor.blocks && newVal) {
        this.editor.blocks.clear();
        
        if(newVal.name) {
          this.editor.blocks.insert("paragraph", {
            text: newVal.name,
          });
        }

        if(newVal.desc) {
          this.editor.blocks.insert("paragraph", {
            text: newVal.desc,
          });
        }

        for(let i in newVal.children) {
          this.editor.blocks.insert("paragraph", {
            text: newVal.children[i].name,
          });
        }
      }
    },
  },
  mounted() {
    this.editor = new EditorJS({
      holder: "editorjs",
      data: {
        blocks: [
          {
            type: "paragraph",
            data: {
              text: "Please select node in menu.",
            },
          },
        ],
      },
      onChange: this.onChange,
    });
  },
  methods: {
    async onChange() {
      const res = await this.editor.save();
      this.$emit("input", res.blocks);
    },
  },
});
</script>

<style scoped></style>
