import {TreeNode} from "@/entities/TreeNode";

export function findTreeNodeById(id: number, item: TreeNode): TreeNode | undefined {
    if (item.id == id) {
        return item;
    }
    return item.children?.find((item: TreeNode) => findTreeNodeById(id, item))
}

