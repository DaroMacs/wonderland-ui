# Frontend Wonderland Challenge

A **Next.js React application** that demonstrates comprehensive blockchain integration with wallet connection, token management, and event tracking. Built with modern React patterns, TypeScript, and a clean component architecture.

## Try out the demo

## Video quick walkthrough

## Screen samples with responsiveness

### Login screen

<table>
  <tr>
    <td><img width="1440" height="877" alt="Desktop view" src="https://github.com/user-attachments/assets/efbd0d62-0c87-4ff7-9f7f-22be6871fad3" /></td>
    <td><img width="765" height="877" alt="Tablet view" src="https://github.com/user-attachments/assets/a54c05aa-f2a1-4826-b291-006fdd71790e" /></td>
    <td><img width="423" height="877" alt="Mobile view" src="https://github.com/user-attachments/assets/d8715b13-f1db-4edb-adfe-4b9280852d15" /></td>
  </tr>
</table>

### Profile

<table>
  <tr>
     <td><img width="1410" height="963" alt="image" src="https://github.com/user-attachments/assets/51a4f949-d7dd-4075-b0e5-81fcee71336e" /></td>
     <td><img width="767" height="880" alt="image" src="https://github.com/user-attachments/assets/3edf1d8d-c226-4b95-9093-57925af6c13a" /></td>
     <td><img width="422" height="874" alt="image" src="https://github.com/user-attachments/assets/92b09c1c-d8de-4886-932a-020935a64ea0" /></td>
  </tr>
</table>

### Modals

<table>
  <tr>
    <td><img width="1436" height="874" alt="image" src="https://github.com/user-attachments/assets/0fc33ad0-3e5f-4610-97e3-351cc6543d67" /></td>
    <td><img width="1431" height="871" alt="image" src="https://github.com/user-attachments/assets/fb5bf342-8ed2-417a-947f-a4759f8c86b6" /></td>
  </tr>
</table>

## Select type of smart contract

<table>
  <tr>
    <td><img width="1127" height="130" alt="image" src="https://github.com/user-attachments/assets/b5771b19-b75a-4fd0-b871-006136caa053" /></td>
  </tr>
</table>

## Implemented Features

### Wallet Connection & Network Management

- **Multi-Wallet Support**: Connect with RainbowKit, RabbyKit, or Reown wallets
- **Network Detection**: Automatic detection of connected network
- **Chain Switching**: Seamless switching between supported network: Sepolia

### Token Management

- **Balance Display**: Real-time DAI (18 decimals) and USDC (6 decimals) balance fetching
- **Human-Readable Formatting**: Proper decimal handling for different token standards
- **Allowance Checking**: Verify token allowances before transfers

### Token Operations

- **Approve Tokens**: Set spending allowances with amount validation
- **Transfer Tokens**: Send tokens to any address with balance validation
- **Mint Test Tokens**: Get test tokens for development and testing
- **Input Validation**: Real-time validation with clear error messages
- **Loading States**: Visual feedback during blockchain transactions

### Event Tracking

- **Event Table**: Comprehensive display of transfer and approval events
- **Event Details**: Token type, amount, sender, recipient, transaction hash
- **Real-time Updates**: Events refresh automatically after transactions
- **Transaction Status**: Track pending, successful, and failed transactions

### User Experience

- **Responsive Design**: Mobile-first approach MUI
- **Modern UI**: Clean interface
- **Loading States**: Smooth loading indicators for all async operations
- **Error Handling**: User-friendly error messages and modals
- **Animations**: Subtle animations for better user experience

---

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: MUI
- **State Management**: React Context (Web3Context, TokenContext)
- **Blockchain**: Viem + Wagmi
- **Wallet Integration**: RainbowKit
- **Testing**: Unit test with Jest
- **Code Quality**: ESLint, Prettier

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn
- MetaMask

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd challenge-front-daromacs

# Install dependencies
npm install

# Start development server
npm run dev
```

### Running Tests

```bash
# Run unit tests
npm test

---

## Architecture & Key Decisions

### State Management

- **Web3Context**: Manages wallet connection, network detection, and provider state
- **TokenContext**: Handles token balances, allowances, and transaction state
- **Separation of Concerns**: UI components focus on presentation, contexts handle business logic

### Component Structure

```

src/
├── components/
│ ├── elements/ # Reusable UI elements
│ ├── pages/ # Page-specific components
│ └── ui/ # Shadcn UI components
├── context/ # React contexts
├── contracts/ # Contract ABIs and configurations
├── hooks/ # Custom hooks for token operations
└── helpers/ # Utility functions

```

### Key Technical Decisions

1. **React Context over Zustand**: Chose Context for simpler state management and better React integration
2. **Server Components**: Leveraged Next.js App Router for better performance
3. **TypeScript**: Full type safety for better development experience
4. **Modular Architecture**: Separated concerns between wallet, token, and UI layers
5. **Error Boundaries**: Comprehensive error handling at multiple levels

---

## Usage Guide

### Connecting Your Wallet

1. Click "Connect Wallet" on the home page
2. Choose Metamask
3. Approve the connection in your wallet and accept connect to Sepolia in case you are in another network

### Managing Tokens

#### Viewing Balances

- Token balances are automatically displayed on the profile page

#### Approving Tokens

1. Enter the amount you want to approve
2. Click "APPROVE" button
3. Confirm the transaction in your wallet
4. Wait for confirmation

#### Transferring Tokens

1. Enter the recipient address
2. Specify the amount to transfer
3. Click "TRANSFER" button
4. Confirm the transaction in your wallet

#### Minting Test Tokens

1. Click "MINT" button for the desired token
2. Confirm the transaction in your wallet
3. Receive test tokens for development

### Viewing Events

- All transfer and approval events are displayed in the events table click on the icon to refresh
- Events include transaction hash, amount, sender, and recipient
- Table updates automatically after new transactions

---

## Contract Information

### Sepolia Testnet Contracts

- **DAI Token**: `0x1D70D57ccD2798323232B2dD027B3aBcA5C00091` (18 decimals)
- **USDC Token**: `0xC891481A0AaC630F4D89744ccD2C7D2C4215FD47` (6 decimals)

### Supported Networks

- **Sepolia Testnet**: Primary development network

---
```
