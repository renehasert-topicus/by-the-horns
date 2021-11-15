import {DateTime} from "luxon";

export default {
    name: 'applicant',
    title: 'Applicant',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: `Applicant's name`,
            type: 'string',
        },
        {
            name: 'birthday',
            title: 'Date of birth',
            type: 'date',
            initialValue: DateTime.fromFormat('09-06-1987', 'DD-MM-YYYY').toJSDate(),
            options: {
                dateFormat: 'DD-MM-YYYY',
                calendarTodayLabel: 'Today',
            }
        },
        {
            name: 'likability',
            title: 'Likability',
            type: 'number',
            description: 'Rate the likability of this applicant, 1-10',
            validation: Rule => Rule.required().min(0).max(10)
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'stack',
            title: 'Stack',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'tool',
                            title: 'Tool',
                            type: 'reference',
                            to: [{type: 'tool'}]
                        }
                    ],
                    preview: {
                        select: {
                            title: 'tool.name',
                            name: 'tool.name',
                            media: 'tool.logo'
                        },
                        prepare({
                                    title,
                                    media
                                }) {
                            return {
                                title,
                                media
                            }
                        }
                    }
                }
            ],
        },
        {
            name: 'additional',
            title: 'Additional skill',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'specialSkill',
                            title: 'Special skill',
                            type: 'reference',
                            to: [{type: 'specialSkill'}]
                        }
                    ],
                    preview: {
                        select: {
                            title: 'specialSkill.description'
                        },
                        prepare({title}) {
                            return {title}
                        }
                    }
                }
            ]
        }
    ],
};
