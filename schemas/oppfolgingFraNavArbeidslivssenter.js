import { FiFolder, FiEdit } from 'react-icons/fi';

export default {
    name: 'oppfolging-fra-nav-arbeidslivssenter',
    title: 'Oppfølging fra NAV Arbeidslivssenter',
    icon: FiFolder,
    type: 'document',
    fields: [
        {
            name: 'mainImage',
            title: 'Document ikon',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'title',
            title: 'Tittel',
            type: 'string',
        },
        {
            name: 'priority',
            title: 'prioritet',
            type: 'number',
        },
        {
            name: 'alertstripe',
            title: 'alertstripe',
            type: 'array',
            list: true,
            of: [
                {
                    type: 'alert-stripe',
                },
            ],
        },
        {
            name: 'body',
            title: 'Innhold',
            type: 'array',
            list: true,
            of: [
                {
                    name: 'section',
                    title: 'Innhold',
                    type: 'object',
                    fields: [
                        {
                            name: 'title',
                            title: 'Tittel',
                            type: 'string',
                        },
                        {
                            name: 'colorTitle',
                            title: 'Bakgrunnsfarge tittel',
                            type: 'array',
                            of: [
                                {
                                    type: 'string',
                                },
                            ],
                            options: {
                                list: [
                                    {
                                        title: 'Hvit bakgrunn',
                                        value: '#FFFFFF',
                                    },
                                    {
                                        title: 'Blå bakgrunn',
                                        value: '#CCE1F3',
                                    },
                                ],
                            },
                        },
                        {
                            name: 'color',
                            title: 'Bakgrunnsfarge',
                            type: 'array',
                            of: [
                                {
                                    type: 'string',
                                },
                            ],
                            options: {
                                list: [
                                    {
                                        title: 'Hvit bakgrunn',
                                        value: '#FFFFFF',
                                    },
                                    {
                                        title: 'Blå bakgrunn',
                                        value: '#CCE1F3',
                                    },
                                ],
                            },
                        },
                        {
                            name: 'publishedAt',
                            title: 'Publisert',
                            type: 'datetime',
                        },
                        {
                            name: 'bodyContent',
                            title: 'Innhold',
                            type: 'blockContent',
                        },
                    ],
                    preview: {
                        select: {
                            title: 'title',
                            content: 'bodyContent',
                        },
                        prepare(selection) {
                            const { title, content } = selection;
                            const preview =
                                title && title.length > 0 ? title : content[0].children[0].text;
                            return {
                                title: preview,
                                media: FiEdit,
                            };
                        },
                    },
                },
            ],
        },
    ],
};
