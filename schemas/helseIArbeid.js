import { FiFolder } from "react-icons/fi";

export default {
    name: 'helseIArbeid',
    title: 'HelseIArbeid',
    type: 'document',
    icon: FiFolder,
    fields: [
        {
            name: 'mainImage',
            title: 'Dokument ikon',
            type: 'image'
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
            name: 'body',
            title: 'Innhold',
            type: 'blockContent'
        }
    ],

}
