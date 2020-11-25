export default {
    name: 'lenke',
    title: 'Lenke',
    type: 'object',

    fields: [
        {
            name: 'tekst',
            title: 'Tekst',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'undertekst',
            title: 'Undertekst',
            type: 'string',
        },
        {
            name: 'href',
            title: 'URL',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'ikon',
            title: 'Ikon',
            type: 'image',
        },
    ],
};
