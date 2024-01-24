import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { VendedorGuard } from './vendedorguard';

@Controller('categoria')
export class CategoriaController {
  constructor(private readonly categoriaService: CategoriaService) {}

  @Post('criarCategoria')
  @UseGuards(VendedorGuard)
  create(@Body() createCategoriaDto: CreateCategoriaDto) {
    return this.categoriaService.create(createCategoriaDto);
  }

  @Get('todas_as_categorias')
  findAll() {
    return this.categoriaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriaService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(VendedorGuard)
  update(@Param('id') id: string, @Body() updateCategoriaDto: UpdateCategoriaDto) {
    return this.categoriaService.update(+id, updateCategoriaDto);
  }

  @Delete(':id')
  @UseGuards(VendedorGuard)
  remove(@Param('id') id: string) {
    return this.categoriaService.remove(+id);
  }
}
