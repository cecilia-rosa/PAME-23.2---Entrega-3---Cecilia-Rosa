import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { EstoqueService } from './estoque.service';
import { CreateEstoqueDto } from './dto/create-estoque.dto';
import { UpdateEstoqueDto } from './dto/update-estoque.dto';
import { VendedorGuard } from './vendedorguard';

@Controller('estoque')
export class EstoqueController {
  constructor(private readonly estoqueService: EstoqueService) {}

  @Post('criar')
  @UseGuards(VendedorGuard)
  create(@Body() createEstoqueDto: CreateEstoqueDto) {
    return this.estoqueService.create(createEstoqueDto);
  }

  @Get('todos')
  @UseGuards(VendedorGuard)
  findAll() {
    return this.estoqueService.findAll();
  }

  @Get(':id')
  @UseGuards(VendedorGuard)
  findOne(@Param('id') id: string) {
    return this.estoqueService.findOne(+id);
  }

  @Patch('atualizar/:id')
  @UseGuards(VendedorGuard)
  update(@Param('id') id: string, @Body() updateEstoqueDto: UpdateEstoqueDto) {
    return this.estoqueService.update(+id, updateEstoqueDto);
  }

  @Delete('deletar/:id')
  @UseGuards(VendedorGuard)
  remove(@Param('id') id: string) {
    return this.estoqueService.remove(+id);
  }
}
