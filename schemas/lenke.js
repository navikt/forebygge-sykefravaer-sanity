export default {
    name: 'lenke',
    title: 'Lenke',
    type: 'object',

    fields: [
        {
            name: 'tekst',
            title: 'Tekst',
            type: 'string'
        },
        {
            name: 'undertekst',
            title: 'Undertekst',
            type: 'string'
        },
        {
            name: 'href',
            title: 'URL',
            type: 'string'
        },
        {
            name: 'publishedAt',
            title: 'Publisert',
            type: 'datetime'
        },
        {
            name: 'ikon',
            title: 'Ikon',
            type: 'image'
        },
    ],
}
