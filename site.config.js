window.SITE_CONFIG = {
  siteName: "CF 优选域名",
  tagline: "自建 Cloudflare 优选入口",
  primaryDomain: "cdn.example.com",
  domainLabel: "默认接入域名",
  domainHint: "将这里替换为你自己的优选域名，按钮默认复制此域名。",
  documentUrl: "",
  supportUrl: "",
  status: {
    label: "静态托管",
    text: "页面无需后台，可直接部署到 Cloudflare Pages、Vercel 或任意静态服务器。"
  },
  optimizedIps: [
    {
      line: "优选 IP 01",
      ip: "203.0.113.10",
      region: "Cloudflare",
      note: "脱敏示例地址，请替换为你的实测结果"
    },
    {
      line: "优选 IP 02",
      ip: "203.0.113.11",
      region: "Cloudflare",
      note: "脱敏示例地址，请替换为你的实测结果"
    },
    {
      line: "优选 IP 03",
      ip: "203.0.113.12",
      region: "Cloudflare",
      note: "脱敏示例地址，请替换为你的实测结果"
    },
    {
      line: "优选 IP 04",
      ip: "203.0.113.13",
      region: "Cloudflare",
      note: "脱敏示例地址，请替换为你的实测结果"
    },
    {
      line: "优选 IP 05",
      ip: "203.0.113.14",
      region: "Cloudflare",
      note: "脱敏示例地址，请替换为你的实测结果"
    },
    {
      line: "优选 IP 06",
      ip: "203.0.113.15",
      region: "Cloudflare",
      note: "脱敏示例地址，请替换为你的实测结果"
    },
    {
      line: "优选 IP 07",
      ip: "203.0.113.16",
      region: "Cloudflare",
      note: "脱敏示例地址，请替换为你的实测结果"
    },
    {
      line: "优选 IP 08",
      ip: "203.0.113.17",
      region: "Cloudflare",
      note: "脱敏示例地址，请替换为你的实测结果"
    },
    {
      line: "优选 IP 09",
      ip: "203.0.113.18",
      region: "Cloudflare",
      note: "脱敏示例地址，请替换为你的实测结果"
    },
    {
      line: "优选 IP 10",
      ip: "203.0.113.19",
      region: "Cloudflare",
      note: "脱敏示例地址，请替换为你的实测结果"
    },
    {
      line: "优选 IP 11",
      ip: "203.0.113.20",
      region: "Cloudflare",
      note: "脱敏示例地址，请替换为你的实测结果"
    },
    {
      line: "优选 IP 12",
      ip: "203.0.113.21",
      region: "Cloudflare",
      note: "脱敏示例地址，请替换为你的实测结果"
    }
  ],
  usageSteps: [
    "在 Cloudflare DNS 中把你的域名解析到实测优选 IP。",
    "在节点、订阅或反代配置中填写本页复制的域名。",
    "优选 IP 变化时，只需要更新解析和 site.config.js 中的展示数据。"
  ],
  footerText: "请把示例域名和 IP 替换为你自己的数据。"
};
