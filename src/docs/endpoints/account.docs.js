```js
/**
 * @swagger
 * /accounts:
 *   post:
 *     summary: Create a new account
 *     description: Create a new account for the currently authenticated user.
 *     tags:
 *       - Accounts
 *
 *     security:
 *       - cookieAuth: []
 *       - bearerAuth: []
 *
 *     responses:
 *       201:
 *         description: Account created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/CreateAccountResponse"
 *
 *       401:
 *         description: Unauthorized
 */


/**
 * @swagger
 * /accounts:
 *   get:
 *     summary: Get user's accounts
 *     description: Get all accounts belonging to the currently authenticated user.
 *     tags:
 *       - Accounts
 *
 *     security:
 *       - cookieAuth: []
 *       - bearerAuth: []
 *
 *     responses:
 *       200:
 *         description: Accounts retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 accounts:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/Account"
 *
 *       401:
 *         description: Unauthorized
 */


/**
 * @swagger
 * /accounts/balance/{accountId}:
 *   get:
 *     summary: Get account balance
 *     description: Get the current balance of an account belonging to the authenticated user.
 *     tags:
 *       - Accounts
 *
 *     security:
 *       - cookieAuth: []
 *       - bearerAuth: []
 *
 *     parameters:
 *       - in: path
 *         name: accountId
 *         required: true
 *         description: ID of the account
 *         schema:
 *           type: string
 *         example: "65f123abc456def789"
 *
 *     responses:
 *       200:
 *         description: Account balance retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/AccountBalance"
 *
 *       401:
 *         description: Unauthorized
 *
 *       404:
 *         description: Account not found
 */
```
