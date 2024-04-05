// Importa as bibliotecas 'axios' e 'http'
import axios from 'axios';
import * as http from 'http';

// Criação de um servidor HTTP
const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/executar_todas_tarefas') {
        let Robo = new RoboDeLimpeza()
        let executarTarefas = Robo.executarTodasTarefas()
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(executarTarefas)}   
 });

 // Define a porta na qual o servidor irá escutar
const PORT = 1234;

// Inicia o servidor na porta definida
server.listen(PORT, () => {
    console.log(`Servidor em executando em http://localhost:${PORT}`);
});

// Define a URL do endpoint
export const endpoint_url = `http://localhost:${PORT}/executar_todas_tarefas`;


export class Fila {

    //Atributos da Fila 
    private items: any[];

    //Como essa Fila deve ser construída
    constructor() {
        this.items = [];
    }

    //Método para adicionar um item na fila 
    enfileirar(item: any): void {
        this.items.push(item);
    }

    //Método para desinfileirar um item da fila
    desinfileirar(): any | undefined {
        //se a fila estiver vazia, lança uma exceção
        if (this.items.length === 0) {
            throw new console.log("A lista de itens está vazia");
        } else {
            //remove e retorna o primeiro elemento da fila
            return this.items.shift();
        }
    }

    //Método que verifica se a lista está vazia 
    vazia(): boolean {
        //retorna true se a lista estiver vazia, caso o contrário, retorna false
        return this.items.length === 0;
    }
}

export class RoboDeLimpeza {

    //Atributos do Robô
    private historicoTarefas : Fila;

    //Como iniciar as tarefas do robô
    constructor() {
        this.historicoTarefas = new Fila()
    }

    //Método para adicionar uma tarefa à fila de tarefas
    adicionarTarefa(): Promise<string> {
        //se a fila estiver vazia, lança uma exceção
        if (this.historicoTarefas.length === 0) {
            throw new console.log("A lista de itens está vazia");
        } else {
            //adiciona uma tarefa na lista de tarefas
            this.historicoTarefas.enfileirar("Nova tarefa");
            return "Tarefa adicionada com sucesso"
        }
    }

    //Método para executar a próxima tarefa
    executarProximaTarefa(): string | undefined {

        const tarefas = new Fila()

        //iteração para imprimir o nome da tarefa a ser executada
        for (let tarefa of tarefas) {
            console.log(`${tarefa}`)
        //se a fila de tarefas estiver vazia, lança uma exceção
            if (tarefas.length === 0) {
                return "Impossível de executar a próxima tarefa, pois a lista está vazia"
            }
        }

    }

    //método para executar todas as tarefas
    executarTodasTarefas(): string | undefined{

        const tarefas = new Fila()
        //iteração para executar as tarefas até finalizar a lista
        for (let tarefa of tarefas) {
            this.executarProximaTarefa(tarefa)
        
        //se a fila de tarefas estiver vazia, demonstra a finalização das tarefas
        } if (tarefas.length === 0) {
            return "Lista de tarefas executadas" 
        }
    }
}