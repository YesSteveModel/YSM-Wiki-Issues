# Yes Steve Model Mod Instructions

## 1. Introduction

The Yes Steve Model mod is a **Minecraft Forge** and **Fabric** mod that modifies the vanilla player model, using Minecraft Bedrock Edition models and animation files. This allows players to customize player models and animations as they wish.

> Currently, the latest version of Yes Steve Model is **2.2.2**
>
> Supported mod loaders: 1.18.2/1.19.2/1.20.1 Forge, 1.18.2/1.19.2/1.20.1/1.21 Fabric, and 1.21 NeoForge.

> **Notes:**
>
> - This mod supports [Timeless and Classics Guns](https://www.curseforge.com/minecraft/mc-mods/timeless-and-classic-guns-tac) of version **0.3.7** or higher. Playing with incompatible versions can lead to a crash.
> - This mod supports [Timeless and Classics Zero](https://www.curseforge.com/minecraft/mc-mods/timeless-and-classics-zero) in 1.18.2/1.19.2/1.20.1 Forge.
> - This mod supports [First-person Model](https://www.curseforge.com/minecraft/mc-mods/first-person-model) with limited compatibility. There can be some rendering issues.
> - Since version 2.2.1, this mod has supported PBR textures in Oculus (Forge) and Iris (Fabric.)
> - This mod supports [SlashBlade](https://www.curseforge.com/minecraft/mc-mods/slashblade) rendering. Since version 2.2.1, [SlashBlade: Resharped](https://www.curseforge.com/minecraft/mc-mods/slashblade-resharped) has been supported as well.
> - Since version 2.2.1, this mod has supported the armor and elytra slots in [Armourer's Workshop](https://www.curseforge.com/minecraft/mc-mods/armourers-workshop).
> - In the latest versions (1.2.0 and above,) the issue that oversized models (over 2MB) could not be synchronized has been solved.

![001](https://s2.loli.net/2023/01/01/RAor58n6LBct3kW.jpg)

The Yes Steve Model mod takes into account the mod needs of the server community, and adopts many designs suitable for the server environment, including but not limited to:

- Automatic client model synchronization: When players enter the server, the server will **automatically** synchronize the models to their clients.
- Model file encryption: All the models sent to the player client are **encrypted binary files**, effectively avoiding the problem of model theft!
- Model permission feature: Models can be individually authorized. A player can use a model only after the OP authorizes it with command.
- Vanilla player model modification: Default Steve and Alex models are included, both of which automatically use the player skin for display.
- Simple customization feature: The model customization feature is extremely simple. Put the model, textures and animation files in a specific folder, and then input the reload command in the game to automatically load and synchronize them. **No configuration files needed**!
- Animation roulette feature: Pressing `Z` (default key) opens the animation roulette for playing interesting animations.
- **Limited** compatibility with [First-person Model](https://www.curseforge.com/minecraft/mc-mods/first-person-model).
- Compatibility with [Timeless and Classics Guns](https://www.curseforge.com/minecraft/mc-mods/timeless-and-classic-guns-tac): Animations for holding guns, reloading, aiming, firing, etc. are supported perfectly.
  ![2023-07-20_18.jpg](https://s2.loli.net/2023/07/20/N6sOS9ea5xwfn8t.jpg)
- Compatibility with [Carry On](https://www.curseforge.com/minecraft/mc-mods/carry-on): Animations for carrying blocks and entities are included. In 1.19.2 and 1.20 you can also carry another player with Carry On. Make sure to try that with your friends in a server.
  ![2.jpg](https://s2.loli.net/2024/02/14/71QyVR6NSHmbdo3.jpg)
- Compatibility with [SlashBlade](https://www.curseforge.com/minecraft/mc-mods/slashblade): Blades in main/off hand can be rendered. Custom slashing animation is not supported yet.
  ![1.jpg](https://s2.loli.net/2024/02/14/LfQxMCZKNAtzsOG.jpg)

## 2. How to Use

### a) Instructions for Forge Version

After entering the server and waiting for a few seconds (for model synchronization,) you can open the following GUI by pressing `Alt` + `Y` (default key):

![1.png](https://s2.loli.net/2023/06/25/Ya7DMmKToSneN6L.png)

**① Model switching button**: Switch to the corresponding model. A grayed-out background indicates an unauthorized model. The number in the top left corner indicates the number of available textures.

**② Model category switching button**: Switch among all models, authorized models and favorite models.

**③ Details button**: Enter the model detail panel displaying all available textures and animations for the model. In the middle preview window, drag with left mouse button to rotate, drag with right mouse button to translate, and scroll to scale the model. Select different textures in the texture selection window on the right. Preview different animations with the animation list on the left.

![3.png](https://s2.loli.net/2023/02/11/UxtCNy9wEg1XjSI.png)

Author page has been added in 2.2.1. The following window can be accessed by clicking the "open detials" button on the top left corner in the model window:

![2024-06-23_21.24.png](https://s2.loli.net/2024/06/23/5ePDTnrBchwyzq8.png)

### b) Instructions for Fabric Version

> Shout out to [**番茄布丁**](https://github.com/TomatoPuddin) for porting this mod to Fabric on his own!

Most features in the Fabric version are **identical** to the Forge version. It has been tested to have stable compatibility with Sodium, Sodium Extra, Iris, Lithium, ModernFix, FerriteCore, ServerCore, Debugify, Carpet (including FakePlayer feature,) etc.

The Fabric version requires two dependencies:

- [Fabric API](https://www.curseforge.com/minecraft/mc-mods/fabric-api)
- [Forge Config API Port](https://www.curseforge.com/minecraft/mc-mods/forge-config-api-port-fabric) (no longer required since version 2.2.1)

Moreover, it has two optional dependencies:

- [First-person Model](https://www.curseforge.com/minecraft/mc-mods/first-person-model) for displaying the third-person model in first-person camera
- [Amecs](https://www.curseforge.com/minecraft/mc-mods/amecs) for combined key bind support as in Forge
- [Modern KeyBinding](https://www.curseforge.com/minecraft/mc-mods/modern-keybinding-fabric) (another mod for combined key bindings like Forge; supported since version 2.2.1)

The Fabric version is only different from the Forge version by its key bindings. Since key bindings in Fabric does not support combinded keys with Ctrl / Alt / Shift without [Amecs](https://www.curseforge.com/minecraft/mc-mods/amecs), which however conflicts with a popular mod [Controlling](https://www.curseforge.com/minecraft/mc-mods/controlling), Amecs is made as an optional dependency of Yes Steve Model, and it is up to you whether to install it.

You can also choose to install [Modern KeyBinding](https://www.curseforge.com/minecraft/mc-mods/modern-keybinding-fabric) instead, which does not conflict with [Controlling](https://www.curseforge.com/minecraft/mc-mods/controlling).

- With Amecs, Yes Steve Model registers the same key bindings as in the Forge version with the interface of this mod;
- **Without Amecs, Yes Steve Model registers the key bindings without the modifier keys. For example, pressing `Y` opens the model selecting GUI (instead of `Alt` + `Y`.)**

## 3. What Formats Are Supported

Yes Steve Model uses `geckolib` as its core, so it naturally supports `geckolib`-compatible **Bedrock Edition model file 1.12.0+** and **Bedrock Edition animation file 1.8.0**.

Three formats are available. All of them are recognized and loaded by the game when placed in the specified directory:

- Plain folder: Recommended format for model designers, allowing quick modifications and in-game hot reloading for testing;
- Archive format: **Direct package** of the folder format, allowing easy model sharing;
- `.ysm` format: **Encrypted package** of the folder format, allowing easy model sharing and preventing modifications to the model file.

## 4. Where Do I Place the Models

All custom model files are placed in the `config\yes_steve_model` folder in the main game directory. Four folders are automatically generated under `yes_steve_model`:

- `auth` folder: For placing custom models. The custom models in this location **must be authorized** before they can be used.
- `cache` folder: For caching the encrypted model files obtained from servers by the system.
- `custom` folder: For placing custom models. The custom models in this location can be used **without authorization**.
- `export` folder: For outputting exported `.ysm` model files when the `/ysm export` command is used in game.

You can choose to place custom model files under either the `auth` or `custom` folder.

> As many players want to rename their models and to put their models in nested folders, since version 2.2.1, we have modified the file reading logic.
>
> 
>
> Now as long as the files are located under the `custom` or `auth` folder, nested (maximum depth 16 folders allowed) or not, they are correctly recognized by the mod. Also all characters (like CJK characters) are now valid.

## 5. Get Started

As the archive format and `.ysm` format are converted from the folder format, we'll get started from the folder format.

### Version 1.2.0 and Below

The folder structure is shown below, in which, the only mandatory parts are `main.json`, `arm.json`, plus at least one `.png` texture.

```
custom (or auth) folder
│
└─default                    // model package folder, the game will use this folder name as the model ID
    │
    ├─info.json              // information file, used for information display such as author, name, and license
    ├─main.json              // main model file (fixed name)
    ├─arm.json               // arm model file, used for first-person arm display (fixed name)
    ├─arrow.json             // arrow model file, if present, replacing the model of arrows shot by the player (fixed name)
    ├─main.animation.json    // animation file of the main model file (fixed name)
    ├─extra.animation.json   // roulette animation file (fixed name)
    ├─arm.animation.json     // arm animation file (fixed name)
    ├─arrow.animation.json   // arrow animation file (fixed name)
    ├─tac.animation.json     // animation file for TAC mod (fixed name)
    ├─carryon.animation.json // animation file for Carry On mod (fixed name)
    ├─arrow.png              // arrow texture file (fixed name)
    ├─light_skin.png         // main model file texture 1 (the name can be customized and will be used as the display name in the game)
    ├─...                    // any number of texture files
    └─dark_skin.png          // main model file texture 2 (the name can be customized and will be used as the display name in the game)
```

Custom models, animations, and texture files need to be placed in one folder. The name of folders, texture files, etc. can only use **lowercase English characters, digits, underscore** characters.

### Version 2.2.1 and Above

In the earlier versions, it has been a mess to manage the model files when there are too many of them. Therefore in version 2.2.1, we designed a new file structure, where the resources are managed with the `ysm.json` file. Here is the recommended structure:

```
The model folder
│
├───ysm.json                      Resource metadata file; fixed name and location
│
├───animations                    Animation folder; recommended name but customizable
│      ├─arm.animation.json       No limitation to the file names; use any character
│      ├─弓箭动画.json
│      ├─carryon.animation.json
│      ├─extra.animation.json
│      ├─main.animation.json
│      └─tac.animation.json
│
├───avatar                        Author avatar folder; recommended name but customizable
│      ├─端木.png
│      ├─哥斯拉.png
│      ├─海螺.png
│      └─甜粽子.png
│
├───models                        Model folder; recommended name but customizable
│      ├─arm.json
│      ├─箭.json
│      └─main.json
│
└───textures                      Texture folder; recommended name but customizable
       ├─arrow.png
       ├─蓝色材质.png
       └─默认材质.png
```

`ysm.json` is the only file whose name and location is required to be fixed. All other files such as models, animations, textures, etc. can be named to anything with any character, and can be placed anywhere including subfolders.

The new metadata file `ysm.json` supports:

- Setting the default texture and the displaying order of the textures;
- Setting the preview animation which is played in the model selection window (was the idle animation before;)
- Setting the names, the order, and the number of extra animations (no longer limited to the pattern `extraN`;
- Reading files in subfolders;
- Attaching the author information, with avatars, roles, introductions, and contacts;
- Attaching the home page and the donation page;
- Specifying PBR textures.

`ysm.json` must be placed in the root folder, encoded with UTF-8 without BOM. Its structure looks as follows:

```json
{
  // Specification version, currently 2, where PBR support is added
  "spec": 2,
  // Optional, the metadata which display as tooltips and details
  "metadata": {
    // The only mandatory field in this object
    "name": "Custom name",
    // Use \n for line feed
    "tips": "Description",
    "license": {
      // Mandatory
      "type": "CC 0",
      // Line feed allowed
      "desc:": "Extra license description"
    },
    // Order maintained
    "authors": [
      {
        // The only mandatory field in this object
        "name": "Author 1",
        // The avatar of the author
        "avatar": "avatar/my_avatar.png",
        "role": "Role (e.g. Modeler/Animator)",
        // Arbitrary keys; order maintained
        "contact": {
          "qq": "123456789",
          "email": "123456789@qq.com"
        },
        // Line feed not allowed
        "comment": "Comment"
      },
      // Multiple authors allowed
      {
        "name": "作者2"
      }
    ],
    // Only these two links are supported for now
    "link": {
      "home": "https://my-home-page.example.com",
      "donate": "https://my-donate-page.example.com"
    }
  },
  // Optional; all the fields in this object are also optional
  "properties": {
    // Model scaling, 0.7 by default
    "height_scale": 0.7,
    // Model scaling, 0.7 by default
    "width_scale": 0.7,
    // Any number, order, and name; order maintained
    // Number not limited; more than 8 extra animations can be set
    "extra_animation": {
      "extra0": "",
      "extra1": "Wave",
      "run": "Run",
      "walk": "Walk",
      "extra4": "",
      "extra5": "",
      "extra6": "",
      "extra7": ""
    },
    // Preview animation played in the model selection window
    "preview_animation": "idle",
    // Default texture (path and file extension `.png` excluded,) displayed in the model selection window, and used as default when switched to the model
    "default_texture": "default",
    // Set to true to force the model public and unauthorizable
    "free": false
  },
  // Mandatory
  "files": {
    // The main model file
    "player": {
      "model": {
        // The path and file name are customizable, but case-sensitive, even on Windows
        "main": "models/main.json",
        "arm": "models/arm.json"
      },
      // Optional; all the fields in this object are also optional
      // If absent, the corresponding default animation is used
      "animation": {
        "main": "animations/main.animation.json",
        "arm": "animations/arm.animation.json",
        "extra": "animations/extra.animation.json",
        "tac": "animations/tac.animation.json",
        "carryon": "animations/carryon.animation.json"
      },
      // Order maintained
      "texture": [
        // A path as a string
        "textures/default.png",
        // Or an object like this
        {
          // The only mandatory field in this object
          "uv": "textures/blue.png",
          // For PBR support in Oculus and Iris
          "normal": "textures/pbr/blue_n.png",
          "specular": "textures/pbr/blue_s.png"
        }
      ]
    },
    // Optional; replaces the arrow model
    "arrow": {
      "model": "models/arrow.json",
      // Optional
      "animation": "animations/arrow.animation.json",
      // PBR supported as well
      "texture": "textures/arrow.png"
    }
  }
}
```

## 6. Format Conversion

You can pack your models, animations, and textures as a zip file (**pack the files inside the root folder but not the root folder itself**,) the file name also follows the convention described above.

By executing the `/ysm export <model_id>` command in game, you can export a model in the paint folder format as a file of the dedicated ysm format. This format is encrypted and has a checksum, which effectively prevents third-party decryption.

The ysm format is **backward compatible**, that is, new mod version can load old ysm format, but old mod version cannot load new ysm format.

You can see the following information by opening a ysm file exported with 1.2.0 or above with Notepad. These texts are not modifiable. If you do so, the mod will reject the modified model file.

![2.png](https://s2.loli.net/2024/02/14/xKGce38hmoJtMEQ.png)

## 7. Making the Main Model

### 1. Production of model files

The main model file of the Yes Steve Model mod must be named `main.json`. The animation files used by it have been designed in a standardized manner, and they only need to be produced according to a specific layout method to be automatically compatible.

After running the game, the model standard model and animation files will be automatically generated under the `config\yes_steve_model\custom\default` folder in the main directory of the game, and you can make secondary modifications and distribution on the basis of them.

> #### Because the model naming is extremely confusing, the model naming is unified.
>
> **Of course, you don't have to follow these standards, and the model can still be loaded safely.**

#### ①. Writing format

The group name should be in all capital camel case, and described in standard English words, combined in the form of `adjective` + `name`, examples are as follows:

Left arm: `LeftArm`

The whole head: `AllHead`

#### ②. Principle of simplicity

Naming should use concise and easy-to-understand English words as much as possible, examples are as follows:

For `whole` use `All` instead of `Whole`, because the former is more concise

For `eyes` use `Eyes` instead of `HeadEyes`, because `eyes` must be in the `Head` group, no need to emphasize

#### ③. Meaningless grouping

Some models are rotated and displaced for convenience. Some models are grouped, but animations and other operations are not attached. They can be named in the form of `parent class` + `number number`, examples are as follows:

A `Mouth` group has multiple groups set up for the convenience of model making, but it has no specific meaning and no animation. You can name it `Mouth1`, `Mouth2`, `Mouth3`, etc.

#### ④.Specific group name

Some specific group names are not allowed to be changed, otherwise some content of the game will not be displayed normally:

|           Group Name           |                         Description                          |
| :----------------------------: | :----------------------------------------------------------: |
|             `Head`             | The game will add the animation of head swinging with the viewing angle by default |
|            `Eyelid`            |               will hide when the player blinks               |
|  `LeftEyebrow` `RightEyebrow`  |       will move down one space when the player blinks        |
|  `LeftHand` `LeftHandLocator`  | The positioning group of the left hand holding item<br/>`LeftHandLocator` must be located inside the `LeftHand`<br>The rotation point of `LeftHandLocator` locates the holding item |
| `RightHand` `RightHandLocator` | The positioning group of the right hand holding item<br/>`RightHandLocator` must be located inside the `RightHand`<br/>The rotation point of `RightHandLocator` locates the holding item |

### 2. The production of the first-person perspective hand model

The hand model of the first-person perspective must be named `arm.json`, which can be obtained through secondary modification of the main model, and it shares a set of textures with the main model. The production method can refer to the following steps:

1. Make a copy of the main model file;
2. Find the `LeftArm` and `RightArm` groups and copy them;
3. Delete the entire `Root` group;
4. Paste the `LeftArm` and `RightArm` groups you just copied;
5. Change the `X` `Y` `Z` rotation angles of the `LeftArm` and `RightArm` groups to 0 (the internal group does not need to be modified, and the arm should be vertically downward after modification).

### 3. Making texture files

- The texture uses `png` format texture, it is not recommended to use **translucent** texture, which will cause various rendering errors;

- Texture file names can only use `lowercase English characters, numbers, underscore` characters, and there are no restrictions on others;
- The model supports multiple textures, you can place several texture files, and the game will recognize them intelligently.

### 4. Production of animation files

Animation files are optional. When there is no animation file, the game will automatically call the default animation file. If your model is modified twice according to the default model, then it will be perfectly compatible.

The following animations in the game are added by code and cannot be modified:

- Animation of the head swinging with the mouse: intelligently recognize the animation added by the `Head` group
- Blink animation: intelligently identify animations added in groups of `Eyelid` `LeftEyebrow` `RightEyebrow`
- Eye-closing animation when falling asleep: intelligently recognize animations added in groups of `Eyelid` `LeftEyebrow` `RightEyebrow`

The following animations are custom animations that can be modified twice:

|     Name      |                          Function                          |                      Remarks                      |
| :-----------: | :--------------------------------------------------------: | :-----------------------------------------------: |
|     walk      |          animation when the player normally walks          |                       Loop                        |
|      run      |               animation when player sprints                |                       Loop                        |
|   climbing    |         animation of the player under the trapdoor         |                       Loop                        |
|   sneaking    |   animation when the player is sneaking, but not moving    |                       Loop                        |
|     sneak     |        animation of the player sneaking and moving         |                       Loop                        |
|     swim      |               Animate when the player swims                |                       Loop                        |
|  swim_stand   |   animation of the player swimming in water standing up    |                       Loop                        |
|   attacked    |             animation when player is attacked              |                     Play Once                     |
|     jump      |        animation when the player leaves the ground         | Both flying and jumping call this animation, Loop |
|      fly      | animation that plays when the player is flying with elytra |                       Loop                        |
|     boat      |      animation when the player is sitting on the boat      |                       Loop                        |
| use_righthand |       animation to play when player uses right hand        |                     Play Once                     |
| use_lefthand  |        animation to play when player uses left hand        |                     Play Once                     |
|     sleep     |              animation when the player sleeps              |                       Loop                        |
|     ride      |  animation when the player is riding a horse (or donkey)   |                       Loop                        |
|   ride_pig    |             animation for player riding a pig              |                       Loop                        |
|      sit      |               animation when the player sits               |                       Loop                        |
|    default    |             animation when there is no action              |                       Loop                        |



## 3. Related commands

All mod use commands starting with `/ysm`, which require OP 2 level authority to use. All commands have been added with in-game prompts, and all model IDs and player IDs can be intelligently prompted.

- `/ysm model reload` reloads all model files: at the same time, it will also synchronize the model files to all client players once;

- `/ysm auth <player> all` authorizes all models to the player;
- `/ysm auth <player> clear` clears all authorization models of the player;
- `/ysm auth <player> add <model_id>` authorize the xxx model to the player;
- `/ysm auth <player> remove <model_id>` Clear the xxx model authorized by the player.