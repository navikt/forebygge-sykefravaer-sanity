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
            name: 'undertekstUtenKurs',
            title:
                'Alternativ tekst under tittel. Blir vist i stedet for feltet over hvis det ikke finnes noen IA-kurs',
            type: 'string',
        },
        {
            name: 'lenke',
            title: 'Lenke (blir ikke vist hvis det ikke finnes noen IA-kurs)',
            type: 'lenke',
            validation: (Rule) => Rule.required(),
        },
    ],
};
