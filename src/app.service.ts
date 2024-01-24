import { Injectable } from '@nestjs/common';

// parte onde entra a logica do codigo
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
