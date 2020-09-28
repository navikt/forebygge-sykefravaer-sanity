export default {
  name: "webinar-og-kurs",
  title: "Webinar og kurs",
  type: "document",
  fields: [
    {
      name: "priority",
      title: "prioritet",
      type: "number",
    },
    {
      name: "mainImage",
      title: "Dokument ikon",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "title",
      title: "Tittel",
      type: "string",
    },
    {
      name: "ingress",
      title: "Ingress",
      type: "blockContent"
    },
    {
      name: "lenkesamlinger",
      title: "Lenkesamlinger",
      type: "array",
      list: true,
      of: [{ type: "lenkesamling" }],
    }
  ],
};
