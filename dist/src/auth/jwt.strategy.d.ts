import { ConfigService } from '@nestjs/config';
import { User } from '@prisma/client';
import { Strategy } from 'passport-jwt';
import { PrismaService } from 'src/prisma.service';
declare const JwtStrategy_base: new (...args: any[]) => InstanceType<typeof Strategy>;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly configService;
    private prisma;
    constructor(configService: ConfigService, prisma: PrismaService);
    validate({ id }: Pick<User, 'id'>): Promise<{
        id: number;
        createdAt: Date;
        updateAt: Date;
        email: string;
        password: string;
        isAdmin: boolean;
        name: string;
        avatarPath: string;
        phone: string;
    }>;
}
export {};
