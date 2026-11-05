import { defineUserConfig } from "vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { seoPlugin } from "@vuepress/plugin-seo";
import { sitemapPlugin } from "@vuepress/plugin-sitemap";
import sidebar from "./sidebar.json" with { type: "json" };

const hostname = "https://java-db.io.nexus";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "java-db",
  description: "java-db 使用文档：Db、Row、ActiveRecord、事务、SQL 模板与多数据源",
  shouldPrefetch: false,
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  markdown: { lineNumbers: true },
  bundler: viteBundler(),
  plugins: [
    searchProPlugin({ indexContent: true }),
    seoPlugin({ hostname, author: { name: "Tong Li", url: "https://github.com/litongjava" } }),
    sitemapPlugin({ hostname }),
  ],
  theme: defaultTheme({
    logo: "/logo.png",
    repo: "litongjava/java-db-docs",
    docsRepo: "https://github.com/litongjava/java-db-docs",
    docsBranch: "main",
    docsDir: "docs",
    navbar: [
      { text: "源码", link: "https://github.com/litongjava/java-db" },
      { text: "Tio Boot", link: "https://tio-boot.com/" },
    ],
    sidebar,
  }),
});
