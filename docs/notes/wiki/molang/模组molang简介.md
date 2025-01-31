---
title: 模组 molang 简介
createTime: 2025/01/28 15:49:29
permalink: /wiki/molang/mod/
icon: ix:script
---

模组动画基本与基岩版动画行为一致，也支持基岩版所拥有的插值动画，比如**平滑，步帧**等。

## 与基岩版的差异

- 未初始化的变量为 null 值，可以用空值合并运算符识别，参与数值类计算时被视为 0 或 false；
- 结构体不支持嵌套；
- 玩家在切换模型、重生、传送至部分维度、退出重进以及其他类似操作后将清空所有变量存储。

## 相关调试指令

在本地玩家身上执行 molang 表达式，并输出结果至聊天框。（仅单人游戏有效）

```
/ysmclient molang execute <expr>
```
向自定义调试屏幕添加 molang 表达式，会实时计算和更新；pre 意为在动画更新前执行，post 在动画更新后执行。（按两次 alt + B 才能进入自定义调试屏幕）
```
/ysmclient molang watch add pre/post <name> <expr>
```
管理自定义调试屏幕上的条目。
```
/ysmclient molang watch remove <name>
/ysmclient molang watch clear
```

在指定玩家身上执行 molang；多人游戏下可用，需要管理员权限。（不会输出执行结果）
```
/ysm molang execute <player> <expr>
```

## `roaming` 变量

以 `v.roaming.xxx` 格式书写的变量（**不能**简写为 `v.r.xxx`）可以在切换维度、重生、退出重进后恢复。也能在玩家之间同步会，并且会跟随服务端的 cap 写入存档。

但是此变量有一些限制：

- 一个模型最多有 16 个 `roaming` 变量，所有模型共享这 16 个变量
- 变量名称的字符数不能大于 16
- 变量只能存储 `float` 类型

