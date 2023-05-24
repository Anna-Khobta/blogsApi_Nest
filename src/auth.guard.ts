import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';
import { UsersService } from './users/users.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(protected usersService: UsersService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    console.log(request.headers.authorization);
    return false;
    //return validateRequest(request);
  }
}
