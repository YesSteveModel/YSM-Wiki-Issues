# Yes Steve Model 模组使用说明

## 一、简介

Yes Steve Model 模组是一个修改原版玩家模型的 `Minecraft Forge 和 Fabric` 模组，它能够使用 Minecraft 基岩版模型和动画文件。从而使玩家能够随心所欲的自定义玩家模型和动画。

> 目前最新版的 Yes Steve Model 版本号为 **2.2.1**
>
> 同时支持 1.16.5/1.18.2/1.19.2/1.20.1 Forge，1.16.5/1.18.2/1.19.2/1.20.1/1.21 Fabric 和 1.21 NeoForge 共计十个版本。

> **温馨提醒：**
>
> - 本模组 1.16.5/1.18.2 Forge 版本添加了对[永恒枪械工坊](https://www.curseforge.com/minecraft/mc-mods/timeless-and-classic-guns-tac)模组的兼容，但需要 **0.3.7** 及以上版本的[永恒枪械工坊](https://www.curseforge.com/minecraft/mc-mods/timeless-and-classic-guns-tac)模组才可以，否则游戏内持枪会导致游戏崩溃。
> - 本模组 1.18.2/1.19.2/1.20.1 Forge 版本添加了对[永恒枪械工坊：零](https://www.curseforge.com/minecraft/mc-mods/timeless-and-classics-zero)模组的兼容。
> - 本模组虽然添加了对[更真实的第一人称模型](https://www.curseforge.com/minecraft/mc-mods/first-person-model)模组的兼容，但仍旧存在些许错误。
> - 本模组 2.2.1 版本添加了对 Oculus(Forge) 和 Iris(Fabric) 模组 PBR 材质的支持。
> - 本模组添加了对[拔刀剑](https://www.curseforge.com/minecraft/mc-mods/slashblade)的渲染的支持，2.2.1 版本还支持[拔刀剑：重锋](https://www.curseforge.com/minecraft/mc-mods/slashblade-resharped)。
> - 2.2.1 版本支持[时装工坊](https://www.curseforge.com/minecraft/mc-mods/armourers-workshop)的盔甲和鞘翅插槽。
> - 最新版（1.2.0 及以上版本）解决了模型包文件过大的问题，现在你可以放心使用大于 2MB 大小的模型包了。

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

- 对[Carry On](https://www.curseforge.com/minecraft/mc-mods/carry-on)模组的兼容：能够在玩家抱起其他方块、实体时播放对应动画。1.19.2 和 1.20 版本的 Carry On 模组甚至可以抱起玩家，所以你可以在服务器与你的好友**培养感情**。

![2.jpg](https://s2.loli.net/2024/02/14/71QyVR6NSHmbdo3.jpg)

- [拔刀剑](https://www.curseforge.com/minecraft/mc-mods/slashblade)模组的兼容：可以渲染特定的主副手拔刀剑，但挥动动作还无法自定义。

![1.jpg](https://s2.loli.net/2024/02/14/LfQxMCZKNAtzsOG.jpg)

## 二、怎么使用此模组

### 1. Forge 版本的说明

当玩家首次进入服务器后等待十几秒（模型同步的耗时），即可使用快捷键 `Alt` + `Y` 打开如下 GUI 界面：

![1.png](https://s2.loli.net/2023/06/25/Ya7DMmKToSneN6L.png)

**① 模型切换按钮**：点击即可切换为对应的模型。如果按钮背景为灰色，说明该模型未授权。左上角的数字代表该模型可切换的材质数量。

**② 模型类别切换按钮**：可以切换所有模型、已授权模型、收藏模型。

**③ 详情界面按钮**：点击可进入模型详情界面，查看模型所有可用材质和动画。中间的预览窗口可以使用鼠标左键拖拽旋转模型、鼠标右键拖拽移动模型、鼠标滚轮滑动缩放模型。点击右侧材质选择框可以选择不同的材质。点击左侧动画列表，可以预览播放不同的动画。

![3.png](https://s2.loli.net/2023/02/11/UxtCNy9wEg1XjSI.png)

2.2.1 版本还添加了作者详情界面，点击模型界面左上角“打开详情界面”按钮，即可打开如下界面：

![2024-06-23_21.24.png](https://s2.loli.net/2024/06/23/5ePDTnrBchwyzq8.png)

### 2. Fabric 版本的说明

> Fabric 由**番茄布丁**（https://github.com/TomatoPuddin）全力完成迁移工作！请向他表示崇高的敬意！

Fabric 版本绝大部分功能和 Forge 版本**完全保持一致**，并且与 Sodium、Sodium Extra、Iris、Lithium、ModernFix、FerriteCore、ServerCore、Debugify、Carpet（含 FakePlayer 功能）等模组均进行过兼容性测试，稳定性良好。

Fabric 版本需要两个运行前置：

- [Fabric Api](https://www.mcmod.cn/class/3124.html)
- [Forge Config Api Port](https://www.mcmod.cn/class/5510.html)（2.2.1 版本起不再需要安装）

同时与两个模组拥有兼容互动内容：

- [First-Person Model](https://www.mcmod.cn/class/4391.html)（添加了更好的第一人称视角兼容）
- [Amecs](https://www.mcmod.cn/class/2003.html)（支持和 Forge 版本一致的组合快捷键）
- [Modern KeyBinding](https://www.curseforge.com/minecraft/mc-mods/modern-keybinding-fabric)（另一款支持和 Forge 版本一致的组合快捷键，自 2.2.1 版本起支持）

Fabric 仅在按键方面与 Forge 版存在些许不同。因为 Fabric 的按键绑定接口不支持 Ctrl / Alt / Shift 组合键，需要安装 [Amecs](https://www.mcmod.cn/class/2003.html) 模组才能支持。但是该模组与常用模组 [Controlling](https://www.mcmod.cn/class/1191.html) 冲突，所以最终将该模组设计为可选模组，交给用户自己选择安装。

或者可以选择安装 [Modern KeyBinding](https://www.curseforge.com/minecraft/mc-mods/modern-keybinding-fabric) 模组，该模组不会与 [Controlling](https://www.mcmod.cn/class/1191.html) 冲突。

- 安装了 Amecs 时通过该模组的接口注册与 Forge 版相同的按键绑定；
- **未安装该模组时注册不含修饰键的按键绑定。如按 Y 直接打开模型选择页，无需 Alt**。

## 三、支持什么格式

Yes Steve Model 模组采用了 `geckolib` 作为核心，所以它支持 `geckolib` 兼容的`基岩版 1.12.0 及以上 `版本模型文件和`基岩版 1.8.0 `版本动画文件。

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

> 2.2.1 版本开始，为了解决众多玩家喜欢修改文件名，或者目录下套多层文件夹的做法。我们修改了文件读取逻辑。
>
> 
>
> 现在只要是在 `custom` 或者 `auth` 目录下，无论套几层子文件夹（最大 16 层），无论是文件夹、压缩包、ysm 格式，都能正确识别。同时文件名支持任意字符（包括中文）。

## 五、如何开始

因为压缩包格式和 ysm 格式的模型都是文件夹格式模型转换而来的，这里我们直接以文件夹形式格式讲解。

### 1.2.0 及以前版本

文件夹格式模型结构如下所示，这其中只有三个部分是必须的：`main.json`，`arm.json`，任意一个 `png` 格式的材质。

```
custom（或 auth）文件夹
│
└─default                    模型包文件夹，游戏将会以此文件夹名作为模型 ID
    │ 
    ├─info.json              信息文件，用来在游戏内显示作者、名称、授权等信息
    ├─main.json              主模型文件（固定名称）
    ├─arm.json               手臂模型文件，用于第一人称手臂的显示（固定名称）
    ├─arrow.json             箭模型文件，如果有这个文件，会替换玩家射出的箭的模型（固定名称）
    ├─main.animation.json    主模型文件的动画文件（固定名称）
    ├─extra.animation.json   轮盘动画文件（固定名称）
    ├─arm.animation.json     手部动画文件（固定名称）
    ├─arrow.animation.json   箭的动画文件（固定名称）
    ├─tac.animation.json     与永恒枪械模组的兼容动画文件（固定名称）
    ├─carryon.animation.json 与 Carry On 模组的兼容动画文件（固定名称）
    ├─arrow.png              箭的贴图（固定名称）
    ├─happy_skin.png         主模型文件贴图1（名称可自定义，会作为游戏内显示名称）
    ├─...                    任意多个贴图文件
    └─good_cloth_12.png      主模型文件贴图2（名称可自定义，会作为游戏内显示名称）    
```

自定义模型、动画、材质文件均需放置在一个文件夹中。文件夹、材质名称等只能使用 `小写英文字符、数字、下划线` 等字符。

### 2.2.1 版本及以后

旧版本的设计在文件数量较多时极其混乱。故从 2.2.1 版本起，我们设计了一套新的文件结构，通过目录下的 `ysm.json` 文件统一管理其他资源，推荐的目录结构如下：

```
模型文件夹
│
├───ysm.json                      资源描述文件，固定名称，固定位置 
│
├───animations                    动画文件夹，推荐用此名称，支持任意字符，可以自定义
│      ├─arm.animation.json       各种文件名称没有限制，可以使用任意字符
│      ├─弓箭动画.json
│      ├─carryon.animation.json
│      ├─extra.animation.json
│      ├─main.animation.json
│      └─tac.animation.json
│
├───avatar                        作者头像文件夹，推荐用此名称，支持任意字符，可以自定义
│      ├─端木.png
│      ├─哥斯拉.png
│      ├─海螺.png
│      └─甜粽子.png
│
├───models                        模型文件夹，推荐用此名称，支持任意字符，可以自定义
│      ├─arm.json
│      ├─箭.json
│      └─main.json
│
└───textures                      材质文件夹，推荐用此名称，支持任意字符，可以自定义
       ├─arrow.png
       ├─蓝色材质.png
       └─默认材质.png
```

除资源描述文件 `ysm.json` 为固定名称，固定位置文件。自定义模型、动画、材质文件等均可以依据所需放置在不同的子文件夹中，文件夹、材质名称等也可以使用任意字符。

新版设计中的资源描述文件 `ysm.json` 支持如下内容：

- 支持设置默认材质和材质文件的展示顺序；
- 支持设置预览动画，在模型选择界面播放（旧版统一为 idle）；
- 支持自定义 Extra 动画的数量、顺序、名称（不再限制为 extra+数字）；
- 支持读取模型目录内的子目录文件。
- 支持插入作者信息，并分配头像、角色、简介、联系方式
- 支持插入主页和捐赠网页信息
- 支持 PBR 材质指定

`ysm.json` 必须放在文件夹根目录下，且需要使用 UTF-8 无 BOM 编码保存，其内容结构如下：

```json
{
  // 版本信息字段，当前必须为 2，此版本添加了 PBR 的支持
  "spec": 2,
  // 可选字段，会作为游戏内模型切换界面的文本提示和详情界面显示出来
  "metadata": {
    // 只有 name 是必选字段，其它都是可选
    "name": "自定义名称",
    // 接受用 \n 进行换行
    "tips": "描述",
    "license": {
      // 必选字段
      "type": "CC 0",
      // 接受换行
      "desc:": "更多许可描述"
    },
    // 读取时保留顺序
    "authors": [
      {
        // 只有 name 是必选字段，其它都是可选
        "name": "作者1",
        // 模型详情页展示作者头像
        "avatar": "avatar/头像.png",
        "role": "角色（如：模型/动画）",
        // 支持任意类型，不局限于给出的这两个。读取时保留顺序
        "contact": {
          "qq": "123456789",
          "email": "123456789@qq.com"
        },
        // 不接受换行
        "comment": "备注"
      },
      // 可以添加多个作者
      {
        "name": "作者2"
      }
    ],
    // 目前仅支持这两个
    "link": {
      "home": "https://主页链接",
      "donate": "https://捐赠链接"
    }
  },
  // 可选字段，内部所有字段都是可选
  "properties": {
    // 模型缩放，默认为 0.7
    "height_scale": 0.7,
    // 模型缩放，默认为 0.7
    "width_scale": 0.7,
    // 可任意调整数量、顺序和名称（不局限于 extra+数字）。读取时保留顺序
    // 不限数量，超过 8 个也能正常播放了
    "extra_animation": {
      "extra0": "",
      "extra1": "打招呼",
      "run": "润",
      "walk": "跑路",
      "extra4": "",
      "extra5": "",
      "extra6": "",
      "extra7": ""
    },
    // 在模型选择界面播放的预览动画
    "preview_animation": "idle",
    // 默认材质名称（不含路径和后缀.png），在模型选择界面展示，以及在玩家切换至该模型时默认使用。
    "default_texture": "default",
    // 此字段为 true 后，无法将其设置为授权模型
    "free": false
  },
  // 必须的字段
  "files": {
    // 主模型文件
    "player": {
      "model": {
        // 路径和文件名都可以自定义，注意严格区分大小写，即使是在 windows 上
        "main": "models/main.json",
        "arm": "models/arm.json"
      },
      // 可选字段，内部五个字段也都是可选
      // 没有的话，会自动调用默认模型
      "animation": {
        "main": "animations/main.animation.json",
        "arm": "animations/arm.animation.json",
        "extra": "animations/extra.animation.json",
        "tac": "animations/tac.animation.json",
        "carryon": "animations/carryon.animation.json"
      },
      // 读取时保留顺序
      "texture": [
        // 可以直接书写材质路径
        "textures/default.png",
        // 也可以写成这样的形式
        {
          // 仅 uv 字段必选，以下两种 PBR 材质为可选
          "uv": "textures/blue.png",
          // Oculus 和 Iris PBR 支持
          "normal": "textures/pbr/blue_n.png",
          "specular": "textures/pbr/blue_s.png"
        }
      ]
    },
    // 可选字段，替换箭的渲染
    "arrow": {
      "model": "models/arrow.json",
      // 可选字段
      "animation": "animations/arrow.animation.json",
      // 同样支持 PBR
      "texture": "textures/arrow.png"
    }
  }
}
```

## 六、其他格式的转换

你也可以把这些自定义模型、动画、材质文件全部打包成 zip 格式的文件**（不要错误的打包了文件夹）**，文件名还是需要遵循上述规定。

在游戏内输入`/ysm export <model_id>` 指令，即可将某个文件夹格式的模型导出成 ysm 专属模型格式。这个模型格式进行了加密，并做了安全性校验，可以有效避免模型被第三方人员破解。

ysm 模型格式遵循**向下兼容**的原则，即新版本模组可以加载旧版本 ysm 格式文件，但旧版本模组不会加载新版 ysm 格式文件。

当你用原版记事本打开新版本模组（1.2.0 及以后版本）导出的 ysm 文件，你可以看到如下信息。这些信息无法被修改，如果强行修改，模组会拒绝加载此文件。

![2.png](https://s2.loli.net/2024/02/14/xKGce38hmoJtMEQ.png)

## 七、主模型的制作

~~Yes Steve Model 模组主模型文件命名必须为 `main.json`。~~ 2.2.1 版本起主模型文件不再有名称限制，使用新版格式时可以随便指定其名称。

其使用的动画文件进行了标准化设计，只需要按照特定的布局方式来制作，即可自动兼容。

在运行游戏后，游戏主目录下的 `config\yes_steve_model\custom\default` 文件夹下会自动生成模型标准模型和动画文件**（该文件夹的模型为 CC 0 协议发布，可以自由修改分发）**，你可以在其基础上进行二次修改和分发。

某些特定组名会被游戏自动添加某些特殊功能：

|                             组名                             |                             说明                             |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
|                            `Head`                            |              游戏会默认添加头部随视角摆动的动画              |
|                          `AllHead`                           |     更真实的第一人称模型模组中，会默认隐藏此分组下的模型     |
|                      `LeftHandLocator`                       | 左手手持物品的定位组<br/>没有此组就不会渲染副手物品<br>由`LeftHandLocator`的旋转点定位手持物品，对其应用缩放、旋转和位移动画可以修改手持物品的大小、朝向和位置 |
|                      `RightHandLocator`                      | 右手手持物品的定位组<br/>没有此组就不会渲染主手物品<br/>由`RightHandLocator`的旋转点定位手持物品，对其应用缩放、旋转和位移动画可以修改手持物品的大小、朝向和位置 |
|                       `ElytraLocator`                        | 鞘翅的定位组<br/>没有此组就不会渲染鞘翅<br/>由`ElytraLocator`的旋转点定位鞘翅，对其应用缩放、旋转和位移动画可以修改鞘翅的大小、朝向和位置 |
|         `LeftShoulderLocator` `RightShoulderLocator`         | 鹦鹉的定位组<br/>没有此组就不会显示鹦鹉<br/>由这两个组的旋转点定位鹦鹉的渲染，对其应用缩放、旋转和位移动画可以修改鹦鹉的大小、朝向和位置 |
|                      `LeftWaistLocator`                      | 主手（我没写错）持有拔刀剑时，拔刀剑的渲染定位组<br>没有此组将不会显示主手拔刀剑 |
|                     `RightWaistLocator`                      | 副手（我没写错）持有拔刀剑时，拔刀剑的渲染定位组<br>没有此组将不会显示副手拔刀剑 |
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

## 九、自定义箭模型的制作

1.2.0 及以后的版本中新增了自定义箭模型的功能，玩家切换模型时，射出的箭（弩箭也一样）会被替换成自定义的模型。如果没有此自定义模型，那么还是会显示为原版箭模型。

箭相关文件名称固定，模型为 `arrow.json`，贴图为 `arrow.png`，动画为 `arrow.animation.json`。其中动画文件可以不添加，将会自动调用默认动画（但是默认动画也是空的……）。

`arrow.animation.json` 动画文件中包含了如下几个动画：

|                             名称                             |           作用           |        备注        |
| :----------------------------------------------------------: | :----------------------: | :----------------: |
|                           `water`                            |    当箭射入水中时播放    |      循环播放      |
|                            `fire`                            | 当箭射入熔岩，火中时播放 |      循环播放      |
|                           `ground`                           |    当箭插入地面时播放    |      循环播放      |
|                            `air`                             | 当箭正常在空中飞行时播放 |      循环播放      |
| `parallel0` `parallel1`<br/>`parallel2` `parallel3`<br/>`parallel4` `parallel5`<br/>`parallel6` `parallel7` |         并行动画         | 独立动画，循环播放 |

箭矢动画可以使用和玩家动画相同的 molang 参数，但是不一定都有意义。

## 十、贴图文件的制作

- 材质使用 `png` 格式材质，不建议使用**半透明**贴图，这会造成各种渲染错误；
- ~~材质文件名只能使用 `小写英文字符、数字、下划线` 等字符，其他没有限制；~~
  - 2.2.1 版本起，只要使用新版格式，材质名称不再有限制；

- 模型支持多个贴图，~~你可以放置若干份贴图文件，游戏均会智能识别。~~
  - 2.2.1 版本起，只要使用新版格式，需要在 `ysm.json` 里指定材质；

- ~~名称为 `arrow.png` 的贴图是专为箭提供的贴图，固定名称，不可修改。~~
  - 2.2.1 版本起，只要使用新版格式，需要在 `ysm.json` 里指定箭的材质；

## 十一、动画文件的制作

动画文件是可选选项。没有动画文件，或者缺失部分动画时，游戏均会智能调用默认的动画文件。如果你的模型是按照默认模型二次修改的，那么即可完美兼容。

> 2.2.1 版本起，以`——`开头名称的动画会被认为是注释，不会在游戏内详情界面显示

**游戏内只有一个动画是代码添加的，不可修改**~~（历史遗留问题）~~：

- 头部随鼠标摆动的动画：智能识别 `Head` 分组添加的动画

> 如果你不喜欢这个代码控制的动画，只需要将头部分组起个其他的名字即可

### 1. 主动画

如下动画是自定义的主动画,放置于 `main.animation.json` 文件中，可进行二次修改：

|       名称       |              作用              |        备注        |
| :--------------: | :----------------------------: | :----------------: |
|      empty       | 调试动画，**不要进行任何修改** |       空动画       |
|       walk       |     在玩家普通行走时的动画     |      循环播放      |
|       run        |       在玩家疾跑时的动画       |      循环播放      |
|     climbing     |      玩家在活板门下的动画      |      循环播放      |
|      climb       | 玩家在活板门下，并且爬行的动画 |      循环播放      |
|     sneaking     |   玩家潜行，但不移动时的动画   |      循环播放      |
|      sneak       |   玩家潜行，并且行走时的动画   |      循环播放      |
|       swim       |        玩家游泳时的动画        |      循环播放      |
|    swim_stand    |   玩家在水中站立式游泳的动画   |      循环播放      |
|     attacked     |       玩家被攻击时的动画       |      单次播放      |
|       jump       |        玩家跳跃时的动画        |      循环播放      |
|       fly        | 玩家在创造模式飞行时播放的动画 |      循环播放      |
|    elytra_fly    |    玩家鞘翅飞行时播放的动画    |      循环播放      |
|       boat       |      玩家坐在船上时的动画      |      循环播放      |
|   use_mainhand   |    玩家使用右手时播放的动画    |      单次播放      |
|   use_offhand    |    玩家使用左手时播放的动画    |      单次播放      |
|    swing_hand    |    玩家挥动主手时播放的动画    |      单次播放      |
|  swing_offhand   |    玩家挥动副手时播放的动画    |      单次播放      |
|      sleep       |        玩家睡觉时的动画        |      循环播放      |
|       ride       |     玩家骑马（驴）时的动画     |      循环播放      |
|     ride_pig     |        玩家骑猪时的动画        |      循环播放      |
|       sit        |        玩家坐下时的动画        |      循环播放      |
|       idle       |       无任何操作时的动画       |      循环播放      |
|     riptide      |  玩家使用“激流”三叉戟时的动画  |      循环播放      |
|      death       |        玩家死亡时的动画        | 单次播放，1 秒时长 |
|    ladder_up     |         爬梯动画，向上         |      循环播放      |
| ladder_stillness |       爬梯动画，静止不动       |      循环播放      |
|   ladder_down    |         爬梯动画，向下         |      循环播放      |

### 2. 手部动画

手部动画独立于主动画，放置于 `arm.animation.json` 文件中。会在玩家左键、右键时播放，所以它会覆盖主动画。你不应该在手部动画中添加其他与手部无关的组的动画。当没有如下的手部动画时，游戏会调用默认的 `use_mainhand` `use_offhand` `swing_hand` 等动画。

这里先补充几个 Minecraft 原版知识：

- 主手：英文为 mainhand，在游戏内默认为右手；
- 副手：英文为 offhand，在游戏内默认为左手；
- 使用：英文为 use，部分物品在玩家手持时，按下右键能够使用。比如食物、药水、弓箭、盾牌等。只要是能够使用的物品，无论在左手还是右手、均可以鼠标右键触发使用；
- 挥动：英文为 swing，玩家鼠标左键点击即会触发挥动。玩家大部分情况下**只能挥动主手**。
- 持有：英文为 hold，玩家主手或副手持有任何物品，且不进行任何操作时，即为持有状态。
- 物品 ID：在游戏内按下 `F3 H` 快捷键就能打开物品 ID 显示，如下图所示。原版每种物品都有自己的 ID；

![3.png](https://s2.loli.net/2023/06/25/BTo2G4dPbK5SlAq.png)

- 标签：对于同一类（比如所有的剑）物品，原版提供了标签（tag）系统，这一块需要通过 [wiki](https://minecraft.fandom.com/zh/wiki/%E6%A0%87%E7%AD%BE) 查询。

通过特定的动画名，你可以很方便的添加自定义的使用、挥动动画，其格式如下：

#### a. 使用动画

使用动画默认自带了 10 个内部分类动画，这些动画一般情况下能兼容其他模组：

|                       名称                        |                      作用                      |
| :-----------------------------------------------: | :--------------------------------------------: |
|       `use_mainhand:eat`、`use_offhand:eat`       |           食用食物时播放，约 1.5 秒            |
|     `use_mainhand:drink`、`use_offhand:drink`     |      饮用药水、牛奶桶等时播放，约 1.5 秒       |
|   `use_mainhand:shield`、`use_mainhand:shield`    |               玩家使用盾牌时播放               |
|     `use_mainhand:block`、`use_offhand:block`     |     玩家处于防御状态（比如使用盾牌）时播放     |
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

因为原版中，玩家只能左键大部分情况下只能挥动主手，故左键挥动名称有所不同。主手的挥动统一以 `swing` 开头，后面可以通过 `$` 加物品 ID 或者 `#` 加物品标签的方式添加挥动动画。副手则是以 `swing_offhand` 开头。

挥动动画播放较为特殊，**即使玩家停止挥动，挥动动画也不会中断**，直至播放完毕。

挥动动画默认自带了 6 个内部分类动画，这些动画一般情况下能兼容其他模组：
|                        名称                        |         作用         |
| :------------------------------------------------: | :------------------: |
|          `swing:axe`、`swing_offhand:axe`          |    挥动斧子时播放    |
|      `swing:pickaxe`、`swing_offhand:pickaxe`      |    挥动镐子时播放    |
|       `swing:shovel`、`swing_offhand:shovel`       |    挥动铲子时播放    |
|          `swing:hoe`、`swing_offhand:hoe`          |    挥动锄头时播放    |
|       `swing:shield`、`swing_offhand:shield`       |    挥动盾牌时播放    |
| `swing:throwable_potion`、`swing:throwable_potion` | 丢出投掷型药水时播放 |

挥动动画还支持通过物品 ID 或者标签来制作自定义动画。这里只给出几个示例，你可以添加无限多个自定义动画：

|           名称           |                             作用                             | 备注           |
| :----------------------: | :----------------------------------------------------------: | -------------- |
| `swing$minecraft:shield` | 手持物品 ID 为 minecraft:shield <br>（其实就是原版盾牌）挥动时播放 | `$` 加物品 ID  |
|  `swing#minecraft:dirt`  | 手持标签为 minecraft:dirt <br/>（原版的泥土、草方块均有此标签）挥动时播放 | `#` 加物品标签 |

#### c. 持有动画

持有动画会在玩家持有物品（此时物品没有使用或挥动）时播放。当玩家切换不同的物品时，持有动画都会从头播放一次，从而做出切换武器的动画效果。建议使用较长时长的动画。

持有动画有主手副手之分，以 `hold_mainhand` 或 `hold_offhand` 开头，**可以同时播放**。后面通过 `$` 加物品 ID 或者 `#` 加物品标签的方式添加持有动画。

由于原版的充能十字弓和抛出的鱼竿比较特殊，无法通过物品 ID 或者物品 tag 识别，故特意为其添加了固定名称的动画。我们还为原版一些特殊物品增加了内部分类，一并列入其中：

|                             名称                             |            作用            |
| :----------------------------------------------------------: | :------------------------: |
|         `hold_mainhand:empty`、`hold_offhand:empty`          | 不持有任何东西时播放的动画 |
| `hold_mainhand:charged_crossbow`、`hold_offhand:charged_crossbow` |   手持充能十字弓时的动画   |
|                   `hold_mainhand:fishing`                    |     抛出钓鱼竿后的动画     |
|           `hold_mainhand:axe`、`hold_offhand:axe`            |       持有斧子时播放       |
|       `hold_mainhand:pickaxe`、`hold_offhand:pickaxe`        |       持有镐子时播放       |
|        `hold_mainhand:shovel`、`hold_offhand:shovel`         |       持有铲子时播放       |
|           `hold_mainhand:hoe`、`hold_offhand:hoe`            |       持有锄头时播放       |
|        `hold_mainhand:shield`、`hold_offhand:shield`         |       持有盾牌时播放       |
| `hold_mainhand:throwable_potion`、`hold_offhand:throwable_potion` |    持有投掷型药水时播放    |
|           `hold_mainhand:eat`、`hold_offhand:eat`            |       持有食物时播放       |
|         `hold_mainhand:drink`、`hold_offhand:drink`          |  持有药水、牛奶桶等时播放  |
|           `hold_mainhand:bow`、`hold_offhand:bow`            |       持有弓箭时播放       |
|         `hold_mainhand:spear`、`hold_offhand:spear`          |      持有三叉戟时播放      |
|      `hold_mainhand:crossbow`、`hold_offhand:crossbow`       | 持有十字弓（未充能）时播放 |
|      `hold_mainhand:spyglass`、`hold_offhand:spyglass`       |      持有望远镜时播放      |
|     `hold_mainhand:toot_horn`、`hold_offhand:toot_horn`      |      持有山羊角时播放      |
|         `hold_mainhand:brush`、`hold_offhand:brush`          |       持有刷子时播放       |

持有动画还支持通过物品 ID 或者标签来制作自定义动画。这里给出几个持有物品动画的示例，你可以添加无限多个自定义动画：
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

### 5. 骑乘动画

骑乘动画目前没有明确的放置位置，你可以放置在 `main.animation.json` 文件中。骑乘动画会在玩家骑乘其他实体，或者玩家被其他实体骑乘时播放。

骑乘动画的命名方式和前述的手部动画几乎完全一致。以 `vehicle` 或 `passenger` 作为前缀，后面通过 `$` 加实体 ID 或者 `#` 加实体标签的方式添加骑乘动画。

骑乘分两种情况：

- `vehicle` 表示载具，后面输入实体 ID。
  - 比如玩家骑在史莱姆上，那么动画名就是`vehicle$minecraft:slime`
- `passenger` 表示乘客，也就是骑在玩家头上的实体，后面输入实体 ID。
  - 比如一只狐狸骑在玩家头上，那么动画名就是`passenger$minecraft:fox`

### 6. 额外动画（轮盘动画）

~~以下动画是八个额外动画，额外动画需单独放置于 `extra.animation.json` 文件中，这些动画会在使用动画轮盘时进行播放。~~

自 2.2.1 版本起，额外动画将不再有数量限制，你可以添加任意多个额外动画。如果你使用新版文件格式，那么名称也不再固定，可以自定义。

**只有前八个轮盘动画可以自定义快捷键**，直接在原版键位设置中即可添加。

|                             名称                             |             作用             |                             备注                             |
| :----------------------------------------------------------: | :--------------------------: | :----------------------------------------------------------: |
| `extra0` `extra1`<br>`extra2` `extra3`<br>`extra4` `extra5`<br>`extra6` `extra7` | 使用动画轮盘播放对应额外动画 | 依据动画文件设定的循环类型进行播放<br>**自 2.2.1 版本起不限名称了** |

### 7. 永恒枪械工坊的兼容

[永恒枪械工坊（Timeless and Classics Guns）](https://www.curseforge.com/minecraft/mc-mods/timeless-and-classic-guns-tac)模组是一个制作精良的枪械类模组，支持 1.16.5/1.18.2 Forge 版本。

[永恒枪械工坊：零（Timeless and Classics Guns: Zero）](https://www.curseforge.com/minecraft/mc-mods/timeless-and-classics-zero)是高版本的续作，支持 1.18.2/1.19.2/1.20.1 Forge 版本。

我们同时为这两个版本的模组都添加了支持。

枪械目前区分了手枪（`pistol`）、步枪（`rifle`）、火箭筒（`rpg`）三种类型，且动画设计上采用了上半身+下半身的设计，大大简化了动画的工作量。

兼容的动画需要放置于 `tac.animation.json` 文件中，这些动画会在玩家持有永恒枪械工坊模组的枪械时播放。

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

#### e. 特殊枪械动画

前面的所有动画都以 `pistol` `rifle` `rpg` 结尾，对应特定武器的大分类。但是如果我们想给特定的枪械单独做一套 TAC 动画，该怎么办呢？

你只需要把结尾的 `:pistol` `:rifle` `:rpg` 换成 `$ `+ 枪械的物品 ID 即可。比如你想要给 AK47 单独做一个手持瞄准开火的动画时，只需要命名为 `tac:aim:fire$tac:ak47`即可。

永恒枪械工坊：零（TacZ）模组中枪械均为同一个物品，通过 NBT 中的 `GunId` 字段来区分枪械。我们也对其添加了兼容。此时写法和上述一致，只不过 `$` 后需要加枪械 ID（注意名称统一为 tacz 开头了）。

## 十二、更真实的第一人称模型的兼容

[更真实的第一人称模型（First-person Model）](https://www.curseforge.com/minecraft/mc-mods/first-person-model)模组是一个模仿传统 3D 游戏中玩家视角的模组，它替换了原版的第一人称视角，使其更加的真实有趣。

![2023-07-21_00.18.jpg](https://s2.loli.net/2023/07/21/25SgTJLdlU1iYCQ.jpg)

> 请注意：[更真实的第一人称模型（First-person Model）](https://www.curseforge.com/minecraft/mc-mods/first-person-model)模组我们只能做最低限度的兼容，所以还是会偶发性的出现一些玩家头部消失、玩家视角不对的小问题……

组名为 `AllHead` 的模型，会在渲染第一人称视角玩家时自动隐藏。如果你有帽子或者其他会阻挡第一人称视角的模型，均应放置在此组下。

玩家视角的高低由 `ViewLocator` 的旋转点控制，但是因为[更真实的第一人称模型（First-person Model）](https://www.curseforge.com/minecraft/mc-mods/first-person-model)模组强制将 X、Z 坐标限定为原点处，故只能修改玩家视角的高度。

此外，我们还提供了 `ysm.first_person_mod_hide` molang 参数。当玩家安装[更真实的第一人称模型（First-person Model）](https://www.curseforge.com/minecraft/mc-mods/first-person-model)模组，且需要隐藏玩家头部时，此参数返回为 true，否者返回 false。你可以通过它制作更复杂的第一人称隐藏功能。

## 十三、Carry On 模组的兼容

[Carry On 模组](https://curseforge.com/minecraft/mc-mods/carry-on)是一个非常有趣的模组，它可以在 Shift 右击的情况下搬起一些方块、生物，乃至是其他玩家。

1.16.5 和 1.18.2 版本的 Carry On 模组只能搬起玩家和方块，且会额外渲染一个玩家手臂模型（需要修改 Carry On 模组自身的配置文件才可以关闭）。只有 1.19.2 和 1.20 版本的 Carry On 模组才可以完美兼容所有功能！

Carry On 模组的兼容动画是一个名为 `carryon.animation.json` 的独立文件，其中包含了四个动画：

|        名称        |                             作用                             |   备注   |
| :----------------: | :----------------------------------------------------------: | :------: |
|  `carryon:block`   |                     玩家抱起方块时的动画                     | 循环播放 |
|  `carryon:entity`  |                     玩家抱起实体时的动画                     | 循环播放 |
|  `carryon:player`  |       玩家抱起其他玩家时的动画（仅限 1.19.2 和 1.20）        | 循环播放 |
| `carryon:princess` | 被抱起的那个玩家的动画（仅限 1.19.2 和 1.20）<br>~~所以动画名叫：“公主”~~ | 循环播放 |

## ~~十四、额外的配置参数（过时）~~

> 从 2.2.1 版本起，额外参数全部由 ysm.json 文件统一管理，此段已经过时！

在玩家选择模型时，往往还需要一些额外的配置信息，比如**对模型整体的缩放**，或者给模型添加名称、作者、提示说明、协议等诸多内容（如下图所示）。为此我们设计了额外的配置参数来实现这样的功能。

![5.png](https://s2.loli.net/2023/06/25/Izugoi8nYCOeVpJ.png)

额外配置的参数在新版（1.2.0 往后的版本中）独立成单独的 json 文件（固定名称 `info.json`），其中包含众多可写的参数：

```json
{
  // 模型名称
  "name": "Wine Fox（酒狐）",
  // 模型描述
  "tips": "A fox girl who loves to drink wine.\n一只爱喝葡萄酒的狐娘。",
  // 模型作者
  "authors": ["哥斯拉", "星屑海螺"],
  // 模型协议
  "license": "CC BY-NC-SA 4.0",
  // 轮盘动画名称
  "extra_animation_names": ["变身", "打招呼", "鼓掌", "是的", "不行", "卖萌", "御笔摇", "舞蹈"],
  // 是否强制自由切换，设置为 true 后，即使丢入 auth 文件夹，也可以自由切换
  "free": true
}
```

但是直接让模型作者书写这些 json 文件太过复杂，所以你需要安装 ysm-utils Blockbench 插件来做到这一点。

> 插件的下载地址：<https://share.weiyun.com/vzQ5HKvY>
>
> 1. 当前最新版插件应该为 1.2.0 版本；
> 2. 如果你需要更新插件，请注意插件不要改名。直接替换原有插件文件，重启 Blockbench 即可；

下载好以后，不要修改文件名，选择一个地方放置此文件。然后打开 Blockbench，依次选择：文件 -> 插件 -> 从文件加载插件。最终加载上 ysm 插件。

![6.png](https://s2.loli.net/2023/06/26/HpVFRtY8WCnP25G.png)

当菜单栏出现”是！史蒂夫“栏时，代表插件已经加载成功。

而后随便打开一个基岩版模型文件，依次点击 ”是！史蒂夫“ 菜单、添加信息，你就可以打开如下界面添加额外信息了。填写完毕后点击确认，并且记得再次按下 `Ctrl S` 保存文件。

![20230721234034.jpg](https://s2.loli.net/2023/07/21/Ksy5MASoqbH82IZ.jpg)

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

## 十四、MoLang 语法介绍

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

当然，MoLang 本身还有更为复杂的用法，这里我们暂时不再赘述。这里给出官方相关文档：

- [字符串类型](https://bedrock.dev/zh/docs/stable/Molang#Strings)
- [自定义变量](https://bedrock.dev/zh/docs/stable/Molang#Variables)
- [空值合并运算符](https://wiki.mcbe-dev.net/zh-cn/Molang#??空值合并运算符)
- [二元条件运算符](https://wiki.mcbe-dev.net/zh-cn/Molang#关键字)
- [别名](https://bedrock.dev/zh/docs/stable/Molang#Aliases)
- [复杂表达式](https://wiki.mcbe-dev.net/zh-cn/Molang#基本语法)
- [作用域定界符](https://wiki.mcbe-dev.net/zh-cn/Molang#{}花括号作用域定界符)
- [loop 循环](https://wiki.mcbe-dev.net/zh-cn/Molang#loop)，[continue](https://wiki.mcbe-dev.net/zh-cn/Molang#continue)、[break](https://wiki.mcbe-dev.net/zh-cn/Molang#break)（for_each 也支持，但目前没用到）
- [结构体](https://wiki.mcbe-dev.net/zh-cn/Molang#结构体)
- [箭头表达式](https://wiki.mcbe-dev.net/zh-cn/Molang#->指针运算符)

## 十五、模组 MoLang 说明

模组动画基本与基岩版动画行为一致，也支持基岩版所拥有的插值动画，比如**平滑，步帧**等。

### 1. 与基岩版的差异

- 未初始化的变量为 null 值，可以用空值合并运算符识别，参与数值类计算时被视为 0 或 false；
- 结构体不支持嵌套；
- 玩家在切换模型、重生、传送至部分维度、退出重进以及其他类似操作后将清空所有变量存储。

### 2. 相关调试指令

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

### 3. 函数和变量

#### a. `roaming` 变量

以 `v.roaming.xxx` 格式书写的变量（**不能**简写为 `v.r.xxx`）可以在切换维度、重生、退出重进后恢复。也能在玩家之间同步会，并且会跟随服务端的 cap 写入存档。

但是此变量有一些限制：

- 一个模型最多有 16 个 `roaming` 变量
- 变量名称的字符数不能大于 16
- 变量只能存储 `float`

#### b. 模组相关 molang

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

#### c. 1.2.0 版本新增函数与变量

这些变量与函数是 1.2.0 及以后的版本中添加的：

##### query.debug_output()

- 描述：输出消息至聊天框，仅在动画调试模式下有效；
- 参数：任意类型，任意数量；
- 返回值：null 。

例：`query.debug_output('喵', 1, 2, 3)`

聊天框显示： `喵123`

返回：`null`

##### math.min_angle()

- 描述：计算指定角度在 [-180, 180) 内的等效角度；

例：`math.min_angle(780)`

返回：`60`

##### query.cape_flap_amount

- 描述：获取披风飘起的程度，即使玩家没穿披风也有效；
- 返回值：0 - 1 的数值。0 为完全垂下，1 完全飘起。

例：`q.cape_flap_amount`

返回：`0.35`

##### query.position()

- 描述：获取实体所处的位置坐标；
- 参数：0-2 的整数，分别指的 X、Y、Z 分量；
- 返回值：玩家位置坐标的指定分量；

例：`q.position(1)`（获取玩家位置的 Y 坐标）

返回：`1003.23`

##### query.position_delta()

- 描述：获取实体的位置坐标自上次更新动画以来的差值，与帧率有关；
- 参数/返回值：0-2 的整数，分别指坐标差值的 X、Y、Z 分量；
- 返回值：玩家位置坐标差值的指定分量。

例1：`q.position_delta(0)`（获取玩家位置差值的 X 分量）

例1返回：`-0.076`

例2：

```plain
v.time0 > 0 && q.life_time - v.time0 > 0 ? (v.speed_x = (q.position_delta(0) - v.x0) / (q.life_time - v.time0));
v.x0 = q.position_delta(0);
v.time0 = q.life_time;
return v.speed_x;
```

例2返回：`19.03`

##### ysm.in_ground

- 描述：判断箭矢是否掉在地上
- 返回：布尔值

例：`ysm.in_ground`

返回：`true`

##### ysm.on_ground_time

- 描述：获取箭矢在地上躺了多久
- 返回：整数，单位为 tick

##### ysm.is_spectral_arrow

- 描述：判断箭矢是否为光灵箭
- 返回：布尔值

##### ysm.projectile_owner

- 描述：获取发射该箭矢的玩家实体
- 返回：玩家实体，可以使用“箭头表达式”查询其属性

例：`v.flame_level ?? (v.flame_level = ysm.projectile_owner->ysm.equipped_enchantment_level('Mainhand', 'minecraft:flame'))`

解释：`将该表达式写在箭矢动画中任意 parallel 动画的指令关键帧的第一帧，能在箭矢射出时获取玩家主手的弓的火矢附魔等级，并存储在 v.flame_level 变量中。不会重复执行。`

返回：`0`

##### ysm.delta_movement_length

- 描述：获取箭矢在两 Tick 之间的位移长度，可以用来判断速度；
- 返回：数值类型的位移长度。

Tips：如果速度异常，尝试安装 [Fast Projectile Fix](https://www.mcmod.cn/class/8885.html)。

##### ysm.texture_name

- 描述：获取玩家正在使用的材质名称；
- 返回值：字符串类型的材质名称，含扩展名；

例1：`ysm.texture_name`

例1返回：`'blue.png'`

例2：`ysm.texture_name == 'blue.png'`

例2返回：`true`

##### ysm.mod_version()

- 描述：获取客户端安装的指定模组的版本；
- 参数：字符串类型的模组 id（注意不是模组名称）；
- 返回：若已安装该模组则返回版本号字符串，否则返回 null。

例：`ysm.mod_version('tac')`

返回：`'0.3.10.5'`

##### ysm.dump_mods

- 描述：输出已安装的模组信息至聊天框，仅在动画调试模式下有效；
- 返回：null

##### ysm.dimension_name

- 描述：获取当前维度；
- 返回：字符串类型的维度 id。

例：`ysm.dimension_name`

返回：`'twilightforest:twilightforest'`（暮色森林）

##### ysm.weather

- 描述：获取当前天气；
- 返回：0：晴天，1：雨或雪，2：雷雨或暴雪。

例：`ysm.weather`

返回：`1`

Tips：下雨还是下雪取决于当前群系以及所处高度，或[静谧四季](https://www.mcmod.cn/class/1132.html)之类的模组；

##### ysm.is_open_air

- 描述：判断玩家是否处于露天区域；
- 返回：布尔值

Tips：能帮助判断是否正在淋雪，而 `q.is_in_water_or_rain` 不能。

##### query.equipped_item_all_tags()

- 描述：判断玩家装备物品是否包含指定的**所有**物品标签；
- 参数①：字符串类型的玩家装备槽，参考 [基岩版文档](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/equipmentslot?view=minecraft-bedrock-stable)，注意区分大小写；
- 参数②......：任意数量的字符串类型物品标签；
- 返回：布尔值

例：`query.equipped_item_all_tags('Mainhand', 'minecraft:tools', 'minecraft:swords')`

返回：`true`

##### query.equipped_item_any_tag()

- 描述：判断玩家装备物品是否包含指定的物品标签中的**任意一个**；
- 参数①：字符串类型的玩家装备槽，参考 [基岩版文档](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/equipmentslot?view=minecraft-bedrock-stable)，注意区分大小写；
- 参数②......：任意数量的字符串类型物品标签；
- 返回：布尔值

##### query.is_item_name_any()

- 描述：判断玩家装备物品 id 是否为指定的物品 id 中的**任意一个**；
- 参数：任意数量的字符串类型物品 id；
- 返回：布尔值

例：`q.is_item_name_any('Mainhand', 'cooked_beef')`（熟牛排）

返回：`true`

##### ysm.equipped_enchantment_level()

- 描述：获取玩家已装备物品的指定附魔等级；
- 参数①：字符串类型的玩家装备槽，参考 [基岩版文档](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/equipmentslot?view=minecraft-bedrock-stable)，注意区分大小写；
- 参数②：附魔 ID，参考 [Wiki](https://www.mcmod.cn/item/list/1-5.html)；

![img](https://cdn.nlark.com/yuque/0/2024/png/26380667/1705148312976-4c3be360-981c-4b4d-bbe7-52e0bba62c63.png)

- 返回值：整数类型的附魔等级。如果附魔不存在，则返回 0。

例：`ysm.equipped_enchantment_level('Mainhand', 'minecraft:mending')`（获取主手物品经验修补等级）

返回：`1`

##### ysm.dump_equipped_item()

- 描述：输出玩家已装备物品的信息至聊天框，仅在动画调试模式下有效；
- 参数①：字符串类型的玩家装备槽，参考 [基岩版文档](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/equipmentslot?view=minecraft-bedrock-stable)，注意区分大小写；
- 返回：null

##### ysm.relative_block_name()

- 描述：获取玩家附近某个方块的 id；
- 参数①②③：以玩家为中心的目标方块的相对位置坐标；
- 返回：字符串类型的方块 id。

例：`ysm.relative_block_name(0, -1, 0)`（玩家脚下的方块）

返回：`'minecraft:sand'`

##### query.relative_block_has_all_tags()

- 描述：判断玩家附近某个方块是否包含所有指定的**所有**方块标签；
- 参数①②③：以玩家为中心的目标方块的相对位置坐标；
- 参数④......：**任意数量**的字符串类型的方块标签；
- 返回：布尔值。

例：`q.relative_block_has_all_tags(0, -0.5, 0, 'minecraft:sand', 'minecraft:enderman_holdable')`

返回：`true`

##### query.relative_block_has_any_tag()

- 描述：判断玩家附近某个方块是否包含指定的方块标签中的**任意一个**；
- 参数①②③：以玩家为中心的目标方块的相对位置坐标；
- 参数④......：**任意数量**的字符串类型的方块标签；
- 返回：布尔值。

##### ysm.dump_relative_block

- 描述：输出玩家附近某个方块的信息至聊天框，仅在动画调试模式下有效；
- 参数①②③：目标方块的以玩家为中心的相对位置坐标；
- 返回：null

##### ysm.effect_level()

- 描述：获取玩家或箭矢上附加的药水效果等级；
- 参数①：字符串类型的药水 id；
- 返回：数值类型的药水效果等级。如果不存在，则返回 0 。

例：`ysm.effect_level('minecraft:regeneration')`（获取目标附加的生命恢复效果的等级）

返回：`0`（目标没有这个效果）

##### ysm.dump_effects

- 描述：输出玩家附加的药水效果的信息至聊天框，仅在动画调试模式下有效；
- 返回：null

#### d. 2.2.1 版本新增函数与变量

- 【Forge 1.20】修复了 `ysm.relative_block_name` 结果不正确的问题；

- 修正 `q.body_y_rotation` 不正确的问题

- 爬梯相关 molang 变量：

  1. `ysm.on_ladder`，布尔值，用来判断实体是否在梯子上
  2. `ysm.ladder_facing` 梯子朝向，输出数字 0-3，分别对应：南-西-北-东

- 原版鹦鹉相关 molang 变量：

  1. `has_left_shoulder_parrot`, `has_right_shoulder_parrot`

  2. `left_shoulder_parrot_variant`，`right_shoulder_parrot_variant`：鹦鹉颜色变种

     > 注意：1.19 及以前版本没有字符串形式的鹦鹉颜色变种，故此变量仅能用于 1.20 及以后版本

- `q.max_durability`和`q.remaining_durability`，需要输入一个槽位字符串参数

  - 举例：`q.max_durability('mainhand')`：返回主手手持物品的最大耐久

  - 参数有 `Mainhand` `Offhand` `Feet` `Legs` `Chest` `Head`

- `ysm.rendering_in_inventory`：无参，返回布尔值，判断玩家是否正在GUI中渲染，可以用来做一些仅在 GUI 中显示的动画；

- `ysm.eye_in_water`：眼部是否在水下，用来判断玩家是否完全浸入水中

- `ysm.frozen_ticks`：细雪中增加此数值到 140

- `ysm.air_supply`：空气值，最大 300

- `ysm.arrow_count`：玩家插在身上的箭的数量

- `ysm.stinger_count`：玩家插在身上的蜜蜂的毒刺的数量

- 以下全是实体相关 Attributes 属性：

  - `ysm.attack_damage`
  - `ysm.attack_speed`
  - `ysm.attack_knockback`
  - `ysm.movement_speed`
  - `ysm.knockback_resistance`
  - `ysm.luck`
  - `ysm.block_reach`
  - `ysm.entity_reach`
  - `ysm.swim_speed`
  - `ysm.entity_gravity`
  - `ysm.step_height_addition`**（1.18 及以前版本无此参数）**
  - `ysm.nametag_distance`

#### e. 行为不一致的的 molang 参数

这些 molang 参数在不同的 Minecraft 版本中结果不一致，请谨慎使用！

##### ysm.biome_category

> 注意！这个变量仅在 1.16.5 和 1.18.2 可以使用

- 描述：获取玩家所处群系的类别；
- 返回：字符串类型的群系类别。

例：`ysm.biome_category == 'forest'`

返回：`true`

| 群系类别（1.16.5/1.18.2） |   名称   |
| :-----------------------: | :------: |
|           taiga           |  针叶林  |
|       extreme_hills       | 风袭丘陵 |
|          jungle           |   丛林   |
|           mesa            |   恶地   |
|          plains           |   平原   |
|          savanna          | 热带草原 |
|            icy            | 冰系群系 |
|           beach           |   沙滩   |
|          forest           |   森林   |
|           ocean           |   海洋   |
|          desert           |   沙漠   |
|           river           |   河流   |
|           swamp           |   沼泽   |
|         mushroom          |  蘑菇岛  |
|          nether           |   下界   |
|          the_end          |   末地   |

##### query.biome_has_all_tags

由于 1.16 版本没有群系标签，所以该函数只是个占位符，用以维持向前兼容性。只能在 1.18 以上的版本可用。

##### query.biome_has_any_tags

也是占位符。只能在 1.18 以上的版本可用。

##### ysm.step_height_addition

只能在 1.19 以上的版本可用。

##### left_shoulder_parrot_varian 和 right_shoulder_parrot_variant

只能在 1.20 以上的版本可用。

## 十六、车万女仆模组的兼容

在 Touhou Little Maid 1.1.3 更新中，添加了对 Yes Steve Model 模组模型的兼容，使其可以使用 Yes Steve Model 的未加密模型和动画文件。但是加密的 ysm 格式模型无法使用！

**限于更新同步相关内容，目前仅支持  Yes Steve Model 1.1.5 版本及以前的 molang 语法，请注意！**

Touhou Little Maid 支持使用插件来制作模型包，相关插件地址和教程地址如下：

- 插件网页：<http://page.cfpa.team/TLM-Utils-Plugins/zh/>
- 插件使用教程：<https://www.bilibili.com/video/BV1LN411G7sU/>

两个模组使用的模型和动画几乎完全兼容，只存在少许不同，这里特此说明。

### 1. 模型

目前女仆使用的 YSM 模型支持主手和副手持有的拔刀剑渲染（之后也会同步支持 YSM 模组本体），背部物品，头戴物品的渲染。其全部通过定位组实现，如果没有这些定位组，对应的额外内容将不会渲染。

|        组名         |                       说明                       |
| :-----------------: | :----------------------------------------------: |
|  `LeftHandLocator`  |        和 YSM 一致，左手手持物品的定位组         |
| `RightHandLocator`  |        和 YSM 一致，右手手持物品的定位组         |
| `LeftWaistLocator`  | 右手（我没写错）持有拔刀剑时，拔刀剑的渲染定位组 |
| `RightWaistLocator` | 左手（我没写错）持有拔刀剑时，拔刀剑的渲染定位组 |
|  `BackpackLocator`  |   女仆背上背包时的定位组，定位应该放在两肩中间   |
|       `Head`        |             和 YSM 一致，头部定位组              |

### 2. 动画

YSM 模式使用的并行动画、手部动画、护甲动画均可以兼容。

但额外动画和永恒枪械工坊的兼容不能使用，即使放入其中也无法播放。

主动画中的这些可以直接使用，播放条件和 YSM 一致：

|     名称     |                             作用                             |        备注        |
| :----------: | :----------------------------------------------------------: | :----------------: |
|     walk     |                    在女仆普通行走时的动画                    |      循环播放      |
|     run      |                      在女仆疾跑时的动画                      |      循环播放      |
|  swim_stand  |                  女仆在水中站立式游泳的动画                  |      循环播放      |
|   attacked   |                      女仆被攻击时的动画                      |      单次播放      |
|     jump     |                       女仆跳跃时的动画                       |      循环播放      |
|     fly      |                女仆在创造模式飞行时播放的动画                |      循环播放      |
|     boat     |                     女仆坐在船上时的动画                     |      循环播放      |
| use_mainhand |               女仆使用右手时播放的动画（右键）               |      单次播放      |
| use_offhand  |               女仆使用左手时播放的动画（右键）               |      单次播放      |
|  swing_hand  |               女仆挥动手臂时播放的动画（左键）               |      单次播放      |
|    sleep     |                       女仆睡觉时的动画                       |      循环播放      |
|     sit      | 女仆坐下时的动画，这个动画和 YSM 的坐下动画有些许的位置差，需要修改 |      循环播放      |
|     idle     |                    女仆无任何操作时的动画                    |      循环播放      |
|    death     |                       女仆死亡时的动画                       | 单次播放，1 秒时长 |

这些动画是 Touhou Little Maid 特有的，需要额外添加：
|   名称    |           作用           |   备注   |
| :-------: | :----------------------: | :------: |
|  gomoku   | 女仆坐在五子棋盘旁的动画 | 循环播放 |
| bookshelf |   女仆坐在书架上的动画   | 循环播放 |
| computer  |   女仆坐在电脑旁的动画   | 循环播放 |
| keyboard  |  女仆坐在电子琴旁的动画  | 循环播放 |
|   chair   |    女仆坐在坐垫上动画    | 循环播放 |

### 3. MoLang 参数

Yes Steve Model 模组的 MoLang 参数均可兼容。但 Touhou Little Maid 还添加了几个额外的 MoLang 参数可供使用。

|      变量名      |  简介   |
| :--------------: | :-----: |
| `tlm.is_begging` | 女仆处于祈求状态时为 true，否则为 false |
| `tlm.is_sitting` | 女仆处于待命状态时为 true，否则为 false |
| `tlm.has_backpack` | 女仆背有背包时为 true，否则为 false |
