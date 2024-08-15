import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException
} from '@nestjs/common'
import { User } from '@prisma/client'
import { Observable } from 'rxjs'

@Injectable()
export class OnlyAdminGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<{ user: User }>()
    const user = request.user

    if (!user.isAdmin) throw new ForbiddenException("You don'n have rights!")

    return user.isAdmin
  }
}
