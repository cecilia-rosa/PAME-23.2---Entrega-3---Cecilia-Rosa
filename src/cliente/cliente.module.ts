import { Module } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { ClienteController } from './cliente.controller';
import { VendedorGuard } from './vendedorguard';

@Module({
  controllers: [ClienteController],
  providers: [VendedorGuard],
})
export class ClienteModule {}
