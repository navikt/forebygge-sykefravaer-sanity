import { FiAlertTriangle } from "react-icons/fi";

export default {
    name: 'alert-stripe',
    title: 'Alert Stripe',
    type: 'object',
    fields: [
        {
            name: 'alertType',
            title: 'Alert Type',
            type: 'array',
            of: [
                {
                    type: 'string'
                }
            ],
            options: {
                list: [
                    {
                        title: 'info', value: 'info'
                    },
                    {
                        title: 'suksess', value: 'suksess'
                    },
                    {
                        title: 'advarsel', value: 'advarsel'
                    },
                    {
                        title: 'feil', value: 'feil'
                    }
                ]
            }

        },
        {
            name: 'publishedAt',
            title: 'Publisert',
            type: 'datetime'
        },
        {
            name: 'innhold',
            title: 'Tekst innhold',
            type: 'blockContent'
        }
    ],
    preview: {
        select: {
            title: 'innhold'
        },
        prepare(selection) {
            const { title } = selection;
            return {
                title: title[0].children[0].text,
                media: FiAlertTriangle,
            }
        }
    }
}
