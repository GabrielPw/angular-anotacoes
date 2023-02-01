
export class Jogo{

    id:number;
    nome: string;
    plataformas: string[];
    resumo?: string = '';
    desenvolvedor?: string = '';
    urlMainPhoto?: string = '';
    anoLancamento?: string = '';
    finalizado?: boolean;

    constructor(id:number, nome:string, plataformas:string[], finalizado?:boolean, desenvolvedor?:string){

        this.id = id;
        this.nome = nome;
        this.plataformas = plataformas;
        this.desenvolvedor = desenvolvedor;
        this.finalizado = false;
    }
}