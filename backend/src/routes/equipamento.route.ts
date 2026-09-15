// @ts-expect-error Express type declarations are not installed in this project.
import {Router, type Request, type Response} from 'express';

export const equipamento_router = Router();

equipamento_router.get('/', (req: Request, res: Response) => {
    try {
        const res = await
        equipamentoService.getAll()

        return response.json(res)
    } catch (error) {
        console.error(error);

    }

    return Response.status(500).json({
        erro: "Erro Interno"
    })

})

equipamento_router.post("/", async (request: Request<{}, {}, CriarEquipamento>, response: Response) => {
    try {
        const dados = request.body;

        const equipamento = await equipamentoService.create(dados);
        return response.status(201).json(equipamento);
    } catch (error) {
        console.error(error);
    }

    return response.status(500).json({
         erro: "Erro Interno"
    });
    
})