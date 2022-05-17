# `YARN`

## References

* <https://code.visualstudio.com/api/get-started/your-first-extension>

## Prerequisites

If you want to run the steps without needing to prefix them with `sudo`, i.e., without root permissions:

```sh
############
# NPM/Yarn #
NPM_CONFIG_PREFIX="${HOME}/.npm-global/"
PATH="${HOME}/.yarn-global/bin:${PATH}"
PATH="${HOME}/.npm-global/bin:${PATH}"
############
npm config set prefix '~/.npm-global'
```

Then (note: the lack of `sudo`):

```sh
$ npm install -g yo generator-code
$ yo code

     _-----_     ╭──────────────────────────╮
    |       |    │   Welcome to the Visual  │
    |--(o)--|    │   Studio Code Extension  │
   `---------´   │        generator!        │
    ( _´U`_ )    ╰──────────────────────────╯
    /___A___\   /
     |  ~  |
   __'.___.'__
 ´   `  |° ´ Y `

? What type of extension do you want to create? New Extension (TypeScript)
? What's the name of your extension? Kusk
? What's the identifier of your extension? kusk
? What's the description of your extension? Kusk by Kubeshop.io
? Initialize a git repository? Yes
? Bundle the source code with webpack? No
? Which package manager to use? npm

Writing in /run/media/mbana/home-ext4/work/kubeshop.io/kusk-vscode...
   create kusk-vscode/.vscode/extensions.json
   create kusk-vscode/.vscode/launch.json
   create kusk-vscode/.vscode/settings.json
   create kusk-vscode/.vscode/tasks.json
   create kusk-vscode/package.json
   create kusk-vscode/tsconfig.json
   create kusk-vscode/.vscodeignore
   create kusk-vscode/vsc-extension-quickstart.md
   create kusk-vscode/.gitignore
   create kusk-vscode/README.md
   create kusk-vscode/CHANGELOG.md
   create kusk-vscode/src/extension.ts
   create kusk-vscode/src/test/runTest.ts
   create kusk-vscode/src/test/suite/extension.test.ts
   create kusk-vscode/src/test/suite/index.ts
   create kusk-vscode/.eslintrc.json

Changes to package.json were detected.

Running npm install for you to install the required dependencies.

added 210 packages, and audited 211 packages in 12s

41 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

Your extension kusk has been created!

To start editing with Visual Studio Code, use the following commands:

     cd kusk-vscode && code .

Open vsc-extension-quickstart.md inside the new extension for further instructions
on how to modify, test and publish your extension.

For more information, also visit http://code.visualstudio.com and follow us @code.


? Do you want to open the new folder with Visual Studio Code? Open with `code`
```

## Build

...

## Run

...
