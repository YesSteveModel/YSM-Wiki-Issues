---
title: Model Format Description
icon: material-symbols:deployed-code-outline
createTime: 2025/02/05 23:11:25
permalink: /en/wiki/type/
tags:
  - Model
  - Format
---

The Yes Steve Model mod uses `geckolib` as its core, so it supports model files of `Bedrock Edition 1.12.0 and above` and animation files of `Bedrock Edition 1.8.0` that are compatible with `geckolib`.

Since version 2.3.0, we also support Bedrock Edition animation controllers and animation audio.

## Model Format

There are three formats for model files. All three can be recognized and loaded by the game when placed in the specified directory:

- Folder format: The most recommended format for model designers. It allows for easy modification of content and quick reloading for testing in the game.
- Compressed package format: It is a direct packaging of the folder format, which is convenient for sharing with others.
- ysm format: It is an encrypted packaging of the folder format. It is convenient for sharing with others while preventing the model files from being modified or misused.

## Where to Place Model Files

All custom model files are placed in the `config/yes_steve_model` folder under the main game directory. Four folders will be automatically generated under `yes_steve_model`:

- `auth` folder: Used to place custom models. The custom models in this location must be authorized before they can be used.
- `cache` folder: A cache folder for encrypted model files automatically obtained from the server by the system.
- `custom` folder: Used to place custom models. The custom models in this location can be used without authorization.
- `export` folder: When the `/ysm export` command is used in the game, the models in the exclusive ysm format generated will be here.

You can choose to place custom model files directly in the `auth` or `custom` folder.

::: tip
Starting from version 2.2.1, in order to address the practice of many players who like to modify file names or create multiple layers of folders in the directory, we have modified the file reading logic.

Now, as long as it is in the `custom` or `auth` directory, regardless of how many layers of subfolders are nested (up to 16 layers), whether it is a folder, a compressed package, or in the ysm format, it can be correctly recognized. At the same time, file names support any characters (including Chinese).
:::

## Encryption Format Description

- Encrypted model files in the ysm format cannot be converted back to ordinary model files, and ==they cannot be modified a second time!==
- The ysm format follows the principle of downward compatibility. So if a ysm format file is exported using a higher version of the mod, it cannot be loaded in a lower version!
- Enter the command `/ysm export <model_id>` in the game to export a model in the folder format to the exclusive ysm model format.
- Starting from version 2.2.2, this command also supports the form `/ysm export <model_id> [extra_info]`. You can add custom text information at `extra_info`. This name will also be attached to the exported ysm file.
  <ImageCard
  image="https://s2.loli.net/2025/01/27/S9n5omVqt8bBOjD.png"
  title="What a YSM model file looks like when opened in Notepad"
  description="When you open a ysm file exported by a new version of the mod (version 1.2.0 and later) with the original Notepad, you can see the following information. This information cannot be modified. If you forcefully modify it, the mod will refuse to load this file."
  center=true
  href="/"
  />
