import { Module } from '@nestjs/common';
import { CupomService } from './cupom.service';
import { CupomController } from './cupom.controller';
import { VendedorGuard } from './vendedorguard';

@Module({
  controllers: [CupomController],
  providers: [VendedorGuard],
})
export class CupomModule {}
