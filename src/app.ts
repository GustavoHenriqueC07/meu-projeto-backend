// Importa a biblioteca Express e também o tipo Express
// O Express será utilizado para criar o servidor web
import express from "express";
import { type Response, type Express, type Request } from "express";

// Importar a classe player do arquivo.
/*
Player precisa ser importado com a extensão .js,
pois os arquivos TypeScript são convertidos para JavaScript
durante a compilação. Por isso, no código compilado,
o arquivo que será encontrado terá a extensão .js.
*/
import { Player } from "./models/player.js";

// Cria uma aplicação Express
// A função express() devolve um objeto que representa o servidor da aplicação
const app: Express = express();

/*
Middleware para permitir que o servidor aceite que o servidor 
aceite requisições com formato de JSON
*/
app.use(express.json());

// Define a porta onde o servidor ficará disponível
// Neste caso, o servidor poderá ser acessado pela porta 8081
const PORT: number = 8081;

const player = new Player("GhDaIsa", 100, 1, );

// Rota get para obter as informações sobre um player
// Quando um usuário acessar a rota "/player" via get
//irá retornar os dados do player em formato json. 
app.get("/player", (req: Request, res: Response) => {
    
    res.json({
        message: "Informações do player",
        player: player, 
    })
})
// O post entra igual o get, mas, com mais informações, mas post se faz alterações.
app.post("/player/attack", (req: Request, res: Response) => {
//Chamamos o ataque para armazenar a mensagem retornada
    const attackMessage = player.attack();
    res.json({
        message: attackMessage,
    });
});

app.post("/player/damage", (req: Request, res: Response) => {
    // Pegamos o valor de damage enviado no corpo da requisição.
    const { damage } = req.body;
    // Chamamos o método takeDamage() passando o dano recebido.
    const damageMessage = player.takeDamage(damage);
    // Retornamos as informações atualizadas do player.
    res.json({
        action: damageMessage,
        currentHealth: player.health,
        currentLevel: player.level,
    });
});

app.post("/player/healing", (req:Request, res: Response) => {
    const { healing } = req.body
    const healingMessage = player.takeHealing(healing);
    res.json({
        action: healingMessage,
        currentHealth: player.health,
        currentLevel: player.level
    })
});

// Inicializa o servidor utilizando a porta definida
// O método listen() faz o servidor começar a "escutar" requisições HTTP
app.listen(PORT, () => {
console.log(`Servidor rodando em http://localhost:${PORT}`);
console.log("Rotas Disponiveis: ");
console.log(`GET http://localhost:${PORT}/player - Obter informações do player`)
console.log(`POST http://localhost:${PORT}/player/attack - Atacar o player`)
console.log(`POST http://localhost:${PORT}/player/damage - Causar dano ao player`)
console.log(`POST http://localhost:${PORT}/player/healing - Se curar do dano sofrido`)
});