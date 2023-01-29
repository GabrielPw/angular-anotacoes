
export class Jogo{

    id:number;
    nome: string;
    plataformas: string[];
    resumo?: string = '';
    desenvolvedor?: string = '';
    urlMainPhoto?: string = '';
    anoLancamento?: string = '';
    finalizado?: boolean;

    constructor(id:number, nome:string, plataformas:string[]){

        this.id = id;
        this.nome = nome;
        this.plataformas = plataformas;
        this.finalizado = false;
    }
}