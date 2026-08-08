/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     description: Create a new user account and return a JWT token.
 *     tags:
 *       - Auth
 *
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/RegisterRequest"
 *
 *     responses:
 *       201:
 *         description: User registered successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/AuthResponse"
 *
 *       422:
 *         description: User already exists with the provided email.
 *
 *       400:
 *         description: Invalid request data.
 */


/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login user
 *     description: Authenticate a user using email and password.
 *     tags:
 *       - Auth
 *
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/LoginRequest"
 *
 *     responses:
 *       200:
 *         description: User logged in successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/AuthResponse"
 *
 *       401:
 *         description: Email or password is invalid.
 */


/**
 * @swagger
 * /auth/logout:
 *   post:
 *     summary: Logout user
 *     description: Logout the current user and blacklist the JWT token.
 *     tags:
 *       - Auth
 *
 *     security:
 *       - cookieAuth: []
 *       - bearerAuth: []
 *
 *     responses:
 *       200:
 *         description: User logged out successfully.
 *
 *       401:
 *         description: Unauthorized.
 */