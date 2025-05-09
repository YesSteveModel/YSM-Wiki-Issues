---
title: CarryOn动画
createTime: 2025/01/28 15:14:46
permalink: /wiki/animation/carryon/
icon: fa-solid:people-arrows
---

[Carry On 模组](https://curseforge.com/minecraft/mc-mods/carry-on)是一个非常有趣的模组，它可以在 Shift
右击的情况下搬起一些方块、生物，乃至是其他玩家。

1.16.5 和 1.18.2 版本的 Carry On 模组只能搬起玩家和方块，且会额外渲染一个玩家手臂模型（需要修改 Carry On
模组自身的配置文件才可以关闭）。

**只有 1.19.2 和 1.20 版本的 Carry On 模组才可以完美兼容所有功能！**

Carry On 模组的兼容动画是一个名为 `carryon.animation.json` 的独立文件，其中包含了四个动画：

|         名称         |                        作用                        |  备注  |
|:------------------:|:------------------------------------------------:|:----:|
|  `carryon:block`   |                    玩家抱起方块时的动画                    | 循环播放 |
|  `carryon:entity`  |                    玩家抱起实体时的动画                    | 循环播放 |
|  `carryon:player`  |          玩家抱起其他玩家时的动画（仅限 1.19.2 和 1.20）          | 循环播放 |
| `carryon:princess` | 被抱起的那个玩家的动画（仅限 1.19.2 和 1.20）<br>!!所以动画名叫：“公主”!! | 循环播放 |

## 多出来的手臂
当你用的是 1.18.2 及以前版本的 Carry On 时，可能会出现这样的情况：

![pig.png](https://s2.loli.net/2025/01/30/T7lDLOtSYFPV91o.png)

这是旧版本 Carry On 模组的 bug，你需要手动修改 `config\carryon-client.toml` 处文件，将 `renderArms` 后面的 `true` 改成 `false` 即可:

```toml {6}
#Settings
[settings]
	#If the front of the Tile Entities should face the player or should face outward
	facePlayer = false
	#Arms should render on sides when carrying
	renderArms = true
```
