import yTitle from "./js/yTitle"
import ySection from "./js/ySection"
import yRequirement from "./js/yRequirement"

console.log(yTitle);

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

/**
   * Initialize the Editor
   */
 const editor = new EditorJS({
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
    data: _data,
    onChange: (a, b) => {
      console.log(a);
      console.log(b);
    }
  });

  /**
   * Add handler for the Save button
   */
  const saveButton = document.getElementById('save-button');
  const loadButton = document.getElementById('load-button');
  const output = document.getElementById('output');

  saveButton.addEventListener('click', () => {
        editor.save().then( savedData => {
            window.localStorage.setItem("saved", JSON.stringify(savedData['blocks'], null, 4))
        })
  })

  loadButton.addEventListener('click', () => {
    console.log('load button');
    let data = window.localStorage.getItem("saved");

    if(data) {
        data = JSON.parse(data)
    }

    console.log("Saved data: ", data);
    editor.clear();

    for(let i in data) {
        
        let d = data[i];
        console.log(i, d);
        let pos = editor.blocks.getBlocksCount();
        editor.blocks.insert(pos, d);
    }
    
    // editor.setDa
})


window.editor = editor;