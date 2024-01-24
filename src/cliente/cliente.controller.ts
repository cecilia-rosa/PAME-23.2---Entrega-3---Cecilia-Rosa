import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { VendedorGuard } from './vendedorguard';
import { ClienteGuard } from './cliente.guard';

@Controller('cliente')
export class ClienteController {
  constructor(private readonly clienteService: ClienteService) {}

  @Post('criar')
  create(@Body() createClienteDto: CreateClienteDto) {
    return this.clienteService.create(createClienteDto);
  }

  @Get('todos')
  @UseGuards(VendedorGuard)
  findAll() {
    return this.clienteService.findAll();
  }

  @Get(':id')
  @UseGuards(ClienteGuard)
  findOne(@Param('id') id: string) {
    return this.clienteService.findOne(+id);
  }

  @Patch('atualizar/:id')
  @UseGuards(ClienteGuard)
  update(@Param('id') id: string, @Body() updateClienteDto: UpdateClienteDto) {
    return this.clienteService.update(+id, updateClienteDto);
  }

  @Delete('deletar/:id')
  @UseGuards(ClienteGuard)
  remove(@Param('id') id: string) {
    return this.clienteService.remove(+id);
  }
}
