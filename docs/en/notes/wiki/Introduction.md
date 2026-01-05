---
title: Introduction
icon: mdi:tooltip-text-outline
createTime: 2025/02/05 20:41:42
permalink: /en/wiki/intro/
tags:
  - Introduction
  - Quick Start
---

Yes Steve Model is a mod that modifies the original player model. It uses the model and animation files of the Minecraft Bedrock Edition and provides many optimization and model encryption features.

![img](https://s2.loli.net/2023/01/01/RAor58n6LBct3kW.jpg)

::: tip
The latest version of Yes Steve Model is **2.6.0**.
:::

::: tip
Version **2.6.0** supports 1.20.1 Forge, 1.20.1/1.21.1 Fabric, and 1.21.1 NeoForge, a total of 4 versions.

Version **2.4.1** supports 1.16.5/1.18.2/1.19.2/1.20.1 Forge, 1.16.5/1.18.2/1.19.2/1.20.1/1.21/1.21.1 Fabric, and 1.21/1.21.1 NeoForge, a total of 12 versions.
:::

## Basic Introduction

The Yes Steve Model mod takes into account the mod requirements of the server community and adopts many designs suitable for the server environment, including but not limited to:

- Automatic synchronization of client models: When ordinary players enter the server, the server will ==automatically== synchronize the models to the players' computers.
- Encrypted model files: All the models sent to the player clients are ==encrypted binary files==, effectively avoiding model theft!
- Model permission function: Models can be individually authorized. Only after the OP enters the command to authorize, specific models can be used.
- Modification of the original player model: The default Steve and Alex models are added, and both models can automatically use the player's skin as their textures.
- Animation roulette function: When the `Z` key is pressed, an animation roulette is opened, where you can conveniently play various interesting animations (such as motions, expressions, etc.)
- Maid model rendering support: Installing Touhou Little Maid mod version 1.2.0+ with Yes Steve Model mod version 2.4.0+ allows you to use YSM models and animations on maids.

## Animation Support

<CardGrid>
  <ImageCard
    image="https://s2.loli.net/2023/07/21/25SgTJLdlU1iYCQ.jpg"
    title="First-person Model"
    description="The mod name is First-person Model, but there are still some errors that are difficult to solve."
    href="/"
  />
  <ImageCard
    image="https://s2.loli.net/2023/07/20/N6sOS9ea5xwfn8t.jpg"
    title="TAC/TACZ (Timeless and Classic Guns)"
    description="Perfectly compatible with the gun-holding, reloading, aiming, firing and many other motions of this mod."
    href="/"
  />
  <ImageCard
    image="https://s2.loli.net/2024/02/14/71QyVR6NSHmbdo3.jpg"
    title="Carry On"
    description="Capable of playing the corresponding animation when the player picks up other blocks or entities. With the Carry On mod for Minecraft 1.19.2 and 1.20 you can even pick up other players, so you can cultivate feelings with your friends on the server."
    href="/"
  />
  <ImageCard
    image="https://s2.loli.net/2024/02/14/LfQxMCZKNAtzsOG.jpg"
    title="SlashBlade"
    description="Capable of rendering some specific main and off-hand Slash Blades. Version 2.3.0 adds compatibility with SlashBlade animations, with 33 new animations. You can refer to the slashblade.animation.json file of the default model."
    href="/"
  />
  <ImageCard
    image="https://s2.loli.net/2024/08/14/jlzG2E5FpvCQyaq.jpg"
    title="SWEM (Equestrian)"
    description="11 new animations are added. You can refer to the swem.animation.json file of the default model."
    href="/"
  />
  <ImageCard
    image="https://s2.loli.net/2024/08/14/aV72OGH8pzrvW5R.jpg"
    title="Parcool"
    description="35 new animations are added. You can refer to the parcool.animation.json file of the default model."
    href="/"
  />
  <ImageCard
    image="https://s2.loli.net/2025/03/05/WoZCTghkiP1pr2S.jpg"
    title="Touhou Little Maid"
    description="15 new animations are added. You can refer to the tlm.animation.json file of the default model."
    href="/"
  />
  <ImageCard
    image="https://s2.loli.net/2025/03/05/8Wzm6vdPlyDeYBC.jpg"
    title="Sophisticated Backpacks"
    description="Capable of rendering Sophisticated Backpacks"
    href="/"
  />
 <ImageCard
    image="https://s2.loli.net/2025/09/19/HUiqBToOeYDnayl.jpg"
    title="Superb Warfare"
    description="It can be perfectly compatible with various actions of the module, such as holding a gun, reloading, aiming, firing, and throwing grenades."
    href="/"
  />
 <ImageCard
    image="https://s2.loli.net/2025/09/19/2Mhn5ufiCxysOwH.jpg"
    title="Create"
    description="Support Suspended-under-Chain Animation."
    href="/"
  />
 <ImageCard
    image="https://s41.ax1x.com/2026/01/04/pZadZ6g.jpg"
    title="Iron's Spells 'n Spellbooks"
    description="Support the casting animations of Iron's Spells 'n Spellbooks"
    href="/"
  />
 <ImageCard
    image="https://s41.ax1x.com/2026/01/04/pZadEp8.jpg"
    title="Immersive Melodies"
    description="Support Immersive Melodies Animations"
    href="/"
  />
</CardGrid>

## Mod Compatibility

- 1.16.5/1.18.2 Forge
  Compatibility with the [Timeless and Classic Guns (TAC)](https://www.curseforge.com/minecraft/mc-mods/timeless-and-classic-guns-tac) mod has been added, but you need version **0.3.7** or higher of the [Timeless and Classic Guns (TAC)](https://www.curseforge.com/minecraft/mc-mods/timeless-and-classic-guns-tac) mod. Otherwise, holding a gun in the game will cause the game to crash.
- 1.18.2/1.19.2/1.20.1 Forge
  Compatibility with the [Timeless and Classics Zero (TACZ)](https://www.curseforge.com/minecraft/mc-mods/timeless-and-classics-zero) mod has been added.
- Although compatibility with the [First-person Model](https://www.curseforge.com/minecraft/mc-mods/first-person-model) mod has been added, there are still some errors.
- Support for PBR materials of the Oculus (Forge) and Iris (Fabric) mods has been added.
- Support for the animations of [SlashBlade](https://www.curseforge.com/minecraft/mc-mods/slashblade) has been added. Version 2.2.1 also supports [SlashBlade: Resharped](https://www.curseforge.com/minecraft/mc-mods/slashblade-resharped). Version 2.4.0 supports the animations of some Japanese blade addons.
- Armor of [Cosmetic Armor](https://www.curseforge.com/minecraft/mc-mods/cosmetic-armor-reworked) and elytra slots are supported.
- The [SWEM (Equestrian)](https://www.curseforge.com/minecraft/mc-mods/swem) and [Parcool](https://www.curseforge.com/minecraft/mc-mods/parcool) mods are supported.
- Compatible with the fake players of the [Carpet](https://www.curseforge.com/minecraft/mc-mods/carpet) and [Curtain](https://www.curseforge.com/minecraft/mc-mods/curtain) mods.
- Compatible with [Touhou Little Maid](https://www.curseforge.com/minecraft/mc-mods/touhou-little-maid), which can replace the rendering model of the maid in this mod. Requires to use Maid mod version 1.2.0 or above.
- Compatible with [Sophisticated Backpacks](https://modrinth.com/mod/sophisticated-backpacks), which can render the backpack of this mod.
- Compatible with [Better Combat](https://modrinth.com/mod/better-combat), Attack animations for Better Combat can now be created.
- Compatible with [Iron's Spells 'n Spellbooks](https://modrinth.com/mod/irons-spells-n-spellbooks) mods.
- Compatible with [Immersive Melodies](https://modrinth.com/mod/immersive-melodies) mods.

## Platform Support

Versions 1.1.5 and earlier were written in pure Java and support the three major mainstream platforms and mobile platforms.

Since the encryption algorithm of the old versions written in Java was quickly cracked, starting from version 1.2.0, the core encryption and rendering parts are all written in C++. This greatly improves the rendering performance and security, but the multi-platform support is poor.

The system support situation is as follows:

|        System         | Client | Server |
| :-------------------: | :----: | :----: |
|     Windows AMD64     |   ✅   |   ✅   |
|      Linux AMD64      |   ✅   |   ✅   |
|    Android AArch64    |   ✅   |   ❌   |
|     macOS (Intel)     |   ❌   |   ❌   |
| macOS (Apple Silicon) |   ❌   |   ❌   |

