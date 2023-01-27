
export class Jogo{

    nome: string;
    plataformas: string[];
    finalizado?: boolean;

    constructor(nome:string, plataformas:string[]){

        this.nome = nome;
        this.plataformas = plataformas;
        this.finalizado = false;
    }
}