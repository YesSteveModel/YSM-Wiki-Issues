---
title: molang 参考表
createTime: 2025/01/28 15:51:15
permalink: /wiki/molang/ref/
icon: cil:book
author: K螺诺亚
---

## 预设 molang 函数与变量

你可以在下表中找到所有的预设函数与变量：

### math 部分

|                 Molang                  |                             描述                             |                             备注                             | 版本  |
| :-------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: | :---: |
|                `math.pi`                |                           π，常量                            |                  固定为：`3.14159265358979`                  | 1.1.5 |
|                `math.e`                 |                        ⾃然对数，常量                        |                  固定为：`2.71828182845904`                  | 1.1.5 |
|           `math.floor(value)`           |                           向下取整                           |                                                              | 1.1.5 |
|           `math.round(value)`           |                       数字四舍五入取整                       |                                                              | 1.1.5 |
|           `math.ceil(value)`            |                        数字的向上取整                        |                                                              | 1.1.5 |
|           `math.trunc(value)`           |          截短法取整，这种方式在处理负数时是向上取整          |                                                              | 1.1.5 |
|      `math.clamp(value, min, max)`      |              把 value 限定在最小值和最大值之间               |                                                              | 1.1.5 |
|            `math.max(x, y)`             |                    返回 x 和 y 中的最大值                    |                                                              | 1.1.5 |
|            `math.min(x, y)`             |                    返回 x 和 y 中的最小值                    |                                                              | 1.1.5 |
|            `math.abs(value)`            |                        value 的绝对值                        |                                                              | 1.1.5 |
|            `math.exp(value)`            |                 value 以 e 为底数的指数函数                  |                                                              | 1.1.5 |
|            `math.ln(value)`             |                 value 以 e 为底数的对数函数                  |                                                              | 1.1.5 |
|           `math.sqrt(value)`            |                        value 的平方根                        |                                                              | 1.1.5 |
|     `math.mod(value, denominator)`      |               value 除以 denominator 后的余数                |                                                              | 1.1.5 |
|       `math.pow(base, exponent)`        |                  返回 base 的 exponent 次幂                  |                                                              | 1.1.5 |
|            `math.sin(value)`            |                        value 的正弦值                        |                        输入参数为角度                        | 1.1.5 |
|            `math.cos(value)`            |                        value 的余弦值                        |                        输入参数为角度                        | 1.1.5 |
|           `math.acos(value)`            |                       value 的反余弦值                       |         输入的 value 区间是[-1,1]，返回数据为弧度值          | 1.1.5 |
|           `math.asin(value)`            |                       value 的反正弦值                       |         输入的 value 区间是[-1,1]，返回数据为弧度值          | 1.1.5 |
|           `math.atan(value)`            |                       value 的反正切值                       |          输入的value区间是[-∞,+∞]，返回数据为弧度值          | 1.1.5 |
|           `math.atan2(y, x)`            | 从原点 (0,0) 到 (x,y) 点的线段与 x 轴正方向之间的平面角度 (弧度值) |                                                              | 1.1.5 |
|     `math.lerp(start, end, 0_to_1)`     |           在 start 和 end 之间根据 0~1 取线性插值            |    等价于此公式：$start + (end - start)\times 0\_to\_1 $     | 1.1.5 |
| `math.lerprotatee(start, end,  0_to_1)` |      作为角度，在 start 和 end 之间根据 0~1 取中间插值       |                  超过 360 度时会回退回 0 度                  | 1.1.5 |
|        `math.random(low, high)`         |               返回在最小值到最大值之间的随机数               |                                                              | 1.1.5 |
|    `math.random_integer(low, high)`     |            返回在最小值到最大值之间的随机**整数**            |                                                              | 1.1.5 |
|     `math.die_roll(num, low, high)`     |        返回`num`个随机数的总和，每个值的范围从低到高         | 生成的随机数**不是**像普通骰子那样的整数。为此请使用 `math.die_roll_integer` | 1.1.5 |
| `math.die_roll_integer(num, low, high)` |      返回`num`个随机整数的总和，每个整数的值从低到高。       |              生成的随机数是类似于正常骰子的整数              | 1.1.5 |
|       `math.hermite_blend(value)`       | 使用 Hermite 函数进行简单的平滑曲线插值：$3\times value ^{2}-2\times value^{3}$ | 尽管任何有效的 float 都是有效的输入，但此功能在 [0,1] 范围内效果最佳 | 1.1.5 |
|         `math.min_angle(value)`         |           计算指定⻆度在 [-180, 180) 内的等效⻆度            | 如果输入的角度是转了很多圈之后的结果，这个函数就可以减去无用的圈数，直接输出 [-180, 180] 范围内的角度 | 1.2.0 |
|          `math.randomi(value)`          |                 与 math.random_integer 相同                  |              非标准命名，仅用于兼容原 geckolib               | 1.1.5 |
|           `math.roll(value)`            |                    与 math.die_roll 相同                     |              非标准命名，仅用于兼容原 geckolib               | 1.1.5 |
|           `math.rolli(value)`           |                与 math.die_roll_integer 相同                 |              非标准命名，仅用于兼容原 geckolib               | 1.1.5 |
|          `math.hermite(value)`          |                  与 math.hermite_blend 相同                  |              非标准命名，仅用于兼容原 geckolib               | 1.1.5 |


### query 部分
|                            Molang                            |                             描述                             |                             备注                             | 版本  |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: | :---: |
|             `query.debug_output(arg1, arg2...)`              |                       输出消息⾄聊天框                       |                    仅在动画调试模式下有效                    | 1.2.0 |
|          `query.biome_has_all_tags(tag1, tag2...)`           |          判断玩家所处群系是否包含所有指定的群系标签          | 由于 1.16 版本没有群系标签，所以只能在 1.18 以上的版本可⽤;<br>可以使用用 `locate` 指令查看当前所处群系标签 | 2.2.1 |
|           `query.biome_has_any_tag(tag1, tag2...)`           |      判断玩家所处群系是否包含指定的群系标签中的任意⼀个      | 由于 1.16 版本没有群系标签，所以只能在 1.18 以上的版本可⽤;<br/>可以使用用 `locate` 指令查看当前所处群系标签 | 2.2.1 |
| `query.relative_block_has_all_tags(xOffset, yOffset, zOffset, tag1, tag2...)` |      判断玩家附近某个⽅块是否包含所有指定的所有⽅块标签      |    前三个参数是以玩家下半身为中心点的，参数最大不得超过 8    | 1.2.0 |
| `query.relative_block_has_any_tag(xOffset, yOffset, zOffset, tag1, tag2...)` |    判断玩家附近某个⽅块是否包含指定的⽅块标签中的任意⼀个    |    前三个参数是以玩家下半身为中心点的，参数最大不得超过 8    | 1.2.0 |
|       `query.is_item_name_any(slotType, id1, id2...)`        |     判断玩家装备物品 id 是否为指定的物品 id 中的任意⼀个     | slotType 参数有：`chest` `feet` `head` `legs` `mainhand` `offhand` | 1.2.0 |
|   `query.equipped_item_all_tags(slotType, tag1, tag2...)`    |          判断玩家装备物品是否包含指定的所有物品标签          | slotType 参数有：`chest` `feet` `head` `legs` `mainhand` `offhand` | 1.2.0 |
|    `query.equipped_item_any_tag(slotType, tag1, tag2...)`    |      判断玩家装备物品是否包含指定的物品标签中的任意⼀个      | slotType 参数有：`chest` `feet` `head` `legs` `mainhand` `offhand` | 1.2.0 |
|                   `query.position(value)`                    |        返回实体所处的位置坐标（精确到小数点后 14 位）        |         `0`: X 坐标<br/>`1`: Y 坐标<br/>`2`: Z 坐标          | 1.2.0 |
|                `query.position_delta(value)`                 |    返回实体的位置坐标⾃上次更新动画以来的差值，与帧率有关    |         `0`: X 坐标<br/>`1`: Y 坐标<br/>`2`: Z 坐标          | 1.2.0 |
|               `query.max_durability(slotType)`               |                  返回指定槽位物品的最⼤耐久                  | slotType 参数有：`chest` `feet` `head` `legs` `mainhand` `offhand` | 2.2.1 |
|            `query.remaining_durability(slotType)`            |                  返回指定槽位物品的剩余耐久                  | slotType 参数有：`chest` `feet` `head` `legs` `mainhand` `offhand` | 2.2.1 |
|                     `query.actor_count`                      |                  返回已加载范围内的实体数量                  |                                                              | 1.1.5 |
|                      `query.anim_time`                       |         当前动画播放时间（秒），如果动画未播放则为 0         | 是动画时间轴，输出单位是秒。<br>循环动画则是播放总时长，长度无限制 | 1.1.5 |
|                      `query.life_time`                       |        当前动画播放了多久（秒），如果动画未播放则为 0        |            是动画生存时间，最大长度是当前动画长度            | 1.1.5 |
|               `query.all_animations_finished`                |              当前控制器内所有的动画都播放完毕了              |                     仅能用于动画控制器内                     | 2.3.0 |
|                `query.any_animation_finished`                |              当前控制器内任意一个动画播放完毕了              |                     仅能用于动画控制器内                     | 2.3.0 |
|                   `query.head_x_rotation`                    |              返回玩家头部 X 旋转⻆度，默认为 0               |                                                              | 1.1.5 |
|                   `query.head_y_rotation`                    |              返回玩家头部 Y 旋转⻆度，默认为 0               |                                                              | 1.1.5 |
|                      `query.moon_phase`                      |                     返回当前⽉相（0-7）                      |                                                              | 1.1.5 |
|                     `query.time_of_day`                      |                       返回⼀天中的时间                       |           午夜=0，⽇出=0.25<br>正午=0.5，⽇落=0.75           | 1.1.5 |
|                      `query.time_stamp`                      |                   返回当前所处世界的时间戳                   |                                                              | 1.1.5 |
|                      `query.yaw_speed`                       |                 返回实体 Y ⻆度旋转时的速度                  |                                                              | 1.1.5 |
|                  `query.cardinal_facing_2d`                  |                         返回玩家朝向                         |         忽略上下朝向，北=2.0，南=3.0，西=4.0，东=5.0         | 1.1.5 |
|                 `query.distance_from_camera`                 |                   返回玩家和镜头之间的距离                   |                                                              | 1.1.5 |
|                `query.eye_target_x_rotation`                 |              返回玩家视⻆ X 旋转⻆度，默认为 0               |                                                              | 1.1.5 |
|                `query.eye_target_y_rotation`                 |              返回玩家视⻆ Y 旋转⻆度，默认为 0               |                                                              | 1.1.5 |
|                     `query.ground_speed`                     |                         返回玩家速度                         | 该值没有负数值，即使人物后退也会输出正值，无法根据人物行进方向不同做出响应；<br>行走值大约为 1.7，跑动值大约为 3.2，飞行值为 20 | 1.1.5 |
|               `query.modified_distance_moved`                |                 玩家⽔平移动距离的总数（⽶）                 |                                                              | 1.1.5 |
|                    `query.vertical_speed`                    |    返回玩家移动中垂直分量的速度（⽶/秒），朝上移动为正数     |         创造模式飞行：[-7.5,7.5]<br>高处掉落：[0,20]         | 1.1.5 |
|                    `query.walk_distance`                     |               返回玩家步⾏移动距离的总数（⽶）               |                                                              | 1.1.5 |
|                      `query.has_rider`                       |              玩家被骑乘时为 true，否则为 false               |                                                              | 1.1.5 |
|                   `query.is_first_person`                    |         玩家处于第⼀⼈称视⻆时为 true，否则为 false          |                                                              | 1.1.5 |
|                     `query.is_in_water`                      |              玩家在⽔中时为 true，否则为 false               |                                                              | 1.1.5 |
|                 `query.is_in_water_or_rain`                  |           玩家在⽔中或⾬中时为 true，否则为 false            |                                                              | 1.1.5 |
|                      `query.is_on_fire`                      |               玩家着⽕时为 true，否则为 false                |                                                              | 1.1.5 |
|                     `query.is_on_ground`                     |              玩家在地⾯时为 true，否则为 false               |                                                              | 1.1.5 |
|                      `query.is_riding`                       |               玩家骑乘时为 true，否则为 false                |                                                              | 1.1.5 |
|                     `query.is_sneaking`                      |               玩家潜⾏时为 true，否则为 false                |                                                              | 1.1.5 |
|                     `query.is_spectator`                     |           玩家是观察者模式时为 true，否则为 false            |                                                              | 1.1.5 |
|                     `query.is_sprinting`                     |               玩家疾跑时为 true，否则为 false                |                                                              | 1.1.5 |
|                     `query.is_swimming`                      |               玩家游泳时为 true，否则为 false                |                                                              | 1.1.5 |
|                   `query.body_x_rotation`                    |              返回玩家⾝体 X 旋转⻆度，默认为 0               |                                                              | 1.1.5 |
|                   `query.body_y_rotation`                    |              返回玩家⾝体 Y 旋转⻆度，默认为 0               |                                                              | 1.1.5 |
|                        `query.health`                        |                         返回玩家⾎量                         |                                                              | 1.1.5 |
|                      `query.max_health`                      |                       返回玩家最⼤⾎量                       |                                                              | 1.1.5 |
|                      `query.hurt_time`                       |                    玩家受伤计时，默认为 0                    |                                                              | 1.1.5 |
|                      `query.is_eating`                       |             玩家正在进⻝时为 true，否则为 false              |                                                              | 1.1.5 |
|                   `query.is_playing_dead`                    |             玩家濒死状态时为 true，否则为 false              |                                                              | 1.1.5 |
|                     `query.is_sleeping`                      |               玩家睡觉时为 true，否则为 false                |                                                              | 1.1.5 |
|                    `query.is_using_item`                     |           玩家正在使⽤物品时为 true，否则为 false            |                                                              | 1.1.5 |
|                 `query.item_in_use_duration`                 | 从 0 开始持续计数，直到该物品的最⼤可使⽤时⻓（秒），默认为 0 |                                                              | 1.1.5 |
|                `query.item_max_use_duration`                 |         所使⽤的物品的最⼤可使⽤时⻓（秒），默认为 0         |                                                              | 1.1.5 |
|             `query.item_remaining_use_duration`              |         所使⽤的物品的剩余可使⽤时⻓（秒），默认为 0         |                                                              | 1.1.5 |
|                   `query.equipment_count`                    |        返回玩家装备的护甲数量（0-4），不考虑⼿持物品         |             整数，根据玩家护甲数量变动，最大为 4             | 1.1.5 |
|                       `query.has_cape`                       |              玩家有披⻛时为 true，否则为 false               |                                                              | 1.1.5 |
|                   `query.cape_flap_amount`                   |          返回披⻛飘起的程度，即使玩家没穿披⻛也有效          |   0 为完全垂下，1 完全飘起<br>返回数据非常奇怪，不推荐使用   | 1.2.0 |
|                     `query.player_level`                     |                         返回玩家等级                         |                                                              | 1.1.5 |
|                      `query.is_jumping`                      |               玩家跳跃时为 true，否则为 false                |                                                              | 1.1.5 |


### ysm 实体部分
|                            Molang                            |                             描述                             |                             备注                             | 版本  |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: | :---: |
|              `ysm.dump_equipped_item(slotType)`              |  输出玩家已装备物品的信息⾄聊天框<br>仅在动画调试模式下有效  | slotType 参数有：`chest` `feet` `head` `legs` `mainhand` `offhand` | 1.2.0 |
|     `ysm.dump_relative_block(xOffset, yOffset, zOffset)`     | 输出玩家附近某个⽅块的信息⾄聊天框<br/>仅在动画调试模式下有效 |     三个参数是以玩家下半身为中心点的，参数最大不得超过 8     | 1.2.0 |
|                       `ysm.dump_mods`                        |   输出已安装的模组信息⾄聊天框<br/>仅在动画调试模式下有效    |                                                              | 1.2.0 |
|                      `ysm.dump_effects`                      | 输出玩家附加的药⽔效果的信息⾄聊天框<br/>仅在动画调试模式下有效 |                                                              | 1.2.0 |
|                       `ysm.dump_biome`                       | 输出玩家所在群系的ID和标签到聊天框<br/>仅在动画调试模式下有效 |                                                              | 1.2.0 |
|                   `ysm.mod_version(modid)`                   |                返回客⼾端安装的指定模组的版本                |                                                              | 1.2.0 |
|        `ysm.equipped_enchantment_level(slotType, id)`        |               返回玩家已装备物品的指定附魔等级               | slotType 参数有：`chest` `feet` `head` `legs` `mainhand` `offhand` | 1.2.0 |
|                    `ysm.effect_level(id)`                    |              返回玩家或箭⽮上附加的药⽔效果等级              |                                                              | 1.2.0 |
|     `ysm.relative_block_name(xOffset, yOffset, zOffset)`     |                  返回玩家附近某个⽅块的 id                   |     三个参数是以玩家下半身为中心点的，参数最大不得超过 8     | 1.2.0 |
|                        `ysm.head_yaw`                        |                与 query.head_x_rotation 相同                 |                                                              | 1.1.5 |
|                       `ysm.head_pitch`                       |                与 query.head_y_rotation 相同                 |                                                              | 1.1.5 |
|                        `ysm.weather`                         |                         返回当前天⽓                         |              0：晴天，1：⾬或雪，2：雷⾬或暴雪               | 1.2.0 |
|                     `ysm.dimension_name`                     |                       返回当前维度 ID                        |                                                              | 1.2.0 |
|                          `ysm.fps`                           |                         返回游戏帧率                         |                                                              | 1.1.5 |
|                     `ysm.input_vertical`                     |                   获取玩家移动方向（前后）                   |           前进时大于0，后退时小于0，静止不动时为 0           | 2.3.0 |
|                    `ysm.input_horizontal`                    |                   获取玩家移动方向（左右）                   |       向右移动时大于0，向左移动时小于0，静止不动时为 0       | 2.3.0 |
|                      `ysm.person_view`                       |                   返回当前模型所处人称视角                   | 第一人称：0，第三人称背面：1，第三人称正面：2；<br>应该能兼容越肩视角？ | 2.3.1 |
|                      `ysm.is_passenger`                      |                   与 query.is_riding 相同                    |                                                              | 1.1.5 |
|                        `ysm.is_sleep`                        |                  与 query.is_sleeping 相同                   |                                                              | 1.1.5 |
|                        `ysm.is_sneak`                        |                  与 query.is_sneaking 相同                   |                                                              | 1.1.5 |
|                     `ysm.biome_category`                     |                    获取玩家所处群系的类别                    |                仅在 1.16.5 和 1.18.2 可以使⽤                | 1.2.0 |
|                      `ysm.is_open_air`                       |                   判断玩家是否处于露天区域                   |                                                              | 1.2.0 |
|                      `ysm.eye_in_water`                      |       判断眼部是否在⽔下，⽤来判断玩家是否完全浸⼊⽔中       |                                                              | 2.2.1 |
|                      `ysm.frozen_ticks`                      | 当玩家与细雪接触时，此数值每刻增加 1 ，最大 140。不接触时每刻减少 2，直到归零 |                                                              | 2.2.1 |
|                       `ysm.air_supply`                       |                       空⽓值，最⼤ 300                       |                                                              | 2.2.1 |
|                       `ysm.has_helmet`                       |             玩家穿戴头盔时为 true，否则为 false              |                                                              | 1.1.5 |
|                    `ysm.has_chest_plate`                     |             玩家穿戴胸甲时为 true，否则为 false              |                                                              | 1.1.5 |
|                      `ysm.has_leggings`                      |             玩家穿戴护腿时为 true，否则为 false              |                                                              | 1.1.5 |
|                       `ysm.has_boots`                        |             玩家穿戴靴⼦时为 true，否则为 false              |                                                              | 1.1.5 |
|                      `ysm.has_mainhand`                      |           玩家主⼿持有物品时为 true，否则为 false            |                                                              | 1.1.5 |
|                      `ysm.has_offhand`                       |           玩家副⼿持有物品时为 true，否则为 false            |                                                              | 1.1.5 |
|                       `ysm.has_elytra`                       |            玩家穿戴鞘翅时返回 true，否则为 false             |                                                              | 1.1.5 |
|                       `ysm.is_riptide`                       |           玩家处于激流状态时为 true，否则为 false            |                                                              | 1.1.5 |
|                      `ysm.armor_value`                       |                        返回玩家护甲值                        |                                                              | 1.1.5 |
|                     `ysm.is_close_eyes`                      |            默认为 false，当玩家需要眨眼返回 true             |         眨眼频率大约在 4 秒左右。睡觉时也会返回 true         | 1.1.5 |
|                 `ysm.rendering_in_inventory`                 | 判断模型是否在 GUI 中渲染（例如：模型选择界面）<br>当模型在这些地方渲染时返回 true |                                                              | 2.2.1 |
|                 `ysm.rendering_in_paperdoll`                 |                  判断模型是否在纸娃娃中渲染                  |             纸娃娃指的就是左上角那个额外玩家渲染             | 2.3.1 |
|                       `ysm.on_ladder`                        |               布尔值，⽤来判断实体是否在梯⼦上               |                                                              | 2.2.1 |
|                     `ysm.ladder_facing`                      |                      实体所爬的梯⼦朝向                      |             输出数字 0-3，分别对应：南-西-北-东              | 2.2.1 |
|                      `ysm.arrow_count`                       |                    玩家插在⾝上的箭的数量                    |                                                              | 2.2.1 |
|                     `ysm.stinger_count`                      |                玩家插在⾝上的蜜蜂的毒刺的数量                |                                                              | 2.2.1 |
|                      `ysm.texture_name`                      |            返回玩家正在使⽤的材质名称（含扩展名）            |                                                              | 1.2.0 |
|                      `ysm.elytra_rot_x`                      |                  返回玩家鞘翅的 X 旋转⻆度                   |                                                              | 1.1.5 |
|                      `ysm.elytra_rot_y`                      |                  返回玩家鞘翅的 Y 旋转⻆度                   |                                                              | 1.1.5 |
|                      `ysm.elytra_rot_z`                      |                  返回玩家鞘翅的 Z 旋转⻆度                   |                                                              | 1.1.5 |
|                       `ysm.food_level`                       |                        返回玩家饱食度                        |                                                              | 1.1.5 |
|                 `ysm.first_person_mod_hide`                  | 当玩家安装更真实的第一人称模型模组，且需要隐藏玩家头部时为 true，否者为 false |                                                              | 1.1.5 |
|                `ysm.has_left_shoulder_parrot`                |                  判断玩家左肩是否有鹦鹉停靠                  |                                                              | 2.2.1 |
|               `ysm.has_right_shoulder_parrot`                |                  判断玩家右肩是否有鹦鹉停靠                  |                                                              | 2.2.1 |
|              `ysm.left_shoulder_parrot_variant`              |                    返回玩家左肩的鹦鹉变种                    | 1.19 及以前版本没有字符串形式的鹦鹉颜色变种，故此变量仅能用于 1.20 及以后版本 | 2.2.1 |
|             `ysm.right_shoulder_parrot_variant`              |                    返回玩家右肩的鹦鹉变种                    | 1.19 及以前版本没有字符串形式的鹦鹉颜色变种，故此变量仅能用于 1.20 及以后版本 | 2.2.1 |
|                     `ysm.attack_damage`                      |                玩家的攻击伤害，继承自玩家属性                |                                                              | 2.2.1 |
|                      `ysm.attack_speed`                      |                玩家的攻击速度，继承自玩家属性                |                                                              | 2.2.1 |
|                    `ysm.attack_knockback`                    |              玩家的攻击击退效果，继承自玩家属性              |                                                              | 2.2.1 |
|                     `ysm.movement_speed`                     |             玩家的基础移动加速度，继承自玩家属性             |                                                              | 2.2.1 |
|                  `ysm.knockback_resistance`                  |                玩家的击退抗性，继承自玩家属性                |                                                              | 2.2.1 |
|                          `ysm.luck`                          |                 玩家的幸运值，继承自玩家属性                 |                                                              | 2.2.1 |
|                      `ysm.block_reach`                       |              玩家的方块触及距离，继承自玩家属性              |                                                              | 2.2.1 |
|                      `ysm.entity_reach`                      |              玩家的实体触及距离，继承自玩家属性              |                                                              | 2.2.1 |
|                       `ysm.swim_speed`                       |                玩家的游泳速度，继承自玩家属性                |                                                              | 2.2.1 |
|                     `ysm.entity_gravity`                     |         玩家所受的重力，即下落加速度，继承自玩家属性         |                                                              | 2.2.1 |
|                  `ysm.step_height_addition`                  | 玩家不用跳跃可以直接走过的最大高度与玩家潜行时不会走下方块的最小高度差，     继承自玩家属性 |                                                              | 2.2.1 |
|                    `ysm.nametag_distance`                    |                       命名牌的可见距离                       |                                                              | 2.2.1 |
|           `ysm.first_order(name, input, response)`           |                         一阶系统函数                         |                                                              | 2.3.0 |
| `ysm.second_order(name, input, frequency, coefficient, response)` |                         二阶系统函数                         |                                                              | 2.3.0 |
|                    `ysm.bone_rot(name).x`                    |                获取特定组名的上一帧X轴旋转值                 |                                                              | 2.2.2 |
|                    `ysm.bone_rot(name).y`                    |                获取特定组名的上一帧Y轴旋转值                 |                                                              | 2.2.2 |
|                    `ysm.bone_rot(name).z`                    |                获取特定组名的上一帧Z轴旋转值                 |                                                              | 2.2.2 |
|                    `ysm.bone_pos(name).x`                    |             获取特定组名在模型相对空间的X轴位置              |                                                              | 2.2.2 |
|                    `ysm.bone_pos(name).y`                    |             获取特定组名在模型相对空间的Y轴位置              |                                                              | 2.2.2 |
|                    `ysm.bone_pos(name).z`                    |             获取特定组名在模型相对空间的Z轴位置              |                                                              | 2.2.2 |
|                   `ysm.bone_scale(name).x`                   |                获取特定组名的上一帧X轴缩放值                 |                                                              | 2.2.2 |
|                   `ysm.bone_scale(name).y`                   |                获取特定组名的上一帧Y轴缩放值                 |                                                              | 2.2.2 |
|                   `ysm.bone_scale(name).z`                   |                获取特定组名的上一帧Z轴缩放值                 |                                                              | 2.2.2 |
|                 `ysm.bone_pivot_abs(name).x`                 |             获取特定组名在模型绝对空间的X轴位置              |                                                              | 2.2.2 |
|                 `ysm.bone_pivot_abs(name).y`                 |             获取特定组名在模型绝对空间的Y轴位置              |                                                              | 2.2.2 |
|                 `ysm.bone_pivot_abs(name).z`                 |             获取特定组名在模型绝对空间的Z轴位置              |                                                              | 2.2.2 |
|                      `ysm.entity_type`                       |    返回当前渲染实体的类型，因为现在渲染不仅仅可以用于玩家    |                  返回 `player` 或者 `maid`                   | 2.4.0 |
|                       `ysm.is_player`                        |                    当前渲染对象是否是玩家                    |                                                              | 2.4.0 |
|                        `ysm.is_maid`                         |                    当前渲染对象是否是女仆                    |                                                              | 2.4.0 |
| `ysm.particle('id', x, y, z, dx, dy, dz, speed, count, life_time)` | 生成粒子，该函数参数和原版 `particle` 指令参数完全一致，仅仅多出了 `life_time` 参数 | 可参考官方 wiki：[粒子指令](https://zh.minecraft.wiki/w/%E5%91%BD%E4%BB%A4/particle) | 2.4.0 |
| `ysm.abs_particle('id', x, y, z, dx, dy, dz, speed, count, life_time)` | 生成粒子，该函数参数和原版 `particle` 指令参数完全一致，仅仅多出了 `life_time` 参数 | 该函数生成的粒子不会随玩家朝向而改变位置，可以理解为绝对坐标生成粒子 | 2.4.0 |
|               `ysm.mainhand_charged_crossbow`                |                     主手是否持有充能弩箭                     |                                                              | 2.4.0 |
|                `ysm.offhand_charged_crossbow`                |                     副手是否持有充能弩箭                     |                                                              | 2.4.0 |
|                       `ysm.is_fishing`                       |                      玩家是否在抛出鱼漂                      |                         也适用于女仆                         | 2.4.0 |
|              `ysm.perlin_noise(seed, x, y, z)`               |           柏林噪声函数，返回一个 0-1 之间的浮点数            | 可以看看可汗学院的这个教程：[柏林噪声](https://zh.khanacademy.org/computing/computer-programming/programming-natural-simulations/programming-noise/a/perlin-noise) | 2.4.0 |
|              `ysm.play_sound('id', 'sound_name', boolean,volume,pitch)`| 播放音频，`id`为该音频的标识，boolean为是否强制播放  |  | 2.5.0 |
|              `ysm.stop_sound('id')`| 停止音频，`id`为该音频的标识 |  | 2.5.0 |
|              `ysm.block_light`| 脚下方块亮度 |  | 2.5.0 |
|              `ysm.sky_light`| 脚下方块受到天空所贡献的亮度 |  | 2.5.0 |
|              `ysm.mouse(keycode)`| 检测鼠标按键情况 | 填入键码[鼠标按键对应的数字](https://www.glfw.org/docs/latest/group__buttons.html) | 2.5.0 |
|              `ysm.keyboard(keycode)`| 检测键盘按键情况 | 填入键码[按键对应的数字](https://www.glfw.org/docs/latest/group__keys.html) | 2.5.0 |

### ysm 弹射物相关

|           Molang            |                        描述                        |                             备注                             | 适用版本 |
| :-------------------------: | :------------------------------------------------: | :----------------------------------------------------------: | :------: |
|    `ysm.on_ground_time`     |           箭矢掉在地上的时长（单位：刻）           | 游戏内箭矢会在落地后 1200 刻（60 秒）后消失<br>如果在此期间箭矢被移动则重置为 0 |  1.2.0   |
|       `ysm.in_ground`       |                判断箭⽮是否掉在地上                |                                                              |  1.2.0   |
|   `ysm.projectile_owner`    |              返回发射该箭⽮的玩家实体              |               可以使⽤ “箭头表达式” 查询其属性               |  1.2.0   |
| `ysm.delta_movement_length` | 获取箭⽮在两 tick 之间的位移⻓度，可以⽤来判断速度 |                                                              |  1.2.0   |
|   `ysm.is_spectral_arrow`   |                判断箭⽮是否为光灵箭                |                                                              |  1.2.0   |
|     `ysm.shoot_item_id`     |              射出此箭的物品 ID 是什么              |                可以用来区分普通弓和弩射出的箭                |  2.3.0   |
|     `ysm.throwable_item`     |              物品类型投掷物的物品 ID              |                                |  2.5.0   |
|     `ysm.hooked_in`     |              鱼钩勾住的实体 ID              |                            不存在时为空字符串                  |  2.5.0   |    
|     `ysm.is_biting`     |              鱼钩是否咬钩              |                            布尔值                  |  2.5.0   |    

### Ctrl 部分

这部分主要用于动画控制器

|           Molang            |                             描述                             |                             备注                             | 适用版本 |
| :-------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: | :------: |
|        `ctrl.death`         |                        死亡时为 true                         |                                                              |  2.3.0   |
|       `ctrl.riptide`        |                使用三叉戟，触发激流时为 true                 |                                                              |  2.3.0   |
|        `ctrl.sleep`         |                        睡觉时为 true                         |                                                              |  2.3.0   |
|         `ctrl.swim`         |                        游泳时为 true                         |                                                              |  2.3.0   |
|        `ctrl.climb`         |                     趴下并移动时为 true                      |                                                              |  2.3.0   |
|       `ctrl.climbing`       |                     趴下不移动时为 true                      |                                                              |  2.3.0   |
|      `ctrl.ladder_up`       |                     梯子上上爬时为 true                      |                                                              |  2.3.0   |
|   `ctrl.ladder_stillness`   |                     梯子上定住时为 true                      |                                                              |  2.3.0   |
|     `ctrl.ladder_down`      |                     梯子上下滑时为 true                      |                                                              |  2.3.0   |
|         `ctrl.fly`          |                        飞行时为 true                         |                                                              |  2.3.0   |
|      `ctrl.elytra_fly`      |                      鞘翅飞行时为 true                       |                                                              |  2.3.0   |
|      `ctrl.swim_stand`      |                     站立式游泳时为 true                      |                                                              |  2.3.0   |
|       `ctrl.attacked`       |                       被攻击时为 true                        |                                                              |  2.3.0   |
|         `ctrl.jump`         |                        跳跃时为 true                         |                                                              |  2.3.0   |
|        `ctrl.sneak`         |                      潜行移动时为 true                       |                                                              |  2.3.0   |
|       `ctrl.sneaking`       |                     潜行不移动时为 true                      |                                                              |  2.3.0   |
|         `ctrl.run`          |                        跑步时为 true                         |                                                              |  2.3.0   |
|         `ctrl.walk`         |                        行走时为 true                         |                                                              |  2.3.0   |
|         `ctrl.idle`         |                        待命是为 true                         |                                                              |  2.3.1   |
|  `ctrl.hold(slotType, id)`  |      用法：`ctrl.hold('mainhand', '$minecraft:apple')`       | slotType 参数有：`mainhand` `offhand`<br>第二个参数和原来动画命名有点类似，`$`物品ID，`#`物品tag，`:`特殊类别 |  2.3.0   |
| `ctrl.swing(slotType, id)`  |       用法：`ctrl.swing('offhand', '#minecraft:axes')`       | slotType 参数有：`mainhand` `offhand`<br/>第二个参数和原来动画命名有点类似，`$`物品ID，`#`物品tag，`:`特殊类别 |  2.3.0   |
|  `ctrl.use(slotType, id)`   |             用法：`ctrl.use('offhand', ':eat')`              | slotType 参数有：`mainhand` `offhand`<br/>第二个参数和原来动画命名有点类似，`$`物品ID，`#`物品tag，`:`特殊类别 |  2.3.0   |
| `ctrl.armor(slotType, id)`  | 用法：`ctrl.armor('head', '$minecraft:iron_helmet')`<br>第一个参数有：feet, legs, chest, head | slotType 参数有：`chest` `feet` `head` `legs`<br/>第二个参数和原来动画命名有点类似，`$`物品ID，`#`物品tag，`:`特殊类别 |  2.3.0   |
|    `ctrl.ride(type, id)`    | 用法：`ctrl.ride('vehicle', '$minecraft:pig')`<br>`ctrl.ride('passenger', '$minecraft:pig')` | type 参数有：`vehicle` `passenger`<br/>第二个参数和原来动画命名有点类似，`$`物品ID，`#`物品tag，`:`特殊类别 |  2.3.0   |
|     `ctrl.carryon_type`     |       玩家抱起的类型，有三种 `block` `entity` `player`       |      返回字符串<br/>如果没有抱起任何东西，返回空字符串       |  2.3.0   |
| `ctrl.carryon_is_princess`  |                      玩家是否**被**抱起                      |                          返回布尔值                          |  2.3.0   |
|    `ctrl.parcool_state`     |                  返回当前正在执行的跑酷动作                  |    返回字符串<br/>如果没有执行任何跑酷动作，返回空字符串     |  2.3.0   |
|     `ctrl.swem_is_ride`     |                  玩家是否**骑乘** SWEM 的马                  |                          返回布尔值                          |  2.3.0   |
|      `ctrl.swem_state`      |                  玩家当前正在执行的马术动作                  |      返回字符串<br/>如果没有骑 SWEM 的马，返回空字符串       |  2.3.0   |
|     `ctrl.tac_hold_gun`     |                  玩家是否主手持 tacz 的枪械                  |                          返回布尔值                          |  2.3.0   |
|     `ctrl.tac_gun_type`     |         玩家当前持有的枪械类型（步枪、手枪那些分类）         |          返回字符串<br/>如果没有持枪，返回空字符串           |  2.3.0   |
|      `ctrl.tac_gun_id`      |                    玩家当前持有的枪械 ID                     |          返回字符串<br/>如果没有持枪，返回空字符串           |  2.3.0   |
|     `ctrl.tac_is_fire`      |                       玩家是否正在开火                       |                          返回布尔值                          |  2.3.0   |
|      `ctrl.tac_is_aim`      |                       玩家是否正在瞄准                       |                          返回布尔值                          |  2.3.0   |
|    `ctrl.tac_is_reload`     |                     玩家是否正在重载弹药                     |                          返回布尔值                          |  2.3.0   |
|     `ctrl.tac_is_melee`     |                   玩家是否正在近战（刺刀）                   |                          返回布尔值                          |  2.3.0   |
|     `ctrl.tac_is_draw`      |                       玩家是否正在切枪                       |                          返回布尔值                          |  2.3.0   |
| `ctrl.slashblade_animation` |                    玩家当前打出的剑技名称                    |      返回字符串<br/>如果没有打出任何剑技，返回空字符串       |  2.3.0   |
| `ctrl.playing_extra_animation` |                    玩家是否在播放轮盘动画                    |       	返回布尔值      |  2.5.0   |
| `ctrl.set_animation(animation, loop_type)`   |仅用于脚本控制器，用于播放指定动画|接受 1~2 个参数，第一个参数为动画名称，第二个参数可选，为动画循环类型。若不指定循环类型，则使用动画预设的循环类型|  2.5.0   |
| `ctrl.set_beginning_`<br>`transition_length(second)`   |仅用于脚本控制器，<br>用于设置当前控制器的动画混合时间|接受 1 个参数，为动画的混合时间，单位为秒|  2.5.0   |

### TLM 部分

这部分 molang 一般只能用于女仆。

|          Molang          |                  描述                   |                             备注                             | 适用版本 |
| :----------------------: | :-------------------------------------: | :----------------------------------------------------------: | :------: |
|     `tlm.is_begging`     | 女仆处于祈求状态时为 true，否则为 false |                                                              |  2.4.0   |
|     `tlm.is_sitting`     | 女仆处于待命状态时为 true，否则为 false |                                                              |  2.4.0   |
|    `tlm.has_backpack`    |   女仆背有背包时为 true，否则为 false   |                                                              |  2.4.0   |
| `tlm.favorability_point` |             女仆好感度点数              |                        返回值：0-384                         |  2.4.0   |
| `tlm.favorability_level` |             女仆好感度等级              |                        返回值：0-384                         |  2.4.0   |
|      `tlm.task_id`       |             女仆工作模式 id             |                           是字符串                           |  2.4.0   |
|      `tlm.schedule`      |              女仆工作日程               | 返回值：`day`、`night`、`all`<br>分别对应：白班、夜班、全天  |  2.4.0   |
|      `tlm.activity`      |              女仆当前活动               | 返回值：`work`、`idle`、`reset`<br/>分别对应：上班、下班、睡觉 |  2.4.0   |
|  `tlm.gomoku_win_count`  |         女仆五子棋赢棋总回合数          |                      目前仅记录了五子棋                      |  2.4.0   |
|    `tlm.gomoku_rank`     |             女仆五子棋段位              |                       1-4，==没有 0==                        |  2.4.0   |
|    `tlm.game_statue`     |                棋局状态                 |              返回值：`win`、`lost`或者空字符串               |  2.4.0   |
|   `tlm.backpack_type`    |               女仆背包 ID               |                  女仆可以装备多种类型的背包                  |  2.4.0   |
|     `tlm.is_entity`      |              渲染女仆实体               |      女仆可以被做成雕像、手办，这个变量就用来区分这几者      |  2.4.0   |
|     `tlm.is_statue`      |                渲染雕像                 |      女仆可以被做成雕像、手办，这个变量就用来区分这几者      |  2.4.0   |
|   `tlm.is_garage_kit`    |                渲染手办                 |      女仆可以被做成雕像、手办，这个变量就用来区分这几者      |  2.4.0   |
|     `tlm.show_item`      |          女仆装饰槽位的物品 ID          | 女仆物品栏的最后一格会有特殊显示，这个就记录了物品栏最后一格的物品 ID |  2.4.0   |

### 饰品 部分

这部分 molang 用于饰品MOD相关
|          Molang          |                  描述                   |                             备注                             | 适用版本 |
| :----------------------: | :-------------------------------------: | :----------------------------------------------------------: | :------: |
|`ysm.has_any_curios(type, name...)`| 判断指定饰品槽是否佩戴了指定的饰品中的任意一个。type 为饰品槽类型，name 为物品 id（支持任意数量，不止一个），下同。当 name 数量为 0 时，仅检测饰品槽是否为空。 |                                                              |  2.5.0   |
|`ysm.has_any_curios_with_all_tags(type, tag...)`| 判断指定饰品槽是否佩戴了任意一个饰品有给定的所有标签 |                          返回布尔值                          |  2.5.0   |
|`ysm.has_any_curios_with_all_tags(type, tag...)`| 判断指定饰品槽是否佩戴了任意一个饰品有给定的所有标签 |                          返回布尔值                          |  2.5.0   |
|     `ysm.dump_curios`     | 输出当前玩家佩戴的饰品信息。仅在动画调试模式下有效。 |          玩家当前穿戴饰品的所有信息                |  2.5.0   |

#### 注意
- forge/neoforge 端饰品模组为 Curios；
- fabric 端饰品模组为 Trinkets；
- 两端的饰品槽类型不同，需要单独适配。

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

#### 注意
- forge/neoforge 端饰品模组为 Curios；
- fabric 端饰品模组为 Trinkets；
- 两端的饰品槽类型不同，需要单独适配。
