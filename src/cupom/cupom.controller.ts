import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CupomService } from './cupom.service';
import { CreateCupomDto } from './dto/create-cupom.dto';
import { UpdateCupomDto } from './dto/update-cupom.dto';
import { VendedorGuard } from './vendedorguard';

@Controller('cupom')
export class CupomController {
  constructor(private readonly cupomService: CupomService) {}

  @Post('criar')
  @UseGuards(VendedorGuard)
  create(@Body() createCupomDto: CreateCupomDto) {
    return this.cupomService.create(createCupomDto);
  }

  @Get('todos')
  findAll() {
    return this.cupomService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cupomService.findOne(+id);
  }

  @Patch('atualizar/:id')
  @UseGuards(VendedorGuard)
  update(@Param('id') id: string, @Body() updateCupomDto: UpdateCupomDto) {
    return this.cupomService.update(+id, updateCupomDto);
  }

  @Delete('deletar/:id')
  @UseGuards(VendedorGuard)
  remove(@Param('id') id: string) {
    return this.cupomService.remove(+id);
  }
}
