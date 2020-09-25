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
      name: "lenkelisteTittel",
      title: "Tittel for liste med lenker",
      type: "string",
    },
    {
      name: "lenkeliste",
      title: "Liste lenker",
      type: "array",
      list: true,
      of: [{ type: "lenke-element" }],
    },
  ],
};
