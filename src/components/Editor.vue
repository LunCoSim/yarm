<template>
  <div id="editorjs"></div>
</template>

<script>
import EditorJS from '@editorjs/editorjs';

export default {
  name: "Editor",
  data: () => ({
    editor: {},
  }),
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
