# 说明

本插件所包含的代码段基于logwire技术平台，主要内容是logwire二次开发中常用的代码以及针对一些特殊场景的代码写法。本插件的内容在不断完善中，欢迎使用者一起完善，github地址见文末。

### 使用方法

1.【扩展】->【从VSIX安装...】->选择插件文件

2.js文件：支持js代码片段；

3.xml文件：支持model.xml,layout.xml代码段

快捷字段设置原则：从小到大原则，从功能到分类原则。即代码段所表示的功能在前，例如数字列控件有两种:lw-number和lw-list-number，在layout.zml文件输入number时，将有number和number-list可选，number表示功能，此时有多重number，在根据后缀，选择本次需要使用哪个代码段。

### 支持代码段：

#### 1.js

**数据库相关代码片段：**

查询、新增、更新、删除、执行数据库存储过程、执行数据库函数

**function相关代码片段：**

Actions、tasks计划任务、redirect(指定跳转)、事件、公共方法、工作流获取用户方法、计费事务后执行方法、接口方法、导入方法示例、导出方法示例、加载方法示例

**其他片段：**

foreach循环、日志……

#### 2.model

字段

#### 3.query

字段、关联join、明细

#### 4.layout

**页面相关代码片段：**

查询、详情、管理、内嵌查询、内嵌详情

**容器相关代码片段：**

面板、分组、左右分页、分隔条、tabs……

**控件相关代码片段：**

查询控件、按钮、列表、字段、自由风格控件

#### 5.menu

菜单

#### 6.validator

输入格式验证

## 发布命令

1.cmd切换到项目目录：cd ens1

2.cmd打包发布：vsce package

**控件Github地址：*[https://github.com/yihuigang/ens1]()***

**更多visual studio code插件开发信息，请点击：**[**https://code.visualstudio.com/api**]()
