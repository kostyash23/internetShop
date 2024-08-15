"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productReturnObjectFullset = exports.productReturnObject = void 0;
const return_category_object_1 = require("../category/return-category.object");
const returtn_review_object_1 = require("./../review/returtn-review.object");
exports.productReturnObject = {
    images: true,
    description: true,
    id: true,
    price: true,
    createdAt: true,
    slug: true,
    name: true,
    category: {
        select: return_category_object_1.returnCategoryObject
    },
    reviews: {
        select: {
            ...returtn_review_object_1.returnReviewObject
        },
        orderBy: {
            createdAt: 'desc'
        }
    }
};
exports.productReturnObjectFullset = {
    ...exports.productReturnObject,
    reviews: {
        select: {
            ...returtn_review_object_1.returnReviewObject
        }
    },
    category: {
        select: return_category_object_1.returnCategoryObject
    }
};
//# sourceMappingURL=return-product-object.js.map