<template>
  <div id="editorjs"></div>
</template>

<script lang="ts">
import EditorJS from '@editorjs/editorjs';
import Vue from "vue";

export default Vue.extend({
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
            "text": "Please select node in menu."
          }
        }]
      },
      onChange: this.onChange,
    })
  },
  methods: {
    async onChange() {
      const res = await this.editor.save()
      this.$emit('input', res.blocks);
    }
  }
})
</script>

<style scoped>

</style>
