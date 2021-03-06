const vscode = require('vscode');

/**
 * 插件被激活时触发，所有代码总入口
 * @param {*} context 插件上下文
 */
exports.activate = function (context) {
    // console.log('恭喜，您的扩展“vscode-plugin-demo”已被激活！');
    // 注册命令
    context.subscriptions.push(vscode.commands.registerCommand('extension.openUrl', function (uri) {
        // vscode.window.showInformationMessage('openUrl' + uri.path);
        // window.open("https://www.logwirecloud.com/cn/");
        var msg = workspaceFolders[0] + workspaceFile[0];
        Clipboard.writeText(msg);
        console.log(msg);
        // workspaceFolders[0]
    }));
};

/**
 * 插件被释放时触发
 */
exports.deactivate = function () {
    // console.log('您的扩展“vscode-plugin-demo”已被释放！');
};