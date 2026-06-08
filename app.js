(function () {
  const config = window.SITE_CONFIG || {};

  const byId = (id) => document.getElementById(id);

  const setText = (id, value) => {
    const element = byId(id);
    if (element && value) element.textContent = value;
  };

  const primaryDomain = config.primaryDomain || "cdn.example.com";

  document.title = config.siteName || "CF 优选域名";
  setText("site-title", config.siteName);
  setText("site-tagline", config.tagline);
  setText("domain-label", config.domainLabel);
  setText("domain-hint", config.domainHint);
  setText("status-label", config.status && config.status.label);
  setText("status-text", config.status && config.status.text);
  setText("footer-text", config.footerText);

  const domainInput = byId("domain-input");
  if (domainInput) {
    domainInput.value = primaryDomain;
    domainInput.setAttribute("aria-label", "当前复制域名");
  }

  const copyButton = byId("copy-domain");
  const copyLabel = byId("copy-label");
  const copyState = byId("copy-state");

  const setCopyState = (text, isError) => {
    if (!copyState) return;
    copyState.textContent = text;
    copyState.classList.toggle("error", Boolean(isError));
  };

  const fallbackCopy = () => {
    if (!domainInput) return false;
    domainInput.focus();
    domainInput.select();
    domainInput.setSelectionRange(0, domainInput.value.length);
    return document.execCommand("copy");
  };

  if (copyButton) {
    copyButton.addEventListener("click", async () => {
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(primaryDomain);
        } else if (!fallbackCopy()) {
          throw new Error("fallback copy failed");
        }

        if (copyLabel) copyLabel.textContent = "已复制";
        setCopyState(`已复制：${primaryDomain}`);
        window.setTimeout(() => {
          if (copyLabel) copyLabel.textContent = "复制域名";
        }, 1800);
      } catch (error) {
        fallbackCopy();
        setCopyState("复制失败，请手动选中域名复制。", true);
      }
    });
  }

  const ipGrid = byId("ip-grid");
  const ips = Array.isArray(config.optimizedIps) ? config.optimizedIps : [];
  if (ipGrid) {
    if (ips.length === 0) {
      ipGrid.innerHTML = '<p class="muted">暂未配置优选 IP，请在 site.config.js 中添加。</p>';
    } else {
      ipGrid.innerHTML = ips
        .map((item) => {
          const line = escapeHtml(item.line || "优选线路");
          const ip = escapeHtml(item.ip || "待配置");
          const region = escapeHtml(item.region || "Anycast");
          const note = escapeHtml(item.note || "请替换为你的实测数据");
          return `
            <article class="ip-card">
              <h3>${line}</h3>
              <p class="ip-address">${ip}</p>
              <span class="ip-meta">${region}</span>
              <p class="ip-note">${note}</p>
            </article>
          `;
        })
        .join("");
    }
  }

  const usageList = byId("usage-list");
  const steps = Array.isArray(config.usageSteps) ? config.usageSteps : [];
  if (usageList) {
    usageList.innerHTML = steps
      .map((step) => `<li>${escapeHtml(step)}</li>`)
      .join("");
  }

  const linkRow = byId("link-row");
  if (linkRow) {
    const links = [];
    if (config.documentUrl) {
      links.push(`<a class="text-link" href="${escapeAttribute(config.documentUrl)}" target="_blank" rel="noreferrer">查看文档</a>`);
    }
    if (config.supportUrl) {
      links.push(`<a class="text-link" href="${escapeAttribute(config.supportUrl)}" target="_blank" rel="noreferrer">联系维护</a>`);
    }
    linkRow.innerHTML = links.join("");
    linkRow.hidden = links.length === 0;
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function escapeAttribute(value) {
    return escapeHtml(value).replace(/`/g, "&#096;");
  }
})();
