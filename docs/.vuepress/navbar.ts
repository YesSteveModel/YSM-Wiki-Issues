import { defineNavbarConfig } from 'vuepress-theme-plume'

export const zhNavbar = defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '更新日志', link: '/wiki/log/222/' },
  { text: '文档', link: '/wiki/intro/' },
])

export const enNavbar = defineNavbarConfig([
  { text: 'Home', link: '/en/' },
  { text: 'Update Log', link: '/en/wiki/log/222/' },
  { text: 'WiKi', link: '/en/wiki/intro/' },
])

