import { FiFolder, FiEdit } from "react-icons/fi";

export default {
    name: 'ia-avtalen',
    title: 'IA-avtalen',
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
            name: 'body',
            title: 'Innhold',
            type: 'blockContent'
        },
        {
            name: 'list',
            title: 'Nedtrekk liste',
            type: 'object',
            fields: [
                {
                    name: 'title',
                    title: 'Tittel',
                    type: 'string'
                },
                {
                    name: 'listElement',
                    title: 'Liste element',
                    type: 'array',
                    of: [
                        {
                            name: 'content',
                            title: 'Tekst innhold',
                            type: 'object',
                            fields: [
                                {
                                    name: 'tekst',
                                    type: 'blockContent'
                                }
                            ],
                            preview: {
                                select: {
                                    title: 'tekst',
                                },
                                prepare(selection){
                                    const { title } = selection;
                                    return {
                                        title: title[0].children[0].text,
                                        media: FiEdit
                                    }
                                },
                            }
                        }
                    ]
                }
            ]
        }
    ],
}
