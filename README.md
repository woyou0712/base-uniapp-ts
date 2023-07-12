## 本地运行

1. 修改文件`config\urls`中的字段根据不同环境需要的配置对应的后端接口地址
2. 执行命令`npm start`
3. 浏览器打开本地测试地址，`http://localhost:8816`

## 线上构建

- 线上开发环境： `npm run build:dev`
- 线上测试环境： `npm run build:test`
- 线上 UAT 环境： `npm run build:uat`
- 线上生产环境： `npm run build:prod`
