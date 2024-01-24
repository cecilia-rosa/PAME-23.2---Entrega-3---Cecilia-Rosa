import { Module } from '@nestjs/common';
import { CompraService } from './compra.service';
import { CompraController } from './compra.controller';
import { VendedorGuard } from './vendedorguard';
import { ClienteGuard } from './cliente.guard';

@Module({
  controllers: [CompraController],
  providers: [VendedorGuard, ClienteGuard],
})
export class CompraModule {}
