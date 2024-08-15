"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSlug = void 0;
const faker_1 = require("@faker-js/faker");
const client_1 = require("@prisma/client");
const dotenv = require("dotenv");
dotenv.config();
const prisma = new client_1.PrismaClient();
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
const translit = (str) => {
    const ru = 'А-а-Б-б-В-в-Г-г-Д-д-Е-е-Ё-ё-Ж-ж-З-з-И-и-Й-й-К-к-Л-л-М-м-Н-н-О-о-П-п-Р-р-С-с-Т-т-У-у-Ф-ф-Х-х-Ц-ц-Ч-ч-Ш-ш-Щ-щ-Ъ-ъ-Ы-ы-Ь-ь-Э-э-Ю-ю-Я-я'.split('-');
    const en = "A-a-B-b-V-v-G-g-D-d-E-e-E-e-ZH-zh-Z-z-I-i-I-i-I-i-Y-y-K-k-L-l-M-m-N-n-O-o-P-p-R-r-S-s-T-t-U-u-F-f-H-h-Ts-ts-CH-ch-SH-sh-SCH-sch-'-'-Y-y-'-'-E-e-YU-yu-YA-ya".split('-');
    let res = '';
    for (let i = 0, l = str.length; i < l; i++) {
        const s = str.charAt(i), n = ru.indexOf(s);
        if (n >= 0) {
            res += en[n];
        }
        else {
            res += s;
        }
    }
    return res;
};
const generateSlug = (str) => {
    let url = str.replace(/[\s]+/gi, '-');
    url = translit(url);
    url = url
        .replace(/[^0-9a-z\-]+/gi, '')
        .replace(/---/g, '-')
        .replace(/--/g, '-')
        .toLowerCase();
    return url;
};
exports.generateSlug = generateSlug;
const createProduct = async (quantity) => {
    const products = [];
    for (let i = 0; i < quantity; i++) {
        const productName = faker_1.faker.commerce.productName();
        const categoryName = faker_1.faker.commerce.department();
        const product = await prisma.product.create({
            data: {
                name: productName,
                slug: (0, exports.generateSlug)(productName),
                description: faker_1.faker.commerce.productDescription(),
                price: +faker_1.faker.commerce.price(10, 999, 0),
                images: Array.from({
                    length: getRandomNumber(2, 6)
                }).map(() => `/uploads/${getRandomNumber(2, 6)}.jpg`),
                category: {
                    create: {
                        name: categoryName,
                        slug: (0, exports.generateSlug)(categoryName)
                    }
                },
                reviews: {
                    create: [
                        {
                            rating: faker_1.faker.number.int({ min: 1, max: 5 }),
                            text: faker_1.faker.lorem.paragraph(),
                            user: {
                                connect: {
                                    id: 1
                                }
                            }
                        },
                        {
                            rating: faker_1.faker.number.int({ min: 1, max: 5 }),
                            text: faker_1.faker.lorem.paragraph(),
                            user: {
                                connect: {
                                    id: 1
                                }
                            }
                        }
                    ]
                }
            }
        });
        products.push(product);
    }
    console.log(`Created ${products.length} product`);
};
async function main() {
    console.log('Start seeding...');
    await createProduct(10);
}
main()
    .catch((e) => console.log(e))
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map