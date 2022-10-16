/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    // // By default, Docusaurus generates a sidebar from the docs folder structure
    // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

    // But you can create a sidebar manually
    tutorialSidebar: [
        {type: 'doc', id: 'index', label: 'Introduction'},
        'installation',
        'quickstart',
        {
            type: 'category',
            label: 'Example',
            collapsed: false,
            link: {
                type: 'doc',
                id: 'example/index',
            },
            items: [
                'example/enter-page',
                'example/list-view',
            ],
        },
        {
            type: 'category',
            label: 'Benchmark',
            collapsed: false,
            link: {
                type: 'doc',
                id: 'benchmark/index',
            },
            items: [
                'benchmark/setup',
                'benchmark/gather-data',
                {
                    type: 'category',
                    label: 'Analyze',
                    collapsed: false,
                    link: {
                        type: 'doc',
                        id: 'benchmark/analyze/index',
                    },
                    items: [
                        {
                            type: 'category',
                            label: 'FPS',
                            collapsed: false,
                            link: {
                                type: 'doc',
                                id: 'benchmark/analyze/fps/index',
                            },
                            items: [
                                'benchmark/analyze/fps/video',
                                'benchmark/analyze/fps/tracing',
                                'benchmark/analyze/fps/devtool',
                            ],
                        },
                        {
                            type: 'category',
                            label: 'Linearity',
                            collapsed: false,
                            link: {
                                type: 'doc',
                                id: 'benchmark/analyze/linearity/index',
                            },
                            items: [
                                'benchmark/analyze/linearity/definition',
                                'benchmark/analyze/linearity/video',
                                'benchmark/analyze/linearity/tracing',
                            ],
                        },
                        {
                            type: 'category',
                            label: 'Jank statistics',
                            collapsed: false,
                            link: {
                                type: 'doc',
                                id: 'benchmark/analyze/jank-statistics/index',
                            },
                            items: [
                                'benchmark/analyze/jank-statistics/definition',
                                'benchmark/analyze/jank-statistics/result',
                            ],
                        },
                        {
                            type: 'category',
                            label: 'Overhead',
                            collapsed: false,
                            link: {
                                type: 'doc',
                                id: 'benchmark/analyze/overhead/index',
                            },
                            items: [
                                'benchmark/analyze/overhead/definition',
                                'benchmark/analyze/overhead/result',
                            ],
                        },
                        'benchmark/analyze/waste',
                    ],
                },
                {
                    type: 'category',
                    label: 'Pitfalls',
                    collapsed: false,
                    link: {
                        type: 'doc',
                        id: 'benchmark/pitfall/index',
                    },
                    items: [
                        'benchmark/pitfall/half-fps',
                        'benchmark/pitfall/latency-change',
                    ],
                },
            ],
        },
        'design',
        {
            type: 'category',
            label: 'Discussion',
            collapsed: false,
            link: {
                type: 'doc',
                id: 'discussion/index',
            },
            items: [
                'discussion/design-doc',
                'discussion/conversation',
            ],
        },
    ],
};

module.exports = sidebars;
