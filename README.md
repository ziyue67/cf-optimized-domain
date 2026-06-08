# CF 优选域名静态页

一个纯静态的 Cloudflare 优选域名展示页，用来展示自建域名、优选 IP、复制按钮和接入说明。项目不需要后端、不需要数据库，适合部署到 Cloudflare Pages、Vercel、GitHub Pages 或任意静态服务器。

## 功能

- 展示一个默认复制域名。
- 展示多条优选 IP 线路。
- 点击按钮复制域名。
- 支持移动端和桌面端响应式布局。
- 所有站点数据集中在 `site.config.js` 中维护。

## 配置

打开 `site.config.js`，修改这些字段：

```js
primaryDomain: "cdn.example.com",
optimizedIps: [
  {
    line: "优选 IP 01",
    ip: "203.0.113.10",
    region: "Cloudflare",
    note: "脱敏示例地址，请替换为你的实测结果"
  }
]
```

说明：

- `primaryDomain` 是用户点击复制按钮时复制的域名。
- `optimizedIps` 是页面展示的优选 IP 列表。
- `documentUrl` 和 `supportUrl` 为空时，页面不会显示外部链接。

## 本地预览

可以直接用浏览器打开 `index.html`。也可以用任意静态服务器预览：

```bash
npx http-server . -p 4173
```

然后访问：

```text
http://127.0.0.1:4173/
```

## 部署

静态托管时上传以下文件即可：

- `index.html`
- `styles.css`
- `app.js`
- `site.config.js`

Cloudflare Pages 推荐设置：

- Build command: 留空
- Build output directory: `/`

## 隐私说明

仓库中的域名和 IP 使用脱敏示例数据。部署你自己的版本前，请在 `site.config.js` 中替换为真实域名和实测 IP。
