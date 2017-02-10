#jshint安装与配置

## 安装
SublimeLinter 3 must be installed in order to use this plugin. If SublimeLinter 3 is not installed, please follow the instructions [here](http://sublimelinter.readthedocs.org/en/latest/installation.html).

### Linter installation
Before installing this plugin, you must ensure that `jshint` is installed on your system. To install `jshint`, do the following:

1. Install [Node.js](http://nodejs.org) (and [npm](https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager) on Linux).

1. Install `jshint` by typing the following in a terminal:
   ```
   npm install -g jshint
   ```

1. If you are using `nvm` and `zsh`, ensure that the line to load `nvm` is in `.zshenv` and not `.zshrc`.

**Note:** This plugin requires `jshint` 2.5.0 or later. Please note that the _indent_ option no longer reports warnings for bad indentation. https://github.com/jshint/jshint/releases/tag/2.5.0

### Linter configuration
In order for `jshint` to be executed by SublimeLinter, you must ensure that its path is available to SublimeLinter. Before going any further, please read and follow the steps in [“Finding a linter executable”](http://sublimelinter.readthedocs.org/en/latest/troubleshooting.html#finding-a-linter-executable) through “Validating your PATH” in the documentation.

Once `jshint` is installed and configured, you can proceed to install the SublimeLinter-jshint plugin if it is not yet installed.

### Plugin installation
Please use [Package Control](https://sublime.wbond.net/installation) to install the linter plugin. This will ensure that the plugin will be updated when new versions are available. If you want to install from source so you can modify the source code, you probably know what you are doing so we won’t cover that here.

To install via Package Control, do the following:

1. Within Sublime Text, bring up the [Command Palette](http://docs.sublimetext.info/en/sublime-text-3/extensibility/command_palette.html) and type `install`. Among the commands you should see `Package Control: Install Package`. If that command is not highlighted, use the keyboard or mouse to select it. There will be a pause of a few seconds while Package Control fetches the list of available plugins.

1. When the plugin list appears, type `jshint`. Among the entries you should see `SublimeLinter-jshint`. If that entry is not highlighted, use the keyboard or mouse to select it.

##[增加全局配置文件](http://stackoverflow.com/questions/24194603/jshint-and-sublimelinter-settings-config-on-mac)

  * create a file with any name (e.g. "jshint.conf"). my file is:
```javascript
    {
        "globals": { "$": false },
        "globalstrict": true,
        "devel": true
    }
```
  * put it anywhere. in my case it is: "d:\code\jshint.conf"
  * make the next reference in section "jshint"->"args" of sublime-linter user setting (user/SublimeLinter.sublime-settings):
```json
  {
    "user": {
        "linters": {
            "jshint": {
                "args": [
                    "--config", "d:\\code\\jshint.conf"
                ]
            }
        }
    }
}
```

##[配置文件](http://jshint.com/docs/options/ 'jshint 官方文档')
```
{
  "bitwise": true,//不能使用位运算符&
  "curly": true,//不能省略循环和条件语句的大括号
  "forin":true,//for in需要hasOwnProperty检查
  "latedef":"nofunc",//先定义变量,函数声明除外
  "undef":true,//变量未定义
  "unused":true,//变量未使用
  "noarg":ture,//禁止使用 arguments.caller 和 arguments.callee
  "maxparams": 4,//最多参数个数
  "brower":true,//允许与浏览器相关的关键字,如document、history、clearIntreval等
  "continue":true,//允许continue语句
  "devel":true,//允许与开发相关的关键字,像alert,console等
  "indent": 2,//缩进2空格
  "maxerr":50,//超过50个错误,jslint停止工作
  "newcap":true,//允许构造器函数首字母非大写
  "nomen": true,//不允许在两边(最前或最后)悬挂下划线符号(_)
  "plusplus": true,//允许++和--
  "sloppy": true,不需要use strict编译指令
  "eqeqeq": true,//使用===做判断
  "maxlen": 120,//行最大长度
  "vars": true,//每个函数作用域内，不允许有多个var语句
  "node": true,//node环境
  "debug": false, //忽略 debugger
  "latedef": true, //先定义变量，后使用
  "esnext": true, //es6
  "lastsemic":true,//允许单行控制块省略分号
  "asi":true,//This option suppresses warnings about missing semicolons.
  "globals":{//以下全局变量不警告
    "jQuery":true,
    "$":true
  }
}
```


