# java-db-docs

java-db 使用文档：Db、Row、ActiveRecord、事务、SQL 模板与多数据源。

- 文档站：https://java-db.io.nexus/
- 项目源码：https://github.com/litongjava/java-db
- 拆分自 [tio-boot-docs](https://github.com/litongjava/tio-boot-docs)

## 本地开发

```bash
pnpm install
pnpm docs:dev
```

## 构建

```bash
pnpm docs:build
```

构建产物位于 `docs/.vitepress/dist`。

## 部署

推送到 `main` 分支后，Cloudflare Pages 会自动构建并发布。

## AI 语料

构建时生成，供 AI 检索和问答使用：

- [llms.txt](https://java-db.io.nexus/llms.txt)：页面目录
- [llms-full.txt](https://java-db.io.nexus/llms-full.txt)：完整正文
- [ai/index.json](https://java-db.io.nexus/ai/index.json)：页面元数据
- [ai/chunks.jsonl](https://java-db.io.nexus/ai/chunks.jsonl)：按标题分段的语料
- `/ai/pages/<路径>.md`：每页的 Markdown 原文
