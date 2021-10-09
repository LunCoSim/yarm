import { TreeNode } from "@/entities/TreeNode";

import { yReqIF } from "yreqif/src/yreqif/yreqif";


let ID = 0;

function makeNode(name: string, desk: string, source: unknown, identifier?: string, children?: [TreeNode]) {
    ID++;
    
    return {
        id: identifier || ID,
        name: name,
        desc: desk,
        children: children || [],
        source: source,
    } as TreeNode;
}

function addChildren(dest: TreeNode, children: TreeNode) {
    dest.children.push(children);
}

export function getTreeNodes(yreqif: yReqIF): TreeNode [] {
    const dataTypes = yreqif.reqif.coreContent?.dataTypes;
    const specTypes = yreqif.reqif.coreContent?.specTypes;
    const specObjects = yreqif.reqif.coreContent?.specObjects;
    const Specifications = yreqif.reqif.coreContent?.specifications;


    const root = makeNode("Root", "Root Node", yreqif);

    const header = makeNode("Header", "", yreqif.reqif.theHeader);
    
    const content = makeNode("Content", "", yreqif.reqif.coreContent);
    const datatypes = makeNode("Data Types", "", dataTypes);
    const spectypes = makeNode("Specifications types", "", specTypes);
    const specobjects = makeNode("Specification objects", "", specObjects);
    const specifications = makeNode("Specifications", "", Specifications);

    addChildren(root, header);
    
    addChildren(root, content);

    addChildren(content, datatypes);
    addChildren(content, spectypes);
    addChildren(content, specobjects);
    addChildren(content, specifications);

    
    function doAddNodesBulk(objects: any, nodes: any) {
        for(const i in objects) {
            const dt = objects[parseInt(i)];
    
            const longName = dt["longName"] || dt["identifier"];
            const desc = dt["desc"];
            const identifier = dt["identifier"]
    
            addChildren(nodes, makeNode(longName, desc, dt, identifier));
        }
    }

    doAddNodesBulk(dataTypes, datatypes);
    doAddNodesBulk(specTypes, spectypes);
    doAddNodesBulk(specObjects, specobjects);
    doAddNodesBulk(Specifications, specifications);
   

    // for(const i in dataTypes) {
    //     const dt = dataTypes[parseInt(i)];

    //     const longName = dt["identifier"] || "";
    //     const desc = dt.desc || "";

    //     addChildren(datatypes, makeNode(longName, desc, dt));
    // }

    // for(const i in specTypes) {
    //     const dt = specTypes[parseInt(i)];

    //     const longName = dt["identifier"] || "";
    //     const desc = dt.desc || "";

    //     addChildren(spectypes, makeNode(longName, desc, dt));
    // }

    // for(const i in specObjects) {
    //     const dt = specObjects[parseInt(i)];

    //     const longName = dt["identifier"] || "";
    //     const desc = dt.desc || "";

    //     addChildren(specobjects, makeNode(longName, desc, dt));
    // }

    // for(const i in Specifications) {
    //     const sp = Specifications[parseInt(i)];

    //     const longName = sp["identifier"] || "";
    //     const desc = sp.desc || "";

    //     const specNode = makeNode(longName, desc, sp);
    //     //TODO: add specs that inside
    //     addChildren(specifications, specNode);
    // }

    return [root];
}