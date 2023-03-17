import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "7f23701f-1aea-4d42-aead-24e9a7311f46", // Get this from tina.io
  token: "86b63f411464b5e532159995d3e74b4028e7e5aa", // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "src/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "date",
          },
          {
            type: "string",
            name: "Tags",
            label: "tags",
            list: true
          },
          {
            type: "rich-text",
            name: "body",
            label: "body",
            isBody: true
          },
          {
            type: "string",
            name: "permalink",
            label: "Permalink",
            text: 'posts/{{title | slug}}/index.html',
            hidden: true,
          },

        ],
      },
    ],
  },
});
