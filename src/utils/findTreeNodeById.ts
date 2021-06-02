import {TreeNode} from "@/entities/TreeNode";

export function findTreeNodeById(id: number, item: TreeNode): TreeNode | undefined {
    if (item.id == id) {
        return item;
    }

    return item.children?.map(item => findTreeNodeById(id, item)).find(e => e);
}

