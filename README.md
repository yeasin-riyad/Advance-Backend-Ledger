# 🏦 Banking Backend System (Node.js + Express)

A production-style backend system that simulates how real-world banking applications work — including authentication, account management, transactions, and ledger-based accounting.

---

## 🚀 Overview

This project is designed to help you understand:

* How secure authentication works in banking systems
* How accounts are managed and validated
* How transactions (credit/debit) are processed safely
* How ledger systems ensure consistency and traceability
* How real-world backend architecture is structured

---

## 🌐 Live Backend

👉 https://advance-backend-ledger.onrender.com/api-docs

---

## 🧩 Core Features

### 🔐 Authentication & Authorization

* JWT-based authentication
* Secure login & registration
* Token blacklist system with TTL index
* Protected routes using middleware

### 👤 Account Management

* Create and manage user accounts
* Account status handling
* Balance management
* User-specific account access

### 💸 Transactions System

* Transfer money between accounts
* Idempotency key support to prevent duplicate transactions
* Transaction status handling:

  * PENDING
  * COMPLETED
  * FAILED
  * REVERSED
* System-user initial funds transaction

### 📒 Ledger System

Every transaction creates corresponding ledger entries:

* DEBIT entry for the sender
* CREDIT entry for the receiver

This provides:

* Auditability
* Data consistency
* Financial traceability

### ⚡ Concurrency & Safety

* MongoDB Transactions
* ACID-compliant transaction processing
* Atomic transaction workflow
* Idempotency protection
* Prevention of duplicate transactions

---

## 🏗️ Project Architecture

```text
Client
   ↓
Express API
   ↓
Routes
   ↓
Controllers
   ↓
Services
   ↓
Models (Mongoose)
   ↓
MongoDB
```

---

## 🔄 Transaction Flow (End-to-End)

1. User sends transaction request
2. Validate request
3. Validate idempotency key
4. Validate source and destination accounts
5. Check account status
6. Derive sender balance from ledger
7. Create transaction with `PENDING` status
8. Create `DEBIT` ledger entry
9. Create `CREDIT` ledger entry
10. Mark transaction as `COMPLETED`
11. Commit MongoDB transaction
12. Send notification/email

---

## 🛡️ Security Features

* JWT verification middleware
* Token blacklist with automatic expiry
* Idempotency protection
* Input validation
* Account ownership verification
* Account status verification
* Protected system-user operations

---

## 🗂️ Folder Structure

```text
project-root/
│
├── controllers/      # Request handlers
├── models/           # Mongoose schemas
├── routes/           # API routes
├── middleware/       # Authentication & authorization
├── services/         # Business logic
├── utils/            # Helper functions
├── config/           # Database & environment configuration
├── docs/             # Swagger API documentation
└── server.js         # Entry point
```

---

## 📚 API Documentation

Swagger API documentation is available at:

```text
/api-docs
```

Local:

```text
http://localhost:5000/api-docs
```

The API documentation covers:

* Authentication
* Account management
* Transactions
* Initial funds
* Request/response schemas
* JWT authentication

---

## ⚙️ Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* Swagger / OpenAPI
* bcrypt.js

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yeasin-riyad/Advance-Backend-Ledger.git

# Navigate into the project
cd Advance-Backend-Ledger

# Install dependencies
npm install

# Run development server
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

---

## 👤 Demo System User

The project includes a **System User** that can be used for testing system-level initial fund transactions.

> ⚠️ These credentials should only be used for development/demo purposes. Never expose real production credentials in a public repository.

```json
{
  "email": "systemuser@gmail.com",
  "password": "password123"
}
```

### System User Endpoint

```http
POST /api/transactions/system/initial-funds
```

Example request:

```json
{
  "toAccount": "accountId",
  "amount": 10000,
  "idempotencyKey": "initial-funds-001"
}
```

This endpoint transfers funds from the system user's account to the specified account.

---

## 🧪 API Example

### ➤ Create Transaction

```http
POST /api/transactions
```

Request body:

```json
{
  "fromAccount": "accountId1",
  "toAccount": "accountId2",
  "amount": 1000,
  "idempotencyKey": "unique-key-123"
}
```

Example successful response:

```json
{
  "message": "Transaction completed successfully",
  "transaction": {
    "_id": "transactionId",
    "fromAccount": "accountId1",
    "toAccount": "accountId2",
    "amount": 1000,
    "status": "COMPLETED",
    "idempotencyKey": "unique-key-123"
  }
}
```

---

## 📌 Key Concepts Implemented

* Idempotency in financial systems
* Ledger-based accounting
* ACID transactions with MongoDB
* Immutable ledger entries
* TTL Index for automatic token blacklist cleanup
* JWT authentication
* Protected routes
* Account ownership validation
* System-user transactions

---

## 🎯 Future Improvements

* Redis caching
* Distributed locks
* Message queues (BullMQ / RabbitMQ)
* Microservices architecture
* Fraud detection system
* Rate limiting
* Advanced transaction monitoring
* Audit logging
* Automated testing

---

## 👨‍💻 Author

**Md. Yeasin Mazumder**

Backend Developer | Full-Stack Enthusiast | Problem Solver

GitHub: https://github.com/yeasin-riyad
