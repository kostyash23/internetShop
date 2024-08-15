import { PrismaService } from 'src/prisma.service';
import { AuthDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { RefreshTokenDto } from './dto/refreshToken.dto';
import { UserService } from 'src/user/user.service';
export declare class AuthService {
    private prisma;
    private jwt;
    private userService;
    constructor(prisma: PrismaService, jwt: JwtService, userService: UserService);
    login(dto: AuthDto): Promise<{
        accessToken: string;
        refreshToken: string;
        user: {
            id: number;
            email: string;
            isAdmin: boolean;
        };
    }>;
    getNewToken(dto: RefreshTokenDto): Promise<{
        accessToken: string;
        refreshToken: string;
        user: {
            id: number;
            email: string;
            isAdmin: boolean;
        };
    }>;
    register(dto: AuthDto): Promise<{
        accessToken: string;
        refreshToken: string;
        user: {
            id: number;
            email: string;
            isAdmin: boolean;
        };
    }>;
    private issuesToken;
    private returnUserFilds;
    private validateUser;
}
