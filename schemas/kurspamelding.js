export default {
    name: 'kurspamelding',
    title: 'kurspåmelding',
    type: 'object',

    fields: [
        {
            name: 'tittel',
            title: 'Tittel for kurspåmelding',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'undertekst',
            title: 'Tekst som kommer under tittel',
            type: 'string',
        },
        {
            name: 'lenke',
            title: 'Lenke',
            type: 'lenke',
            validation: (Rule) => Rule.required(),
        },
    ],
};
