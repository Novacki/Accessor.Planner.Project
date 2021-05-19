import { PoMenuItem } from "@po-ui/ng-components";

const commomMenus: Array<PoMenuItem> =  [
    { label:'Perfil', icon:'po-icon po-icon-user', shortLabel: 'Perfil', subItems: [
      { label: 'Meus Dados' }
    ]},
    { label:'Dasboard', icon:'po-icon po-icon-chart-area', shortLabel: 'Dash' }
]

const clientMenus: Array<PoMenuItem> = commomMenus.concat([
    { label: 'Solicitações', icon: 'po-icon po-icon-list', shortLabel: 'Solicitação', subItems: [
      { label: 'Em Espera', link:'solicitations' },
      { label: 'Aprovadas', link:'' },
      { label: 'Recusadas', link:'' },
      { label: 'Canceladas', link:'' },
      { label: 'Encerradas', link:'' }
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
        { label: 'Novas', link:'solicitations' },
        { label: 'Acionado', link:'' },
        { label: 'Em Análise', link:'' },
        { label: 'Aprovadas', link:'' },
        { label: 'Recusadas', link:'' },
        { label: 'Encerradas', link:'' },
        { label: 'Canceladas', link:'' }
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
