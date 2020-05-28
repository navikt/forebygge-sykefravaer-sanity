export default {
    name: 'rad-element',
    title: 'rad element',
    type: 'object',

    fields: [
        {
            name: 'iconImage',
            title: 'Rad bilde',
            type: 'image',
            options: {
                hotspot: true
            }
        },
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
