export class CreateClienteDto { //necessario para criar um usuario de cliente
    nome: string;
    cpf: number;
    email: string;
    data_nascimento: Date;
    endereco: string;
    senha: string;
}
