import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClienteModule } from './cliente/cliente.module';
import { VendedorModule } from './vendedor/vendedor.module';
import { CompraModule } from './compra/compra.module';
import { ProdutoModule } from './produto/produto.module';
import { CupomModule } from './cupom/cupom.module';
import { CategoriaModule } from './categoria/categoria.module';
import { CarrinhoModule } from './carrinho/carrinho.module';
import { EstoqueModule } from './estoque/estoque.module';


@Module({
  imports: [ClienteModule, VendedorModule, CompraModule, ProdutoModule, CupomModule, CategoriaModule, CarrinhoModule, EstoqueModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
