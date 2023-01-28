
export class Jogo{

    id:number;
    nome: string;
    plataformas: string[];
    descricoes?: string[];
    finalizado?: boolean;

    constructor(id:number, nome:string, plataformas:string[]){

        this.id = id;
        this.nome = nome;
        this.plataformas = plataformas;
        this.finalizado = false;
    }
}