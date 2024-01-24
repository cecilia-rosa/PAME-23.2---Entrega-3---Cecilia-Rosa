import { Module } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteController } from './cliente.controller';
import { VendedorGuard } from './vendedorguard';
import { ClienteGuard } from './cliente.guard';

@Module({
  controllers: [ClienteController],
  providers: [VendedorGuard, ClienteGuard],
})
export class ClienteModule {}
