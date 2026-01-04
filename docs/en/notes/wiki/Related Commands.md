---
title: Related Commands
icon: heroicons:command-line-20-solid
createTime: 2025/02/05 23:16:54
permalink: /en/wiki/command/
tags:
  - Commands
  - Server Management
  - Model Creation
---

The Yes Steve Model mod also provides a number of commands. Most of these commands require permission level 2 to execute.

All commands have in-game hints. All model IDs and player IDs are intelligently suggested.

## Main Commands

These commands can be executed on both the server and the client.

- `/ysm model reload` Reload all model files: Also synchronizes the model files to all client players.
- `/ysm model set <player> <model_id> <texture_id> [ignore_auth]` Assign a specific model and texture to a player, `-` can be entered in `texture_id` to apply the default texture. The last `ignore_auth` parameter is optional. When set to true, it will ignore the model authorization and force the model to be assigned to the player.
- `/ysm play <player> <animation_name>` Force a player to play an animation.
- `/ysm play <player> stop` Clear the animation that was previously forced to be played by the player.
- `/ysm auth <player> all` Authorize all models to a player.
- `/ysm auth <player> clear` Clear all authorized models for a player.
- `/ysm auth <player> add <model_id>` Authorize a specific model to a player.
- `/ysm auth <player> remove <model_id>` Remove the authorization of a specific model for a player.
- `/ysm export <model_id> [extra_info]` Export a model to the YSM exclusive model format. You can also add additional information.
- `/ysm ping` Test the connectivity between the client and the server. If the message "The server mod and the client version are inconsistent" appears, you can execute this command. This command has no permission requirements.
- `/ysm molang execute <player> <expr>` Execute molang on a specified player. It can be used in multiplayer games, but the execution result will not be printed.
- `/ysm model disable <player> [true | false]` This command was added in version 2.5.2 and is used to disable a player's model. When set to true, the corresponding player will no longer display the YSM model and will revert to the original model.

## Client Commands

These commands are only executed on the client and are used by model creators to debug animations.

- `/ysmclient watch var <expr>` A shortcut command added in 2.4.0 that quickly adds molang expressions to the custom debug screen, which will be calculated and updated in real time;
- `/ysmclient watch state <controller>` A command added in 2.4.0 that quickly monitors the current state of the controller on the custom debug screen, which will be calculated and updated in real time;
- `/ysmclient watch clear` A shortcut command added in 2.4.0 that clears all previously added molang and controller monitoring.
- `/ysmclient molang execute <expr>` Execute a molang expression on the local player and output the result in the chat.
- `/ysmclient molang watch add [pre|post] <name> <expr>` Add a molang expression to the custom debug screen, which will be calculated and updated in real time.
    - The expression is executed before animations if `pre` is specified, or after if `post` is specified.
    - In versions 2.2.2 and earlier, you need to press `Alt` + `B` twice to enter the custom debug screen.
    - In versions 2.3.0 and later, you only need to press `Alt` + `B` once to enter the custom debug screen.
    - In versions 2.5.2 and later, you can debug the target entity by pressing `Alt` + `B` on the entity using the YSM model.
- `/ysmclient molang watch remove <name>` Remove a previously added molang expression.
- `/ysmclient molang watch clear` Clear all previously added molang expressions.
- `/ysmclient debug <selector>` A command added in 2.5.2 which can accurately match the corresponding entity for debugging.
- `/ysmclient molang execute <expr>` A command added in 2.5.2 which can execute Molang expressions on the currently debugged entity.
