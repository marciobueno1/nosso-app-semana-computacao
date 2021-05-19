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
                descricao: lorem.generateParagraphs(3)
            },
            {
                local: lorem.generateWords(3),
                descricao: lorem.generateParagraphs(3)
            },
        ],
    },
];
