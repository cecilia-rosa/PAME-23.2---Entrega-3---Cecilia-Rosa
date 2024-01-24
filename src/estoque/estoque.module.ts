import { Module } from '@nestjs/common';
import { EstoqueService } from './estoque.service';
import { EstoqueController } from './estoque.controller';
import { VendedorGuard } from './vendedorguard';

@Module({
  controllers: [EstoqueController],
  providers: [VendedorGuard],
})
export class EstoqueModule {}
