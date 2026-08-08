```js
/**
 * @swagger
 * components:
 *   schemas:
 *
 *     RegisterRequest:
 *       type: object
 *       required:
 *         - email
 *         - password
 *         - name
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           example: "yeasin@example.com"
 *
 *         password:
 *           type: string
 *           format: password
 *           minLength: 6
 *           example: "password123"
 *
 *         name:
 *           type: string
 *           example: "Yeasin Mazumder"
 *
 *
 *     LoginRequest:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           example: "yeasin@example.com"
 *
 *         password:
 *           type: string
 *           format: password
 *           example: "password123"
 *
 *
 *     AuthResponse:
 *       type: object
 *       properties:
 *         user:
 *           $ref: "#/components/schemas/User"
 *
 *         token:
 *           type: string
 *           example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 */
```
