import yTitle from "./js/yTitle"
import ySection from "./js/ySection"
import yRequirement from "./js/yRequirement"

console.log(yTitle);

/**
   * Initialize the Editor
   */
 const editor = new EditorJS({
    autofocus: true,
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
    data: {
        blocks: [
            {
                type: "ytitle",
                data: {
                    id: "SRD1",
                    title: "Sample requirements document1"
                },
            },
            {
                type: "ysection",
                data: {
                    id: "TTL",
                    header: "Title related requirements"
                }
            },
            {
                type: "yrequirement",
                data: {
                    id: "TTL.1",
                    content: "Plugin shall look similar to Word/GDocs Title style"
                },
            },
            {
                type: "yrequirement",
                data: {
                    id: "TTL.2",
                    content: "Only one title should be in the document"
                },
            },
            {
                type: "ysection",
                data: {
                    id: "SEC",
                    header: "Sections related requirements"
                }
            },
            {
                type: "ysection",
                data: {
                    id: "REQ",
                    header: "Requirements related requirements"
                }
            },
        ]
    },
    onChange: (a, b) => {
      console.log(a);
      console.log(b);
    }
  });

  /**
   * Add handler for the Save button
   */
  const saveButton = document.getElementById('save-button');
  const output = document.getElementById('output');

  saveButton.addEventListener('click', () => {
        editor.save().then( savedData => {
            output.innerHTML = JSON.stringify(savedData, null, 4);
        })
  })