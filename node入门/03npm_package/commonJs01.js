//安装模块  npm install 模块 --save 或者--save-dev
//会在package.json文件中生成依赖的节点.
//如果给别人家,直接把这个package.json文件给人家,直接 执行 npm install 命令 依赖包都会被下载下来

//如果有时候 npm install 模块 下载不下来 或者很慢 
//这时候可以通过淘宝的镜像进行安装
//首先我们得安装  淘宝镜像  npm install -g cnpm --registry=https://registry.npm.taobao.org
//使用淘宝镜像安装模块   cnpm install 模块