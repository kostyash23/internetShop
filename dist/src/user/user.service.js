"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const return_user_object_1 = require("./return-user.object");
const argon2_1 = require("argon2");
let UserService = class UserService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async byId(id, selectOject = {}) {
        const user = await this.prisma.user.findUnique({
            where: {
                id
            },
            select: {
                ...return_user_object_1.returnUserObject,
                favorites: {
                    select: {
                        id: true,
                        name: true,
                        price: true,
                        images: true,
                        slug: true
                    }
                },
                ...selectOject
            }
        });
        if (!user)
            throw new Error('User not found');
        return user;
    }
    async updateUserProfile(id, dto) {
        const isSameUser = await this.prisma.user.findUnique({
            where: { email: dto.email }
        });
        if (isSameUser && id === isSameUser.id)
            throw new common_1.BadRequestException('Email already in use');
        const user = await this.byId(id);
        return this.prisma.user.update({
            where: {
                id
            },
            data: {
                email: dto.email,
                name: dto.name,
                avatarPath: dto.avatarPath,
                phone: dto.phone,
                password: dto.password ? await (0, argon2_1.hash)(dto.password) : user.password
            }
        });
    }
    async toggleFavorite(userId, productId) {
        const user = await this.byId(userId);
        if (!user)
            throw new common_1.NotFoundException('User not found');
        const isExists = user.favorites.some((product) => product.id === productId);
        return this.prisma.user.update({
            where: {
                id: user.id
            },
            data: {
                favorites: {
                    [isExists ? 'disconnect' : 'connect']: {
                        id: +productId
                    }
                }
            }
        });
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
//# sourceMappingURL=user.service.js.map