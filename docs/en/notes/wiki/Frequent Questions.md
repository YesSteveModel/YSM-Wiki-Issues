---
title: Frequent Questions
createTime: 2025/03/18 18:08:00
permalink: /en/wiki/faq/
icon: mingcute:question-fill
author: K螺诺亚, Pop_Slime
---

::: warning
This article applies to YSM for Java Edition and not to the NetEase version.
:::

::: tip
Before starting, please ensure that you have basic knowledges on computer, such as how to copy/paste files, decompress files, browse web pages. Otherwise you might fail to understand the following contents.
:::

## Quick Search

You can quickly locate your question by clicking on the following keywords, looking at the content list on the right, or pressing `Ctrl F` to search.

[[toc]]

If you cannot solve a problem on your own, you can ask other people in the community.

<CardGrid>
    <LinkCard icon="mingcute:discord-fill" title="Discord Server" href="https://discord.gg/re4xQtb" />
</CardGrid>

## How to Install the Mod

The latest release version of the mod is: `2.6.0`

The mod works on:

<Card title="Version 2.6.0" icon="icon-park-outline:tag">

- Forge: `1.20.1`
- Fabric: `1.21.1` `1.20.1`
- NeoForge: `1.21.1`

</Card>

<Card title="Version 2.4.1" icon="icon-park-outline:tag">

- Forge: `1.20.1`, `1.19.2`, `1.18.2`, `1.16.5`
- Fabric: `1.21.1`, `1.21`, `1.20.1`, `1.19.2`, `1.18.2`, `1.16.5`
- NeoForge: `1.21.1`, `1.21`

</Card>

Due to review issues on CurseForge, the YSM mod has been removed from it. Please download the latest version on Modrinth:

- Modrinth: <https://modrinth.com/mod/yes-steve-model/versions>

A major reconstruction was made in version `1.2.0`. Most new models cannot be loaded in version `1.1.5` and below.

We always expect that you can use the latest version. You can check the version by looking at the texts on the lower left corner in the Select Model menu:

![image.jpg](https://s2.loli.net/2025/01/31/ShztlRosQPAaFBj.png)

::: warning

- Please distinguish the difference between `Forge` and `Fabric` when downloading!

:::

Watch some walkthrough videos in case you really don't know how to install the mod.

## How to Get Models

Most Chinese creators post model demonstration videos on Bilibili. You can search related keywords on Bilibili to find the model you want.
Also, some creators post models (either free or paid) on AFDIAN. There is a free model collection maintained by enthusiasts in the YSM community as well.
Some creators post models on Planet Minecraft.

<LinkCard icon="ri:bilibili-fill" title="Search Models on Bilibili" href="https://search.bilibili.com/all?keyword=ysm%E6%A8%A1%E5%9E%8B" />
<LinkCard icon="simple-icons:afdian" title="Search Models on AFDIAN" href="https://afdian.com/search?q=YSM" />
<LinkCard icon="mdi:github" title="GitHub Free Model Repository" href="https://github.com/Elaina69/Yes-Steve-Model-Repo" />
<LinkCard icon="ri:earth-line" title="Search Models on Planet Minecraft" href="https://www.planetminecraft.com/mods/?keywords=YSM" />

## How to Open the Select Model Menu

Press `Alt Y` (Forge and NeoForge) or `Y` (Fabric) to open the Select Model menu.

If that fails, please check the following:

- Did you actually have the mod installed?
    - Please check if the Minecraft version and the Mod loader version are correct
    - ==Please distinguish the difference between `Forge` and `Fabric`!==
- Did you press the correct key?
- Did you modify the default key binding?
- Does the key binding have conflicts?
- Is your keyboard functioning?

## How to Install Model Files

::: warning
Note that the following steps for installing models only applies to singleplayer. If you are playing on a server, only the OP of the server can install models!
:::

::: steps

1. In the Select Model menu, click the `Open Model Folder` button on the top right
   ![1.jpg](https://s2.loli.net/2025/01/31/1ClHjr3ApLx5u6m.png)

2. Click `Open Model Folder` in the opened dialog
   ![2.jpg](https://s2.loli.net/2025/01/31/rTOg4kZLb3jpzPn.png)

3. A folder window will pop out, as shown in the following image:
   ![3.jpg](https://s2.loli.net/2025/01/31/T6cVnUyfmi927GW.png)

4. Put your model file into the folder, as shown in the following image:
   ![4.jpg](https://s2.loli.net/2025/01/31/VuiRdxMIFLvpNBt.png)
   ![5.jpg](https://s2.loli.net/2025/01/31/rThBdgqjwlp9c24.png)

   Return to the game when it is set.

5. Press the `/` key on the keyboard, type the command `ysm model reload` (OP permission required), as shown in the following image:
   ![6.jpg](https://s2.loli.net/2025/01/31/OUp6GX35SfdDezJ.png)

6. Press enter to execute the command
   ![7.jpg](https://s2.loli.net/2025/01/31/56WfVpFUtXidmKD.png)

7. Now open the Select Model menu, and you should see the files you just installed
   ![8.jpg](https://s2.loli.net/2025/01/31/FahgjmoczbBH3Rf.png)
   Sometimes when there are too many models, you will need to use the button on the bottom to switch between pages

:::

## I Can't Find My Model

If you have installed your model following the instructions above, but still cannot find it, please check the following:

- Did you actually have the mod installed?
- Did you have the latest version (2.6.0) of the mod installed? Most new models requires mod version 2.2.2 or above. Version 1.1.5 is no longer supported!
- Were you in multiplayer? Only the OP can install models on a server.
- Have you executed the command `/ysm model reload` to reload the models?
- If you were playing for the first time, and have quite a lot of models installed, you could be in a situation where only the default model is available after reloading. Please wait for a while as the mod is building cache for your models, after which the models should show up. (Same for multiplayer)

## It Always Renders the Vanilla Player Model

If you have installed YSM and is able to open the Select Model menu, but only the vanilla player model show up despite which model you select, then please turn off `Prevents rendering of self player's model`. Instructions:

::: steps

1. Open the Select Model menu:

   How? Read [How to Open the Select Model Menu](#how-to-open-the-select-model-menu)

2. Click `Open Config GUI` button:
   ![1.jpg](https://s2.loli.net/2025/01/31/kGebx86qE7lIfzW.png)

3. Uncheck the following:
   ![2.jpg](https://s2.loli.net/2025/01/31/riqge8GDN95b1QK.png)

:::

## The Models are Rendered Incorrectly

![optifine.jpg](https://s2.loli.net/2025/01/31/rHI5iT4zF6OsxvX.jpg)

If you found that your models are messed up like this, it is likely that you have Optifine installed.

Two solutions are available
::: card title="Uninstall Optifine" icon="icon-park-outline:one-key"
Switch to other shader loaders such as [Oculus (Forge)](https://www.mcmod.cn/class/5741.html) and [Iris (Fabric)](https://www.mcmod.cn/class/3697.html).
:::

::: card title="Use compatibility renderer" icon="icon-park-outline:two-key"
Use the compatibility renderer. Instructions:
   
::: steps

1. Open the Select Model menu:

   How? Read [How to Open the Select Model Menu](#how-to-open-the-select-model-menu)

2. Click `Open Config GUI` button:
   ![1.jpg](https://s2.loli.net/2025/01/31/kGebx86qE7lIfzW.png)

3. Check `Use compatibility renderer`:
    
   ![222.jpg](https://s2.loli.net/2025/01/31/3126yCFT7G9BgsN.png){width="50%"}

:::

## It Says "Unsupported ysm format version"

![lowversion.jpg](https://s21.ax1x.com/2025/02/03/pEZotl6.jpg)

If you encountered this, please check if your YSM is up to date (the latest version is 2.6.0). If not, please update.

If it is up to date, please contact the model author.

## Can I Play YSM on Bedrock Edition or NetEase Edition

Currently YSM for NetEase Edition is available. You can search `是，史蒂夫模型` in the store to download it for free!

![saveimage_1738309430.jpg](https://s2.loli.net/2025/01/31/vnRl7bwKiqCahPk.jpg)

::: warning
Please note that the NetEase Edition and the Java Edition do not share the same community.

In the case that you encounter any problems when playing the NetEase Edition, please do not give feedback to the Java Edition group. Vice versa, issues on Java Edition should not be sent to the NetEase Edition group either.
:::

## Can I Play YSM on My Phone

Yes, starting from version 2.5.2, this mod supports mobile gameplay, but a compatible launcher needs to be installed.

Currently supported launchers are:

- [Fold Craft Launcher](https://github.com/FCL-Team/FoldCraftLauncher)
- [Zalith Launcher](https://github.com/ZalithLauncher/ZalithLauncher)
- [Zalith Launcher 2](https://github.com/ZalithLauncher/ZalithLauncher2)

If you are using the correct launcher but still cannot play normally, please update your launcher to the latest version.

::: collapse
- If you are the developer of the Android version of Minecraft JE Launcher...

  Due to Android's permission restrictions, YSM requires a special environment variable `MOD_ANDROID_RUNTIME` to run properly. It is used to store the native files needed for YSM's operation. Below is the compatibility description:

  ::: demo-wrapper title="MOD_ANDROID_RUNTIME Environment Variable Configuration Instructions"

  ## Configuration Requirements

  The `MOD_ANDROID_RUNTIME` environment variable must point to a directory in the same namespace as `libjvm.so`.

  ## Technical Background

  Android 7.0+ introduced the native library namespace isolation mechanism. The `.so` library files of the Yes Steve Model mod need to be in the same namespace as the JVM runtime library to load correctly.

  ## Supported Launcher Configuration Examples

  #### Fold Craft Launcher
  - Environment variable path: `/data/user/0/com.tungsten.fcl/app_runtime_mod`
  - JVM runtime library path: `/data/user/0/com.tungsten.fcl/app_runtime/java/jre17/lib/server/libjvm.so`

  #### Zalith Launcher
  - Environment variable path: `/data/user/0/com.movtery.zalithlauncher/app_runtime_mod`
  - JVM runtime library path: `/data/user/0/com.movtery.zalithlauncher/runtimes/Internal-17/lib/server/libjvm.so`

  ## Reference Documents

  - [Android Native Library Namespaces Documentation](https://source.android.com/docs/core/permissions/namespaces_libraries)
  
:::

You can also choose to play the NetEase Edition.

## How to Turn Off/On Extra Player Rendering
::: steps

1. Open the Select Model menu:

   How? Read [How to Open the Select Model Menu](#how-to-open-the-select-model-menu)

2. Click `Open Config GUI` button:
   ![1.jpg](https://s2.loli.net/2025/01/31/kGebx86qE7lIfzW.png)

3. Check/Uncheck `Disable extra player render`：

   ![extra.jpg](https://s2.loli.net/2025/01/31/fYHjie13xLgakCr.png){width="50%"}

:::

## How to Change the Position of Extra Player Rendering

Press `Alt P` (or `P` on Fabric) to configure the Extra Player Rendering。

Follow the instructions on the top right to change the position, scale, and rotation. Press `Esc` to exit.

![move.jpg](https://s2.loli.net/2025/01/31/2DV7IORtHzgJT93.png)
