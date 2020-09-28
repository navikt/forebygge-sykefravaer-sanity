export default {
    name: 'lenke-element',
    title: 'lenke element',
    type: 'object',

    fields: [
        {
            name: 'lenketekst',
            title: 'Lenketekst',
            type: 'string'
        },
        {
            name: 'href',
            title: 'URL',
            type: 'string'
        },
        {
            name: 'undertekst',
            title: 'Undertekst',
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
