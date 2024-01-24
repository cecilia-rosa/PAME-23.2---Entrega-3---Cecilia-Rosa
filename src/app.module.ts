import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteModule } from './cliente/cliente.module';
import { VendedorModule } from './vendedor/vendedor.module';

@Module({
  imports: [ClienteModule, VendedorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
