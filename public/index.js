import EditorJS from "../libs/editor.js/dist/editor"
import DragDrop from 'editorjs-drag-drop';

const json1 = require('ot-json1');

import yTitle from "./js/yTitle"
import ySection from "./js/ySection"
import yRequirement from "./js/yRequirement"


//---------------------------------------

let _event = undefined;
let eventList = [];

//---------------------------------------

const _data = {
    blocks: [
        {
            type: "ytitle",
            id: "YREQ",
            data: {
                id: "YREQ",
                title: "Yarm requirements"
            },
        },
        {
            type: "ysection",
            id: "GEN",
            data: {
                id: "GEN",
                header: "General requirements"
            }
        },
        {
            type: "ysection",
            id: "TTL",
            data: {
                id: "TTL",
                header: "Specification for Title"
            }
        },
        {
            type: "yrequirement",
            id: "TTL.1",
            data: {
                id: "TTL.1",
                title: "",
                content: "Plugin shall look similar to Word/GDocs Title style",
            },
        },
        {
            type: "yrequirement",
            id: "TTL.2",
            data: {
                id: "TTL.2",
                content: "Only one title should be in the document"
            },
        },
        {
            type: "ysection",
            id: "SEC",
            data: {
                id: "SEC",
                header: "Specification for Sections"
            }
        },
        {
            type: "yrequirement",
            id: "SEC.1",
            data: {
                id: "SEC.2",
                content: "Sections should have 6 levels of headings"
            },
        },
        {
            type: "ysection",
            id: "REQ",
            data: {
                id: "REQ",
                header: "Requirements related requirements"
            }
        },
    ]
};

//---------------------------------------

let currentData = loadData() || {..._data};


/**
   * Initialize the Editor
   */
 let editor = new EditorJS({
    autofocus: true,
    // defaultBlock: 'ytitle',
    tools: {
        ytitle: {
            class: yTitle,
        },
        ysection: {
            class: ySection,
        },
        yrequirement: {
            class: yRequirement,
        }
    },
    data: currentData,
    // data: _data,
    onChange: (_editor, event) => {
        window._event = event;
        let targetBlock = event['detail']['target'];
        let index = event['detail']['index'];
        let fromIndex = event['detail']['fromIndex'];
        let toIndex = event['detail']['toIndex'];

        console.log("onChange:  ", event);
        targetBlock.save().then((data) => {
            console.log("saved ", data);
            let op = null;

            let processedData = {
                type: data["tool"],
                id: data["id"],
                data: data["data"],
            }
            
            processedData["data"]["id"] = data["id"];

            switch(event['type']) {
                case 'block-changed': {
                    let source_data = {...currentData["blocks"][index]};
                    console.log(source_data);
                    op = json1.replaceOp(["blocks", index], source_data, processedData);
                } break;
                case 'block-moved': {
                    op = json1.moveOp(["blocks", fromIndex], ["blocks", toIndex]);
                } break;
                case 'block-added': {
                    op = json1.insertOp(["blocks", index], processedData);
                } break;
                case 'block-removed': {
                    op = json1.removeOp(["blocks", index]);
                } break;
            }

            if(op) {
                console.log("Operation: ", op);
                console.log("Blocks before: ", currentData.blocks);
                currentData = json1.type.apply(currentData, op);
                console.log("Blocks after: ", currentData.blocks);
            }
            
            eventList.push(op)
        });
    },
    onReady: () => {
        new DragDrop(editor);
      },
  });

  
  /**
   * Add handler for the Save button
   */
  const saveButton = document.getElementById('save-button');
  const loadButton = document.getElementById('load-button');

  saveButton.addEventListener('click', () => {
        editor.save().then( savedData => {
            console.log(savedData);
            window.localStorage.setItem("saved", JSON.stringify(savedData, null, 4))
        })
  })

  loadButton.addEventListener('click', () => {
    console.log('load button');
    loadData();

    // console.log("Saved data: ", data);
    // editor.clear();

    // for(let i in data) {
        
    //     let d = data[i];
    //     console.log(i, d);
    //     let pos = editor.blocks.getBlocksCount();
    //     editor.blocks.insert(pos, d);
        
    // }
    
    // editor.setDa
})

function loadData() {
    console.log('loadData');
    let data = window.localStorage.getItem("saved");

    
    if(data) {
        data = JSON.parse(data);
        console.log(data);
        return data;
    } else {
        return _data;
    }
}


//------------------------

window.editor = editor;
window.json1 = json1;
window.eventList = eventList;
window.currentData = currentData;