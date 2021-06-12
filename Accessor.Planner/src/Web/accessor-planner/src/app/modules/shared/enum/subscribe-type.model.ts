export enum SubscribeType {
    accessor = 1,
    client = 2,
    provider = 3
}

export const subscribeTypeLabel: Map<number, string> = new Map<number, string>([
    [SubscribeType.accessor, 'Acessor'],
    [SubscribeType.provider, 'Fornecedor'],
    [SubscribeType.client, 'Cliente']
 ])