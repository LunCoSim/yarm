<template>
  <div id="editorjs"></div>
</template>

<script lang="js">
import { TreeNode } from "@/entities/TreeNode";

import EditorJS, { API, ToolConstructable } from "@editorjs/editorjs";

import Header from '@editorjs/header';

import Vue from "vue";

const _editor = {};

import { DatatypeDefinition } from "yreqif/src/reqif-naive/definitions/ReqIFDatatypeDefinition"
import { Specification } from "yreqif/src/reqif-naive/content/ReqIFSpecification"
import { SpecType } from "yreqif/src/reqif-naive/definitions/ReqIFSpecTypes"
import { SpecObject } from "yreqif/src/reqif-naive/content/ReqIFSpecObject"

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
      const edt = this.editor;

      function insertNode(type, data) {
        edt.blocks.insert(type, data);
      }

      function displayNode(chld) {
        if(chld.source) {
          let txt = "<b>" + chld.source.constructor.name + "</b><br>";

          for(let j in chld.source) {
            let vals = chld.source[j];
            if(j === "values") {
              txt += "<i>values:</i> " + "<br>";
              for(let k in vals) {
                txt += "    " + k + ": " + vals[k] + "<br>";
              }
            } else if(typeof vals == 'string' | 'number') {
              txt += " <i>" + j + "</i>: " + vals + "<br>";
            } else if(vals instanceof Date) {
              txt += " <i>" + j + "</i>: " + vals + "<br>";
            } else {
              txt += " <i>" + j + "</i>: " + vals + "<br>";
            }
          }
          return txt;
        }
      }

      if(this.editor.blocks) {
        this.editor.blocks.clear();

        if(newVal) {
          
          //Checking source time, processing based on that
          if(newVal.source instanceof Array) {
            if(newVal.source[0] instanceof DatatypeDefinition) {
              insertNode("header", {
                text: "Definition of data types",
                level: 1
              });
            } else if(newVal.source[0] instanceof SpecType) {
              insertNode("header", {
                text: "Definition of spec types",
                level: 1
              });
            } else if(newVal.source[0] instanceof Specification) {
              insertNode("header", {
                text: "Definition of specifications",
                level: 1
              });
            } else if(newVal.source[0] instanceof SpecObject) {
              insertNode("header", {
                text: "Definition of SpecObject",
                level: 1
              });
            }
          } else {
            
            
            // if(newVal.name) {
            //   insertNode("header", {
            //     text: newVal.name,
            //     level: 2
            //   });
            // }

            // if(newVal.desc) {
            //   insertNode("paragraph", {
            //     text: newVal.desc,
            //   });
            // }
          }
        
          for(let i in newVal) {
              if(typeof newVal[i] == 'string' | 'number') {
                insertNode("paragraph", {
                  text: " <i>" + i + "</i>: " + newVal[i],
                });
              }
          }

          let txt = displayNode(newVal);

          insertNode("paragraph", {
            text: txt,
          });
          

          for(let i in newVal.children) {
            let chld = newVal.children[i];
            let txt = displayNode(chld);

            insertNode("paragraph", {
              text: txt,
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
    async onChange(api, block) {
      console.log('OnChnage');
      console.log(api);
      console.log(block);
      //TODO: Three cases: create, update, delete
      
      const res = await this.editor.save();
      this.$emit("input", res.blocks);
    },
  },
});
</script>

<style scoped></style>
