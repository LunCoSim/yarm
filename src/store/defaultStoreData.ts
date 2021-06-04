import { TreeNode } from "@/entities/TreeNode";

const data: TreeNode[] =  [
    {
        id: 1,
        name: 'Applications :',
        desc: '1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad, cupiditate dolores ducimus ea earum, error, exercitationem molestias nostrum obcaecati optio perferendis perspiciatis porro qui quidem quod repellat sequi voluptas.',
        children: [
            {
                children: [],
                id: 2,
                name: 'Calendar : app',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad, cupiditate dolores ducimus ea earum, error, exercitationem molestias nostrum obcaecati optio perferendis perspiciatis porro qui quidem quod repellat sequi voluptas.',
            },
            {
                children: [],
                id: 3,
                name: 'Chrome : app',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad, cupiditate dolores ducimus ea earum, error, exercitationem molestias nostrum obcaecati optio perferendis perspiciatis porro qui quidem quod repellat sequi voluptas.',
            },
            {
                children: [],
                id: 4,
                name: 'Webstorm : app',
                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad, cupiditate dolores ducimus ea earum, error, exercitationem molestias nostrum obcaecati optio perferendis perspiciatis porro qui quidem quod repellat sequi voluptas.',
            },
        ],
    },
    {
        id: 5,
        name: 'Documents :',
        desc: '5. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad, cupiditate dolores ducimus ea earum, error, exercitationem molestias nostrum obcaecati optio perferendis perspiciatis porro qui quidem quod repellat sequi voluptas.',
        children: [
            {
                id: 6,
                name: '6. vuetify :',
                desc: '6. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad, cupiditate dolores ducimus ea earum, error, exercitationem molestias nostrum obcaecati optio perferendis perspiciatis porro qui quidem quod repellat sequi voluptas.',
                children: [
                    {
                        id: 7,
                        name: 'src :',
                        desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad, cupiditate dolores ducimus ea earum, error, exercitationem molestias nostrum obcaecati optio perferendis perspiciatis porro qui quidem quod repellat sequi voluptas.',
                        children: [
                            {
                                children: [],
                                id: 8,
                                name: 'index : ts',
                                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad, cupiditate dolores ducimus ea earum, error, exercitationem molestias nostrum obcaecati optio perferendis perspiciatis porro qui quidem quod repellat sequi voluptas.',
                            },
                            {
                                children: [],
                                id: 9,
                                name: 'bootstrap : ts',
                                desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad, cupiditate dolores ducimus ea earum, error, exercitationem molestias nostrum obcaecati optio perferendis perspiciatis porro qui quidem quod repellat sequi voluptas.',
                            },
                        ],
                    },
                ],
            },
            {
                id: 10,
                name: '10. material2 :',
                desc: '10. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad, cupiditate dolores ducimus ea earum, error, exercitationem molestias nostrum obcaecati optio perferendis perspiciatis porro qui quidem quod repellat sequi voluptas.',
                children: [
                    {
                        id: 11,
                        name: 'src :',
                        desc: 'src :',
                        children: [
                            {id: 12, children: [], name: 'v-btn : ts', desc: 'v-btn : ts'},
                            {id: 13, children: [], name: 'v-card : ts', desc: 'v-card : ts'},
                            {id: 14, children: [], name: 'v-window : ts', desc: 'v-window : ts'},
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: 15,
        name: 'Downloads :',
        desc: '15. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad, cupiditate dolores ducimus ea earum, error, exercitationem molestias nostrum obcaecati optio perferendis perspiciatis porro qui quidem quod repellat sequi voluptas.',
        children: [
            {id: 16,  name: 'October : pdf',  desc: 'October : pdf', children: [], },
            {id: 17,  name: 'November : pdf',  desc: 'November : pdf', children: [], },
            {id: 18,  name: 'Tutorial : html',  desc: 'Tutorial : html', children: [], },
        ],
    },
    {
        id: 19,
        name: 'Videos :',
        desc: '19. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad, cupiditate dolores ducimus ea earum, error, exercitationem molestias nostrum obcaecati optio perferendis perspiciatis porro qui quidem quod repellat sequi voluptas.',
        children: [
            {
                id: 20,
                name: 'Tutorials :',
                desc: 'Tutorials :',
                children: [
                    {id: 21, name: 'Basic layouts : mp4', desc: 'Basic layouts : mp4', children: []},
                    {id: 22, name: 'Advanced techniques : mp4', desc: 'Advanced techniques : mp4', children: []},
                    {id: 23, name: 'All about app : dir', desc: 'All about app : dir', children: []},
                ],
            },
            {id: 24, name: 'Intro : mov', desc: 'Intro : mov', children: []},
            {id: 25, name: 'Conference introduction : avi', desc: 'Conference introduction : avi', children: []},
        ],
    },
];

export default data;