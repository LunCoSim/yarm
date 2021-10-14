import yTitle from "./js/yTitle"
import ySection from "./js/ySection"
import yRequirement from "./js/yRequirement"

import EditorJS from "../libs/editor.js/dist/editor"
const json1 = require('ot-json1');

// import json1 from "ot-json1";

let _event = undefined;
let eventList = [];

let _data = {
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
    data: loadData() || _data,
    // data: _data,
    onChange: (_editor, event) => {
        window._event = event;
        let targetBlock = event['detail']['target'];
        let index = event['detail']['index'];
        console.log("onChange:  ", event);
        targetBlock.save().then((data) => {
            console.log("saved ", data);
            let op = "no operation";

            let processedData = {
                data: data["data"],
                type: data["tool"],
                id: data["id"]
            }

            switch(event['type']) {
                case 'block-changed': {
                    op = json1.replaceOp(["blocks", index], true, processedData);
                    let e = json1.type.apply(_data, op);
                    console.log('Changed res: ', e);
                } break;
                case 'block-moved': {

                } break;
                case 'block-added': {

                } break;
                case 'block-removed': {

                } break;
            }
            console.log(op);
            eventList.push(op)
        });
    }
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

    console.log(data);
    if(data) {
        data = JSON.parse(data)
        return data;
    } else {
        return _data;
    }
}


//------------------------

window.editor = editor;
window.json1 = json1;
