export interface TreeNode {
    id: number | string,
    name: string,
    desc: string,
    children: TreeNode[],
    source?: unknown
}
