## 贡献指南

本项目使用 [Docusaurus](https://docusaurus.io/docs) 构建，以下是如何为wiki做贡献的指南。

### 如何新建文档

在 `docs` 目录下，您可以通过以下方式添加新文档：

1. **创建单个文档**：
   - 在 `docs` 目录下创建 Markdown 文件（`.md` 扩展名）
   - 文件开头添加 frontmatter，包含必要的元数据：
     ```md
     ---
     sidebar_position: 1  # 在侧边栏中的位置
     ---

     # 文档标题

     文档内容...
     ```

2. **创建文档分类**：
   - 在 `docs` 目录下创建新文件夹
   - 在文件夹中添加 `_category_.json` 文件，定义分类信息：
     ```json
     {
       "label": "分类名称",
       "position": 3,
       "link": {
         "type": "generated-index",
         "description": "分类描述"
       }
     }
     ```
   - 在文件夹中添加 Markdown 文件，每个文件同样需要包含 frontmatter

### 如何管理图片

本项目中有两种管理图片的方式：

1. **文档特定图片**：
   - 将图片直接放在 `docs` 目录或相应的子目录中
   - 在 Markdown 文件中使用相对路径引用图片：
     ```md
     ![图片描述](图片文件名.png)
     ```
   - 例如：`![Model List](modellist.png)`

2. **全局共享图片**：
   - 将图片放在 `static/img` 目录中
   - 在 Markdown 文件中使用以下方式引用：
     ```md
     ![图片描述](/img/图片文件名.png)
     ```

推荐做法：
- 仅供单个文档使用的图片放在与文档相同的目录中
- 多个文档共享的图片放在 `static/img` 目录中
- 使用有意义的文件名，便于维护
- 优先使用 PNG 或 SVG 格式以保证清晰度
