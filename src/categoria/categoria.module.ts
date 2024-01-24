import { Module } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { CategoriaController } from './categoria.controller';
import { VendedorGuard } from './vendedorguard';

@Module({
  controllers: [CategoriaController],
  providers: [VendedorGuard],
})
export class CategoriaModule {}
