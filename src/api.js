const diplomas = [
    {
        name: 'Diploma in Information Technology',
        id: 'diploma-in-information-technology',
        modules: [
            {
                name: 'C339 Software Testing and Analytics',
                id: 'software-testing-and-analytics',
                desc: 'In this module, students will gain hands-on experience in conducting targeted group deployments to support user acceptance testing, as well as managing bug reporting and tracking processes effectively.'
            }, 
            {
                name: 'C346 Mobile App Development',
                id: 'mobile-app-development',
                desc: 'In this module, students will be equipped with the knowledge and practical skills to design and develop mobile applications that are efficient and user-centred.'
            }
        ]
    },
    {
        name: 'Diploma in Applied AI and Analytics',
        id: 'diploma-in-applied-ai-and-analytics',
        modules: [
            {
                name: 'C245 Data Analytics with GenAI',
                id: 'data-analytics-with-genai',
                desc: 'This module will equip students with skills to create impactful data visualisations and support informed business decision-making. Additionally, learning how GenAI enhances data analysis, generate meaningful insights, and strengthens strategic decision-making.'
            },
            {
                name: 'C388 Applied Large Language Models',
                id: 'applied-large-language-models',
                desc: 'This module equips students with the knowledge and practical skills to apply large language models (LLMs) in solving complex real-world problems.'
            }
        ]
    }
]

export function getModule({ moduleId, diplomaId }) {
return diplomas
    .find(({ id }) => id === diplomaId)
    .modules.find(({ id }) => id === moduleId);
}

export function getDiploma(diplomaId) {
    return diplomas.find(({ id }) => id === diplomaId);
}

export function getDiplomas() {
    return diplomas.map(({ name, id }) => ({ name, id }));
}