```js
/**
 * @swagger
 * /transactions:
 *   post:
 *     summary: Create a new transaction
 *     description: >
 *       Transfer money from one account to another account.
 *       The transaction uses an idempotency key to prevent duplicate processing.
 *       Both accounts must be ACTIVE and the sender must have sufficient balance.
 *
 *     tags:
 *       - Transactions
 *
 *     security:
 *       - cookieAuth: []
 *       - bearerAuth: []
 *
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/CreateTransactionRequest"
 *
 *     responses:
 *       201:
 *         description: Transaction completed successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/TransactionResponse"
 *
 *       200:
 *         description: Transaction was already processed or is currently processing.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Transaction already processed"
 *                 transaction:
 *                   $ref: "#/components/schemas/Transaction"
 *
 *       400:
 *         description: Invalid request, invalid accounts, inactive accounts, insufficient balance, or transaction processing issue.
 *
 *       401:
 *         description: Unauthorized.
 *
 *       500:
 *         description: Transaction processing failed or transaction was reversed.
 */


/**
 * @swagger
 * /transactions/system/initial-funds:
 *   post:
 *     summary: Create initial funds transaction
 *     description: >
 *       Transfer initial funds from the system user's account
 *       to another user's account.
 *       This endpoint is restricted to system users.
 *
 *     tags:
 *       - Transactions
 *
 *     security:
 *       - cookieAuth: []
 *       - bearerAuth: []
 *
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/CreateInitialFundsRequest"
 *
 *     responses:
 *       201:
 *         description: Initial funds transaction completed successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Initial funds transaction completed successfully"
 *
 *                 transaction:
 *                   $ref: "#/components/schemas/Transaction"
 *
 *       400:
 *         description: Invalid request, invalid destination account, or system user account not found.
 *
 *       401:
 *         description: Unauthorized.
 *
 *       403:
 *         description: User is not authorized as a system user.
 */
```
