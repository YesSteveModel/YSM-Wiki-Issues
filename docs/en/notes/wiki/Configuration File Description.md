---
title: Configuration File Description
icon: icon-park-twotone:config
createTime: 2025/02/05 23:13:45
permalink: /en/wiki/config/
tags:
  - Configuration
  - Server Management
---

The Yes Steve Model mod also provides a number of configuration files to facilitate players in making adjustments or for server administrators to maintain the server.

## Client Configuration

An in-game configuration interface can be opened in the upper right corner of the model switching interface, where various client configuration options can be adjusted.

If you want to adjust the paper doll in the upper left corner, simply press the `Alt P` key combination (if it doesn't work, please check the key bindings).

![2.png](https://s2.loli.net/2025/01/27/WzH1G8TK4hcrLks.png)

![2025-01-27_11.57.06.png](https://s2.loli.net/2025/01/27/sZtCmdDA2pKIuHU.png)

## Server Configuration

The Yes Steve Model mod has two configuration files. One is located at `config/yes_steve_model-common.toml`, and the other is at `Save Directory/serverconfig/yes_steve_model-server.toml` (this configuration is available after version 2.3.0).

### Common Configuration (Requires Restart)
Configuration at `config/yes_steve_model-common.toml`. The content of this file is different before 2.2.2 and after 2.3.0.

```toml
[general]
	#Whether to display disclaimer GUI
	DisclaimerShow = false
	#Whether to print animation roulette play message
	PrintAnimationRouletteMsg = true
	#Prevents rendering of self player's model
	DisableSelfModel = false
	#Prevents rendering of other player's model
	DisableOtherModel = false
	#Prevents rendering of self player's hand
	DisableSelfHands = false
	#Prevents rendering of arrows model
	DisableArrowsModel = false
	#The default model ID when a player first enters the game
	DefaultModelId = "default"
	#The default model texture when a player first enters the game
	DefaultModelTexture = "default.png"
	#If rendering errors occur, try turning on this.
	UseCompatibilityRenderer = false
	#The amount of volume when the animation is played.
	#Range: 0.0 ~ 100.0
	SoundVolume = 100.0
```

### Server Configuration (No Restart Required, Automatic Hot-reload)

Configuration at `Save Directory/serverconfig/yes_steve_model-server.toml`. This file is only available in 2.3.0. Before 2.2.2, this configuration was in `config/yes_steve_model-common.toml`.
```toml
[server_scheduler]
	#Concurrent level for processing models. Value 0 means AUTO.
	#Range: 0 ~ 15
	ThreadCount = 0
	#Bandwidth limitation during distributing models to players.(In Mbps)
	#Range: 1 ~ 999
	BandwidthLimit = 5
	#Timeout for players to respond to synchronization. Value not greater than 10 means AUTO.(In seconds)
	#Range: 0 ~ 120
	PlayerSyncTimeout = 0
	#Whether or not players are allowed to switch models
	CanSwitchModel = true
	#Models that are not displayed on the client model selection screen
	#Example: ["default", "default_boy", "alex", "steve", "qingluka", "wine_fox", "wine_fox_jk"]
	ClientNotDisplayModels = []
```
