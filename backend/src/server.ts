import express, { type Request, type Response } from "express"
import { randomUUID } from "node:crypto"
import { equipamentos_router}   from "./routes/equipamentos.routes.ts"

const app = express()
const port = 3000

app.use(express.json())
app.use("/equipamentos", equipamentos_router)

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})