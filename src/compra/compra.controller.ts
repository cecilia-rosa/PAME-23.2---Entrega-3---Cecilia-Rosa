import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CompraService } from './compra.service';
import { CreateCompraDto } from './dto/create-compra.dto';
import { UpdateCompraDto } from './dto/update-compra.dto';
import { VendedorGuard } from './vendedorguard';
import { ClienteGuard } from './cliente.guard';

@Controller('compra')
export class CompraController {
  constructor(private readonly compraService: CompraService) {}

  @Post('criar')
  @UseGuards(ClienteGuard)
  create(@Body() createCompraDto: CreateCompraDto) {
    return this.compraService.create(createCompraDto);
  }

  @Get('todas')
  @UseGuards(VendedorGuard)
  findAll() {
    return this.compraService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.compraService.findOne(+id);
  }

  @Patch('/atualizar/:id')
  @UseGuards(VendedorGuard)
  update(@Param('id') id: string, @Body() updateCompraDto: UpdateCompraDto) {
    return this.compraService.update(+id, updateCompraDto);
  }

  @Delete('deletar/:id')
  @UseGuards(VendedorGuard)
  remove(@Param('id') id: string) {
    return this.compraService.remove(+id);
  }
}
