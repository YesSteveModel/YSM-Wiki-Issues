---
title: Installation and Usage
icon: grommet-icons:install
createTime: 2025/02/05 20:55:16
permalink: /en/wiki/install/
tags:
  - Installation
  - Usage Introduction
---

Yes Steve Model needs to be installed on both the client and the server in order to use all functions normally.

If you **only install it on the client**, you need to enter the single-player game and load the model before you can use it on the server!

## Platform and JVM Support

Versions 1.1.5 and earlier support major mainstream platforms such as Windows, Linux, MacOS, Android, and iOS (Pojav and other related launchers). However, since version 1.2.0, only Windows (client and server) and Linux (server) are supported. Support for other platforms is still under development.

We have tested JVMs such as Oracle, Azul Zulu, Microsoft, and Dragonwell. If you encounter the error `Exception message: java.lang.RuntimeException: err: 54` when running YSM, you can switch to one of the above JVMs.

- Microsoft OpenJDK <Badge type="tip" text="Recommended" />: <https://learn.microsoft.com/zh-cn/java/openjdk/download>
- Oracle JVM: <https://www.oracle.com/cn/java/technologies/downloads/>
- Azul Zulu: <https://www.azul.com/downloads/>
- Alibaba Cloud Dragonwell: <https://www.aliyun.com/product/dragonwell>

## Notes on NeoForge / Forge Versions

When a player enters the server for the first time, they need to wait for about ten seconds (the time required for model synchronization, which varies depending on the number of models on the server). Then they can use the shortcut key `Alt` + `Y` to open the following menu:

![1.png](https://s2.loli.net/2023/06/25/Ya7DMmKToSneN6L.png)

**① Model Switching Button**: Click to switch to the corresponding model. If the button background is gray, it means the model is not authorized. The number in the upper left corner represents the number of textures that can be switched for this model.

**② Model Category Switching Button**: You can switch between all models, authorized models, and favorite models.

**③ Details Button**: Click to enter the Model Details menu and view all available textures and animations of the model. In the middle preview window, you can use the left mouse button to drag and rotate the model, the right mouse button to drag and move the model, and the mouse scroll wheel to zoom in and out of the model. Click the material selection box on the right to select different textures. Click the animation list on the left to preview different animations.

![3.png](https://s2.loli.net/2023/02/11/UxtCNy9wEg1XjSI.png)

Version 2.2.1 also added an Author Details menu. Click the "Open Details" button in the upper left corner of the Select Model menu to open the following menu:

![2024-06-23_21.24.png](https://s2.loli.net/2024/06/23/5ePDTnrBchwyzq8.png)

## Notes on Fabric Versions

::: tip
The migration work for the Fabric version was fully completed by **TomatoPuddin** (https://github.com/TomatoPuddin)! Please show him your utmost respect!
:::

Most of the functions of the Fabric version are **completely consistent** with those of the Forge version. It has also been tested for compatibility with mods such as Sodium, Sodium Extra, Iris, Lithium, ModernFix, FerriteCore, ServerCore, Debugify, Carpet (including the FakePlayer function), and has good stability.

The Fabric version requires two runtime prerequisites:

- [Fabric Api](https://www.mcmod.cn/class/3124.html)
- [Forge Config Api Port](https://www.mcmod.cn/class/5510.html) (Not required to be installed since version 2.2.1)

It also has compatible and interactive content with two mods:

- [First-Person Model](https://www.mcmod.cn/class/4391.html) (Added better first-person perspective compatibility)
- [Amecs](https://www.mcmod.cn/class/2003.html) (Supports the same combination shortcut keys as the Forge version)
- [Modern KeyBinding](https://www.curseforge.com/minecraft/mc-mods/modern-keybinding-fabric) (Another mod that supports the same combination shortcut keys as the Forge version. Supported since version 2.2.1)

The Fabric version only has slight differences from the Forge version in terms of key bindings. Because the key binding interface of Fabric does not support Ctrl / Alt / Shift combination keys, you need to install the [Amecs](https://www.mcmod.cn/class/2003.html) mod to support them. However, this mod conflicts with the commonly used mod [Controlling](https://www.mcmod.cn/class/1191.html). Therefore, this mod is ultimately designed as an optional mod for users to choose whether to install.

Alternatively, you can choose to install the [Modern KeyBinding](https://www.curseforge.com/minecraft/mc-mods/modern-keybinding-fabric) mod, which does not conflict with [Controlling](https://www.mcmod.cn/class/1191.html).

- When Amecs is installed, register the same key bindings as the Forge version through the interface of this mod.
- **When this mod is not installed, register key bindings without modifier keys. For example, press Y directly to open the model selection page without needing to press Alt**.