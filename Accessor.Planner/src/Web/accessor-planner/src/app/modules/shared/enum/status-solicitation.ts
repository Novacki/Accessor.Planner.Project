export enum StatusSolicitation {
    onHold = 1,
    inReview = 2,
    accept = 3,
    approve = 4,
    done = 5,
    reject = 6,
    canceled = 7
}

export const solicitationStatusLabel: Map<number, string> = new Map<number, string>([
   [StatusSolicitation.onHold, 'Em Espera'],
   [StatusSolicitation.inReview, 'Em Revisão'],
   [StatusSolicitation.accept, 'Aceita'],
   [StatusSolicitation.done, 'Finalizada'],
   [StatusSolicitation.reject, 'Rejeitada'],
   [StatusSolicitation.canceled, 'Cancelada'],
   [StatusSolicitation.approve, 'Aprovada'],
])