# 说明

## 基于logwire技术平台的代码段

### 使用方法

1.【扩展】->【从VSIX安装...】->选择插件文件

2.js文件中支持js代码片段，xml文件支持model.xml,layout.xml代码段

### 支持代码段：

#### 1.js

query

find

findAll

sqlquery

insert

insertbatch

update(更新指定字段)

updatemap(更新行)

updatebatch(批量更新)

delete

foreach

tasks,计划任务

redirect(指定跳转)

log,rizhi(日志)

#### 2.model

#### 3.layout

button

field

list

## 发布命令

1.cmd切换到项目目录：cd ens1

2.cmd打包发布：vsce package
