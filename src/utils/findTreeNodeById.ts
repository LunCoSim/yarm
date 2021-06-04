import { TreeNode } from "@/entities/TreeNode";

function prepareRootNode(children: TreeNode[]): TreeNode {
    return {
        children: children, 
        id: 0, 
        name: '', 
        desc: ''
    } as TreeNode;
}

function do_find(id: number, item: TreeNode): TreeNode | undefined {
    if (item.id == id) {
        return item;
    }

    return item.children?.map(item => do_find(id, item)).find(e => e);
}

export function findTreeNodeById(id: number, treeData: TreeNode[]): TreeNode | undefined {
    return do_find(id, prepareRootNode(treeData));
}

