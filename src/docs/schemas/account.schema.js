```js
/**
 * @swagger
 * components:
 *   schemas:
 *
 *     Account:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: "65f123abc456def789"
 *
 *         user:
 *           type: string
 *           description: ID of the user who owns the account
 *           example: "65f111abc456def789"
 *
 *         status:
 *           type: string
 *           enum:
 *             - ACTIVE
 *             - FROZEN
 *             - CLOSED
 *           example: ACTIVE
 *
 *         currency:
 *           type: string
 *           example: "BDT"
 *
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: "2026-08-08T12:00:00.000Z"
 *
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           example: "2026-08-08T12:00:00.000Z"
 *
 *
 *     CreateAccountResponse:
 *       type: object
 *       properties:
 *         account:
 *           $ref: "#/components/schemas/Account"
 *
 *
 *     AccountBalance:
 *       type: object
 *       properties:
 *         accountId:
 *           type: string
 *           example: "65f123abc456def789"
 *
 *         balance:
 *           type: number
 *           example: 15000
 */
```
