import { lorem } from '../utils/lorem'

export const dados = [
    {
        title: 'Experiências Acadêmicas',
        data: [
            {
                local: 'Universidade Católica de Pernambuco', 
                descricao: lorem.generateParagraphs(3)
            },
            {
                local: 'Colégio GGE',
                descricao: lorem.generateParagraphs(3)
            },
        ]
    },
    {
        title: 'Experiências Profissionais',
        data: [
            {
                local: 'Empresa A', 
                descricao: lorem.generateParagraphs(15)
            },
            {
                local: lorem.generateWords(3),
                descricao: lorem.generateParagraphs(3)
            },
        ],
    },
    {
        title: 'Hobbies',
        data: [
            {
                local: 'Escalar montanhas', 
                descricao: lorem.generateParagraphs(3)
            },
            {
                local: 'Jogar boliche',
                descricao: lorem.generateParagraphs(3)
            },
        ],
    },
];
