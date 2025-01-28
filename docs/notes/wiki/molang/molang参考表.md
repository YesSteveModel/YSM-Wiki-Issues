---
title: molang参考表
createTime: 2025/01/28 15:51:15
permalink: /wiki/molang/ref/
icon: cil:book
---

## 模组相关 molang

你可以在下表中找到所有的变量：

|                 变量名                 |                      简介                      |
|:-----------------------------------:|:--------------------------------------------:|
|                `PI`                 |                     π，常量                     |
|                 `E`                 |                   自然对数，常量                    |
|         `query.actor_count`         |                     实体数量                     |
|          `query.anim_time`          |           当前动画播放时间（秒），如果动画未播放则为 0            |
|       `query.body_x_rotation`       |              玩家身体 X 旋转角度，默认为 0               |
|       `query.body_y_rotation`       |              玩家身体 Y 旋转角度，默认为 0               |
|     `query.cardinal_facing_2d`      |     玩家朝向（忽略上下朝向，北=2.0，南=3.0，西=4.0，东=5.0）     |
|    `query.distance_from_camera`     |                  玩家和镜头之间的距离                  |
|       `query.equipment_count`       |            玩家装备的护甲数量（0-4），不考虑手持物品            |
|    `query.eye_target_x_rotation`    |              玩家视角 X 旋转角度，默认为 0               |
|    `query.eye_target_y_rotation`    |              玩家视角 Y 旋转角度，默认为 0               |
|        `query.ground_speed`         |                  玩家速度（米/秒）                   |
|          `query.has_cape`           |            玩家有披风时为 true，否则为 false            |
|          `query.has_rider`          |            玩家被骑乘时为 true，否则为 false            |
|       `query.head_x_rotation`       |              玩家头部 X 旋转角度，默认为 0               |
|       `query.head_y_rotation`       |              玩家头部 Y 旋转角度，默认为 0               |
|           `query.health`            |                     玩家血量                     |
|          `query.hurt_time`          |                 玩家受伤计时，默认为 0                 |
|          `query.is_eating`          |           玩家正在进食时为 true，否则为 false            |
|       `query.is_first_person`       |         玩家处于第一人称视角时为 true，否则为 false          |
|         `query.is_in_water`         |            玩家在水中时为 true，否则为 false            |
|     `query.is_in_water_or_rain`     |          玩家在水中或雨中时为 true，否则为 false           |
|         `query.is_jumping`          |            玩家跳跃时为 true，否则为 false             |
|         `query.is_on_fire`          |            玩家着火时为 true，否则为 false             |
|        `query.is_on_ground`         |            玩家在地面时为 true，否则为 false            |
|       `query.is_playing_dead`       |           玩家濒死状态时为 true，否则为 false            |
|          `query.is_riding`          |            玩家骑乘时为 true，否则为 false             |
|         `query.is_sleeping`         |            玩家睡觉时为 true，否则为 false             |
|         `query.is_sneaking`         |            玩家潜行时为 true，否则为 false             |
|        `query.is_spectator`         |          玩家是观察者模式时为 true，否则为 false           |
|        `query.is_sprinting`         |            玩家疾跑时为 true，否则为 false             |
|         `query.is_swimming`         |            玩家游泳时为 true，否则为 false             |
|        `query.is_using_item`        |          玩家正在使用物品时为 true，否则为 false           |
|    `query.item_in_use_duration`     |      从 0 开始持续计数，直到该物品的最大可使用时长（秒），默认为 0       |
|    `query.item_max_use_duration`    |           所使用的物品的最大可使用时长（秒），默认为 0            |
| `query.item_remaining_use_duration` |           所使用的物品的剩余可使用时长（秒），默认为 0            |
|          `query.life_time`          |           当前动画播放了多久（秒），如果动画未播放则为 0           |
|         `query.max_health`          |                   玩家的最大血量                    |
|   `query.modified_distance_moved`   |                玩家水平移动距离的总数（米）                |
|         `query.moon_phase`          |                  当前月相（0-7）                   |
|        `query.player_level`         |                玩家的经验等级，默认为 0                 |
|         `query.time_of_day`         |     一天中的时间（午夜=0，日出=0.25，正午=0.5，日落=0.75）      |
|         `query.time_stamp`          |                  当前所处世界的时间戳                  |
|       `query.vertical_speed`        |          玩家移动中垂直分量的速度（米/秒），朝上移动为正数           |
|        `query.walk_distance`        |                玩家步行移动距离的总数（米）                |
|          `query.yaw_speed`          |                实体 Y 角度旋转时的速度                 |
|          `ysm.armor_value`          |                  护甲值（0-20）                   |
|          `ysm.has_helmet`           |           玩家穿戴头盔时为 true，否则为 false            |
|        `ysm.has_chest_plate`        |           玩家穿戴胸甲时为 true，否则为 false            |
|         `ysm.has_leggings`          |           玩家穿戴护腿时为 true，否则为 false            |
|           `ysm.has_boots`           |           玩家穿戴靴子时为 true，否则为 false            |
|         `ysm.has_mainhand`          |          玩家主手持有物品时为 true，否则为 false           |
|          `ysm.has_offhand`          |          玩家副手持有物品时为 true，否则为 false           |
|         `ysm.is_close_eyes`         |           默认为 false，当玩家需要眨眼返回 true           |
|          `ysm.is_riptide`           |          玩家处于激流状态时为 true，否则为 false           |
|          `ysm.has_elytra`           |           玩家穿戴鞘翅时返回 true，否则为 false           |
|         `ysm.elytra_rot_x`          |                 玩家鞘翅的 X 旋转角度                 |
|         `ysm.elytra_rot_y`          |                 玩家鞘翅的 Y 旋转角度                 |
|         `ysm.elytra_rot_z`          |                 玩家鞘翅的 Z 旋转角度                 |
|          `ysm.food_level`           |                   返回玩家饥饿值                    |
|     `ysm.first_person_mod_hide`     | 当玩家安装更真实的第一人称模型模组，且需要隐藏玩家头部时为 true，否者为 false |

## 1.2.0 版本新增函数与变量

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

![img](https://cdn.nlark.com/yuque/0/2024/png/26380667/1705148312976-4c3be360-981c-4b4d-bbe7-52e0bba62c63.png)

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

## 2.2.1 版本新增函数与变量

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

## 2.2.2 版本新增函数与变量

- 添加 `ysm.bone_pivot_abs`，获取指定骨骼枢轴点于上一帧在模型空间内的坐标。

  > 注意如果父骨骼被隐藏，或缩放 0，则该值不会更新。例: `ysm.bone_pivot_abs('LeftHand').x`;

- 添加 `ysm.bone_[rot/scale/pos]`，用于获取上一帧的骨骼参数。

  > 示例：`ysm.bone_rot('LeftLeg').x`;

## 行为不一致的的 molang 参数

这些 molang 参数在不同的 Minecraft 版本中结果不一致，请谨慎使用！

##### ysm.biome_category

> 注意！这个变量仅在 1.16.5 和 1.18.2 可以使用

- 描述：获取玩家所处群系的类别；
- 返回：字符串类型的群系类别。

例：`ysm.biome_category == 'forest'`

返回：`true`

| 群系类别（1.16.5/1.18.2） |  名称  |
|:-------------------:|:----:|
|        taiga        | 针叶林  |
|    extreme_hills    | 风袭丘陵 |
|       jungle        |  丛林  |
|        mesa         |  恶地  |
|       plains        |  平原  |
|       savanna       | 热带草原 |
|         icy         | 冰系群系 |
|        beach        |  沙滩  |
|       forest        |  森林  |
|        ocean        |  海洋  |
|       desert        |  沙漠  |
|        river        |  河流  |
|        swamp        |  沼泽  |
|      mushroom       | 蘑菇岛  |
|       nether        |  下界  |
|       the_end       |  末地  |

##### query.biome_has_all_tags

由于 1.16 版本没有群系标签，所以该函数只是个占位符，用以维持向前兼容性。只能在 1.18 以上的版本可用。

##### query.biome_has_any_tags

也是占位符。只能在 1.18 以上的版本可用。

##### ysm.step_height_addition

只能在 1.19 以上的版本可用。

##### left_shoulder_parrot_varian 和 right_shoulder_parrot_variant

只能在 1.20 以上的版本可用。