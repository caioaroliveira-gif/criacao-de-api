export interface Equipamento {
    id: string;
    nome: string;
    tipo: string;
    numero_serie: string;
    status: string;
    data_aquisicao: Date;
    criado_em: Date;
}

export interface CriarEquipamento {
    nome: string;
    tipo: string;
    numero_serie: string;
    status: string;
    data_aquisicao: Date;
    criado_em: Date;
}

