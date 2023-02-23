# excel列名转换器
## 中文 | [English](https://github.com/tuutoo/excel-col-converter/blob/main/README.md)
该工具旨在将excel列名和数字进行相互转换

＃ 预览
https://excel-col-converter.vercel.app/

＃ 特点
 - 将excel列名和数字进行相互转换
 - 支持单行或多行
 - 亮色/暗黑模式
 - 移动友好
 - 支持Docker部署
 - 使用配置文件轻松部署到Netlify

# 用到的技术
 -  Vue3（UI 库 - Naive UI）
 -  Eslint + prettier.
 -  Husky + commitlint.
 -  Unplugin auto import.
 -  Iconify icon.
 -  Unocss.

# 安装

```sh
pnpm install
```

# 启动开发环境

```sh
pnpm run dev
```

# 编译生产环境

```sh
pnpm run build
```

# 生成 Docker 镜像
```sh
# 构建docker镜像并打tag
# 用你的仓库名称替换下面命令中的 [tuutoo]
docker build -t [tuutoo]/xl-col-converter:v2.2.0 -t [tuutoo]/xl-col-converter:latest .

# 本地运行docker进行测试
docker run -p 80:80 -it --name xl-col-converter xl-col-converter

# 把镜像推送到docker.io自己的仓库下
docker push tuutoo/xl-col-converter:latest
The push refers to repository [docker.io/tuutoo/xl-col-converter]
cf4b0083cda3: Pushed
a3592b80e453: Pushed
7fbf7f6957d5: Pushed
7ef61094715c: Pushed
98e71313b6c2: Pushed
78bf1b847806: Pushed
d58d318d37eb: Pushed
aa5968d388b8: Pushed
latest: digest: sha256:31e603b8d999d745a2038f53e3e042a76ad04eeb8f6cc7d841ae34fca50fe416 size: 1985
```
浏览器访问 http://localhost 测试

你也可以直接使用这个 docker 镜像：
```sh
docker run -itd --name xl-col-converter \
-p 1253:80 \
tuutoo/xl-col-converter
```

# 将应用程序部署到 Vercel或者Netlify
 1. Fork这个仓库
 1. 注册一个 Vercel或者Netlify 帐户
 1. 在 Vercel或者Netlify 上创建一个新项目
 1. 连接到您Fork的存储库，它将自动部署
 1. 完事