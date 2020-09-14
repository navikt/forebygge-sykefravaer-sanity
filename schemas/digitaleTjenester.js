export default {
    name: 'digitale-tjenester',
    title: 'Digitale tjenester',
    type: 'document',
    fields: [
        {
            name: 'mainImage',
            title: 'Dokument ikon',
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
            name: 'priority',
            title: 'prioritet',
            type: 'number'
        },
        {
            name: 'hovedliste',
            title: 'Liste elementer',
            type: 'array',
            list: true,
            of: [
                {type: 'rad-element'}
            ]
        }
    ]
}
