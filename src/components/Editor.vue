<template>
  <div id="editorjs"></div>
</template>

<script lang="js">
import { TreeNode } from "@/entities/TreeNode";

import EditorJS, { API, ToolConstructable } from "@editorjs/editorjs";

import Header from '@editorjs/header';

import Vue from "vue";

const _editor = {};

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
    activeNode: function(newVal, oldVal) {
      if(this.editor.blocks) {
        this.editor.blocks.clear();

        if(newVal) {
          if(newVal.name) {
            this.editor.blocks.insert("header", {
              text: newVal.name,
              level: 2
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
        
      }
    },
  },
  mounted() {
    this.editor = new EditorJS({
      holder: "editorjs",
      tools: {
        header: Header,
      },
      data: {
        blocks: [
          {
            type: "header",
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
