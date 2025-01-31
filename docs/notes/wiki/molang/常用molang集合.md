---
title: 常用 molang 集合
createTime: 2025/01/31 16:27:19
permalink: /wiki/molang/common/
icon: ix:ai
author:
  - 星屑海螺
  - 冰精
  - 雨倩
---

## BlockBench 变量占位符

BlockBench 里支持添加变量占位符按钮，快速调试不同 molang 参数效果。 如图所示：

![molang1.6.pdf-image-000.jpg](https://s2.loli.net/2025/01/31/93nW8LOjuYGQMdo.jpg)

比如写入`query.ground_speed=slider('地面速度')`，则表现为：添加一个`query.ground_speed`的变量滑块，其命名为`地面速度`。

如果写入`ysm.has_chest_plate=toggle('胸甲')`，则表现为：添加一个`ysm.has_chest_plate `的变量选项，其命名为`胸甲`。

复制以下文本，即可快捷更改变量来预览 molang 效果：

```javascript
query.ground_speed = slider('地面速度')
query.vertical_speed = slider('垂直速度')
ysm.head_yaw = slider('左右视角')
ysm.head_pitch = slider('上下视角')
query.health = slider('当前生命值')
query.max_health = slider('最大生命值')
ysm.food_level = slider('玩家饱食度')
query.player_level = slider('玩家等级')
query.time_of_day = slider('时间')
query.moon_phase = slider('月相')
ysm.armor_value = slider('玩家护甲值')
query.distance_from_camera = slider('摄像机距离')
ysm.has_chest_plate = toggle('胸甲')
ysm.has_leggings = toggle('护腿')
ysm.has_helmet = toggle('头盔')
ysm.has_boots = toggle('鞋子')
ysm.has_elytra = toggle('鞘翅')
ysm.is_close_eyes = toggle('眨眼')
ysm.has_mainhand = toggle('主手持握')
ysm.has_offhand = toggle('副手持握')
query.is_on_fire = toggle('着火')
query.is_in_water_or_rain = toggle('在水和雨中')
query.is_spectator = toggle('观察者模式')
query.is_first_person = toggle('第一人称视角')
query.is_jumping = toggle('跳跃中')
query.is_on_ground = toggle('在地面上')
```

## 常用 molang 参考

### 换装设计

检测护甲栏是否有护甲，通过穿脱护甲来实现换装：

![molang1.6.pdf-image-007.jpg](https://s2.loli.net/2025/01/31/EOk6Ia5fct4LA9H.jpg){width="75%"}

![molang1.6.pdf-image-009.jpg](https://s2.loli.net/2025/01/31/exZsAfbikwHtzh6.jpg){width="75%"}

::: card

- 用于：`parallel` 动画
- 部位：衣服/盔甲
- 关键帧：缩放
- 头盔：`ysm.has_helmet`
- 胸甲：`ysm.has_chest_plate`
- 护腿：`ysm.has_leggings`
- 鞋子：`ysm.has_boots`

:::

### 自发光效果

通过在组名前加上 `ysmGlow` 前缀来实现发光效果（注意大小写）：

![molang1.6.pdf-image-011.jpg](https://s2.loli.net/2025/01/31/ctB2piGgWHzeTyw.jpg){width="60%"}
![molang1.6.pdf-image-012.jpg](https://s2.loli.net/2025/01/31/gZ5CiFUM3Etqxmy.jpg)

### 眼部追踪

让瞳孔跟随玩家视线进行移动，模拟眼部追踪效果。

![molang1.6.pdf-image-013.jpg](https://s2.loli.net/2025/01/31/kxMqBTubXGepv37.jpg){width="75%"}

![molang1.6.pdf-image-015.jpg](https://s2.loli.net/2025/01/31/n4CS7g2wNBpzk9i.jpg){width="75%"}

::: card

- 用于：`parallel` 动画
- 部位：瞳孔
- 关键帧：位置
- X：`ysm.head_yaw/180`
- Y：`ysm.head_pitch/360`
- Z：`0`

:::

### 头部锁定

锁定头部，让其不跟随视角进行旋转。

::: card

- 用于：特殊动画
- 部位：头部
- 关键帧：旋转
- X：`ysm.head_pitch`
- Y：`math.clamp(ysm.head_yaw,-60,60)`
- Z：`0`

:::

### 自动眨眼

自动根据是否需要闭眼而闭眼（通常为 4 秒一次），懒得做闭眼动画可以直接用这个。

![molang1.6.pdf-image-017.jpg](https://s2.loli.net/2025/01/31/uWDrRi1Fak2wSqU.jpg){width="75%"}

:::: card-grid
::: card

- 用于：`pre_parallel` 动画
- 部位：眼睛
- 关键帧：缩放
- 全部填写：`ysm.is_close_eyes ? 0 : 1`

:::

::: card

- 用于：`pre_parallel` 动画
- 部位：眉毛
- 关键帧：位置
- X：`0`
- Y：`ysm.is_close_eyes ? -1 : 0`
- Z：`0`

::::

TODO 未完成