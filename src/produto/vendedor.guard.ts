import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class VendedorGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.user; // Supondo que informações do usuário estejam disponíveis no request

    // Verifica se o usuário autenticado é o vendedor específico 
    return user && user.id === 1; // 1 é o ID do vendedor específico
  }
}