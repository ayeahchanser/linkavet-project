'use strict';

const Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "category", deps: []
 * createTable "subCategory", deps: []
 * createTable "tag", deps: []
 * createTable "user", deps: []
 * createTable "role", deps: []
 * createTable "store", deps: []
 * createTable "order", deps: []
 * createTable "user-role", deps: [user, role]
 * createTable "post", deps: [user, category]
 * createTable "document", deps: [user, category]
 * createTable "comment", deps: [user, post, comment]
 * createTable "postTag", deps: [post, tag]
 * createTable "documentTag", deps: [document, tag]
 * createTable "user_doc", deps: [user]
 * createTable "branch", deps: [store]
 * createTable "product", deps: [category, store]
 * createTable "product_image", deps: [product]
 * createTable "productTag", deps: [product, tag]
 * createTable "user-store", deps: [user, store]
 * createTable "review", deps: [product, user]
 * createTable "banner", deps: [user]
 * createTable "payment", deps: [user]
 * createTable "productOrder", deps: [product, order]
 *
 **/

const info = {
    "revision": 1,
    "name": "init-migrations",
    "created": "2023-11-11T15:43:42.366Z",
    "comment": ""
};

const migrationCommands = [

    {
        fn: "createTable",
        params: [
            "SequelizeMigrationsMeta",
            {
                "revision": {
                    "primaryKey": true,
                    "type": Sequelize.INTEGER
                },
                "name": {
                    "allowNull": false,
                    "type": Sequelize.STRING
                },
                "state": {
                    "allowNull": false,
                    "type": Sequelize.JSON
                },
            },
            {}
        ]
    },
    {
        fn: "bulkDelete",
        params: [
            "SequelizeMigrationsMeta",
            [{
                revision: info.revision
            }],
            {}
        ]
    },
    {
        fn: "bulkInsert",
        params: [
            "SequelizeMigrationsMeta",
            [{
                revision: info.revision,
                name: info.name,
                state: '{"revision":1,"tables":{"category":{"tableName":"category","schema":{"id":{"seqType":"Sequelize.STRING(20)","allowNull":false,"primaryKey":true},"name":{"seqType":"Sequelize.STRING(50)","allowNull":false,"unique":true},"slug":{"seqType":"Sequelize.STRING(128)","allowNull":false,"unique":true},"description":{"seqType":"Sequelize.TEXT","allowNull":false},"createdAt":{"seqType":"Sequelize.DATE","allowNull":false},"updatedAt":{"seqType":"Sequelize.DATE","allowNull":false},"deletedAt":{"seqType":"Sequelize.DATE"}},"indexes":{}},"subCategory":{"tableName":"subCategory","schema":{"id":{"seqType":"Sequelize.STRING(20)","allowNull":false,"primaryKey":true},"name":{"seqType":"Sequelize.STRING(50)","allowNull":false,"unique":true},"slug":{"seqType":"Sequelize.STRING(128)","allowNull":false,"unique":true},"description":{"seqType":"Sequelize.TEXT","allowNull":false},"createdAt":{"seqType":"Sequelize.DATE","allowNull":false},"updatedAt":{"seqType":"Sequelize.DATE","allowNull":false},"deletedAt":{"seqType":"Sequelize.DATE"}},"indexes":{}},"tag":{"tableName":"tag","schema":{"id":{"seqType":"Sequelize.STRING(20)","allowNull":false,"primaryKey":true},"name":{"seqType":"Sequelize.STRING(50)","allowNull":false,"unique":true},"createdAt":{"seqType":"Sequelize.DATE","allowNull":false},"updatedAt":{"seqType":"Sequelize.DATE","allowNull":false},"deletedAt":{"seqType":"Sequelize.DATE"}},"indexes":{}},"user":{"tableName":"user","schema":{"id":{"seqType":"Sequelize.STRING(50)","allowNull":false,"primaryKey":true},"authStrategy":{"seqType":"Sequelize.STRING(10)","allowNull":false},"firstname":{"seqType":"Sequelize.STRING(50)","allowNull":true},"lastname":{"seqType":"Sequelize.STRING(50)","allowNull":true},"username":{"seqType":"Sequelize.STRING(50)","allowNull":false,"unique":true},"avatar":{"seqType":"Sequelize.STRING(255)","allowNull":true},"email":{"seqType":"Sequelize.STRING(50)","allowNull":false,"unique":true},"phoneNumber":{"seqType":"Sequelize.STRING(13)"},"city":{"seqType":"Sequelize.STRING(30)","allowNull":true},"country":{"seqType":"Sequelize.STRING(30)","allowNull":true},"address":{"seqType":"Sequelize.STRING(255)","allowNull":true},"password":{"seqType":"Sequelize.STRING(255)","allowNull":true,"unique":true},"verified":{"seqType":"Sequelize.BOOLEAN"},"createdAt":{"seqType":"Sequelize.DATE","allowNull":false},"updatedAt":{"seqType":"Sequelize.DATE","allowNull":false},"deletedAt":{"seqType":"Sequelize.DATE"}},"indexes":{}},"role":{"tableName":"role","schema":{"id":{"seqType":"Sequelize.STRING(20)","allowNull":false,"primaryKey":true},"name":{"seqType":"Sequelize.STRING(128)","allowNull":false,"unique":true},"createdAt":{"seqType":"Sequelize.DATE","allowNull":false},"updatedAt":{"seqType":"Sequelize.DATE","allowNull":false},"deletedAt":{"seqType":"Sequelize.DATE"}},"indexes":{}},"user-role":{"tableName":"user-role","schema":{"userId":{"seqType":"Sequelize.STRING(50)","unique":"user-role_roleId_userId_unique","primaryKey":true,"references":{"model":"user","key":"id"},"onUpdate":"CASCADE","onDelete":"CASCADE"},"roleId":{"seqType":"Sequelize.STRING(20)","unique":"user-role_roleId_userId_unique","primaryKey":true,"references":{"model":"role","key":"id"},"onUpdate":"CASCADE","onDelete":"CASCADE"},"createdAt":{"seqType":"Sequelize.DATE","allowNull":false},"updatedAt":{"seqType":"Sequelize.DATE","allowNull":false},"deletedAt":{"seqType":"Sequelize.DATE"}},"indexes":{}},"post":{"tableName":"post","schema":{"id":{"seqType":"Sequelize.STRING(20)","allowNull":false,"primaryKey":true},"title":{"seqType":"Sequelize.STRING(128)","allowNull":false},"slug":{"seqType":"Sequelize.STRING(128)","allowNull":false,"unique":true},"content":{"seqType":"Sequelize.TEXT","allowNull":false},"imageUrl":{"seqType":"Sequelize.STRING(128)","allowNull":false},"publishedAt":{"seqType":"Sequelize.DATE"},"authorId":{"seqType":"Sequelize.STRING(128)","allowNull":false,"references":{"model":"user","key":"id"},"onUpdate":"CASCADE","onDelete":"NO ACTION"},"categoryId":{"seqType":"Sequelize.STRING(128)","allowNull":false,"references":{"model":"category","key":"id"},"onUpdate":"CASCADE","onDelete":"NO ACTION"},"createdAt":{"seqType":"Sequelize.DATE","allowNull":false},"updatedAt":{"seqType":"Sequelize.DATE","allowNull":false},"deletedAt":{"seqType":"Sequelize.DATE"}},"indexes":{}},"document":{"tableName":"document","schema":{"id":{"seqType":"Sequelize.STRING(20)","allowNull":false,"primaryKey":true},"title":{"seqType":"Sequelize.STRING(128)","allowNull":false},"slug":{"seqType":"Sequelize.STRING(128)","allowNull":false,"unique":true},"description":{"seqType":"Sequelize.TEXT","allowNull":false},"fileUrl":{"seqType":"Sequelize.STRING(128)","allowNull":false},"uploadDate":{"seqType":"Sequelize.DATE","allowNull":false},"userId":{"seqType":"Sequelize.STRING(128)","allowNull":false,"references":{"model":"user","key":"id"},"onUpdate":"CASCADE","onDelete":"NO ACTION"},"categoryId":{"seqType":"Sequelize.STRING(128)","allowNull":false,"references":{"model":"category","key":"id"},"onUpdate":"CASCADE","onDelete":"NO ACTION"},"createdAt":{"seqType":"Sequelize.DATE","allowNull":false},"updatedAt":{"seqType":"Sequelize.DATE","allowNull":false},"deletedAt":{"seqType":"Sequelize.DATE"}},"indexes":{}},"comment":{"tableName":"comment","schema":{"id":{"seqType":"Sequelize.STRING(20)","allowNull":false,"primaryKey":true},"content":{"seqType":"Sequelize.TEXT","allowNull":false},"userId":{"seqType":"Sequelize.STRING(128)","allowNull":false,"references":{"model":"user","key":"id"},"onUpdate":"CASCADE","onDelete":"NO ACTION"},"postId":{"seqType":"Sequelize.STRING(128)","allowNull":false,"references":{"model":"post","key":"id"},"onUpdate":"CASCADE","onDelete":"CASCADE"},"publishedAt":{"seqType":"Sequelize.DATE"},"parent_id":{"seqType":"Sequelize.STRING","allowNull":true,"references":{"model":"comment","key":"id"},"onUpdate":"CASCADE","onDelete":"NO ACTION"},"createdAt":{"seqType":"Sequelize.DATE","allowNull":false},"updatedAt":{"seqType":"Sequelize.DATE","allowNull":false},"deletedAt":{"seqType":"Sequelize.DATE"}},"indexes":{}},"postTag":{"tableName":"postTag","schema":{"postId":{"seqType":"Sequelize.STRING(20)","unique":"postTag_postId_tagId_unique","primaryKey":true,"references":{"model":"post","key":"id"},"onUpdate":"CASCADE","onDelete":"CASCADE"},"tagId":{"seqType":"Sequelize.STRING(20)","unique":"postTag_postId_tagId_unique","primaryKey":true,"references":{"model":"tag","key":"id"},"onUpdate":"CASCADE","onDelete":"CASCADE"},"createdAt":{"seqType":"Sequelize.DATE","allowNull":false},"updatedAt":{"seqType":"Sequelize.DATE","allowNull":false},"deletedAt":{"seqType":"Sequelize.DATE"}},"indexes":{}},"documentTag":{"tableName":"documentTag","schema":{"documentId":{"seqType":"Sequelize.STRING(20)","unique":"documentTag_documentId_tagId_unique","primaryKey":true,"references":{"model":"document","key":"id"},"onUpdate":"CASCADE","onDelete":"CASCADE"},"tagId":{"seqType":"Sequelize.STRING(20)","unique":"documentTag_documentId_tagId_unique","primaryKey":true,"references":{"model":"tag","key":"id"},"onUpdate":"CASCADE","onDelete":"CASCADE"},"createdAt":{"seqType":"Sequelize.DATE","allowNull":false},"updatedAt":{"seqType":"Sequelize.DATE","allowNull":false},"deletedAt":{"seqType":"Sequelize.DATE"}},"indexes":{}},"user_doc":{"tableName":"user_doc","schema":{"id":{"seqType":"Sequelize.STRING(20)","allowNull":false,"primaryKey":true},"userId":{"seqType":"Sequelize.STRING","allowNull":true,"references":{"model":"user","key":"id"},"onUpdate":"CASCADE","onDelete":"CASCADE"},"scannedIdCard":{"seqType":"Sequelize.STRING(128)","allowNull":false,"unique":true},"scannedLiscence":{"seqType":"Sequelize.STRING(128)","allowNull":false,"unique":true},"createdAt":{"seqType":"Sequelize.DATE","allowNull":false},"updatedAt":{"seqType":"Sequelize.DATE","allowNull":false},"deletedAt":{"seqType":"Sequelize.DATE"}},"indexes":{}},"branch":{"tableName":"branch","schema":{"id":{"seqType":"Sequelize.STRING(20)","allowNull":false,"primaryKey":true},"storeId":{"seqType":"Sequelize.STRING","allowNull":true,"references":{"model":"store","key":"id"},"onUpdate":"CASCADE","onDelete":"NO ACTION"},"name":{"seqType":"Sequelize.STRING(128)","allowNull":false,"unique":true},"town":{"seqType":"Sequelize.STRING(128)","allowNull":false},"address":{"seqType":"Sequelize.STRING(255)","allowNull":false},"createdAt":{"seqType":"Sequelize.DATE","allowNull":false},"updatedAt":{"seqType":"Sequelize.DATE","allowNull":false},"deletedAt":{"seqType":"Sequelize.DATE"}},"indexes":{}},"store":{"tableName":"store","schema":{"id":{"seqType":"Sequelize.STRING(20)","allowNull":false,"primaryKey":true},"userId":{"seqType":"Sequelize.STRING(128)","allowNull":false},"name":{"seqType":"Sequelize.STRING(50)","allowNull":false,"unique":true},"location":{"seqType":"Sequelize.STRING(255)","allowNull":false,"unique":false},"imageBannerUrl":{"seqType":"Sequelize.STRING(255)","allowNull":false,"unique":true},"createdAt":{"seqType":"Sequelize.DATE","allowNull":false},"updatedAt":{"seqType":"Sequelize.DATE","allowNull":false},"deletedAt":{"seqType":"Sequelize.DATE"}},"indexes":{}},"product":{"tableName":"product","schema":{"id":{"seqType":"Sequelize.STRING(20)","allowNull":false,"primaryKey":true},"categoryId":{"seqType":"Sequelize.STRING(50)","allowNull":false,"references":{"model":"category","key":"id"},"onUpdate":"CASCADE","onDelete":"NO ACTION"},"storeId":{"seqType":"Sequelize.STRING","allowNull":true,"references":{"model":"store","key":"id"},"onUpdate":"CASCADE","onDelete":"CASCADE"},"name":{"seqType":"Sequelize.STRING(128)","allowNull":false,"unique":true},"amount":{"seqType":"Sequelize.DECIMAL","allowNull":false,"unique":false},"shortDescription":{"seqType":"Sequelize.TEXT","allowNull":false,"unique":true},"description":{"seqType":"Sequelize.TEXT","allowNull":false,"unique":true},"qtty":{"seqType":"Sequelize.DECIMAL","allowNull":false,"unique":true},"createdAt":{"seqType":"Sequelize.DATE","allowNull":false},"updatedAt":{"seqType":"Sequelize.DATE","allowNull":false},"deletedAt":{"seqType":"Sequelize.DATE"}},"indexes":{}},"product_image":{"tableName":"product_image","schema":{"id":{"seqType":"Sequelize.STRING(20)","allowNull":false,"primaryKey":true},"productId":{"seqType":"Sequelize.STRING","allowNull":true,"references":{"model":"product","key":"id"},"onUpdate":"CASCADE","onDelete":"CASCADE"},"productName":{"seqType":"Sequelize.STRING(255)","allowNull":false},"imageUrl":{"seqType":"Sequelize.STRING(255)","allowNull":false,"unique":true},"createdAt":{"seqType":"Sequelize.DATE","allowNull":false},"updatedAt":{"seqType":"Sequelize.DATE","allowNull":false},"deletedAt":{"seqType":"Sequelize.DATE"}},"indexes":{}},"productTag":{"tableName":"productTag","schema":{"productId":{"seqType":"Sequelize.STRING(20)","unique":"productTag_productId_tagId_unique","primaryKey":true,"references":{"model":"product","key":"id"},"onUpdate":"CASCADE","onDelete":"CASCADE"},"tagId":{"seqType":"Sequelize.STRING(20)","unique":"productTag_productId_tagId_unique","primaryKey":true,"references":{"model":"tag","key":"id"},"onUpdate":"CASCADE","onDelete":"CASCADE"},"createdAt":{"seqType":"Sequelize.DATE","allowNull":false},"updatedAt":{"seqType":"Sequelize.DATE","allowNull":false},"deletedAt":{"seqType":"Sequelize.DATE"}},"indexes":{}},"user-store":{"tableName":"user-store","schema":{"userId":{"seqType":"Sequelize.STRING(50)","unique":"user-store_storeId_userId_unique","primaryKey":true,"references":{"model":"user","key":"id"},"onUpdate":"CASCADE","onDelete":"CASCADE"},"storeId":{"seqType":"Sequelize.STRING(20)","unique":"user-store_storeId_userId_unique","primaryKey":true,"references":{"model":"store","key":"id"},"onUpdate":"CASCADE","onDelete":"CASCADE"},"createdAt":{"seqType":"Sequelize.DATE","allowNull":false},"updatedAt":{"seqType":"Sequelize.DATE","allowNull":false},"deletedAt":{"seqType":"Sequelize.DATE"}},"indexes":{}},"review":{"tableName":"review","schema":{"id":{"seqType":"Sequelize.STRING(50)","allowNull":false,"primaryKey":true},"productId":{"seqType":"Sequelize.STRING(50)","allowNull":false,"references":{"model":"product","key":"id"},"onUpdate":"CASCADE","onDelete":"CASCADE"},"userId":{"seqType":"Sequelize.STRING(50)","allowNull":false,"references":{"model":"user","key":"id"},"onUpdate":"CASCADE","onDelete":"CASCADE"},"comment":{"seqType":"Sequelize.TEXT","allowNull":false},"rating":{"seqType":"Sequelize.INTEGER","allowNull":false},"createdAt":{"seqType":"Sequelize.DATE","allowNull":false},"updatedAt":{"seqType":"Sequelize.DATE","allowNull":false},"deletedAt":{"seqType":"Sequelize.DATE"}},"indexes":{}},"banner":{"tableName":"banner","schema":{"id":{"seqType":"Sequelize.STRING(20)","allowNull":false,"primaryKey":true},"title":{"seqType":"Sequelize.STRING(255)","allowNull":false,"unique":true},"subTitle":{"seqType":"Sequelize.TEXT","allowNull":false},"image":{"seqType":"Sequelize.STRING(255)","allowNull":false},"userId":{"seqType":"Sequelize.STRING(128)","allowNull":false,"references":{"model":"user","key":"id"},"onUpdate":"CASCADE","onDelete":"NO ACTION"},"createdAt":{"seqType":"Sequelize.DATE","allowNull":false},"updatedAt":{"seqType":"Sequelize.DATE","allowNull":false},"deletedAt":{"seqType":"Sequelize.DATE"}},"indexes":{}},"order":{"tableName":"order","schema":{"id":{"seqType":"Sequelize.STRING(50)","allowNull":false,"primaryKey":true},"userId":{"seqType":"Sequelize.STRING(50)","allowNull":true},"totalQtty":{"seqType":"Sequelize.INTEGER","allowNull":false},"totalAmount":{"seqType":"Sequelize.DECIMAL","allowNull":false},"orderNo":{"seqType":"Sequelize.STRING(255)","allowNull":false,"unique":true},"username":{"seqType":"Sequelize.STRING(255)","allowNull":false},"adress":{"seqType":"Sequelize.STRING(255)","allowNull":false},"email":{"seqType":"Sequelize.STRING(255)","allowNull":false},"cellPhone":{"seqType":"Sequelize.STRING(255)","allowNull":false},"status":{"seqType":"Sequelize.STRING(10)","allowNull":false},"createdAt":{"seqType":"Sequelize.DATE","allowNull":false},"updatedAt":{"seqType":"Sequelize.DATE","allowNull":false},"deletedAt":{"seqType":"Sequelize.DATE"}},"indexes":{}},"payment":{"tableName":"payment","schema":{"id":{"seqType":"Sequelize.STRING(50)","allowNull":false,"primaryKey":true},"userId":{"seqType":"Sequelize.STRING(50)","allowNull":true,"references":{"model":"user","key":"id"},"onUpdate":"CASCADE","onDelete":"SET NULL"},"orderNo":{"seqType":"Sequelize.STRING(255)","allowNull":false,"unique":true},"amount":{"seqType":"Sequelize.DECIMAL","allowNull":false},"adress":{"seqType":"Sequelize.STRING(255)","allowNull":false},"email":{"seqType":"Sequelize.STRING(255)","allowNull":false},"cellPhone":{"seqType":"Sequelize.STRING(255)","allowNull":false},"status":{"seqType":"Sequelize.STRING(10)","allowNull":false},"createdAt":{"seqType":"Sequelize.DATE","allowNull":false},"updatedAt":{"seqType":"Sequelize.DATE","allowNull":false},"deletedAt":{"seqType":"Sequelize.DATE"}},"indexes":{}},"productOrder":{"tableName":"productOrder","schema":{"productId":{"seqType":"Sequelize.STRING(20)","unique":"productOrder_orderId_productId_unique","primaryKey":true,"references":{"model":"product","key":"id"},"onUpdate":"CASCADE","onDelete":"CASCADE"},"orderId":{"seqType":"Sequelize.STRING(50)","unique":"productOrder_orderId_productId_unique","primaryKey":true,"references":{"model":"order","key":"id"},"onUpdate":"CASCADE","onDelete":"CASCADE"},"createdAt":{"seqType":"Sequelize.DATE","allowNull":false},"updatedAt":{"seqType":"Sequelize.DATE","allowNull":false},"deletedAt":{"seqType":"Sequelize.DATE"}},"indexes":{}}}}'
            }],
            {}
        ]
    },




    {
        fn: "createTable",
        params: [
            "category",
            {
                "id": {
                    "primaryKey": true,
                    "allowNull": false,
                    "type": Sequelize.STRING(20)
                },
                "name": {
                    "unique": true,
                    "allowNull": false,
                    "type": Sequelize.STRING(50)
                },
                "slug": {
                    "unique": true,
                    "allowNull": false,
                    "type": Sequelize.STRING(128)
                },
                "description": {
                    "allowNull": false,
                    "type": Sequelize.TEXT
                },
                "createdAt": {
                    "allowNull": false,
                    "type": Sequelize.DATE
                },
                "updatedAt": {
                    "allowNull": false,
                    "type": Sequelize.DATE
                },
                "deletedAt": {
                    "type": Sequelize.DATE
                }
            },
            {}
        ]
    },

    {
        fn: "createTable",
        params: [
            "subCategory",
            {
                "id": {
                    "primaryKey": true,
                    "allowNull": false,
                    "type": Sequelize.STRING(20)
                },
                "name": {
                    "unique": true,
                    "allowNull": false,
                    "type": Sequelize.STRING(50)
                },
                "slug": {
                    "unique": true,
                    "allowNull": false,
                    "type": Sequelize.STRING(128)
                },
                "description": {
                    "allowNull": false,
                    "type": Sequelize.TEXT
                },
                "createdAt": {
                    "allowNull": false,
                    "type": Sequelize.DATE
                },
                "updatedAt": {
                    "allowNull": false,
                    "type": Sequelize.DATE
                },
                "deletedAt": {
                    "type": Sequelize.DATE
                }
            },
            {}
        ]
    },

    {
        fn: "createTable",
        params: [
            "tag",
            {
                "id": {
                    "primaryKey": true,
                    "allowNull": false,
                    "type": Sequelize.STRING(20)
                },
                "name": {
                    "unique": true,
                    "allowNull": false,
                    "type": Sequelize.STRING(50)
                },
                "createdAt": {
                    "allowNull": false,
                    "type": Sequelize.DATE
                },
                "updatedAt": {
                    "allowNull": false,
                    "type": Sequelize.DATE
                },
                "deletedAt": {
                    "type": Sequelize.DATE
                }
            },
            {}
        ]
    },

    {
        fn: "createTable",
        params: [
            "user",
            {
                "id": {
                    "primaryKey": true,
                    "allowNull": false,
                    "type": Sequelize.STRING(50)
                },
                "authStrategy": {
                    "allowNull": false,
                    "type": Sequelize.STRING(10)
                },
                "firstname": {
                    "allowNull": true,
                    "type": Sequelize.STRING(50)
                },
                "lastname": {
                    "allowNull": true,
                    "type": Sequelize.STRING(50)
                },
                "username": {
                    "unique": true,
                    "allowNull": false,
                    "type": Sequelize.STRING(50)
                },
                "avatar": {
                    "allowNull": true,
                    "type": Sequelize.STRING(255)
                },
                "email": {
                    "unique": true,
                    "allowNull": false,
                    "type": Sequelize.STRING(50)
                },
                "phoneNumber": {
                    "type": Sequelize.STRING(13)
                },
                "city": {
                    "allowNull": true,
                    "type": Sequelize.STRING(30)
                },
                "country": {
                    "allowNull": true,
                    "type": Sequelize.STRING(30)
                },
                "address": {
                    "allowNull": true,
                    "type": Sequelize.STRING(255)
                },
                "password": {
                    "unique": true,
                    "allowNull": true,
                    "type": Sequelize.STRING(255)
                },
                "verified": {
                    "type": Sequelize.BOOLEAN
                },
                "createdAt": {
                    "allowNull": false,
                    "type": Sequelize.DATE
                },
                "updatedAt": {
                    "allowNull": false,
                    "type": Sequelize.DATE
                },
                "deletedAt": {
                    "type": Sequelize.DATE
                }
            },
            {}
        ]
    },

    {
        fn: "createTable",
        params: [
            "role",
            {
                "id": {
                    "primaryKey": true,
                    "allowNull": false,
                    "type": Sequelize.STRING(20)
                },
                "name": {
                    "unique": true,
                    "allowNull": false,
                    "type": Sequelize.STRING(128)
                },
                "createdAt": {
                    "allowNull": false,
                    "type": Sequelize.DATE
                },
                "updatedAt": {
                    "allowNull": false,
                    "type": Sequelize.DATE
                },
                "deletedAt": {
                    "type": Sequelize.DATE
                }
            },
            {}
        ]
    },

    {
        fn: "createTable",
        params: [
            "store",
            {
                "id": {
                    "primaryKey": true,
                    "allowNull": false,
                    "type": Sequelize.STRING(20)
                },
                "userId": {
                    "allowNull": false,
                    "type": Sequelize.STRING(128)
                },
                "name": {
                    "unique": true,
                    "allowNull": false,
                    "type": Sequelize.STRING(50)
                },
                "location": {
                    "unique": false,
                    "allowNull": false,
                    "type": Sequelize.STRING(255)
                },
                "imageBannerUrl": {
                    "unique": true,
                    "allowNull": false,
                    "type": Sequelize.STRING(255)
                },
                "createdAt": {
                    "allowNull": false,
                    "type": Sequelize.DATE
                },
                "updatedAt": {
                    "allowNull": false,
                    "type": Sequelize.DATE
                },
                "deletedAt": {
                    "type": Sequelize.DATE
                }
            },
            {}
        ]
    },

    {
        fn: "createTable",
        params: [
            "order",
            {
                "id": {
                    "primaryKey": true,
                    "allowNull": false,
                    "type": Sequelize.STRING(50)
                },
                "userId": {
                    "allowNull": true,
                    "type": Sequelize.STRING(50)
                },
                "totalQtty": {
                    "allowNull": false,
                    "type": Sequelize.INTEGER
                },
                "totalAmount": {
                    "allowNull": false,
                    "type": Sequelize.DECIMAL
                },
                "orderNo": {
                    "unique": true,
                    "allowNull": false,
                    "type": Sequelize.STRING(255)
                },
                "username": {
                    "allowNull": false,
                    "type": Sequelize.STRING(255)
                },
                "adress": {
                    "allowNull": false,
                    "type": Sequelize.STRING(255)
                },
                "email": {
                    "allowNull": false,
                    "type": Sequelize.STRING(255)
                },
                "cellPhone": {
                    "allowNull": false,
                    "type": Sequelize.STRING(255)
                },
                "status": {
                    "allowNull": false,
                    "type": Sequelize.STRING(10)
                },
                "createdAt": {
                    "allowNull": false,
                    "type": Sequelize.DATE
                },
                "updatedAt": {
                    "allowNull": false,
                    "type": Sequelize.DATE
                },
                "deletedAt": {
                    "type": Sequelize.DATE
                }
            },
            {}
        ]
    },

    {
        fn: "createTable",
        params: [
            "user-role",
            {
                "userId": {
                    "onDelete": "CASCADE",
                    "onUpdate": "CASCADE",
                    "references": {
                        "model": "user",
                        "key": "id"
                    },
                    "primaryKey": true,
                    "unique": "user-role_roleId_userId_unique",
                    "type": Sequelize.STRING(50)
                },
                "roleId": {
                    "onDelete": "CASCADE",
                    "onUpdate": "CASCADE",
                    "references": {
                        "model": "role",
                        "key": "id"
                    },
                    "primaryKey": true,
                    "unique": "user-role_roleId_userId_unique",
                    "type": Sequelize.STRING(20)
                },
                "createdAt": {
                    "allowNull": false,
                    "type": Sequelize.DATE
                },
                "updatedAt": {
                    "allowNull": false,
                    "type": Sequelize.DATE
                },
                "deletedAt": {
                    "type": Sequelize.DATE
                }
            },
            {}
        ]
    },

    {
        fn: "createTable",
        params: [
            "post",
            {
                "id": {
                    "primaryKey": true,
                    "allowNull": false,
                    "type": Sequelize.STRING(20)
                },
                "title": {
                    "allowNull": false,
                    "type": Sequelize.STRING(128)
                },
                "slug": {
                    "unique": true,
                    "allowNull": false,
                    "type": Sequelize.STRING(128)
                },
                "content": {
                    "allowNull": false,
                    "type": Sequelize.TEXT
                },
                "imageUrl": {
                    "allowNull": false,
                    "type": Sequelize.STRING(128)
                },
                "publishedAt": {
                    "type": Sequelize.DATE
                },
                "authorId": {
                    "onDelete": "NO ACTION",
                    "onUpdate": "CASCADE",
                    "references": {
                        "model": "user",
                        "key": "id"
                    },
                    "allowNull": false,
                    "type": Sequelize.STRING(128)
                },
                "categoryId": {
                    "onDelete": "NO ACTION",
                    "onUpdate": "CASCADE",
                    "references": {
                        "model": "category",
                        "key": "id"
                    },
                    "allowNull": false,
                    "type": Sequelize.STRING(128)
                },
                "createdAt": {
                    "allowNull": false,
                    "type": Sequelize.DATE
                },
                "updatedAt": {
                    "allowNull": false,
                    "type": Sequelize.DATE
                },
                "deletedAt": {
                    "type": Sequelize.DATE
                }
            },
            {}
        ]
    },

    {
        fn: "createTable",
        params: [
            "document",
            {
                "id": {
                    "primaryKey": true,
                    "allowNull": false,
                    "type": Sequelize.STRING(20)
                },
                "title": {
                    "allowNull": false,
                    "type": Sequelize.STRING(128)
                },
                "slug": {
                    "unique": true,
                    "allowNull": false,
                    "type": Sequelize.STRING(128)
                },
                "description": {
                    "allowNull": false,
                    "type": Sequelize.TEXT
                },
                "fileUrl": {
                    "allowNull": false,
                    "type": Sequelize.STRING(128)
                },
                "uploadDate": {
                    "allowNull": false,
                    "type": Sequelize.DATE
                },
                "userId": {
                    "onDelete": "NO ACTION",
                    "onUpdate": "CASCADE",
                    "references": {
                        "model": "user",
                        "key": "id"
                    },
                    "allowNull": false,
                    "type": Sequelize.STRING(128)
                },
                "categoryId": {
                    "onDelete": "NO ACTION",
                    "onUpdate": "CASCADE",
                    "references": {
                        "model": "category",
                        "key": "id"
                    },
                    "allowNull": false,
                    "type": Sequelize.STRING(128)
                },
                "createdAt": {
                    "allowNull": false,
                    "type": Sequelize.DATE
                },
                "updatedAt": {
                    "allowNull": false,
                    "type": Sequelize.DATE
                },
                "deletedAt": {
                    "type": Sequelize.DATE
                }
            },
            {}
        ]
    },

    {
        fn: "createTable",
        params: [
            "comment",
            {
                "id": {
                    "primaryKey": true,
                    "allowNull": false,
                    "type": Sequelize.STRING(20)
                },
                "content": {
                    "allowNull": false,
                    "type": Sequelize.TEXT
                },
                "userId": {
                    "onDelete": "NO ACTION",
                    "onUpdate": "CASCADE",
                    "references": {
                        "model": "user",
                        "key": "id"
                    },
                    "allowNull": false,
                    "type": Sequelize.STRING(128)
                },
                "postId": {
                    "onDelete": "CASCADE",
                    "onUpdate": "CASCADE",
                    "references": {
                        "model": "post",
                        "key": "id"
                    },
                    "allowNull": false,
                    "type": Sequelize.STRING(128)
                },
                "publishedAt": {
                    "type": Sequelize.DATE
                },
                "parent_id": {
                    "onDelete": "NO ACTION",
                    "onUpdate": "CASCADE",
                    "references": {
                        "model": "comment",
                        "key": "id"
                    },
                    "allowNull": true,
                    "type": Sequelize.STRING
                },
                "createdAt": {
                    "allowNull": false,
                    "type": Sequelize.DATE
                },
                "updatedAt": {
                    "allowNull": false,
                    "type": Sequelize.DATE
                },
                "deletedAt": {
                    "type": Sequelize.DATE
                }
            },
            {}
        ]
    },

    {
        fn: "createTable",
        params: [
            "postTag",
            {
                "postId": {
                    "onDelete": "CASCADE",
                    "onUpdate": "CASCADE",
                    "references": {
                        "model": "post",
                        "key": "id"
                    },
                    "primaryKey": true,
                    "unique": "postTag_postId_tagId_unique",
                    "type": Sequelize.STRING(20)
                },
                "tagId": {
                    "onDelete": "CASCADE",
                    "onUpdate": "CASCADE",
                    "references": {
                        "model": "tag",
                        "key": "id"
                    },
                    "primaryKey": true,
                    "unique": "postTag_postId_tagId_unique",
                    "type": Sequelize.STRING(20)
                },
                "createdAt": {
                    "allowNull": false,
                    "type": Sequelize.DATE
                },
                "updatedAt": {
                    "allowNull": false,
                    "type": Sequelize.DATE
                },
                "deletedAt": {
                    "type": Sequelize.DATE
                }
            },
            {}
        ]
    },

    {
        fn: "createTable",
        params: [
            "documentTag",
            {
                "documentId": {
                    "onDelete": "CASCADE",
                    "onUpdate": "CASCADE",
                    "references": {
                        "model": "document",
                        "key": "id"
                    },
                    "primaryKey": true,
                    "unique": "documentTag_documentId_tagId_unique",
                    "type": Sequelize.STRING(20)
                },
                "tagId": {
                    "onDelete": "CASCADE",
                    "onUpdate": "CASCADE",
                    "references": {
                        "model": "tag",
                        "key": "id"
                    },
                    "primaryKey": true,
                    "unique": "documentTag_documentId_tagId_unique",
                    "type": Sequelize.STRING(20)
                },
                "createdAt": {
                    "allowNull": false,
                    "type": Sequelize.DATE
                },
                "updatedAt": {
                    "allowNull": false,
                    "type": Sequelize.DATE
                },
                "deletedAt": {
                    "type": Sequelize.DATE
                }
            },
            {}
        ]
    },

    {
        fn: "createTable",
        params: [
            "user_doc",
            {
                "id": {
                    "primaryKey": true,
                    "allowNull": false,
                    "type": Sequelize.STRING(20)
                },
                "userId": {
                    "onDelete": "CASCADE",
                    "onUpdate": "CASCADE",
                    "references": {
                        "model": "user",
                        "key": "id"
                    },
                    "allowNull": true,
                    "type": Sequelize.STRING
                },
                "scannedIdCard": {
                    "unique": true,
                    "allowNull": false,
                    "type": Sequelize.STRING(128)
                },
                "scannedLiscence": {
                    "unique": true,
                    "allowNull": false,
                    "type": Sequelize.STRING(128)
                },
                "createdAt": {
                    "allowNull": false,
                    "type": Sequelize.DATE
                },
                "updatedAt": {
                    "allowNull": false,
                    "type": Sequelize.DATE
                },
                "deletedAt": {
                    "type": Sequelize.DATE
                }
            },
            {}
        ]
    },

    {
        fn: "createTable",
        params: [
            "branch",
            {
                "id": {
                    "primaryKey": true,
                    "allowNull": false,
                    "type": Sequelize.STRING(20)
                },
                "storeId": {
                    "onDelete": "NO ACTION",
                    "onUpdate": "CASCADE",
                    "references": {
                        "model": "store",
                        "key": "id"
                    },
                    "allowNull": true,
                    "type": Sequelize.STRING
                },
                "name": {
                    "unique": true,
                    "allowNull": false,
                    "type": Sequelize.STRING(128)
                },
                "town": {
                    "allowNull": false,
                    "type": Sequelize.STRING(128)
                },
                "address": {
                    "allowNull": false,
                    "type": Sequelize.STRING(255)
                },
                "createdAt": {
                    "allowNull": false,
                    "type": Sequelize.DATE
                },
                "updatedAt": {
                    "allowNull": false,
                    "type": Sequelize.DATE
                },
                "deletedAt": {
                    "type": Sequelize.DATE
                }
            },
            {}
        ]
    },

    {
        fn: "createTable",
        params: [
            "product",
            {
                "id": {
                    "primaryKey": true,
                    "allowNull": false,
                    "type": Sequelize.STRING(20)
                },
                "categoryId": {
                    "onDelete": "NO ACTION",
                    "onUpdate": "CASCADE",
                    "references": {
                        "model": "category",
                        "key": "id"
                    },
                    "allowNull": false,
                    "type": Sequelize.STRING(50)
                },
                "storeId": {
                    "onDelete": "CASCADE",
                    "onUpdate": "CASCADE",
                    "references": {
                        "model": "store",
                        "key": "id"
                    },
                    "allowNull": true,
                    "type": Sequelize.STRING
                },
                "name": {
                    "unique": true,
                    "allowNull": false,
                    "type": Sequelize.STRING(128)
                },
                "amount": {
                    "unique": false,
                    "allowNull": false,
                    "type": Sequelize.DECIMAL
                },
                "shortDescription": {
                    "unique": true,
                    "allowNull": false,
                    "type": Sequelize.TEXT
                },
                "description": {
                    "unique": true,
                    "allowNull": false,
                    "type": Sequelize.TEXT
                },
                "qtty": {
                    "unique": true,
                    "allowNull": false,
                    "type": Sequelize.DECIMAL
                },
                "createdAt": {
                    "allowNull": false,
                    "type": Sequelize.DATE
                },
                "updatedAt": {
                    "allowNull": false,
                    "type": Sequelize.DATE
                },
                "deletedAt": {
                    "type": Sequelize.DATE
                }
            },
            {}
        ]
    },

    {
        fn: "createTable",
        params: [
            "product_image",
            {
                "id": {
                    "primaryKey": true,
                    "allowNull": false,
                    "type": Sequelize.STRING(20)
                },
                "productId": {
                    "onDelete": "CASCADE",
                    "onUpdate": "CASCADE",
                    "references": {
                        "model": "product",
                        "key": "id"
                    },
                    "allowNull": true,
                    "type": Sequelize.STRING
                },
                "productName": {
                    "allowNull": false,
                    "type": Sequelize.STRING(255)
                },
                "imageUrl": {
                    "unique": true,
                    "allowNull": false,
                    "type": Sequelize.STRING(255)
                },
                "createdAt": {
                    "allowNull": false,
                    "type": Sequelize.DATE
                },
                "updatedAt": {
                    "allowNull": false,
                    "type": Sequelize.DATE
                },
                "deletedAt": {
                    "type": Sequelize.DATE
                }
            },
            {}
        ]
    },

    {
        fn: "createTable",
        params: [
            "productTag",
            {
                "productId": {
                    "onDelete": "CASCADE",
                    "onUpdate": "CASCADE",
                    "references": {
                        "model": "product",
                        "key": "id"
                    },
                    "primaryKey": true,
                    "unique": "productTag_productId_tagId_unique",
                    "type": Sequelize.STRING(20)
                },
                "tagId": {
                    "onDelete": "CASCADE",
                    "onUpdate": "CASCADE",
                    "references": {
                        "model": "tag",
                        "key": "id"
                    },
                    "primaryKey": true,
                    "unique": "productTag_productId_tagId_unique",
                    "type": Sequelize.STRING(20)
                },
                "createdAt": {
                    "allowNull": false,
                    "type": Sequelize.DATE
                },
                "updatedAt": {
                    "allowNull": false,
                    "type": Sequelize.DATE
                },
                "deletedAt": {
                    "type": Sequelize.DATE
                }
            },
            {}
        ]
    },

    {
        fn: "createTable",
        params: [
            "user-store",
            {
                "userId": {
                    "onDelete": "CASCADE",
                    "onUpdate": "CASCADE",
                    "references": {
                        "model": "user",
                        "key": "id"
                    },
                    "primaryKey": true,
                    "unique": "user-store_storeId_userId_unique",
                    "type": Sequelize.STRING(50)
                },
                "storeId": {
                    "onDelete": "CASCADE",
                    "onUpdate": "CASCADE",
                    "references": {
                        "model": "store",
                        "key": "id"
                    },
                    "primaryKey": true,
                    "unique": "user-store_storeId_userId_unique",
                    "type": Sequelize.STRING(20)
                },
                "createdAt": {
                    "allowNull": false,
                    "type": Sequelize.DATE
                },
                "updatedAt": {
                    "allowNull": false,
                    "type": Sequelize.DATE
                },
                "deletedAt": {
                    "type": Sequelize.DATE
                }
            },
            {}
        ]
    },

    {
        fn: "createTable",
        params: [
            "review",
            {
                "id": {
                    "primaryKey": true,
                    "allowNull": false,
                    "type": Sequelize.STRING(50)
                },
                "productId": {
                    "onDelete": "CASCADE",
                    "onUpdate": "CASCADE",
                    "references": {
                        "model": "product",
                        "key": "id"
                    },
                    "allowNull": false,
                    "type": Sequelize.STRING(50)
                },
                "userId": {
                    "onDelete": "CASCADE",
                    "onUpdate": "CASCADE",
                    "references": {
                        "model": "user",
                        "key": "id"
                    },
                    "allowNull": false,
                    "type": Sequelize.STRING(50)
                },
                "comment": {
                    "allowNull": false,
                    "type": Sequelize.TEXT
                },
                "rating": {
                    "allowNull": false,
                    "type": Sequelize.INTEGER
                },
                "createdAt": {
                    "allowNull": false,
                    "type": Sequelize.DATE
                },
                "updatedAt": {
                    "allowNull": false,
                    "type": Sequelize.DATE
                },
                "deletedAt": {
                    "type": Sequelize.DATE
                }
            },
            {}
        ]
    },

    {
        fn: "createTable",
        params: [
            "banner",
            {
                "id": {
                    "primaryKey": true,
                    "allowNull": false,
                    "type": Sequelize.STRING(20)
                },
                "title": {
                    "unique": true,
                    "allowNull": false,
                    "type": Sequelize.STRING(255)
                },
                "subTitle": {
                    "allowNull": false,
                    "type": Sequelize.TEXT
                },
                "image": {
                    "allowNull": false,
                    "type": Sequelize.STRING(255)
                },
                "userId": {
                    "onDelete": "NO ACTION",
                    "onUpdate": "CASCADE",
                    "references": {
                        "model": "user",
                        "key": "id"
                    },
                    "allowNull": false,
                    "type": Sequelize.STRING(128)
                },
                "createdAt": {
                    "allowNull": false,
                    "type": Sequelize.DATE
                },
                "updatedAt": {
                    "allowNull": false,
                    "type": Sequelize.DATE
                },
                "deletedAt": {
                    "type": Sequelize.DATE
                }
            },
            {}
        ]
    },

    {
        fn: "createTable",
        params: [
            "payment",
            {
                "id": {
                    "primaryKey": true,
                    "allowNull": false,
                    "type": Sequelize.STRING(50)
                },
                "userId": {
                    "onDelete": "SET NULL",
                    "onUpdate": "CASCADE",
                    "references": {
                        "model": "user",
                        "key": "id"
                    },
                    "allowNull": true,
                    "type": Sequelize.STRING(50)
                },
                "orderNo": {
                    "unique": true,
                    "allowNull": false,
                    "type": Sequelize.STRING(255)
                },
                "amount": {
                    "allowNull": false,
                    "type": Sequelize.DECIMAL
                },
                "adress": {
                    "allowNull": false,
                    "type": Sequelize.STRING(255)
                },
                "email": {
                    "allowNull": false,
                    "type": Sequelize.STRING(255)
                },
                "cellPhone": {
                    "allowNull": false,
                    "type": Sequelize.STRING(255)
                },
                "status": {
                    "allowNull": false,
                    "type": Sequelize.STRING(10)
                },
                "createdAt": {
                    "allowNull": false,
                    "type": Sequelize.DATE
                },
                "updatedAt": {
                    "allowNull": false,
                    "type": Sequelize.DATE
                },
                "deletedAt": {
                    "type": Sequelize.DATE
                }
            },
            {}
        ]
    },

    {
        fn: "createTable",
        params: [
            "productOrder",
            {
                "productId": {
                    "onDelete": "CASCADE",
                    "onUpdate": "CASCADE",
                    "references": {
                        "model": "product",
                        "key": "id"
                    },
                    "primaryKey": true,
                    "unique": "productOrder_orderId_productId_unique",
                    "type": Sequelize.STRING(20)
                },
                "orderId": {
                    "onDelete": "CASCADE",
                    "onUpdate": "CASCADE",
                    "references": {
                        "model": "order",
                        "key": "id"
                    },
                    "primaryKey": true,
                    "unique": "productOrder_orderId_productId_unique",
                    "type": Sequelize.STRING(50)
                },
                "createdAt": {
                    "allowNull": false,
                    "type": Sequelize.DATE
                },
                "updatedAt": {
                    "allowNull": false,
                    "type": Sequelize.DATE
                },
                "deletedAt": {
                    "type": Sequelize.DATE
                }
            },
            {}
        ]
    }
];

const rollbackCommands = [

    {
        fn: "bulkDelete",
        params: [
            "SequelizeMigrationsMeta",
            [{
                revision: info.revision,
            }],
            {}
        ]
    },



    {
        fn: "dropTable",
        params: ["user-role"]
    },
    {
        fn: "dropTable",
        params: ["post"]
    },
    {
        fn: "dropTable",
        params: ["document"]
    },
    {
        fn: "dropTable",
        params: ["comment"]
    },
    {
        fn: "dropTable",
        params: ["postTag"]
    },
    {
        fn: "dropTable",
        params: ["documentTag"]
    },
    {
        fn: "dropTable",
        params: ["user_doc"]
    },
    {
        fn: "dropTable",
        params: ["branch"]
    },
    {
        fn: "dropTable",
        params: ["product"]
    },
    {
        fn: "dropTable",
        params: ["product_image"]
    },
    {
        fn: "dropTable",
        params: ["productTag"]
    },
    {
        fn: "dropTable",
        params: ["user-store"]
    },
    {
        fn: "dropTable",
        params: ["review"]
    },
    {
        fn: "dropTable",
        params: ["banner"]
    },
    {
        fn: "dropTable",
        params: ["payment"]
    },
    {
        fn: "dropTable",
        params: ["productOrder"]
    },
    {
        fn: "dropTable",
        params: ["category"]
    },
    {
        fn: "dropTable",
        params: ["subCategory"]
    },
    {
        fn: "dropTable",
        params: ["tag"]
    },
    {
        fn: "dropTable",
        params: ["user"]
    },
    {
        fn: "dropTable",
        params: ["role"]
    },
    {
        fn: "dropTable",
        params: ["store"]
    },
    {
        fn: "dropTable",
        params: ["order"]
    }
];

module.exports = {
  pos: 0,
  up: function(queryInterface, Sequelize) {
    let index = this.pos;

    return new Promise(function(resolve, reject) {
      function next() {
        if (index < migrationCommands.length) {
          let command = migrationCommands[index];
          console.log("[#"+index+"] execute: " + command.fn);
          index++;
          queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
        } else resolve();
      }

      next();
    });
  },
  down: function(queryInterface, Sequelize) {
    let index = this.pos;

    return new Promise(function(resolve, reject) {
      function next() {
        if (index < rollbackCommands.length) {
          let command = rollbackCommands[index];
          console.log("[#"+index+"] execute: " + command.fn);
          index++;
          queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
        }
        else resolve();
      }

      next();
    });
  },
  info
};
