import { pool } from "../database/connection"
import { Equipamento, CriarEquipamento } from "../types/equipamento"


class EquipamentoService {
    async getAll() {
        try {
            const res = await pool.query ("SELECT * FROM equipamento")
            return res.rows
        } catch (error) {
            console.error(error);
            throw new Error("Erro ao buscar equipamentos");
        }

    }
    async create(dados: CriarEquipamento): Promise<Equipamento> {
    const res = await pool.query<Equipamento>(
        `INSERT INTO equipamento (nome, tipo, numero_serie, status, data_aquisicao, criado_em)
         VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
        [dados.nome, dados.tipo, dados.numero_serie, dados.status, dados.data_aquisicao, dados.criado_em]
    )

    const equipamento =res.rows[0]
    if (!equipamento) {
        throw new Error("O banco não retonou o equipamento criado");

    }

    return equipamento

    }

}
export const equipamentoService = new EquipamentoService()