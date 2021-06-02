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
    const spectypes = yreqif.reqif.coreContent?.specTypes;
    const specobjects = yreqif.reqif.coreContent?.specObjects;
    const Specifications = yreqif.reqif.coreContent?.specifications;


    for(const i in dataTypes) {
        const dt = dataTypes[parseInt(i)];

        const longName = dt["identifier"] || "";
        const desc = dt.desc || "";

        addChildren(datatypes, makeNode(longName, desc, []));
    }

    for(const i in spectypes) {
        const dt = spectypes[parseInt(i)];

        const longName = dt["identifier"] || "";
        const desc = dt.desc || "";

        addChildren(specTypes, makeNode(longName, desc, []));
    }

    for(const i in specobjects) {
        const dt = specobjects[parseInt(i)];

        const longName = dt["identifier"] || "";
        const desc = dt.desc || "";

        addChildren(specObjects, makeNode(longName, desc, []));
    }

    for(const i in Specifications) {
        const sp = Specifications[parseInt(i)];

        const longName = sp["identifier"] || "";
        const desc = sp.desc || "";

        const specNode = makeNode(longName, desc, []);
        //TODO: add specs that inside
        addChildren(specifications, specNode);
    }

    return [root];
}