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
    })
  }
}
</script>

<style scoped>

</style>
