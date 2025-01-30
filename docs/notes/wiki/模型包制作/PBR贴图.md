---
title: PBR贴图
icon: material-symbols:texture
createTime: 2025/01/30 20:02:30
permalink: /wiki/pbr/
author: 流风
---

我们也添加了 Oculus（Forge） 和 Iris（Fabric） 模组 PBR 材质的支持。

## 什么是 PBR

简单来说，通过 PBR 我们可以用一种较为简便的方法来更加突出一个物体的质感。常用的有光滑度、金属度、亮度、法线。

<Card title="光滑度" icon="mdi:mirror">
光滑度的值越高，模型表面就会更光滑，最高甚至可以达到镜面反射的效果。<br>
但注意，用这种方法做出来的镜面反射并不是真正意义上的镜面反射，可以理解为弱化版本。想用光滑度来做镜子效果的请多考虑一下。
</Card>

<Card title="金属度" icon="icon-park:heavy-metal">
金属度的值越高，模型表面的光反射越强，模型边缘会有更强烈的高光，金属质感更强。
</Card>

<Card title="亮度" icon="line-md:car-light">
亮度可以控制模型表面的发光度。用此效果可以不再依靠组发光，而是在贴图上来制作发光效果。<br>
但注意这种方法并不能做到自发光，在黑夜下仍旧是暗的。
</Card>

<Card title="法线" icon="codicon:screen-normal">
法线可用于体现模型的凹凸细节，基于光照可用 2D 的贴图表现出 3D 的立体效果。<br>
这个功能比较难用，在熟练掌握之前请勿投入实战。
</Card>

## 注意事项

在开始制作 PBR 之前，你必须了解：

1. 不要太过依赖 PBR 贴图的效果，从而忽略原本贴图的重要性。PBR 的效果只能是锦上添花，在使用 PBR
   之前确保你的原贴图足够优秀。更不要有 `“虽然我原贴图的金属画的烂，但我可以用 PBR 把金属度拉高来弥补啊”` 这种类型的想法。
2. 由于 PBR 的制作流程，强烈建议在制作模型的时候拉出一块色板并控制用色数量来进行上色。非常忌讳渐变笔刷，不然换色时极为难受！
3. 在游戏内加载 PBR 时请开启光影，并确认此光影支持 PBR 贴图

## 开始制作PBR

这里我们用蓝玫瑰（02Bunny）提供的模型，从零开始制作一张 PBR 贴图。

![7162d2214e813c4b.jpg](https://s2.loli.net/2025/01/30/KCu37bDxr4LsgeX.jpg)

首先我们复制一张贴图出来，在名称后缀加上 `_s`（常见命名习惯，并非必须要求）。切换到绘画模式，在设置里把画板切换到 RGB 模式。

这样在下方的数值就会一一对应 PBR 的值，如图依次为：光滑度 128，金属度 255，亮度 0。

![71d061534ea4540c.jpg](https://s2.loli.net/2025/01/30/4sXHn6QbT25ImZq.jpg)

然后我们就可以在新复制出来的贴图上进行换色。刚才我们调的是一个金属的材质，那我们就对模型上应该是金属的地方进行换色。

![5f9718c096f5c71b.jpg](https://s2.loli.net/2025/01/30/ES9I1VMnwckzlhu.jpg)

其他地方同理，这个地方应该是什么材料的就怎么给他调什么数值。

例如玻璃，我们可以给他 `255 64 0` 强调反光度，任何发光件可以填充为 `0 0 255`，光滑和金属也可以依据情况添加数值。像轮胎，头发，布料这类，可以不添加任何值，即填充为 `0 0 0`。

![419b098b3f62d33d.jpg](https://s2.loli.net/2025/01/30/WAjlcXQz4trskGZ.jpg)

## 最终效果

之后我们就可以把贴图和模型导出来了。通过插件将这几个文件挂载上即可。

![1.png](https://s2.loli.net/2025/01/30/2mh7ZFRVJzpg5UW.png){width="80%"}

这样我们的 PBR 贴图就算完成了，现在就可以进入游戏检查，对比一下 PBR 前后效果：

<CardGrid>
  <ImageCard
    image="https://s2.loli.net/2025/01/30/f5IsdMaKxyem3V2.jpg"
    title="使用 PBR 前"
    href="/"
  />
  <ImageCard
    image="https://s2.loli.net/2025/01/30/OMzXqU87EdLcgDm.jpg"
    title="使用 PBR 后"
    href="/"
  />
</CardGrid>

如果发现有地方效果不好的话，回到 BlockBench 里更改 PBR 贴图并保存，回到游戏使用刷新指令即可实时更改检查效果。

::: caution 再次警告
不要太过依赖 PBR 贴图的效果，从而忽略原本贴图的重要性。 原贴图画的好才是最重要的。
:::
