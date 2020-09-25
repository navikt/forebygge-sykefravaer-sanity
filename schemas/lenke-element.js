export default {
    name: 'lenke-element',
    title: 'lenke element',
    type: 'object',

    fields: [
        {
            name: 'title',
            title: 'Tittel',
            type: 'string'
        },
        {
            name: 'publishedAt',
            title: 'Publisert',
            type: 'datetime'
        },
        {
            name: 'body',
            title: 'Body',
            type: 'blockContent'
        }
    ],
}
