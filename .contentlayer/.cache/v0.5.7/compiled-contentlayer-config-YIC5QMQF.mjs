// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer2/source-files";
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `blog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: false },
    date: { type: "date", required: true },
    published: { type: "boolean", default: true },
    image: { type: "string", required: true }
  },
  computedFields: {
    slug: { type: "string", resolve: (doc) => `/${doc._raw.flattenedPath}` }
  }
}));
var contentlayer_config_default = makeSource({ contentDirPath: "./content", documentTypes: [Post] });
export {
  Post,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-YIC5QMQF.mjs.map
