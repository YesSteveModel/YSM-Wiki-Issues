---
title: Freesia 插件
createTime: 2025/03/07 21:50:16
permalink: /wiki/freesia-plugin/
icon: clarity:plugin-solid
author: 嗨皮重生锚
tags:
  - 安装
---

::: caution 提示
**Freesia 插件不是 YSM 官方作品**，它使用 [Mozilla Public License Version 2.0](https://github.com/YesSteveModel/Freesia/blob/main/LICENSE) 开源协议进行发布！
:::

::: tip
Freesia 插件原作者为 [MrHua269](https://github.com/MrHua269)，现由 [HappyRespawnanchor](https://github.com/HappyRespawnanchor) 进行维护，在这里对几位作者表示感谢。
:::

Freesia 是一个服务端代理插件，使插件服务器能够支持 Yes Steve Model。

Freesia 分为三个部分：`Velocity`、`Worker` 与安装了 `Backend` 的插件子服。`Velocity` 负责转发并处理 YSM 的数据包，`Worker` 负责模型同步与数据生成，子服负责被玩家游玩。

可在[此处](https://github.com/YesSteveModel/Freesia/releases)获取 Freesia 的最新版本。

<RepoCard repo="YesSteveModel/Freesia" />

## Velocity
在 Velocity 端，涉及两个主要组件：`master_control_service`和 `msession`。  
- `master_control_service`：用于 Velocity 与 Worker 节点之间的通信，以控制其行为。  
- `msession`：用于转发玩家的 YSM 数据包至装有 YSM 模组的 Worker 节点，以进行缓存同步。  

::: warning
- 确保 Velocity 能够连接到 Worker 服务器的 Minecraft 端口。  
- 切勿将 Worker 服务器加入 Velocity 的子服列表，也不要将 `master_control_service` 和 `msession` 端口暴露至公网，否则会带来安全隐患。
:::


### 配置文件示例
```toml
[functions]
# 是否踢出未安装 YSM 模组的玩家
kick_if_ysm_not_installed = false
# 握手超时时间（单位：毫秒）
ysm_detection_timeout_for_kicking = 30000

[messages]
# 语言选项，支持 "zh_CN" 和 "en_US"
language = "zh_CN"

[worker]
# 主控制节点地址
worker_master_ip = "localhost"
worker_master_port = 19200
# Worker 服务器地址（需与 server.properties 中的 server-port 和 server-ip 对应）
# 切勿将 Worker 和主控制节点的端口暴露至公网，否则会带来安全风险
worker_msession_port = 19199
worker_msession_ip = "localhost"
```

## Worker
Worker 是一个 **安装了 YSM 和 Freesia-Worker 模组的 Fabric 1.21 服务器**，用于处理 YSM 逻辑（如缓存同步）、实体状态更新及 NBT 数据生成。  
为了减少占用，Worker 端已禁用绝大多数游戏功能，仅处理 YSM 数据包和登录阶段的数据包，以模拟类似 MultiPaper 的多 Slave 场景。  

Worker **不会执行大部分游戏逻辑，也不会进行世界存档**，但依然存在 Tick 逻辑。由于 YSM 逻辑的实现，Worker 侧可能成为性能瓶颈，但 Freesia 采用了异步处理方式，因此影响较小。  

### Worker 端 Freesia 配置文件示例：
```toml
[worker]
# 需与 Freesia-Velocity 配置保持一致
worker_master_ip = "localhost"
worker_master_port = 19200
# 控制节点的重连间隔（单位：秒）
controller_reconnect_interval = 1
# 玩家数据缓存的过期时间（单位：秒）
player_data_cache_invalidate_interval_seconds = 30
```

### Worker 服务器 `server.properties` 配置：
```properties
# 需与 Freesia-Velocity 配置保持一致
server-ip=127.0.0.1
server-port=19199
```

## 子服
子服主要负责处理来自 Velocity 端的玩家 Tracker 检查请求，并通知 Velocity 更新玩家 Tracker。因此，**子服必须安装 `Freesia-Backend`**。

## 示例脚本
若还不理解使用方法，可以从下方获取一个模板文件，请执行其中的`install-freesia.bat`（Windows）或`install-freesia.sh`（Linux）来下载相关文件，下载完成后即可运行对应文件夹中的`start.bat`或`start.sh`开启服务端。
<FileCard
fileName="freesia-template.zip"
fileSize="10.6 KB"
fileUrl="/files/freesia-template.zip"
/>