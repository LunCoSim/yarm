<template>
  <div id="editorjs"></div>
</template>

<script>
import EditorJS from '@editorjs/editorjs';
import {TreeNode} from '@/entities/TreeNode';

export default {
  name: "Editor",
  props: {
    activeNode: {
      type: Object,
    }
  },
  data: () => ({
    editor: {},
  }),
  watch: {
    activeNode: function (newVal, oldVal) {
      if (this.editor.blocks && newVal) {
        this.editor.blocks.clear()
        this.editor.blocks.insert('paragraph', {
          "text": newVal.desc
        })
      }
    }
  },
  mounted() {
    this.editor = new EditorJS({
      holder: 'editorjs',
      data: {
        blocks: [{
          "type": "paragraph",
          "data": {
            "text": "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text. Source code of the page contains the example of connection and configuration."
          }
        }]
      }
    })


  }
}
</script>

<style scoped>

</style>
