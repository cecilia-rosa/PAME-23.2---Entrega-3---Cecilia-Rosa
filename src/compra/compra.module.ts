import { Module } from '@nestjs/common';
import { CompraService } from './compra.service';
import { CompraController } from './compra.controller';
import { VendedorGuard } from './vendedorguard';

@Module({
  controllers: [CompraController],
  providers: [VendedorGuard],
})
export class CompraModule {}
