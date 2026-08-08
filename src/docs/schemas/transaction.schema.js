```js
/**
 * @swagger
 * components:
 *   schemas:
 *
 *     Transaction:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: "66a123abc456def789"
 *
 *         fromAccount:
 *           type: string
 *           description: ID of the source account
 *           example: "65f123abc456def789"
 *
 *         toAccount:
 *           type: string
 *           description: ID of the destination account
 *           example: "65f456abc456def789"
 *
 *         status:
 *           type: string
 *           enum:
 *             - PENDING
 *             - COMPLETED
 *             - FAILED
 *             - REVERSED
 *           example: COMPLETED
 *
 *         amount:
 *           type: number
 *           minimum: 0
 *           example: 500
 *
 *         idempotencyKey:
 *           type: string
 *           description: Unique key used to prevent duplicate transactions
 *           example: "txn_20260808_001"
 *
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: "2026-08-08T14:30:00.000Z"
 *
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           example: "2026-08-08T14:30:00.000Z"
 *
 *
 *     CreateTransactionRequest:
 *       type: object
 *       required:
 *         - fromAccount
 *         - toAccount
 *         - amount
 *         - idempotencyKey
 *       properties:
 *         fromAccount:
 *           type: string
 *           description: ID of the account from which money will be transferred
 *           example: "65f123abc456def789"
 *
 *         toAccount:
 *           type: string
 *           description: ID of the account receiving the money
 *           example: "65f456abc456def789"
 *
 *         amount:
 *           type: number
 *           minimum: 0
 *           description: Amount to transfer
 *           example: 500
 *
 *         idempotencyKey:
 *           type: string
 *           description: Unique key to prevent duplicate transaction processing
 *           example: "txn_20260808_001"
 *
 *
 *     CreateInitialFundsRequest:
 *       type: object
 *       required:
 *         - toAccount
 *         - amount
 *         - idempotencyKey
 *       properties:
 *         toAccount:
 *           type: string
 *           description: ID of the account receiving the initial funds
 *           example: "65f456abc456def789"
 *
 *         amount:
 *           type: number
 *           minimum: 0
 *           description: Amount of initial funds
 *           example: 10000
 *
 *         idempotencyKey:
 *           type: string
 *           description: Unique key to prevent duplicate initial-funds transactions
 *           example: "initial_funds_20260808_001"
 *
 *
 *     TransactionResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           example: "Transaction completed successfully"
 *
 *         transaction:
 *           $ref: "#/components/schemas/Transaction"
 */
```
