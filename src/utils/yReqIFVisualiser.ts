import { TreeNode } from "@/entities/TreeNode";

import { yReqIF } from "yreqif/src/yreqif/yreqif";


let ID = 0;

function makeNode(name: string, desk: string, children: TreeNode[], identifier?: string) {
    ID++;

    if(identifier) {
        return {
            id: ID,
            name: name,
            desc: desk,
            children: children,
        }
    } else {
        return {
            id: ID,
            name: name,
            desc: desk,
            children: children,
        }
    }
}

function addChildren(dest: TreeNode, children: TreeNode) {
    dest.children.push(children);
}

export function getTreeNodes(yreqif: yReqIF): TreeNode [] {
    const root = makeNode("Root", "Root Node", []);

    const header = makeNode("Header", "", []);
    
    const content = makeNode("Content", "", []);
    const datatypes = makeNode("Data Types", "", []);
    const specTypes = makeNode("Specifications types", "", []);
    const specObjects = makeNode("Specification objects", "", []);
    const specifications = makeNode("Specifications", "", []);

    addChildren(root, header);
    
    addChildren(root, content);

    addChildren(content, datatypes);
    addChildren(content, specTypes);
    addChildren(content, specObjects);
    addChildren(content, specifications);

    const dataTypes = yreqif.reqif.coreContent?.dataTypes;

    for(const datatype in dataTypes) {
        const dt = dataTypes[parseInt(datatype)];

        const longName = dt["identifier"] || "";
        const desc = dt.desc || "";

        addChildren(datatypes, makeNode(longName, desc, []));
    }
    return [root];
}