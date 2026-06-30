import { brand, disclosure, featuredSlugs, filters, nav, products } from "./data.js?v=20260630-etsy-pricing";

const page = document.body.dataset.page || "home";
const params = new URLSearchParams(window.location.search);
const activeTag = params.get("tag") || "all";
const query = (params.get("q") || "").trim().toLowerCase();
const productSlug = params.get("slug") || featuredSlugs[0];

const siteUrl = "https://beatsperfect.shop";

const pageMeta = {
  home: {
    title: "BeatsPerfect - Focused Digital Products",
    description:
      "Focused spreadsheets, templates, and digital tools for one clear job. Built from market evidence, ready to use, and sold without unnecessary complexity or recurring fees."
  },
  catalog: {
    title: "Products - BeatsPerfect",
    description: "Browse focused digital products from BeatsPerfect, each built around one clear job."
  },
  product: {
    title: "Product - BeatsPerfect",
    description: "View product details, preview assets, and compatibility notes for a BeatsPerfect digital tool."
  },
  about: {
    title: "How we build - BeatsPerfect",
    description:
      "See how BeatsPerfect turns market evidence into a clear product promise, release testing, and customer outcomes."
  },
  faq: {
    title: "Support - BeatsPerfect",
    description: "Answers about BeatsPerfect products, compatibility, support, and how the company works."
  },
  contact: {
    title: "Contact - BeatsPerfect",
    description: "Contact options for BeatsPerfect Shop."
  },
  legal: {
    title: "Legal - BeatsPerfect",
    description: "Legal notes for BeatsPerfect Shop."
  }
};

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const fmtDate = (value) => {
  if (!value || value === "Not released") return "Not released";
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  }).format(date);
};

const fmtMoney = (value) => (typeof value === "number" ? `$${value.toFixed(2)}` : "Pending");

function setMetaTag(name, content, attr = "name") {
  let tag = document.head.querySelector(`meta[${attr}="${name}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function applyMetadata() {
  const meta = pageMeta[page] || pageMeta.home;
  const currentProduct = page === "product" ? products.find((item) => item.slug === productSlug) || products[0] : null;
  const title = currentProduct ? `${currentProduct.title} - BeatsPerfect` : meta.title;
  const description = currentProduct ? currentProduct.summary : meta.description;
  document.title = title;
  setMetaTag("description", description);
  setMetaTag("og:title", title, "property");
  setMetaTag("og:description", description, "property");
  setMetaTag("og:type", "website", "property");
  setMetaTag("og:site_name", "BeatsPerfect", "property");
  setMetaTag("twitter:card", "summary");
  setMetaTag("twitter:title", title);
  setMetaTag("twitter:description", description);
  setMetaTag("application-name", "BeatsPerfect");
  setMetaTag("theme-color", "#F3F6F4");

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "BeatsPerfect",
        url: siteUrl,
        description: brand.heroCopy,
        sameAs: ["https://beatsperfect.net"]
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "BeatsPerfect",
        description: brand.heroCopy,
        publisher: {
          "@id": `${siteUrl}/#organization`
        }
      }
    ]
  };

  let script = document.head.querySelector('script[type="application/ld+json"]');
  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(jsonLd);
}

function renderShell() {
  return `
    <header class="shell">
      <div class="brand-block">
        <a class="brand-mark" href="/" aria-label="${escapeHtml(brand.name)}">
          <span class="brand-name">${escapeHtml(brand.name)}</span>
          <span class="brand-sub">${escapeHtml(brand.shopName)}</span>
        </a>
        <p class="brand-copy">${escapeHtml(brand.tagline)}</p>
      </div>
      <nav class="nav" aria-label="Primary">
        ${nav
          .map((item) => {
            const active =
              (page === "home" && item.href === "/") ||
              (page === "catalog" && item.href === "/catalog/") ||
              (page === "about" && item.href === "/about/") ||
              (page === "faq" && item.href === "/faq/") ||
              (page === "contact" && item.href === "/contact/") ||
              (page === "legal" && item.href === "/legal/");
            return `<a class="nav-link ${active ? "is-active" : ""}" href="${item.href}">${escapeHtml(item.label)}</a>`;
          })
          .join("")}
      </nav>
    </header>
  `;
}

function renderFooter() {
  return `
    <footer class="footer card">
      <div class="footer-grid">
        <div>
          <div class="footer-line">${escapeHtml(brand.footerLine)}</div>
          <div class="footer-sub">${escapeHtml(brand.operatingLine)}</div>
        </div>
        <div class="footer-links">
          <a class="text-link" href="/faq/">Support</a>
          <a class="text-link" href="/contact/">Contact</a>
          <a class="text-link" href="/about/">How we build</a>
          <a class="text-link" href="https://beatsperfect.net" target="_blank" rel="noreferrer">
            How the company operates
          </a>
        </div>
      </div>
    </footer>
  `;
}

function renderTrustStrip() {
  return `
    <div class="trust-strip" aria-label="Trust line">
      <span>Full preview</span>
      <span>Clear scope</span>
      <span>No recurring fee</span>
      <span>Versioned updates</span>
    </div>
  `;
}

function renderPreview(product) {
  const previewText = product.previewAssets?.[0] || "Preview placeholder";
  return `
    <div class="preview preview-${product.accent}">
      <div class="preview-line"></div>
      <div class="preview-copy">
        <span class="preview-kicker">${escapeHtml(product.status)}</span>
        <strong>${escapeHtml(previewText)}</strong>
        <span>${escapeHtml(product.format)}</span>
      </div>
    </div>
  `;
}

function renderProductCard(product) {
  const price = typeof product.priceUsd === "number" ? fmtMoney(product.priceUsd) : null;
  const priceLabel = price ? `Preview price ${price}` : "Price pending";
  return `
    <article class="product-card">
      <div class="card-link">
        ${renderPreview(product)}
        <div class="card-body">
          <div class="card-top">
            <div>
              <h2>${escapeHtml(product.title)}</h2>
              <p>${escapeHtml(product.oneClearJob)}</p>
            </div>
            <span class="pill pill-live">${escapeHtml(product.status)}</span>
          </div>
          <div class="meta-row product-meta">
            <span class="meta">${escapeHtml(product.format)}</span>
            <span class="meta">${escapeHtml(priceLabel)}</span>
          </div>
          <div class="tag-row">
            ${product.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}
          </div>
          <div class="card-foot">
            <span class="footnote">${escapeHtml(product.buyerOutcome)}</span>
          </div>
        </div>
      </div>
      <div class="card-actions">
        <a class="button button-dark" href="/product/?slug=${encodeURIComponent(product.slug)}">
          ${escapeHtml(product.directCtaLabel)}
        </a>
      </div>
    </article>
  `;
}

function renderHome() {
  const featured = featuredSlugs
    .map((slug) => products.find((product) => product.slug === slug))
    .filter(Boolean);

  return `
    <section class="hero grid-two">
      <div class="hero-copy card">
        <span class="eyebrow">${escapeHtml(brand.shopName)}</span>
        <h1>One clear job. Ready to use.</h1>
        <p>${escapeHtml(brand.heroCopy)}</p>
        <div class="hero-actions">
          <a class="button button-dark" href="/catalog/">Browse products</a>
        </div>
        ${renderTrustStrip()}
      </div>
      <aside class="summary card">
        <span class="eyebrow">Focus</span>
        <div class="summary-stack">
          <div class="summary-item">
            <strong>Clear scope</strong>
            <span>Every product answers one buyer job.</span>
          </div>
          <div class="summary-item">
            <strong>No recurring fee</strong>
            <span>Digital downloads without subscriptions.</span>
          </div>
          <div class="summary-item">
            <strong>Versioned updates</strong>
            <span>Release notes stay visible and simple.</span>
          </div>
        </div>
        <a class="text-link" href="/about/">How we build</a>
      </aside>
    </section>

    <section class="section">
      <div class="section-head">
        <div>
          <span class="eyebrow">Featured products</span>
          <h2>Products first, proof second.</h2>
        </div>
      </div>
      <div class="product-grid">
        ${featured.map(renderProductCard).join("")}
      </div>
    </section>

    <section class="section">
      <article class="card prose method-card">
        <span class="eyebrow">${escapeHtml(brand.methodHeading)}</span>
        <p>${escapeHtml(brand.methodCopy)}</p>
      </article>
    </section>
  `;
}

function renderCatalog() {
  const filtered = products.filter((product) => {
    const matchesQuery =
      !query ||
      [
        product.title,
        product.summary,
        product.format,
        product.status,
        product.tags.join(" "),
        product.oneClearJob
      ]
        .join(" ")
        .toLowerCase()
        .includes(query);
    const matchesTag =
      activeTag === "all" || product.tags.some((tag) => tag.toLowerCase() === activeTag);
    return matchesQuery && matchesTag;
  });

  return `
    <section class="catalog-hero card">
      <div>
        <span class="eyebrow">Products</span>
        <h1>Focused digital tools with one clear job.</h1>
        <p>Browse the catalog, compare scope, and open the detail page for each product.</p>
      </div>
      <form class="searchbar" action="/catalog/" method="get">
        <input name="q" value="${escapeHtml(query)}" placeholder="Search products" />
        <button type="submit">Search</button>
      </form>
    </section>
    <section class="filter-row">
      ${filters
        .map((tag) => {
          const active = tag === activeTag;
          const href =
            tag === "all"
              ? "/catalog/"
              : `/catalog/?tag=${encodeURIComponent(tag)}${query ? `&q=${encodeURIComponent(query)}` : ""}`;
          return `<a class="filter-pill ${active ? "is-active" : ""}" href="${href}">${escapeHtml(tag)}</a>`;
        })
        .join("")}
    </section>
    <section class="section">
      <div class="section-head">
        <div>
          <span class="eyebrow">Catalog</span>
          <h2>${filtered.length} product${filtered.length === 1 ? "" : "s"}</h2>
        </div>
      </div>
      <div class="product-grid">
        ${filtered.map(renderProductCard).join("")}
      </div>
    </section>
  `;
}

function renderDetailSection(title, items, emptyLabel) {
  if (!items || items.length === 0) return "";
  return `
    <section class="card-slab">
      <h2>${escapeHtml(title)}</h2>
      <ul class="detail-list">
        ${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
      </ul>
      ${emptyLabel ? `<p class="muted">${escapeHtml(emptyLabel)}</p>` : ""}
    </section>
  `;
}

function renderProductDetail() {
  const product = products.find((item) => item.slug === productSlug) || products[0];
  if (!product) {
    return `
      <section class="card prose">
        <span class="eyebrow">Products</span>
        <h1>No product found</h1>
        <p>The catalog is currently empty.</p>
      </section>
    `;
  }

  const missing = [];
  if (!product.previewAssets?.length) missing.push("preview assets");
  if (!product.supportChannel) missing.push("support channel");
  if (!product.compatibility) missing.push("compatibility");
  if (!product.testedEnvironment) missing.push("tested environment");

  const hasMarketplace = Boolean(product.marketplaceUrl);
  const price = typeof product.priceUsd === "number" ? fmtMoney(product.priceUsd) : "Pending";

  return `
    <section class="product-detail grid-two">
      <article class="card detail-main">
        <div class="detail-head">
          <div>
            <span class="eyebrow">${escapeHtml(product.status)}</span>
            <h1>${escapeHtml(product.title)}</h1>
            <p>${escapeHtml(product.summary)}</p>
          </div>
          <span class="pill pill-live">${escapeHtml(product.status)}</span>
        </div>

        <div class="preview-grid">
          ${(product.previewAssets || ["Preview placeholder"])
            .map(
              (asset) => `
                <div class="preview preview-${product.accent} detail-preview">
                  <div class="preview-line"></div>
                  <div class="preview-copy">
                    <span class="preview-kicker">Preview asset</span>
                    <strong>${escapeHtml(asset)}</strong>
                    <span>${escapeHtml(product.format)}</span>
                  </div>
                </div>
              `
            )
            .join("")}
        </div>

        <section class="card-slab">
          <h2>What this product does</h2>
          <p><strong>One clear job:</strong> ${escapeHtml(product.oneClearJob)}</p>
          <p><strong>Who it is for:</strong> ${escapeHtml(product.whoItIsFor)}</p>
          <p><strong>Buyer outcome:</strong> ${escapeHtml(product.buyerOutcome)}</p>
        </section>

        <section class="card-slab">
          <h2>What is included</h2>
          <ul class="detail-list">
            ${(product.includedItems || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
        </section>

        <section class="card-slab">
          <h2>What has been tested</h2>
          <p>${escapeHtml(product.testedEnvironment)}</p>
        </section>

        <section class="card-slab">
          <h2>What the product deliberately does not do</h2>
          <ul class="detail-list">
            ${(product.limitations || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
        </section>

        <section class="card-slab">
          <h2>Who should not buy it</h2>
          <ul class="detail-list">
            ${(product.notFor || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
        </section>

        <section class="card-slab">
          <h2>Evidence summary</h2>
          <p>${escapeHtml(product.evidenceSummary)}</p>
        </section>

        ${missing.length > 0 ? `
          <section class="card-slab">
            <h2>Missing information</h2>
            <p>This preview is still incomplete for: ${escapeHtml(missing.join(", "))}.</p>
          </section>
        ` : ""}
      </article>

      <aside class="card detail-side">
        <span class="eyebrow">Product facts</span>
        <h2>Current release</h2>
        <div class="side-box">
          <div class="detail-kv"><span>Format</span><strong>${escapeHtml(product.format)}</strong></div>
          <div class="detail-kv"><span>Price</span><strong>${escapeHtml(price)}</strong></div>
          <div class="detail-kv"><span>Pricing model</span><strong>${escapeHtml(product.pricingModel)}</strong></div>
          <div class="detail-kv"><span>Version</span><strong>${escapeHtml(product.currentVersion)}</strong></div>
          <div class="detail-kv"><span>Released</span><strong>${escapeHtml(fmtDate(product.releaseDate))}</strong></div>
          <div class="detail-kv"><span>Last updated</span><strong>${escapeHtml(fmtDate(product.lastUpdated))}</strong></div>
          <div class="detail-kv"><span>Compatibility</span><strong>${escapeHtml(product.compatibility)}</strong></div>
          <div class="detail-kv"><span>Support</span><strong>${escapeHtml(product.supportChannel)}</strong></div>
        </div>

        <div class="side-box">
          <p class="muted">${escapeHtml(product.marketplaceLabel || product.status)}</p>
          <p class="muted">${
            hasMarketplace
              ? "Marketplace listing is available through the product link."
              : "Marketplace listing is not published yet. This product is waiting for human publish approval."
          }</p>
          <a class="button button-dark" href="${hasMarketplace ? escapeHtml(product.marketplaceUrl) : "/catalog/"}"${
            hasMarketplace ? ' target="_blank" rel="noreferrer"' : ""
          }>${hasMarketplace ? "Open marketplace listing" : "Back to products"}</a>
        </div>

        <div class="side-box">
          <p class="muted">What it is for</p>
          <strong>${escapeHtml(product.oneClearJob)}</strong>
        </div>
      </aside>
    </section>
  `;
}

function renderHowWeBuild() {
  return `
    <section class="page-stack">
      <article class="card prose">
        <span class="eyebrow">How we build</span>
        <h1>Market evidence to release testing to real outcomes.</h1>
        <p>
          Market evidence validates the need. Release testing validates the product against its specification. Real customer outcomes determine whether the product deserves to continue.
        </p>
        <div class="method-flow">
          <div class="flow-step">Market evidence</div>
          <div class="flow-arrow">→</div>
          <div class="flow-step">Recurring buyer job</div>
          <div class="flow-arrow">→</div>
          <div class="flow-step">Clear product promise</div>
          <div class="flow-arrow">→</div>
          <div class="flow-step">Complaint analysis</div>
          <div class="flow-arrow">→</div>
          <div class="flow-step">Product spec</div>
          <div class="flow-arrow">→</div>
          <div class="flow-step">Build</div>
          <div class="flow-arrow">→</div>
          <div class="flow-step">Release testing</div>
          <div class="flow-arrow">→</div>
          <div class="flow-step">Launch</div>
          <div class="flow-arrow">→</div>
          <div class="flow-step">Real customer outcomes</div>
        </div>
        <p>${escapeHtml(disclosure)}</p>
      </article>
      <article class="card prose">
        <span class="eyebrow">Operating rule</span>
        <h2>How we stay honest</h2>
        <p>
          Market evidence tells us what buyers already try to solve. Release testing tells us whether the product matches the spec. Customer outcomes decide whether the product continues.
        </p>
        <p>
          We do not use testimonials, sales counts, or fake proof on the shop. We use the product itself, the preview, and the release notes.
        </p>
        <p>
          For the company-side operational dashboard, visit
          <a href="https://beatsperfect.net" target="_blank" rel="noreferrer">How the company operates</a>.
        </p>
      </article>
    </section>
  `;
}

function renderFaq() {
  return `
    <section class="page-stack">
      <article class="card prose">
        <span class="eyebrow">Support</span>
        <h1>Simple answers, no fluff.</h1>
        <h3>What do you sell here?</h3>
        <p>Focused digital products that each do one clear job.</p>
        <h3>Do you sell directly on this site?</h3>
        <p>No. The shop is a preview and catalog surface. A live marketplace listing can be linked once a product is released.</p>
        <h3>How do I know what is included?</h3>
        <p>Each product detail page lists the included items, compatibility, limitations, and support channel.</p>
        <h3>How do I get support?</h3>
        <p>Start with the product detail page and the Contact page on this site. There is no personal email or founder profile on the public shop.</p>
      </article>
    </section>
  `;
}

function renderContact() {
  return `
    <section class="page-stack">
      <article class="card prose">
        <span class="eyebrow">Contact</span>
        <h1>Use the public shop channels first.</h1>
        <p>
          For product questions, start with the product detail page and the FAQ. The shop does not expose personal identity or a founder bio.
        </p>
        <p>
          For company-level context, use the How we build page or visit
          <a href="https://beatsperfect.net" target="_blank" rel="noreferrer">How the company operates</a>.
        </p>
        <p class="muted">No invented support email is listed here.</p>
      </article>
    </section>
  `;
}

function renderLegal() {
  return `
    <section class="page-stack">
      <article class="card prose">
        <span class="eyebrow">Legal</span>
        <h1>Operationally boring on purpose.</h1>
        <p>
          Product details, release timing, and support notes may evolve as the preview catalog changes.
        </p>
        <p>
          Use the linked shop pages for the current product summary and the external marketplace, when one exists, for purchase terms and fulfillment.
        </p>
      </article>
    </section>
  `;
}

const renderers = {
  home: renderHome,
  catalog: renderCatalog,
  product: renderProductDetail,
  about: renderHowWeBuild,
  faq: renderFaq,
  contact: renderContact,
  legal: renderLegal
};

document.getElementById("shell").innerHTML = renderShell();
document.getElementById("page").innerHTML = `<div class="page-frame">${renderers[page] ? renderers[page]() : renderHome()}</div>${renderFooter()}`;
applyMetadata();
