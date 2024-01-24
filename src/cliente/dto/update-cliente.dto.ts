import { PartialType } from '@nestjs/mapped-types';
import { CreateClienteDto } from './create-cliente.dto';

export class UpdateClienteDto extends PartialType(CreateClienteDto) { //info que o cliente pode atualizar, cpf e id nao pode
    nome: string;
    email: string;
    data_nascimento: Date;
    endereco: string;
    senha: string;
}
