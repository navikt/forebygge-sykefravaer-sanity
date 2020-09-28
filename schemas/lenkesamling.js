export default {
    name: 'lenkesamling',
    title: 'lenkesamling',
    type: 'object',

    fields: [
        {
            name: "tittel",
            title: "Tittel for liste med lenker",
            type: "string",
            validation: Rule => Rule.required(),
        }, {
            name: "undertekst",
            title: "Tekst som kommer under tittel",
            type: "string",
        },
        {
            name: "lenker",
            title: "Lenker",
            type: "array",
            list: true,
            of: [{ type: "lenke" }],
            validation: Rule => Rule.required(),
        }
    ],
}
