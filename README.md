# 🔌 Socket Frontend: The Type-Safe Contract Demo

This is the Frontend portion of the **JUDE Session (March Week 4)**. It demonstrates how to consume a shared architectural contract from a separate API repository using **Zod** and **NPM Linking**.

## 🚀 The Goal

- To eliminate "Type Drift" by ensuring the Frontend UI always matches the Backend Schema. If the API changes a field name, this Frontend will fail to build—**catching bugs before they reach production.**
- Avoid duplicating types across codebase and significantly reduce codebase size

-----

## 🛠️ Local Development Setup

Because the "Contract" (`@marybngozi/socket-types`) lives in the `socket-api` repository, you must link them locally to see real-time updates.

### 1\. Link the API Types

Open your terminal in the **`socket-api/packages/api-types`** directory:

```bash
npm install
npm run build
npm link
```

### 2\. Connect the Frontend

Open your terminal in this **`socket-frontend`** directory:

```bash
npm link @marybngozi/socket-types
npm install
```

### 3\. Start the Dashboard

```bash
npm run dev
```

Visit [http://localhost:5173](https://www.google.com/search?q=http://localhost:5173) to see the synchronized dashboard.

-----

## 🏗️ Architecture Overview

### The "Single Source of Truth"

All core interfaces (like `ReportItem` and `ChartType`) are defined once in the API repo using **Zod**.

  - **Backend:** Uses the schema for runtime validation (incoming requests).
  - **Frontend:** Uses the inferred types for compile-time safety (UI components).

### Key sample files

  - `src/App.tsx`: The main dashboard canvas.
  - `src/components/ReportSidebar.tsx`: A property-drawer component that strictly follows the `@marybngozi/socket-types` contract.

-----

## 🧪 The "Red Squiggly" Test (Demo)

To see the power of this setup:

1.  Open `socket-api/packages/api-types/src/report.ts`.
2.  Change the `chartType` enum (e.g., rename `"bar-chart"` to `"column-chart"`).
3.  Run `npm run build` in that folder.
4.  Switch back to this project. You will see **Immediate TypeScript Errors** in `App.tsx` and `ReportSidebar.tsx`.

-----

## 📡 Remote Deployment

In a CI/CD environment (GitHub Actions), the FE pulls this package from the **GitHub Private Registry** via the `.npmrc` configuration:

```text
@socket:registry=https://npm.pkg.github.com/marybngozi
```

-----

- **Lead Developer:** Mary B.
- **Supervisor:** Kenny S.
- **Session:** JUDE March 27th, 2026

-----