import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() { //funcao que roda o app
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

