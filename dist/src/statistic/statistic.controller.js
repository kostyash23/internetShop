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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatisticController = void 0;
const common_1 = require("@nestjs/common");
const statistic_service_1 = require("./statistic.service");
const auth_decorator_1 = require("../auth/decorators/auth.decorator");
const user_decorator_1 = require("../auth/decorators/user.decorator");
let StatisticController = class StatisticController {
    constructor(statisticService) {
        this.statisticService = statisticService;
    }
    async getMainStatistic(id) {
        return this.statisticService.getMain(id);
    }
};
exports.StatisticController = StatisticController;
__decorate([
    (0, common_1.Get)('main'),
    (0, auth_decorator_1.Auth)('admin'),
    __param(0, (0, user_decorator_1.CurrentUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StatisticController.prototype, "getMainStatistic", null);
exports.StatisticController = StatisticController = __decorate([
    (0, common_1.Controller)('statistic'),
    __metadata("design:paramtypes", [statistic_service_1.StatisticService])
], StatisticController);
//# sourceMappingURL=statistic.controller.js.map