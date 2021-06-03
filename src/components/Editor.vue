<template>
  <div id="editorjs"></div>
</template>

<script lang="ts">
import EditorJS from '@editorjs/editorjs';
import Vue from "vue";

const _editor: any = {}

export default Vue.extend({
  name: "Editor",
  props: {
    activeNode: {
      type: Object,
    }
  },
  data: () => ({
    editor: {..._editor},
  }),
  watch: {
    activeNode: function (newVal, oldVal) {
      console.log('activeNode')
      if (this.editor.blocks && newVal) {
        this.editor.blocks.clear()
        if (typeof newVal.desc == 'string') {
          this.editor.blocks.insert('paragraph', {
            "text": newVal.desc
          })
        } else {
          const item = newVal.desc;
          if (item.length) {
            for (let i = 0; i < item.length; i++) {
              const _item = item[i];
              this.editor.blocks.insert(_item.type, {..._item.data})
            }
          } else {
            this.editor.blocks.insert(item.type, {...item})
          }
        }
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
