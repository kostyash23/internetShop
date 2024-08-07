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
exports.StatisticService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const user_service_1 = require("../user/user.service");
let StatisticService = class StatisticService {
    constructor(prisma, userService) {
        this.prisma = prisma;
        this.userService = userService;
    }
    async getMain(userId) {
        const user = await this.userService.byId(userId, {
            orders: {
                select: {
                    items: true
                }
            },
            reviews: true
        });
        return [
            {
                name: 'Orders',
                value: user.orders.length
            },
            {
                name: 'Review',
                value: user.reviews.length
            },
            {
                name: 'Favorites',
                value: user.favorites.length
            },
            {
                name: 'Orders',
                value: user.orders.length
            }
        ];
    }
};
exports.StatisticService = StatisticService;
exports.StatisticService = StatisticService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        user_service_1.UserService])
], StatisticService);
//# sourceMappingURL=statistic.service.js.map