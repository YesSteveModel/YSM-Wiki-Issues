---
title: 中国版YSM组件
createTime: 2025/01/28 15:57:48
permalink: /wiki/trans/netease/
icon: tabler:brand-minecraft
---

本教程是讲述如何将 Java 版 Yes Steve Model（简称 YSM）模组的模型包转换成网易中国版 Yes Steve Model 组件附包的教程。

此教程认为你已经了解 Java 版 Yes Steve Model 模型是如何制作的。

::: warning
请注意：加密格式的 Java 版 Yes Steve Model 模型（也就是以 `.ysm` 结尾的单个文件）**是无法读取并转换的**！

请注意：如果你制作的模型未得到模型原作者的允许，**请不要转换并发布**！我们不支持任何侵权盗取模型的行为！由此导致的后果也与我们无关！
:::

## 一、准备工作

首先，你需要下载得到这两个文件：

![img](https://s2.loli.net/2025/01/28/WiIGQSLgq2A8rdF.png)

- `ysmMain.zip`：前置包，仅用于中国版 YSM 组件附包测试附属包，**请勿作它用**。
- `ysm-netease-utils.js`：BlockBench 插件，用于一键转换 Java 版 YSM 模型包。
<FileCard
fileName="ysm-netease-utils.js"
fileSize="442 KB"
fileUrl="/files/ysm-netease-utils.js"
/>

其次，你的电脑上应该还需要安装这三个软件：

![img](https://s2.loli.net/2025/01/28/p5jxLacNJkVRQgl.png)

- `BlockBench`：制作模型的软件，这个应该都认识吧？
- `VSCode`：经典的文本编辑软件，因为部分高级内容可能需要改动脚本文件，所以建议安装此软件。
- `我的世界开发者启动器`：网易官方专用于组件开发的软件，需要注册开发者账户才可以登录使用。下载地址：<https://mc.163.com/dev/>

## 二、插件安装

首先，打开你的 BlockBench 软件，将先前的 `ysm-netease-utils.js`（**注意不要修改文件名，也不要安装后就删除此文件）** 直接拖入 BlockBench 中。

![img](https://s2.loli.net/2025/01/28/1aQ39gqfGRCjrPc.png)

点击确认即可，此时你在 `文件 -> 插件` 菜单中就能看到加载的插件了：

![img](https://s2.loli.net/2025/01/28/rh7paZYUKB13NjE.png)

![img](https://s2.loli.net/2025/01/28/EltwBoCvgDxus64.png)

## 三、转换模型

现在，我们开始转换 Java 版 YSM 模型。

在 BlockBench 中打开此菜单：

![img](https://s2.loli.net/2025/01/28/ailrDY1VGJ8uXfd.png)

![img](https://s2.loli.net/2025/01/28/SI8qWfDuMgdmkn7.png)

点击 `选择 Java 版模型包` 按钮，随后选中你需要转换的 Java 版 YSM 模型包文件夹。

接着点击 `选择导出路径` 按钮，选择你要放置转换后组件包的路径。

::: warning
请注意，中国版组件包不支持路径中带中文，建议选择一个纯英文路径，比如放置在桌面。
:::

最后填写作者名和模型名，这两个名字最后会被插件自动拼接成你组件包的 ID，请尽量选择较长的，不易产生冲突的名字。

::: warning
请注意，中国版组件包不支持 ID 带中文，请务必填写小写英文字符或者下划线，不要使用中文或者空格
:::

## 四、测试模型

现在你转换后的组件包已经弄好了，我们进入游戏测试吧！

首先打开 `我的世界开发者启动器`，登录账户，并选择 `创作 -> 本地导入 -> 导入基岩版组件`：

![img](https://s2.loli.net/2025/01/28/Spsc9gmIo13udVa.png)

然后将我们刚刚下载的 `ysmMain.zip` 前置包导入，随便起个名字即可，然后点击导入。

![img](https://s2.loli.net/2025/01/28/mLuF12gj5IzSJZx.png)

接着把我们刚刚插件转换后的文件夹也如法炮制，导入：

![img](https://s2.loli.net/2025/01/28/xQgAlP5dIvmGfiX.png)

接着选择主包（附属包也可以，随便你哪个），点击开发测试按钮：

![img](https://s2.loli.net/2025/01/28/JROyAUMZbsta1oE.png)

随便选一个版本，3.1、3.2 都可以：

![img](https://s2.loli.net/2025/01/28/haFymdDS31AKCMr.png)

然后这个界面需要做两处修改：

- 勾选上我们的主包和附属包
- 选择创造模式（不然测试几下就被怪打死了不妥吧）

![img](https://s2.loli.net/2025/01/28/WgS3JU4BQuAXhRL.png)

点击开始按钮，运行游戏即可，之后就是按照正常流程游戏内使用 YSM 组件即可：

![img](https://s2.loli.net/2025/01/28/bGRXdTnQjYivkH6.png)

## 五、问题反馈

如果你遇到了问题，我们可能会像你索取日志文件，日志文件可以通过点击此处导出：

![img](https://s2.loli.net/2025/01/28/FxkE21hGWM9i3jX.png)

## 转换常见问题

### 一、部分日志后台报错

如果是下面几个错误，暂无影响，不需要考虑：

`friendly name 'material.tohru' not found in entity friendly name list (material.default) - check your spelling?`

![img](https://s2.loli.net/2025/01/28/C4Ncf6ZkIeqmJrn.png)

`Error: can't find animation xxx`

![img](https://s2.loli.net/2025/01/28/jbEFC5zc8LTnGvl.png)

### 二、第一人称手臂模型模型有多出来的部分或者缺失部分内容

第一人称手臂模型的是由插件自动识别 `RightArm` 组下所有的子组来实现的，如果你没有 `RightArm` 组，或者 `RightArm` 组包含了多余的骨骼，就会导致上述问题。

!!（画饼）：后续计划添加插件功能，可以自行选择需要显示的组!!

解决办法：

首先，按照下图，找你转换后的组件包内的这个文件，并用 `VScode` 打开：

![img](https://s2.loli.net/2025/01/28/yIpkr4SGvaRwdCJ.png)

在 `part_visibility` 字段下删除多余的、不应当显示的组即可。有缺失的组，也可以如法炮制进行添加。

### 三、在某些界面，模型会显示出本该隐藏的模型

具体情况如下图所示，本该隐藏的部分显示了出来：

![img](https://s2.loli.net/2025/01/28/VvZHTMIfz3ODLhU.png)

![21.png](https://s2.loli.net/2025/01/28/Dmv6nH5WSFZp2Qo.png)

解决办法：

这个两个界面的 GUI 中调用的动画名是 `paperpoll`，插件默认生成的 `paperpoll` 动画可能会有些许问题，你需要自行为其修正内容来隐藏某些组件。

因为基岩版的机制，我们在 GUI 中的设计是仅播放 `paperpoll` 动画，**不会播放任何并行动画**！所以你在 GUI 中播放的动画不易过于复杂，也不建议使用 `molang` 语句，否则会十分卡。

模型文件在 `resource_pack\models\entity` 路径下。动画文件在 `resource_pack\animations` 路径下，一般你只需要加载名为 `main.animation.json` 的即可。

![22.png](https://s2.loli.net/2025/01/28/EakQb85KMFJj3WR.png)

![23.png](https://s2.loli.net/2025/01/28/P38Ks4EwHhCuG2y.png)

### 四、打开 GUI 模型切换界面时，后台疯狂报错

报错信息可能是这样的：`Error: unhandled request for unknown variable 'variable.xxx'`

![img](https://s2.loli.net/2025/01/28/UHCodeBYLnRyIOw.png)

解决办法：

GUI 和纸娃娃动画不支持 molang 变量，请检查自己的 `gui` 和 `paperdoll` 动画。是否添加了 molang！

### 五、轮盘动画不显示部分模型

在 `pre_parallel` 动画里隐藏了某些组（缩放为 0），然后想在轮盘动画里显示这些组（缩放为 1），但是测试发现轮盘动画中组并未能如愿显示出来。

解决办法：

找到 `pre_parallel` 动画和轮盘动画中有关于此组的关键帧，看看模式是不是线性。如果是，将两处都修改为书写方式一致的平滑帧即可修复。

此问题目前不知道原因，但是按上述方法可以修正。

