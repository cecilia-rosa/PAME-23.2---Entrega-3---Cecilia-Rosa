import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VendedorService } from './vendedor.service';
import { CreateVendedorDto } from './dto/create-vendedor.dto';
import { UpdateVendedorDto } from './dto/update-vendedor.dto';

@Controller('vendedor')
export class VendedorController {
  constructor(private readonly vendedorService: VendedorService) {}

  @Post('criar')
  create(@Body() createVendedorDto: CreateVendedorDto) {
    return this.vendedorService.create(createVendedorDto);
  }

  @Get('todos')
  findAll() {
    return this.vendedorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vendedorService.findOne(+id);
  }

  @Patch('atualizar/:id')
  update(@Param('id') id: string, @Body() updateVendedorDto: UpdateVendedorDto) {
    return this.vendedorService.update(+id, updateVendedorDto);
  }

  @Delete('deletar/:id')
  remove(@Param('id') id: string) {
    return this.vendedorService.remove(+id);
  }
}
