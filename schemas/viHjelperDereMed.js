import React from 'react';
import directionSign from '../img/direction-sign.svg';
import { FiFolder, FiCheckCircle, FiEdit } from "react-icons/fi";
import Thumbnail from "../utils/Thumbnail";

export default {
    name: 'vi-hjelper-dere-med',
    title: 'Vi hjelper dere med',
    type: 'document',
    icon: FiFolder,
    fields: [
        {
            name: 'title',
            title: 'Tittel',
            type: 'string',
        },
        {
            name: 'priority',
            title: 'prioritet',
            type: 'number'
        },
        {
            name: 'publishedAt',
            title: 'Publisert',
            type: 'datetime'
        },
        {
            name: 'checklist',
            title: 'Sjekkpunkter',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'checkpoint',
                            type: 'string'
                        }
                    ],
                    preview: {
                        select:{
                            title: 'checkpoint',
                        },
                        prepare(selection){
                            const {title} = selection;
                            return {
                                title: title,
                                media: FiCheckCircle,
                            }
                        },
                    }
                }
            ],

        },
        {
            name: 'content',
            title: 'Innhold',
            type: 'blockContent'
        },
        {
            name: 'hovedliste',
            title: 'Liste elementer',
            type: 'array',
            list: true,
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'iconImage',
                            title: 'Bilde',
                            type: 'image',
                            options: {
                                hotspot: true
                            }
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
                    preview: {
                        select: {
                            media: 'iconImage',
                            title: 'body'
                        }
                    }
                },
            ],
        },
        {
            name: 'footer',
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
                            name: 'color',
                            title: 'Bakgrunnsfarge',
                            type: 'array',
                            of: [
                                {
                                    type: 'string'
                                }
                            ],
                            options: {
                                list: [
                                    {
                                        title: 'Hvit bakgrunn', value: '#FFFFFF'
                                    },
                                    {
                                        title: 'Blå bakgrunn', value: '#CCE1F3'
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
                            name: 'bodyContent',
                            title: 'Innhold',
                            type: 'blockContent'
                        }
                    ],
                    preview: {
                        select: {
                            title: 'bodyContent'
                        },
                        prepare(selection){
                            const { title } = selection;
                            return {
                                title: title[0].children[0].text,
                                media: FiEdit,
                            }
                        },
                    }
                }
            ],

        }

    ],
    orderings: [
        {
            title: 'section order',
            name: 'rekkefølge på avsnitt',
            by: [
                {
                    field: 'priority', direction: 'asc'
                }
            ]
        }
    ],
    preview: {
        select: {
            title: 'title',
        },
        prepare(selection) {
            const { title } = selection;
            return {
                title: title.split(':')[0],
                media: <Thumbnail src={directionSign}/>
            }
        }

    }
}
