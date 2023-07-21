# Yes Steve Model 模组使用说明

## 一、简介

Yes Steve Model 模组是一个修改原版玩家模型的 `Minecraft Forge` 模组，它采用了 `geckolib` 作为核心，使用 Minecraft 基岩版模型和动画文件。从而使玩家能够随心所欲的自定义玩家模型和动画。

![001](https://s2.loli.net/2023/01/01/RAor58n6LBct3kW.jpg)

Yes Steve Model 模组考虑到了服务器群体的模组需求，采用了诸多适用于服务器环境的设计，包括但不限于：

- 自动同步客户端模型：普通玩家在进入服务器时，服务器会**自动**把模型同步到玩家的电脑上。
- 加密模型文件：发送到玩家客户端的模型全部是**加密的二进制文件**，有效避免模型窃取问题！
- 模型权限功能：模型可以单独设置授权，只有 OP 输入指令授权后，特定的模型才可以使用。
- 原版玩家模型修改：添加了默认的 Steve 和 Alex 模型，这两个模型均可自动调用玩家皮肤显示。
- 简单的自定义功能：模型自定义功能极其简单，只需要在特定文件夹放置模型、材质和动画文件，在游戏内输入重载指令即可自动加载、同步。**不需要书写任何配置文件**！
- 动画轮盘功能：当按下 `Z` 键时，能够打开一个轮盘动画。通过它你可以方便播放各种有趣的动画（比如动作、表情等）。
- **部分**兼容[更真实的第一人称模型（First-person Model）](https://www.curseforge.com/minecraft/mc-mods/first-person-model)模组。
- 与[永恒枪械工坊（Timeless and Classics Guns）](https://www.curseforge.com/minecraft/mc-mods/timeless-and-classic-guns-tac)模组的兼容：可以完美的兼容该模组的持枪、换弹、瞄准、开火等诸多动作。

![2023-07-20_18.jpg](https://s2.loli.net/2023/07/20/N6sOS9ea5xwfn8t.jpg)

## 二、怎么使用此模组

当玩家首次进入服务器后等待十几秒（模型同步的耗时），即可使用快捷键 `Alt` + `Y` 打开如下 GUI 界面：

![1.png](https://s2.loli.net/2023/06/25/Ya7DMmKToSneN6L.png)

**① 模型切换按钮**：点击即可切换为对应的模型。如果按钮背景为灰色，说明该模型未授权。左上角的数字代表该模型可切换的材质数量。

**② 模型类别切换按钮**：可以切换所有模型、已授权模型、收藏模型。

**③ 详情界面按钮**：点击可进入模型详情界面，查看模型所有可用材质和动画。中间的预览窗口可以使用鼠标左键拖拽旋转模型、鼠标右键拖拽移动模型、鼠标滚轮滑动缩放模型。点击右侧材质选择框可以选择不同的材质。点击左侧动画列表，可以预览播放不同的动画。

![3.png](https://s2.loli.net/2023/02/11/UxtCNy9wEg1XjSI.png)

## 三、支持什么格式

Yes Steve Model 模组采用了 `geckolib` 作为核心，所以它支持 `geckolib` 兼容的`基岩版 1.12.0 `版本模型文件和`基岩版 1.8.0 `版本动画文件。

模型文件有三种格式，这三者放在指定目录下均可被游戏识别加载：

- 文件夹格式：对于模型设计者来说最推荐的格式，可以方便的修改内容，并在游戏内快速重载测试；
- 压缩包格式：是文件夹格式的**直接打包**，方便分享给他人；
- ysm 格式：是文件夹格式的**加密打包**，方便分享给他人的同时防止模型文件被修改盗用；

## 四、模型文件放哪里

自定义模型文件全部放置在游戏主目录下的 `config/yes_steve_model` 文件夹下。`yes_steve_model` 下会自动生成四个文件夹：

- `auth ` 文件夹：用来放置自定义模型，该位置的自定义模型**必须授权**后才可以使用。

- `cache` 文件夹：系统自动从服务端获取的加密模型文件缓存文件夹。

- `custom` 文件夹：用来放置自定义模型，该位置的自定义模型**无需授权**就可使用。

- `export` 文件夹：当在游戏内使用了 `/ysm export` 指令，生成的 `ysm` 专属格式的模型就在这。

你可以选择在 `auth` 或者 `custom` 文件夹下直接放置自定义模型文件。

## 五、如何开始

因为压缩包格式和 ysm 格式的模型都是文件夹格式模型转换而来的，这里我们直接以文件夹形式格式讲解。

文件夹格式模型结构如下所示，这其中只有三个部分是必须的：`main.json`，`arm.json`，任意一个 `png` 格式的材质。

```
custom （或 auth）文件夹
│
└─default                  模型包文件夹，游戏将会以此文件夹名作为模型 ID
    │ 
    ├─main.json            主模型文件（固定名称）
    ├─arm.json             手臂模型文件，用于第一人称手臂的显示（固定名称）
    ├─main.animation.json  主模型文件的动画文件（固定名称）
    ├─extra.animation.json 轮盘动画文件（固定名称）
    ├─arm.animation.json   手部动画文件（固定名称）
    ├─tac.animation.json   与永恒枪械模组的兼容动画文件（固定名称）
    ├─happy_skin.png       主模型文件贴图1（名称可自定义，会作为游戏内显示名称）
    ├─...                  任意多个贴图文件
    └─good_cloth_12.png    主模型文件贴图2（名称可自定义，会作为游戏内显示名称）    
```

自定义模型、动画、材质文件均需放置在一个文件夹中。文件夹、材质名称等只能使用 `小写英文字符、数字、下划线` 等字符。

## 六、其他格式的转换

你也可以把这些自定义模型、动画、材质文件全部打包成 zip 格式的文件**（不要错误的打包了文件夹）**，文件名还是需要遵循上述规定。

在游戏内输入`/ysm export <model_id>` 指令，即可将某个文件夹格式的模型导出成 ysm 专属模型格式。这个模型格式进行了一些简单加密，可以有效避免模型被第三方人员破解。

## 七、主模型的制作

Yes Steve Model 模组主模型文件命名必须为 `main.json`。其使用的动画文件进行了标准化设计，只需要按照特定的布局方式来制作，即可自动兼容。

在运行游戏后，游戏主目录下的 `config\yes_steve_model\custom\default` 文件夹下会自动生成模型标准模型和动画文件**（CC 0 协议发布，许可自由修改分发）**，你可以在其基础上进行二次修改和分发。

某些特定组名会被游戏自动添加某些特殊功能：

|                             组名                             |                             说明                             |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
|                            `Head`                            |              游戏会默认添加头部随视角摆动的动画              |
|                          `AllHead`                           |     更真实的第一人称模型模组中，会默认隐藏此分组下的模型     |
|                      `LeftHandLocator`                       | 左手手持物品的定位组<br/>没有此组就不会渲染副手物品<br>由`LeftHandLocator`的旋转点定位手持物品，对其应用缩放、旋转和位移动画可以修改手持物品的大小、朝向和位置 |
|                      `RightHandLocator`                      | 右手手持物品的定位组<br/>没有此组就不会渲染主手物品<br/>由`RightHandLocator`的旋转点定位手持物品，对其应用缩放、旋转和位移动画可以修改手持物品的大小、朝向和位置 |
|                       `ElytraLocator`                        | 鞘翅的定位组<br/>没有此组就不会渲染鞘翅<br/>由`ElytraLocator`的旋转点定位鞘翅，对其应用缩放、旋转和位移动画可以修改鞘翅的大小、朝向和位置 |
|                       `PistolLocator`                        | 当玩家安装了[永恒枪械工坊（Timeless and Classics Guns）](https://www.curseforge.com/minecraft/mc-mods/timeless-and-classic-guns-tac)模组后，副手持有手枪时，会渲染一个插在腰部的手枪模型<br/>这是此手枪模型的定位组<br/>没有此组就不会渲染插在腰间的枪械模型<br/>由`PistolLocator`的旋转点定位手枪模型的位置，对其应用缩放、旋转和位移动画可以修改手枪模型的大小、朝向和位置 |
|                        `RifleLocator`                        | 当玩家安装了[永恒枪械工坊（Timeless and Classics Guns）](https://www.curseforge.com/minecraft/mc-mods/timeless-and-classic-guns-tac)模组后，副手持有步枪或火箭筒时，会渲染一个背在背上的步枪或火箭筒模型<br/>这是此模型的定位组<br/>没有此组就不会渲染背在背上的模型<br/>由`RifleLocator`的旋转点定位模型的位置，对其应用缩放、旋转和位移动画可以修改模型的大小、朝向和位置 |
|                        `ViewLocator`                         | [更真实的第一人称模型（First-person Model）](https://www.curseforge.com/minecraft/mc-mods/first-person-model)模组中，玩家头部的高低由此组旋转点的 Y 值决定 |
| 所有以 `ysmGlow` 开头的组，比如 `ysmGlowHead`，`ysmGlowRingBow` | 发光组，在绝大多数光影下会渲染发光效果。<br/>**只作用于当前组** |

![2.png](https://s2.loli.net/2023/06/25/OQY3GPnWrHCBpzw.png)

## 八、第一人称手臂模型的制作

第一人称视角的手部模型必须命名为 `arm.json`，可通过主模型二次修改获得该文件，它与主模型共用一套贴图。其制作方法可参考如下步骤：

1. 将主模型文件复制一份；
2. 找到 `LeftArm` 和 `RightArm` 分组，将其复制到**根目录**下；
3. 删除整个 `Root` 分组；
4. 粘贴刚刚复制的 `LeftArm` 和 `RightArm` 分组；
5. 将 `LeftArm` 和 `RightArm` 分组的 `X` `Y` `Z` 旋转角度均修改为 0（内部分组不需要修改，修改后手臂应为垂直向下）。

我们还为手部模型添加了背景显示功能，在根目录下创建名为 `Background` 名字的分组，游戏将会在第一人称视角时将这个分组渲染为背景。不受玩家手持物品、使用状态的影响。

最后，你做好的模型在 Blockbench 里面看起来应该是这样的：

![2.png](https://s2.loli.net/2023/02/11/yLC1siW2aFvStXE.png)

>第一人称手部模型目前还不支持基岩版动画，但可以完美兼容永恒枪械工坊模组

## 九、贴图文件的制作

- 材质使用 `png` 格式材质，不建议使用**半透明**贴图，这会造成各种渲染错误；

- 材质文件名只能使用 `小写英文字符、数字、下划线` 等字符，其他没有限制；
- 模型支持多个贴图，你可以放置若干份贴图文件，游戏均会智能识别。

## 十、动画文件的制作

动画文件是可选选项。没有动画文件，或者缺失部分动画时，游戏均会智能调用默认的动画文件。如果你的模型是按照默认模型二次修改的，那么即可完美兼容。

**游戏内只有一个动画是代码添加的，不可修改**：

- 头部随鼠标摆动的动画：智能识别 `Head` 分组添加的动画

> 如果你不喜欢这个代码控制的动画，只需要将头部分组起个其他的名字即可

### 1. 主动画

如下动画是自定义的主动画,放置于 `main.animation.json` 文件中，可进行二次修改：

|     名称     |               作用               |        备注        |
| :----------: | :------------------------------: | :----------------: |
|     walk     |      在玩家普通行走时的动画      |      循环播放      |
|     run      |        在玩家疾跑时的动画        |      循环播放      |
|   climbing   |       玩家在活板门下的动画       |      循环播放      |
|    climb     |  玩家在活板门下，并且爬行的动画  |      循环播放      |
|   sneaking   |    玩家潜行，但不移动时的动画    |      循环播放      |
|    sneak     |    玩家潜行，并且行走时的动画    |      循环播放      |
|     swim     |         玩家游泳时的动画         |      循环播放      |
|  swim_stand  |    玩家在水中站立式游泳的动画    |      循环播放      |
|   attacked   |        玩家被攻击时的动画        |      单次播放      |
|     jump     |         玩家跳跃时的动画         |      循环播放      |
|     fly      |  玩家在创造模式飞行时播放的动画  |      循环播放      |
|  elytra_fly  |     玩家鞘翅飞行时播放的动画     |      循环播放      |
|     boat     |       玩家坐在船上时的动画       |      循环播放      |
| use_mainhand | 玩家使用右手时播放的动画（右键） |      单次播放      |
| use_offhand  | 玩家使用左手时播放的动画（右键） |      单次播放      |
|  swing_hand  | 玩家挥动手臂时播放的动画（左键） |      单次播放      |
|    sleep     |         玩家睡觉时的动画         |      循环播放      |
|     ride     |      玩家骑马（驴）时的动画      |      循环播放      |
|   ride_pig   |         玩家骑猪时的动画         |      循环播放      |
|     sit      |         玩家坐下时的动画         |      循环播放      |
|     idle     |        无任何操作时的动画        |      循环播放      |
|   riptide    |   玩家使用“激流”三叉戟时的动画   |      循环播放      |
|    death     |         玩家死亡时的动画         | 单次播放，1 秒时长 |

### 2. 手部动画

手部动画独立于主动画，放置于 `arm.animation.json` 文件中。会在玩家左键、右键时播放，所以它会覆盖主动画。你不应该在手部动画中添加其他与手部无关的组的动画。当没有如下的手部动画时，游戏会调用默认的 `use_mainhand` `use_offhand` `swing_hand` 等动画。

这里先补充几个 Minecraft 原版知识：

- 主手：英文为 mainhand，在游戏内默认为右手；
- 副手：英文为 offhand，在游戏内默认为左手；
- 使用：英文为 use，部分物品在玩家手持时，按下右键能够使用。比如食物、药水、弓箭、盾牌等。只要是能够使用的物品，无论在左手还是右手、均可以鼠标右键触发使用；
- 挥动：英文为 swing，玩家鼠标左键点击即会触发挥动。玩家**只能挥动主手**。
- 持有：英文为 hold，玩家主手或副手持有任何物品，且不进行任何操作时，即为持有状态。
- 物品 ID：在游戏内按下 `F3 H` 快捷键就能打开物品 ID 显示，如下图所示。原版每种物品都有自己的 ID；

![3.png](https://s2.loli.net/2023/06/25/BTo2G4dPbK5SlAq.png)

- 标签：对于同一类（比如所有的剑）物品，原版提供了标签（tag）系统，这一块需要通过 [wiki](https://minecraft.fandom.com/zh/wiki/%E6%A0%87%E7%AD%BE) 查询。

通过特定的动画名，你可以很方便的添加自定义的使用、挥动动画，其格式如下：

#### a. 使用动画

使用动画默认自带了 9 个原版分类动画：

|                       名称                        |                      作用                      |
| :-----------------------------------------------: | :--------------------------------------------: |
|       `use_mainhand:eat`、`use_offhand:eat`       |           食用食物时播放，约 1.5 秒            |
|     `use_mainhand:drink`、`use_offhand:drink`     |           饮用药水时播放，约 1.5 秒            |
|     `use_mainhand:block`、`use_offhand:block`     |                 放置方块时播放                 |
|       `use_mainhand:bow`、`use_offhand:bow`       |  使用弓箭时播放，建议 60 秒以上时长或静态动画  |
|     `use_mainhand:spear`、`use_offhand:spear`     | 使用三叉戟时播放，建议 60 秒以上时长或静态动画 |
|  `use_mainhand:crossbow`、`use_offhand:crossbow`  | 使用十字弓时播放，建议 60 秒以上时长或静态动画 |
|  `use_mainhand:spyglass`、`use_offhand:spyglass`  | 使用望远镜时播放，建议 60 秒以上时长或静态动画 |
| `use_mainhand:toot_horn`、`use_offhand:toot_horn` | 使用山羊角时播放，建议 60 秒以上时长或静态动画 |
|     `use_mainhand:brush`、`use_offhand:brush`     |                 使用刷子时播放                 |

使用动画还支持通过物品 ID 或者标签来制作自定义动画。

这里只给出几个示例，你可以添加无限多个自定义动画：

|                             名称                             |                             作用                             | 备注           |
| :----------------------------------------------------------: | :----------------------------------------------------------: | -------------- |
| `use_mainhand$minecraft:shield`、`use_offhand$minecraft:shield` | 使用物品 ID 为 minecraft:shield （其实就是原版盾牌）的物品时播放 | `$` 加物品 ID  |
| `use_mainhand#minecraft:dirt`、`use_offhand#minecraft:dirt`  | 使用标签为 minecraft:dirt （原版的泥土、草方块均有此标签）物品时播放 | `#` 加物品标签 |

#### b. 挥动动画

因为原版中，玩家只能左键挥动主手，故左键挥动不区分左右，统一以 `swing` 开头，后面可以通过 `$` 加物品 ID 或者 `#` 加物品标签的方式添加挥动动画。

这里只给出几个示例，你可以添加无限多个自定义动画：
|           名称           |                             作用                             | 备注           |
| :----------------------: | :----------------------------------------------------------: | -------------- |
| `swing$minecraft:shield` | 手持物品 ID 为 minecraft:shield （其实就是原版盾牌）左键挥动时播放 | `$` 加物品 ID  |
|  `swing#minecraft:dirt`  | 手持标签为 minecraft:dirt （原版的泥土、草方块均有此标签）左键挥动时播放 | `#` 加物品标签 |

#### c. 持有动画

持有动画会在玩家持有物品（此时物品没有使用或挥动）时播放。挥动动画有主手副手之分，以 `hold_mainhand` 或 `hold_offhand` 开头，**遵循主手优先原则**。后面通过 `$` 加物品 ID 或者 `#` 加物品标签的方式添加持有动画。

由于原版的充能十字弓和抛出的鱼竿比较特殊，无法通过物品 ID 或者物品 tag 识别，故特意为其添加了固定名称的动画：

|                             名称                             |          作用          |
| :----------------------------------------------------------: | :--------------------: |
| `hold_mainhand:charged_crossbow`、`hold_offhand:charged_crossbow` | 手持充能十字弓时的动画 |
|                   `hold_mainhand:fishing`                    |   抛出钓鱼竿后的动画   |

这里给出几个持有物品动画的示例，你可以添加无限多个自定义动画：
|                             名称                             |                             作用                             | 备注           |
| :----------------------------------------------------------: | :----------------------------------------------------------: | -------------- |
| `hold_mainhand$minecraft:shield`、`hold_offhand$minecraft:shield` | 手持物品 ID 为 minecraft:shield （其实就是原版盾牌）无任何操作时播放 | `$` 加物品 ID  |
| `hold_mainhand#minecraft:dirt`、`hold_offhand#minecraft:dirt` | 手持标签为 minecraft:dirt （原版的泥土、草方块均有此标签）无任何操作时播放 | `#` 加物品标签 |

### 3. 并行动画

并行动画独立于前面的主动画和手部动画，分两个大类 `pre_parallel` 和 `parallel`。其中前者比主动画优先级低，会被主动画覆盖。后者比主动画游戏级高，而且采用了特殊的混合动画。

> #### 什么是混合动画？
>
> 假设有这样两个动画：A 动画让手臂弯曲 10 度，B 动画让手臂弯曲 25 度，B 动画优先级比 A 高：
>
> - 默认行为：B 完全覆盖 A 的手臂动画，最终手臂弯曲 25 度；
> - 混合动画：B 和 A 对手臂的弯曲互相叠加，最终手臂弯曲 35 度；

并行动画与主动画互相独立，也放置于 `main.animation.json` 文件中。用于制作那些无论在什么情况下均会播放的内容：尾巴、耳朵的摆动，眨眼动画等等。你还可以在并行动画中添加 molang，用来在特定情况下显示、隐藏护甲。

|                             名称                             |             作用             |   备注   |
| :----------------------------------------------------------: | :--------------------------: | :------: |
| `pre_parallel0` `pre_parallel1`<br>`pre_parallel2` `pre_parallel3`<br>`pre_parallel4` `pre_parallel5`<br>`pre_parallel6` `pre_parallel7` | 与主动画互相独立，优先级最低 | 循环播放 |
| `parallel0` `parallel1`<br>`parallel2` `parallel3`<br>`parallel4` `parallel5`<br>`parallel6` `parallel7` | 与主动画互相独立，优先级最高 | 循环播放 |

### 4. 护甲动画

护甲动画目前没有明确的放置位置，你可以放置在 `main.animation.json` 文件中。护甲动画会在玩家穿上对应护甲时播放。

所以为了做出穿戴后显示护甲动画的设计，你应该这样做：

1. 在并行动画中将所有的护甲组缩放设置为 0；
2. 制作特定的护甲动画，将特定的组缩放修改回 1；

护甲动画的命名方式和前述的手部动画几乎完全一致。原版护甲依据穿戴位置，区分为：`head`、`chest`、`legs（注意是复数）`、`feet` 四种。所有的护甲动画也以这几个名称作为前缀，后面通过 `$` 加物品 ID 或者 `#` 加物品标签的方式添加护甲动画。

这里给出几个持有护甲动画的示例，你可以添加无限多个自定义动画：

|                 名称                 |                             作用                             | 备注                               |
| :----------------------------------: | :----------------------------------------------------------: | ---------------------------------- |
|     `head$minecraft:iron_helmet`     | 玩家头盔栏穿戴 ID 为 minecraft:iron_helmet（其实就是原版铁头盔）的物品时播放 | `$` 加物品 ID                      |
| `chest$minecraft:diamond_chestplate` | 玩家胸甲栏穿戴 ID 为 minecraft:diamond_chestplate（其实就是原版钻石胸甲）的物品时播放 | `$` 加物品 ID                      |
|      `legs#forge:armor/diamond`      |    玩家护腿栏穿戴标签为 forge:armor/diamond 的物品时播放     | `#` 加物品 ID                      |
|       `feet#forge:armor/iron`        |      玩家靴子栏穿戴标签为 forge:armor/iron 的物品时播放      | `#` 加物品 ID                      |
|            `head:default`            | 玩家头盔栏穿戴任何护甲时播放。优先级最低，可以拿来做默认显示 | 同样适用于 `chest`、`legs`和`feet` |

### 5. 额外动画（轮盘动画）

以下动画是八个额外动画，额外动画需单独放置于 `extra.animation.json` 文件中，这些动画会在使用动画轮盘时进行播放。

**轮盘动画可以自定义快捷键**，直接在原版键位设置中即可添加。

|                             名称                             |             作用             |                备注                |
| :----------------------------------------------------------: | :--------------------------: | :--------------------------------: |
| `extra0` `extra1`<br>`extra2` `extra3`<br>`extra4` `extra5`<br>`extra6` `extra7` | 使用动画轮盘播放对应额外动画 | 依据动画文件设定的循环类型进行播放 |

### 6. [永恒枪械工坊](https://www.curseforge.com/minecraft/mc-mods/timeless-and-classic-guns-tac)的兼容

[永恒枪械工坊（Timeless and Classics Guns）](https://www.curseforge.com/minecraft/mc-mods/timeless-and-classic-guns-tac)模组是一个制作精良的枪械类模组，我们为其添加了动画支持。

枪械目前区分了手枪（`pistol`）、步枪（`rifle`）、火箭筒（`rpg`）三种类型，且动画设计上采用了上半身+下半身的设计，大大简化了动画的工作量。

兼容的动画需要放置于 `tac.animation.json` 文件中，这些动画会在玩家持有[永恒枪械工坊（Timeless and Classics Guns）](https://www.curseforge.com/minecraft/mc-mods/timeless-and-classic-guns-tac)模组的枪械时播放。

#### a. 下半身动画
|    名称    |              作用              |
| :--------: | :----------------------------: |
| `tac:idle` |   玩家手持武器时，下半身动画   |
| `tac:run`  | 玩家手持武器疾跑时，下半身动画 |
| `tac:walk` | 玩家手持武器行走时，下半身动画 |

#### b. 上半身动画

|          名称          |              作用               |
| :--------------------: | :-----------------------------: |
| `tac:aim:fire:pistol`  |   玩家手持手枪瞄准开火的动画    |
|  `tac:aim:fire:rifle`  |   玩家手持步枪瞄准开火的动画    |
|   `tac:aim:fire:rpg`   |   玩家手持 RPG 瞄准开火的动画   |
|    `tac:aim:pistol`    |     玩家手持手枪瞄准的动画      |
|    `tac:aim:rifle`     |     玩家手持步枪瞄准的动画      |
|     `tac:aim:rpg`      |     玩家手持 RPG 瞄准的动画     |
| `tac:hold:fire:pistol` |    玩家手持手枪腰射时的动画     |
| `tac:hold:fire:rifle`  |    玩家手持步枪腰射时的动画     |
|  `tac:hold:fire:rpg`   |    玩家手持 RPG 腰射时的动画    |
|   `tac:hold:pistol`    |      玩家手持手枪时的动画       |
|    `tac:hold:rifle`    |      玩家手持步枪时的动画       |
|     `tac:hold:rpg`     |      玩家手持 RPG 时的动画      |
|  `tac:reload:pistol`   |     玩家给手枪换弹时的动画      |
|   `tac:reload:rifle`   |     玩家给步枪换弹时的动画      |
|    `tac:reload:rpg`    |     玩家给 RPG 换弹时的动画     |
|    `tac:run:pistol`    | 玩家手持手枪疾跑时，上半身动画  |
|    `tac:run:rifle`     | 玩家手持步枪疾跑时，上半身动画  |
|     `tac:run:rpg`      | 玩家手持 RPG 疾跑时，上半身动画 |

#### c. 全身动画

趴下或爬行时，持枪姿势无法做成上半身+下半身的设计，故直接设计为全身姿势
|            名称            |           作用            |
| :------------------------: | :-----------------------: |
|     `tac:climb:pistol`     |  玩家手持手枪爬行的动画   |
|     `tac:climb:rifle`      |  玩家手持步枪爬行的动画   |
|      `tac:climb:rpg`       |  玩家手持 RPG 爬行的动画  |
| `tac:climbing:fire:pistol` | 玩家手持手枪卧射时的动画  |
| `tac:climbing:fire:rifle`  | 玩家手持步枪卧射时的动画  |
|  `tac:climbing:fire:rpg`   | 玩家手持 RPG 卧射时的动画 |
|   `tac:climbing:pistol`    | 玩家手持手枪趴下时的动画  |
|    `tac:climbing:rifle`    | 玩家手持步枪趴下时的动画  |
|     `tac:climbing:rpg`     | 玩家手持 RPG 趴下时的动画 |

#### d. 投雷动画
|          名称          |         作用         |
| :--------------------: | :------------------: |
| `tac:mainhand:grenade` | 玩家主手投雷时的动画 |
| `tac:offhand:grenade`  | 玩家副手投雷时的动画 |

## 十一、更真实的第一人称模型的兼容

[更真实的第一人称模型（First-person Model）](https://www.curseforge.com/minecraft/mc-mods/first-person-model)模组是一个模仿传统 3D 游戏中玩家视角的模组，它替换了原版的第一人称视角，使其更加的真实有趣。

![2023-07-21_00.18.jpg](https://s2.loli.net/2023/07/21/25SgTJLdlU1iYCQ.jpg)

> 请注意：因为 1.16.5 版本[更真实的第一人称模型（First-person Model）](https://www.curseforge.com/minecraft/mc-mods/first-person-model)模组并未开放 API，所以本模组**<u>仅不兼容</u>**此版本。

组名为 `AllHead` 的模型，会在渲染第一人称视角玩家时自动隐藏。如果你有帽子或者其他会阻挡第一人称视角的模型，均应放置在此组下。

玩家视角的高低由 `ViewLocator` 的旋转点控制，但是因为[更真实的第一人称模型（First-person Model）](https://www.curseforge.com/minecraft/mc-mods/first-person-model)模组强制将 X、Z 坐标限定为原点处，故只能修改玩家视角的高度。

此外，我们还提供了 `ysm.first_person_mod_hide` molang 参数。当玩家安装[更真实的第一人称模型（First-person Model）](https://www.curseforge.com/minecraft/mc-mods/first-person-model)模组，且需要隐藏玩家头部时，此参数返回为 true，否者返回 false。你可以通过它制作更复杂的第一人称隐藏功能。

## 十二、额外的配置参数

在玩家选择模型时，往往还需要一些额外的配置信息，比如**对模型整体的缩放**，或者给模型添加名称、作者、提示说明、协议等诸多内容（如下图所示）。为此我们设计了额外的配置参数来实现这样的功能。

![5.png](https://s2.loli.net/2023/06/25/Izugoi8nYCOeVpJ.png)

但是目前 Blockbench 软件本身并不支持这些自定义内容，所以你需要安装 ysm-utils 插件来做到这一点。

> 插件的下载地址：<https://share.weiyun.com/dZnnjrHb>

下载好以后，不要修改文件名，选择一个地方放置此文件。然后打开 Blockbench，依次选择：文件 -> 插件 -> 从文件加载插件。最终加载上 ysm 插件。

![6.png](https://s2.loli.net/2023/06/26/HpVFRtY8WCnP25G.png)

当菜单栏出现”是！史蒂夫“栏时，代表插件已经加载成功。

而后随便打开一个基岩版模型文件，依次点击 ”是！史蒂夫“ 菜单、添加信息，你就可以打开如下界面添加额外信息了。填写完毕后点击确认，并且记得再次按下 `Ctrl S` 保存文件。

![7.png](https://s2.loli.net/2023/06/26/rWVOmgHaB2jTpQd.png)

## 十三、相关指令 

模组全部采用 `/ysm` 开头的指令，均需要 OP 2 等级权限才可以使用。所有的指令添加了游戏内的提示功能，所有模型 ID 、玩家 ID 即可智能提示。

- `/ysm model reload` 重载全部模型文件：同时还会将模型文件向所有客户端玩家全部同步一次；
- `/ysm manage` 打开模型管理界面，需要 OP 4 权限才可以使用；
- `/ysm model set <player> <model_id> <texture_id> [ignore_auth]` 将特定模型、材质赋予给某个玩家，最后的 `ignore_auth` 参数是可选参数，当设置为 true 时，会无视模型授权，强制为玩家赋予模型；
- `/ysm play <player> <animation_name>` 强制玩家播放 xxx 动画；
- `/ysm play <player> stop` 清除之前强制玩家播放的动画；
- `/ysm auth <player> all` 向玩家授权全部模型；
- `/ysm auth <player> clear` 清除玩家所有授权模型；
- `/ysm auth <player> add <model_id>` 向玩家授权 xxx 模型；
- `/ysm auth <player> remove <model_id>` 清除玩家授权的 xxx 模型；
- `/ysm export <model_id>` 将某个模型导出成 ysm 专属模型格式。

## 十四、MoLang 语法拓展和介绍

MoLang 是 mojang 官方为基岩版动画设计的一种极其简单的语言，我们可以通过 MoLang 实现各种复杂的动画。

为了更加清晰的说明什么是 MoLang，以及理解它的机制，我们从基岩版动画的机制说起。

基岩版动画的机制非常简单，在不同的时间点新建关键帧，设定某个组件的位置/旋转/缩放。当开始播放动画时，程序就会自动计算出补间动画，使组件从某个地方移动/旋转/缩放到另一个地方，从而做出动画的效果。

![5.png](https://s2.loli.net/2023/02/11/xykIWa7bTqSBnfm.png)

我们给每个关键帧设置的是一个具体的数字，决定了播放到此关键帧时，组件所处的位置/旋转的角度/缩放的大小

![6.png](https://s2.loli.net/2023/02/11/Uz8XTsCNJMcb3tZ.png)

但是一些特殊情况下，这个数字不一定是固定的。比如我们期望玩家手持物品时摆动角度为 30 度，但空手时摆动角度为 60 度，这时我们就可以使用 MoLang 表达式了。

一个常用的动画设计是显示/隐藏模型，比如我们期望在玩家穿戴头盔时，显示头盔组件。我们可以使用缩放功能来隐藏组件，当组件的 X Y Z 缩放均为 0 时，该组件就被隐藏了，所以我们可以在 BlockBench 里面这么写：

![7.png](https://s2.loli.net/2023/02/11/1gAHJNZfwmu6qzL.png)

这里的 `ysm.has_helmet` 就是一个 MoLang 参数，它会在玩家穿戴头盔时返回数字 1，而在没有穿戴头盔时返回数字 0，正好做到了我们想要的隐藏/显示功能。

一直以来，长发模型是一个极为头疼的问题。当玩家抬头时，长长的头发就会随头转动，直戳戳的穿入玩家的身体内。我们也可以用 MoLang 来巧妙的解决这个问题。思路如下：

1. 当玩家仰头时，头发不再随头转动，而是垂直向下（也就是头发旋转角度与头部正好相反，互相抵消）
2. 当玩家俯看时，头发随头转动（也就是旋转角度为 0）

那么我们就可以这样书写 MoLang 参数：

![8.png](https://s2.loli.net/2023/02/11/POS9uIYbKBfJwxi.png)

我们来逐条介绍这个参数的意思：

这是一个条件式的写法，它的格式是这样写的 `判断条件 ? 如果符合时返回的结果 : 如果不符时返回的结果`

```molang
(ysm.head_pitch > 0) ? -ysm.head_pitch : 0
```

`（ysm.head_pitch > 0）`：判断条件。玩家俯仰的角度是 -90 度到 90 度，这里判断玩家俯仰的角度是否大于 0 度，用括号括更加直观。

`-ysm.head_pitch`：当玩家俯仰角度大于 0 时（也就是抬头时），我们特意取反，把头发旋转角度抵消回去。

`0`：当玩家俯仰角度小于 0 时（也就是俯视时），我们将其变成 0，这样头发就会随头旋转。

当然，MoLang 本身还有更为复杂的用法，这里我们暂时不再赘述。

如果你想知道目前所有可用的 MoLang 变量，直接在游戏内按下 `Alt B` 快捷键，即可打开如下界面（如果显示不下，请在原版游戏设置中设置 GUI 缩放大小）：

![4.png](https://s2.loli.net/2023/06/25/tCbrNwy3OG2iKSe.png)

你也可以在下表中找到所有的变量：

|               变量名                |                             简介                             |
| :---------------------------------: | :----------------------------------------------------------: |
|                `PI`                 |                           π，常量                            |
|                 `E`                 |                        自然对数，常量                        |
|         `query.actor_count`         |                           实体数量                           |
|          `query.anim_time`          |         当前动画播放时间（秒），如果动画未播放则为 0         |
|       `query.body_x_rotation`       |                玩家身体 X 旋转角度，默认为 0                 |
|       `query.body_y_rotation`       |                玩家身体 Y 旋转角度，默认为 0                 |
|     `query.cardinal_facing_2d`      |   玩家朝向（忽略上下朝向，北=2.0，南=3.0，西=4.0，东=5.0）   |
|    `query.distance_from_camera`     |                     玩家和镜头之间的距离                     |
|       `query.equipment_count`       |          玩家装备的护甲数量（0-4），不考虑手持物品           |
|    `query.eye_target_x_rotation`    |                玩家视角 X 旋转角度，默认为 0                 |
|    `query.eye_target_y_rotation`    |                玩家视角 Y 旋转角度，默认为 0                 |
|        `query.ground_speed`         |                      玩家速度（米/秒）                       |
|          `query.has_cape`           |              玩家有披风时为 true，否则为 false               |
|          `query.has_rider`          |              玩家被骑乘时为 true，否则为 false               |
|       `query.head_x_rotation`       |                玩家头部 X 旋转角度，默认为 0                 |
|       `query.head_y_rotation`       |                玩家头部 Y 旋转角度，默认为 0                 |
|           `query.health`            |                           玩家血量                           |
|          `query.hurt_time`          |                    玩家受伤计时，默认为 0                    |
|          `query.is_eating`          |             玩家正在进食时为 true，否则为 false              |
|       `query.is_first_person`       |         玩家处于第一人称视角时为 true，否则为 false          |
|         `query.is_in_water`         |              玩家在水中时为 true，否则为 false               |
|     `query.is_in_water_or_rain`     |           玩家在水中或雨中时为 true，否则为 false            |
|         `query.is_jumping`          |               玩家跳跃时为 true，否则为 false                |
|         `query.is_on_fire`          |               玩家着火时为 true，否则为 false                |
|        `query.is_on_ground`         |              玩家在地面时为 true，否则为 false               |
|       `query.is_playing_dead`       |             玩家濒死状态时为 true，否则为 false              |
|          `query.is_riding`          |               玩家骑乘时为 true，否则为 false                |
|         `query.is_sleeping`         |               玩家睡觉时为 true，否则为 false                |
|         `query.is_sneaking`         |               玩家潜行时为 true，否则为 false                |
|        `query.is_spectator`         |           玩家是观察者模式时为 true，否则为 false            |
|        `query.is_sprinting`         |               玩家疾跑时为 true，否则为 false                |
|         `query.is_swimming`         |               玩家游泳时为 true，否则为 false                |
|        `query.is_using_item`        |           玩家正在使用物品时为 true，否则为 false            |
|    `query.item_in_use_duration`     | 从 0 开始持续计数，直到该物品的最大可使用时长（秒），默认为 0 |
|    `query.item_max_use_duration`    |         所使用的物品的最大可使用时长（秒），默认为 0         |
| `query.item_remaining_use_duration` |         所使用的物品的剩余可使用时长（秒），默认为 0         |
|          `query.life_time`          |        当前动画播放了多久（秒），如果动画未播放则为 0        |
|         `query.max_health`          |                        玩家的最大血量                        |
|   `query.modified_distance_moved`   |                 玩家水平移动距离的总数（米）                 |
|         `query.moon_phase`          |                       当前月相（0-7）                        |
|        `query.player_level`         |                   玩家的经验等级，默认为 0                   |
|         `query.time_of_day`         |    一天中的时间（午夜=0，日出=0.25，正午=0.5，日落=0.75）    |
|         `query.time_stamp`          |                     当前所处世界的时间戳                     |
|       `query.vertical_speed`        |      玩家移动中垂直分量的速度（米/秒），朝上移动为正数       |
|        `query.walk_distance`        |                 玩家步行移动距离的总数（米）                 |
|          `query.yaw_speed`          |                   实体 Y 角度旋转时的速度                    |
|          `ysm.armor_value`          |                        护甲值（0-20）                        |
|          `ysm.has_helmet`           |             玩家穿戴头盔时为 true，否则为 false              |
|        `ysm.has_chest_plate`        |             玩家穿戴胸甲时为 true，否则为 false              |
|         `ysm.has_leggings`          |             玩家穿戴护腿时为 true，否则为 false              |
|           `ysm.has_boots`           |             玩家穿戴靴子时为 true，否则为 false              |
|         `ysm.has_mainhand`          |           玩家主手持有物品时为 true，否则为 false            |
|          `ysm.has_offhand`          |           玩家副手持有物品时为 true，否则为 false            |
|         `ysm.is_close_eyes`         |            默认为 false，当玩家需要眨眼返回 true             |
|          `ysm.is_riptide`           |           玩家处于激流状态时为 true，否则为 false            |
|          `ysm.has_elytra`           |            玩家穿戴鞘翅时返回 true，否则为 false             |
|         `ysm.elytra_rot_x`          |                    玩家鞘翅的 X 旋转角度                     |
|         `ysm.elytra_rot_y`          |                    玩家鞘翅的 Y 旋转角度                     |
|         `ysm.elytra_rot_z`          |                    玩家鞘翅的 Z 旋转角度                     |
|          `ysm.food_level`           |                        返回玩家饥饿值                        |
|     `ysm.first_person_mod_hide`     | 当玩家安装更真实的第一人称模型模组，且需要隐藏玩家头部时为 true，否者为 false |
