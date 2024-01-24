import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

@Injectable()
export class ClienteGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    return !!request.user; // Retorna true se houver um usuário, indicando que está logado
  }
}