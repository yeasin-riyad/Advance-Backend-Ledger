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

## 🧩 Core Features

### 🔐 Authentication & Authorization

* JWT-based authentication
* Secure login & registration
* Token blacklist system (with TTL index)
* Protected routes using middleware

### 👤 Account Management

* Create and manage user accounts
* Account status handling (ACTIVE / INACTIVE / BLOCKED)
* Balance management

### 💸 Transactions System

* Transfer money between accounts
* Idempotency key support (prevents duplicate transactions)
* Transaction status handling:

  * PENDING
  * COMPLETED
  * FAILED
  * REVERSED

### 📒 Ledger System

* Every transaction recorded as:

  * DEBIT entry (sender)
  * CREDIT entry (receiver)
* Ensures:

  * Auditability
  * Data consistency
  * Financial traceability

### ⚡ Concurrency & Safety

* MongoDB Transactions (ACID compliance)
* Atomic balance updates
* Prevention of race conditions

---

## 🏗️ Project Architecture

```
Client → API (Express)
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
2. Validate request (accounts, amount, idempotency key)
3. Check for duplicate transaction
4. Start database transaction (session)
5. Debit sender account
6. Credit receiver account
7. Create ledger entries
8. Mark transaction as COMPLETED
9. Commit transaction
10. Send notification/email

---

## 🛡️ Security Features

* JWT verification middleware
* Token blacklist with auto-expiry
* Idempotency protection
* Input validation
* Account status verification

---

## 🗂️ Folder Structure

```
project-root/
│
├── controllers/      # Request handlers
├── models/           # Mongoose schemas
├── routes/           # API routes
├── middlewares/      # Auth & validation
├── services/         # Business logic
├── utils/            # Helper functions
├── config/           # DB & environment config
└── server.js         # Entry point
```

---

## ⚙️ Tech Stack

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (Authentication)

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/your-username/banking-backend.git

# Install dependencies
npm install

# Run server
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
```

---

## 🧪 API Example

### ➤ Create Transaction

```http
POST /api/transactions
```

```json
{
  "fromAccount": "accountId1",
  "toAccount": "accountId2",
  "amount": 1000,
  "idempotencyKey": "unique-key-123"
}

```

---

## 📌 Key Concepts Implemented

* Idempotency in financial systems
* Ledger-based accounting
* ACID transactions in MongoDB
* TTL Index (auto cleanup)
* Secure token handling

---

## 🎯 Future Improvements

* Redis caching & distributed locks
* Message queue (BullMQ / RabbitMQ)
* Microservices architecture
* Fraud detection system
* Rate limiting

---
