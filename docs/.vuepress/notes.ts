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
                '常见问题解答',
                "模型格式说明",
                "配置文件说明",
                "相关指令",
                'Freesia插件',
            ],
        },
        {
            text: '模型包制作',
            collapsed: false,
            icon: 'fluent-mdl2:edit-create',
            prefix: '模型包制作',
            items: [
                '准备工具',
                '使用插件制作',
                '视频教程',
                '项目结构',
                '模型制作',
                '贴图制作',
                "PBR贴图",
                '添加音频',
                '自定义轮盘',
                '动画控制器',
                '多语言支持',
                '前景图与背景图',
                '模型打包'
            ],
        },
        {
            text: '动画制作',
            collapsed: false,
            icon: 'mdi:run',
            prefix: '动画制作',
            items: [
                '动画概述',
                '玩家主动画',
                '手部条件动画',
                '并行动画',
                '护甲动画',
                '骑乘动画',
                '轮盘动画',
                '箭矢动画',
                '弹射物动画',
                '选择界面动画',
                '枪械动画',
                '马术动画',
                '跑酷动画',
                'CarryOn动画',
                '拔刀剑动画',
                '女仆动画',
                '骑乘实体动画',
                '第一人称动画',
                '更真实的第一人称'
            ],
        },
        {
            text: 'molang',
            collapsed: false,
            icon: 'ix:script-add',
            prefix: 'molang',
            items: [
                '简介',
                '变量介绍',
                '常用molang集合',
                'molang参考表',
                'molang杂项内容',
                '自定义函数'
            ],
        },
        {
            text: '模型转换',
            collapsed: false,
            icon: 'weui:transfer2-filled',
            prefix: '模型转换',
            items: [
                '中国版YSM组件',
                '女仆模组'
            ],
        },
        {
            text: '更新日志',
            collapsed: false,
            icon: 'ix:log',
            prefix: '更新日志',
            items: [
                '2.5.1 更新日志',
                '2.5.0 更新日志',
                '2.4.1 更新日志',
                '2.4.0 更新日志',
                '2.3.2 更新日志',
                '2.3.1 更新日志',
                '2.3.0 更新日志',
                '2.2.2 更新日志',
                '2.2.1 更新日志',
                '1.2.0 更新日志'
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

const enNote = defineNoteConfig({
    dir: 'wiki',
    link: '/wiki/',
    sidebar: [
        {
            text: 'Getting Started',
            collapsed: false,
            icon: 'carbon:idea',
            items: [
                'Introduction',
                'Installation and Usage',
                'Frequent Questions',
                'Model Format Description',
                'Configuration File Description',
                'Related Commands'
            ],
        },
        {
            text: 'Update Log',
            collapsed: false,
            icon: 'ix:log',
            prefix: 'Update Log',
            items: [
                '2.4.1 Update Log',
                '2.4.0 Update Log',
                '2.3.2 Update Log',
                '2.3.1 Update Log',
                '2.3.0 Update Log',
                '2.2.2 Update Log',
                '2.2.1 Update Log',
                '1.2.0 Update Log'
            ],
        },
    ],
})

export const enNotes = defineNotesConfig({
    dir: 'en/notes',
    link: '/en/',
    notes: [enNote],
})

