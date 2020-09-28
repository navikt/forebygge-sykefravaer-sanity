export default {
    name: 'lenkesamling',
    title: 'lenkesamling',
    type: 'object',

    fields: [
        {
            name: "lenkelisteTittel",
            title: "Tittel for liste med lenker",
            type: "string",
        }, {
            name: "undertekst",
            title: "Tekst som kommer under tittel",
            type: "string",
        },
        {
            name: "lenkeliste",
            title: "Liste lenker",
            type: "array",
            list: true,
            of: [{ type: "lenke-element" }],
        }
    ],
}
