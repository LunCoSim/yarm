import { TreeNode } from "@/entities/TreeNode";

import { yReqIF } from "yreqif/src/yreqif/yreqif";


let ID = 0;

function makeNode(name: string, desk: string, source: unknown, children: TreeNode[] = [], identifier?: string) {
    ID++;
    
    return {
        id: identifier || ID,
        name: name,
        desc: desk,
        children: children,
        source: source,
    } as TreeNode;
}

function addChildren(dest: TreeNode, children: TreeNode) {
    dest.children.push(children);
}

export function getTreeNodes(yreqif: yReqIF): TreeNode [] {
    const root = makeNode("Root", "Root Node", yreqif);

    const header = makeNode("Header", "", yreqif.reqif.theHeader);
    
    const content = makeNode("Content", "", yreqif.reqif.coreContent);
    const datatypes = makeNode("Data Types", "", yreqif.reqif.coreContent.dataTypes);
    const specTypes = makeNode("Specifications types", "", yreqif.reqif.coreContent.specTypes);
    const specObjects = makeNode("Specification objects", "", yreqif.reqif.coreContent.specObjects);
    const specifications = makeNode("Specifications", "", yreqif.reqif.coreContent.specifications);

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

        addChildren(datatypes, makeNode(longName, desc, dt));
    }

    for(const i in spectypes) {
        const dt = spectypes[parseInt(i)];

        const longName = dt["identifier"] || "";
        const desc = dt.desc || "";

        addChildren(specTypes, makeNode(longName, desc, dt));
    }

    for(const i in specobjects) {
        const dt = specobjects[parseInt(i)];

        const longName = dt["identifier"] || "";
        const desc = dt.desc || "";

        addChildren(specObjects, makeNode(longName, desc, dt));
    }

    for(const i in Specifications) {
        const sp = Specifications[parseInt(i)];

        const longName = sp["identifier"] || "";
        const desc = sp.desc || "";

        const specNode = makeNode(longName, desc, sp);
        //TODO: add specs that inside
        addChildren(specifications, specNode);
    }

    return [root];
}