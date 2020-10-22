export default {
    name: 'tidligerenettkurs',
    title: 'tidligere nettkurs',
    type: 'object',

    fields: [
        {
            name: "tittel",
            title: "Tittel for tidligere nettkurs",
            type: "string",
            validation: Rule => Rule.required(),
        }, {
            name: "nyestopptakUndertekst",
            title: "Undertekst nyeste opptak",
            type: "string",
        },
        {
            name: "alleopptakUndertekst",
            title: "Undertekst alle opptak",
            type: "string",
        },
        {
            name: "lenker",
            title: "Lenker alle opptak",
            type: "array",
            list: true,
            of: [{ type: "lenke" }],
            validation: Rule => Rule.required(),
        }
    ],
}
