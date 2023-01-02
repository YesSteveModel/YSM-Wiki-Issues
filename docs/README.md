# Yes Steve Model Mod Instructions

## 1. Introduction

The Yes Steve Model mod is a `Minecraft Forge` mod that modifies the vanilla player model, using `geckolib` as the core, using Minecraft Bedrock Edition models and animation files. This allows players to customize player models and animations as they wish.

![001](https://s2.loli.net/2023/01/01/RAor58n6LBct3kW.jpg)

The Yes Steve Model mod takes into account the mod needs of the server community, and adopts many designs suitable for the server environment, including but not limited to:

- Automatically synchronize client models: When vanilla players enter the server, the server will **automatically** synchronize the models to the player's computer.
- Encrypted model files: All the models sent to the player client are **encrypted binary files**, effectively avoiding the problem of model theft!
- Model permission function: models can be individually authorized, and only after the OP input command is authorized, a specific model can be used.
- Vanilla player model modification: Added default Steve and Alex models, both models can automatically call the player skin display.
- Simple customization function: The model customization function is extremely simple, you only need to place the model, textures and animation files in a specific folder, and input the reload command in the game to automatically load and synchronize. **No need to write any configuration files**!

For client players, it is also extremely simple to use. When the player waits for more than ten seconds after entering the server for the first time (model synchronization time-consuming), you can use the shortcut key `Alt` + `Y` to open the following GUI:

![002](https://s2.loli.net/2023/01/01/xGsXkbqe8iHPDOW.png)

**① Model switching button**: Click to switch to the corresponding model. If the icon in the upper right corner of the button is red, it means the model is not authorized. The number in the icon represents the number of textures that the model can switch.

**② Textures switching button**: For models with multiple textures, click the left and right buttons to switch the model texture.

**③ Model category switching button**: You can switch between all models, authorized models and vanilla models (currently only Steve and Alex models)



## 2. How to make a custom model

Yes Steve Model mod uses `geckolib` as core, so it supports `geckolib` compatible `Bedrock Edition 1.12.0` version model files and `Bedrock Edition 1.8.0` version animation files.

All custom model files are placed in the `config\yes_steve_model` folder in the main game directory. Three folders are automatically generated under `yes_steve_model`:

- `auth` folder: used to place custom models, the custom models in this location **must be authorized** before they can be used.

- `cache` folder: the encrypted model file cache folder that the system automatically obtains from the server.

- `custom` folder: used to place custom models, which can be used **without authorization**.

You can choose to place custom model files under the `auth` or `custom` folder, and the file structure is as follows:

```
custom (or auth) folder
│
└─default                    // model package folder, the game will use this folder name as the model ID
     │
     ├─main.json             // main model file (fixed name)
     ├─arm.json              // arm model file, used for first-person arm display (fixed name)
     ├─main.animation.json   // animation file of the main model file (fixed name)
     ├─light_skin.png        // main model file texture 1 (the name can be customized, it will be used as the display name in the game)
     ├─...                   // any number of texture files
     └─dark_skin.png         // main model file texture 2 (the name can be customized and will be used as the display name in the game)
```

Custom models, animations, and texture files need to be placed in one folder. Folders, texture names, etc. can only use `lowercase English characters, numbers, underscore` characters.

### 1. Production of model files

The main model file of the Yes Steve Model mod must be named `main.json`. The animation files used by it have been designed in a standardized manner, and they only need to be produced according to a specific layout method to be automatically compatible.

After running the game, the model standard model and animation files will be automatically generated under the `config\yes_steve_model\custom\default` folder in the main directory of the game, and you can make secondary modifications and distribution on the basis of them.

> #### Because the model naming is extremely confusing, the model naming is unified.
>
> **Of course, you don't have to follow these standards, and the model can still be loaded safely. **

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