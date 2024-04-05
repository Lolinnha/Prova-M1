import {RoboDeLimpeza, Fila, endpoint_url} from './prova';
import axios from 'axios';

describe('Testes de unidade para a classe Robo', () => {
    let Robo: RoboDeLimpeza;

    beforeEach(() => {
        Robo = new RoboDeLimpeza();
    });

    it('deve adicionar tarefa corretamente', () => {
        expect(Robo.adicionarTarefa).resolves.toBe("Tarefa adicionada com sucesso");
    });

    it('deve dexecutar próxima tarefa corretamente', () => {
        expect(Robo.executarProximaTarefa).toBe(`${tarefa}`);
    });

    it('deve adicionar todas as tarefas corretamente', () => {
        expect(Robo.executarTodasTarefas).toBe("Lista de tarefas executadas");
    });
});

describe('Testes de unidade para a classe Fila', () => {
    let fila: Fila;

    beforeEach(() => {
        fila = new Fila();
    });

    it('deve enfileirar corretamente', () => {
        expect(fila.enfileirar).toBe("Enfileirado");
    });

    it('deve desinfileirar corretamente', () => {
        expect(fila.desinfileirar).toBe("Desinfileirado");
    });

    it('deve esvaziar corretamente e retornar verdadeiro', () => {
        expect(fila.vazia).toBe(true);
    });
});

describe('Teste de requisição para executar todas as tarefas do Robô', () => {
    it('deve inicializar todas as tarefas ao requisitar o endpoint', async () => {
        let getEndpoint = await axios.get(endpoint_url)
        expect(getEndpoint.data).toBe("Lista de tarefas executadas");
        expect(getEndpoint.status).toBe(200);
    })
})