import { Module } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { ProdutoController } from './produto.controller';
import { VendedorGuard } from './vendedor.guard';

@Module({
  controllers: [ProdutoController],
  providers: [VendedorGuard],
})
export class ProdutoModule {}
