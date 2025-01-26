import {defineNoteConfig, defineNotesConfig} from 'vuepress-theme-plume'

/* =================== locale: zh-CN ======================= */

const zhNote = defineNoteConfig({
    dir: 'wiki',
    link: '/wiki/',
    sidebar: [
        {
            text: '新手入门',
            collapsed: false,
            icon: 'carbon:idea',
            items: [
                '简介',
                "安装使用",
                "模型格式说明"
            ],
        },
        {
            text: '模型包制作',
            collapsed: false,
            icon: 'fluent-mdl2:edit-create',
            prefix: '模型包制作',
            items: [
                '使用插件制作',
                '项目结构'
            ],
        },
        {
            text: '更新日志',
            collapsed: false,
            icon: 'ic:sharp-update',
            prefix: '更新日志',
            items: [
                '2.3.0 更新日志',
                '2.2.2 更新日志',
                '2.2.1 更新日志',
                '1.2.0 更新日志',
            ],
        },
    ],
})

export const zhNotes = defineNotesConfig({
    dir: 'notes',
    link: '/',
    notes: [zhNote],
})

/* =================== locale: en-US ======================= */

const enDemoNote = defineNoteConfig({
    dir: 'demo',
    link: '/demo',
    sidebar: ['', 'foo', 'bar'],
})

export const enNotes = defineNotesConfig({
    dir: 'en/notes',
    link: '/en/',
    notes: [enDemoNote],
})

