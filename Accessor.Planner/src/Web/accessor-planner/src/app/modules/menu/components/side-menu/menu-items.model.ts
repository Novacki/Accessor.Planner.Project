import { PoMenuItem } from "@po-ui/ng-components";

const commomMenus: Array<PoMenuItem> =  [
    { label:'Accessor Planner', icon:'po-icon po-icon-star-filled', shortLabel: 'Accessor', link:'../menu' },
    { label:'Perfil', icon:'po-icon po-icon-user', shortLabel: 'Perfil', subItems: [
      { label: 'Meus Dados', link:'user-information' },
      { label: 'Sair', icon:'po-icon po-icon-exit', link:'../home' }
    ]},
    { label:'Dasboard', icon:'po-icon po-icon-chart-area', shortLabel: 'Dash' }
]

const clientMenus: Array<PoMenuItem> = commomMenus.concat([
    { label: 'Solicitações', icon: 'po-icon po-icon-list', shortLabel: 'Solicitação', subItems: [
      { label: 'Em Espera', link:'solicitations/on-hold' },
      { label: 'Aceitas', link:'solicitations/accepted' },
      { label: 'Retornadas', link:'solicitations/returned' },
      { label: 'Aprovadas', link:'solicitations/approved' },
      { label: 'Recusadas', link:'solicitations/rejected' },
      { label: 'Canceladas', link:'solicitations/canceled' },
      { label: 'Encerradas', link:'solicitations/done' }
    ]},
    { label: 'Acessores', icon: 'po-icon po-icon-weight', shortLabel: 'Acessor', subItems: [
      { label: 'Todos' },
      { label: 'Favoritos' },
      { label: 'Atuando' }
    ]},
    { label: 'Fornecedores', icon: 'po-icon po-icon-pallet-partial', shortLabel: 'Fornecedor', subItems: [
        { label: 'Todos' },
        { label: 'Favoritos' },
        { label: 'Atuando' }
    ]},
]);

const workerMenus: Array<PoMenuItem> = commomMenus.concat([
    { label: 'Solicitações', icon: 'po-icon po-icon-list', shortLabel: 'Solicitação', subItems: [
        { label: 'Novas', link:'solicitations/news' },
        { label: 'Para Enviar', link:'solicitations/to-send' },
        { label: 'Acionado', link:'' },
        { label: 'Em Análise', link:'solicitations/in-review' },
        { label: 'Aprovadas', link:'solicitations/accessor-approved' },
        { label: 'Recusadas', link:'solicitations/accessor-rejected' },
        { label: 'Encerradas', link:'solicitations/accessor-done' },
        { label: 'Canceladas', link:'solicitations/accessor-canceled' }
    ]},
    { label: 'Clientes', icon: 'po-icon po-icon-users', shortLabel: 'Cliente', subItems: [
      { label: 'Todos' },
      { label: 'Favoritos' },
      { label: 'Atuando' }
    ]},
    { label: 'Fornecedores', icon: 'po-icon po-icon-pallet-partial', shortLabel: 'Fornecedor', subItems: [
        { label: 'Todos' },
        { label: 'Favoritos' },
        { label: 'Em Negociação' }
    ]},
]);

export const getMenuByUser: Map<number, Array<PoMenuItem>> = new Map<number, Array<PoMenuItem>>([
   [1, workerMenus],
   [2, clientMenus]
])
