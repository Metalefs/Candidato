export class MongoDocument{
    _id!: string;
}

export module Collections { 
    export class Sobre extends MongoDocument {
        Descricao:string;
        Nome:string;
        Servico:string;
        Historia:string;
        Slogan:string;
        static NomeID:string = "Sobre";
        constructor(
        Descricao:string,
        Nome:string,
        Servico:string,
        Historia:string,
        Slogan:string){
            super();
            this.Descricao = Descricao;
            this.Nome = Nome;
            this.Servico = Servico;
            this.Slogan = Slogan;
            this.Historia = Historia;
        }
	}
    export class InformacoesContato extends MongoDocument {
        Telefone:string;
        Email:string;
        HorarioAtendimento:string;
        Whatsapp:string;
        Instagram:string;
        static NomeID:string = "InformacoesContato";
        constructor(
            Telefone:string,
            Email:string,
            HorarioAtendimento:string,
            Whatsapp:string,
            Instagram:string){
            super();
                this.Telefone = Telefone;
                this.Email = Email;
                this.HorarioAtendimento = HorarioAtendimento;
                this.Whatsapp = Whatsapp;
                this.Instagram = Instagram;
        }
    };
    export class User extends MongoDocument {
        Email:string;
        Senha:string;
        token:string;
        Tipo:number;
        static NomeID:string = "User";
        constructor(
            Email:string,
            Senha:string,
            token:string,
            Tipo:number){
            super();
            this.Email = Email;
            this.Senha = Senha;
            this.token = token;
            this.Tipo  = Tipo;
        }
    };
    export class Feedback extends MongoDocument {
        Nome:string;
        Email:string;
        Titulo:string;
        Comentario:string;
        static NomeID:string = "Feedback";
        constructor(
        Nome:string,
        Email:string,
        Titulo:string,
        Comentario:string){
            super();
            this.Nome = Nome;
            this.Email = Email;
            this.Titulo = Titulo;
            this.Comentario = Comentario;
        }
        
    };
    // export class Sessoes extends MongoDocument {
    //     jwt:string;
    //     idCliente:string;
    //     static NomeID:string = "Sessoes";
    //     constructor(
    //     jwt:string,
    //     idCliente:string){
    //         super();
    //         this.idCliente = idCliente;
    //         this.jwt = jwt;
    //     }
    // };
}