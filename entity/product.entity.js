"use strict";
import {Blob} from 'node:buffer';
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
exports.Product = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const size_entity_1 = require("./size.entity");
let Product = class Product extends sequelize_typescript_1.Model {
};
exports.Product = Product;
__decorate([
    sequelize_typescript_1.PrimaryKey,
    (0, sequelize_typescript_1.Column)({
        allowNull: false,
        autoIncrement: true,
    }),
    __metadata("design:type", Number)
], Product.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.BLOB('long'),
    }),
    __metadata("design:type", Blob)
], Product.prototype, "img", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], Product.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Product.prototype, "wholesalePrice", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Product.prototype, "costPrice", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Product.prototype, "color", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Product.prototype, "memo", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Product.prototype, "category", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => size_entity_1.Size),
    __metadata("design:type", Array)
], Product.prototype, "sizes", void 0);
exports.Product = Product = __decorate([
    (0, sequelize_typescript_1.Table)({
        charset: "utf8"
    })
], Product);
//# sourceMappingURL=product.entity.js.map