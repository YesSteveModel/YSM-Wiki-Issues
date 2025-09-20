---
title: molang 杂项内容
createTime: 2025/09/20 21:36:02
permalink: /wiki/molang/misc/
icon: fluent:book-24-regular
author: TartaricAcid
---

## 行为不一致的预设 molang

这些 molang 参数在不同的 Minecraft 版本中结果不一致，请谨慎使用！

##### ysm.biome_category

::: warning
注意！这个变量仅在 1.16.5 和 1.18.2 可以使用
:::

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

## molang 更新日志

### 1.2.0 版本新增函数与变量

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

例：
`v.flame_level ?? (v.flame_level = ysm.projectile_owner->ysm.equipped_enchantment_level('Mainhand', 'minecraft:flame'))`

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
-
参数①：字符串类型的玩家装备槽，参考 [基岩版文档](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/equipmentslot?view=minecraft-bedrock-stable)
，注意区分大小写；
- 参数②......：任意数量的字符串类型物品标签；
- 返回：布尔值

例：`query.equipped_item_all_tags('Mainhand', 'minecraft:tools', 'minecraft:swords')`

返回：`true`

##### query.equipped_item_any_tag()

- 描述：判断玩家装备物品是否包含指定的物品标签中的**任意一个**；
-
参数①：字符串类型的玩家装备槽，参考 [基岩版文档](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/equipmentslot?view=minecraft-bedrock-stable)
，注意区分大小写；
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
-
参数①：字符串类型的玩家装备槽，参考 [基岩版文档](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/equipmentslot?view=minecraft-bedrock-stable)
，注意区分大小写；
- 参数②：附魔 ID，参考 [Wiki](https://www.mcmod.cn/item/list/1-5.html)；

![img](https://s2.loli.net/2025/01/31/5R6zZdP1tfrxIlO.png)

- 返回值：整数类型的附魔等级。如果附魔不存在，则返回 0。

例：`ysm.equipped_enchantment_level('Mainhand', 'minecraft:mending')`（获取主手物品经验修补等级）

返回：`1`

##### ysm.dump_equipped_item()

- 描述：输出玩家已装备物品的信息至聊天框，仅在动画调试模式下有效；
-
参数①：字符串类型的玩家装备槽，参考 [基岩版文档](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/equipmentslot?view=minecraft-bedrock-stable)
，注意区分大小写；
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

### 2.2.1 版本新增函数与变量

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

### 2.2.2 版本新增函数与变量

- 添加 `ysm.bone_pivot_abs`，获取指定骨骼枢轴点于上一帧在模型空间内的坐标。

  > 注意如果父骨骼被隐藏，或缩放 0，则该值不会更新。例: `ysm.bone_pivot_abs('LeftHand').x`;

- 添加 `ysm.bone_[rot/scale/pos]`，用于获取上一帧的骨骼参数。

  > 示例：`ysm.bone_rot('LeftLeg').x`;

### 2.3.0 版本新增函数与变量

- 新增 `ysm.shoot_item_id` 函数，可以用来区分是用什么物品射出的箭
- 新增 `q.any_animation_finished` `q.all_animations_finished` 参数用于动画控制器
- 添加专为控制器使用的，以 `ctrl` 开头的 molang
- 新增 `ysm.input_vertical` `ysm.input_horizontal` 变量，用来查询玩家当前的移动情况
- 新增 `ysm.first_order` `ysm.second_order` 函数，方便制作物理模拟动画

### 2.3.1 版本新增函数与变量

- 新增 `ysm.rendering_in_paperdoll` 变量专用于纸娃娃

- 新增 `ysm.person_view` 变量，返回数字（第一人称：0，第三人称背面：1，第三人称正面：2；应该能兼容越肩视角）

- 新增 `ctrl.idle` 变量
- 修正 `ctrl.run` `ctrl.walk` 在潜行和趴下时也为 true 的问题

- 修正 `ctrl.climb` 参数在游泳时也为 true 的问题

- 修正 `ysm.rendering_in_inventory` 部分情况下参数不正确的问题（比如左上角纸娃娃）

- 修正 `q.is_first_person` 和 `ysm.first_person_mod_hide` 部分情况下不正确的问题

### 2.4.0 版本新增函数与变量

- 新增女仆相关 molang 变量：

    - `ysm.entity_type` 返回 player 和 maid

    - `ysm.is_player` 布尔值

    - `ysm.is_maid` 布尔值

    - `tlm.favorability_point` 好感度点数，0-384

    - `tlm.favorability_level` 好感度等级：0-3

    - `tlm.task_id` 工作模式 id，字符串

    - `tlm.schedule` 工作日程，day night all，白班夜班全天

    - `tlm.activity` 活动，work idle reset 上班，下班，睡觉

    - `tlm.gomoku_win_count` 五子棋赢棋总回合数

    - `tlm.gomoku_rank` 五子棋段位，1-4，没有 0

    - `tlm.game_statue` 棋局状态，win lost 空字符串

    - `tlm.backpack_type` 背包 ID

    - `tlm.is_entity` 渲染女仆实体

    - `tlm.is_statue` 渲染雕像

    - `tlm.is_garage_kit` 渲染手办

    - `tlm.show_item` 那个装饰槽位的物品 ID

- 添加粒子生成的 molang：
    - `ysm.particle('id', x, y, z, dx, dy, dz, speed, count, life_time)`
    - `ysm.abs_particle('id', x, y, z, dx, dy, dz, speed, count, life_time)`

- `ysm.mainhand_charged_crossbow`
- `ysm.offhand_charged_crossbow`
- `ysm.is_fishing`

### 2.5.0 版本新增函数与变量

- 新增饰品相关变量

    - `ysm.has_any_curios(type, name...)`    
      判断指定饰品槽是否佩戴了指定的饰品中的任意一个。
      type 为饰品槽类型，name 为物品 id（支持任意数量，不止一个），下同。
      当 name 数量为 0 时，仅检测饰品槽是否为空。

    - `ysm.has_any_curios_with_all_tags(type, tag...)`    
      判断指定饰品槽是否佩戴了任意一个饰品有给定的所有标签

    - `ysm.has_any_curios_with_any_tag(type, tag...)`    
      判断指定饰品槽是否佩戴了任意一个饰品有给定的任意一个标签

    - `ysm.dump_curios`    
      输出当前玩家佩戴的饰品信息。仅在动画调试模式下有效。

- 新增播放音频相关函数
    - `ysm.play_sound('id', 'sound_name', boolean,volume,pitch)`  
      播放音频，id为该音频的标识，boolean为是否强制播放
    - `ysm.stop_sound('id')`  
      停止音频，id为该音频的标识

- 新增亮度检测变量
    - `ysm.block_light`   
      脚下方块亮度
    - `ysm.sky_light`   
      脚下方块受到天空所贡献的亮度

- 新增按键检测函数
    - `ysm.mouse(keycode)`    
      检测鼠标按键情况
    - `ysm.keyboard(keycode)`   
      检测键盘按键情况

- 新增弹射物相关molang
    - `ysm.throwable_item`  
      物品类型投掷物的物品 ID
    - `ysm.hooked_in`   
      鱼钩勾住的实体 ID
    - `ysm.is_biting`   
      鱼钩是否咬钩

- 新增脚本控制器相关(只能用于脚本控制器)
    - `ctrl.set_animation(animation, loop_type)`    
      用于播放指定动画
    - `ctrl.set_beginning_transition_length(second)`    
      用于设置当前控制器的动画混合时间

#### 注意
- forge/neoforge 端饰品模组为 Curios；
- fabric 端饰品模组为 Trinkets；
- 两端的饰品槽类型不同，需要单独适配。
