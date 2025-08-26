# Frontend Challenge - Blockchain Integration App

A **Next.js React application** that demonstrates comprehensive blockchain integration with wallet connection, token management, and event tracking. Built with modern React patterns, TypeScript, and a clean component architecture.

---

## ✅ Implemented Features

### 🔗 Wallet Connection & Network Management

- **Multi-Wallet Support**: Connect with RainbowKit, RabbyKit, or Reown wallets
- **Network Detection**: Automatic detection of connected network
- **Chain Switching**: Seamless switching between supported networks (Sepolia, Ethereum mainnet)
- **Error Handling**: Clear error messages for unsupported networks

### 💰 Token Management

- **Balance Display**: Real-time DAI (18 decimals) and USDC (6 decimals) balance fetching
- **Human-Readable Formatting**: Proper decimal handling for different token standards
- **Allowance Checking**: Verify token allowances before transfers

### 🔄 Token Operations

- **Approve Tokens**: Set spending allowances with amount validation
- **Transfer Tokens**: Send tokens to any address with balance validation
- **Mint Test Tokens**: Get test tokens for development and testing
- **Input Validation**: Real-time validation with clear error messages
- **Loading States**: Visual feedback during blockchain transactions

### 📊 Event Tracking

- **Event Table**: Comprehensive display of transfer and approval events
- **Event Details**: Token type, amount, sender, recipient, transaction hash
- **Real-time Updates**: Events refresh automatically after transactions
- **Transaction Status**: Track pending, successful, and failed transactions

### 🎨 User Experience

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Clean interface using Shadcn UI components
- **Loading States**: Smooth loading indicators for all async operations
- **Error Handling**: User-friendly error messages and modals
- **Animations**: Subtle animations for better user experience

---

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Shadcn UI
- **State Management**: React Context (Web3Context, TokenContext)
- **Blockchain**: Viem + Wagmi
- **Wallet Integration**: RainbowKit
- **Testing**: Playwright for E2E tests
- **Code Quality**: ESLint, Prettier

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn
- MetaMask or compatible wallet

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

### Environment Setup

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/YOUR_PROJECT_ID
NEXT_PUBLIC_MAINNET_RPC_URL=https://mainnet.infura.io/v3/YOUR_PROJECT_ID
```

### Running Tests

```bash
# Run E2E tests
npm run test:e2e

# Run tests in UI mode
npm run test:e2e:ui
```

---

## 🏗 Architecture & Key Decisions

### State Management

- **Web3Context**: Manages wallet connection, network detection, and provider state
- **TokenContext**: Handles token balances, allowances, and transaction state
- **Separation of Concerns**: UI components focus on presentation, contexts handle business logic

### Component Structure

```
src/
├── components/
│   ├── elements/          # Reusable UI elements
│   ├── pages/            # Page-specific components
│   └── ui/               # Shadcn UI components
├── context/              # React contexts
├── contracts/            # Contract ABIs and configurations
├── hooks/                # Custom hooks for token operations
└── helpers/              # Utility functions
```

### Key Technical Decisions

1. **React Context over Zustand**: Chose Context for simpler state management and better React integration
2. **Server Components**: Leveraged Next.js App Router for better performance
3. **TypeScript**: Full type safety for better development experience
4. **Modular Architecture**: Separated concerns between wallet, token, and UI layers
5. **Error Boundaries**: Comprehensive error handling at multiple levels

---

## 📱 Usage Guide

### Connecting Your Wallet

1. Click "Connect Wallet" on the home page
2. Choose your preferred wallet (RainbowKit, RabbyKit, Reown)
3. Approve the connection in your wallet
4. Ensure you're connected to Sepolia testnet

### Managing Tokens

#### Viewing Balances

- Token balances are automatically displayed on the profile page
- Balances update in real-time after transactions

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

- All transfer and approval events are displayed in the events table
- Events include transaction hash, amount, sender, and recipient
- Table updates automatically after new transactions

---

## 🔧 Contract Information

### Sepolia Testnet Contracts

- **DAI Token**: `0x1D70D57ccD2798323232B2dD027B3aBcA5C00091` (18 decimals)
- **USDC Token**: `0xC891481A0AaC630F4D89744ccD2C7D2C4215FD47` (6 decimals)

### Supported Networks

- **Sepolia Testnet**: Primary development network
- **Ethereum Mainnet**: Production network support

---

## 🧪 Testing

### E2E Test Coverage

- **Wallet Connection Flow**: Tests complete wallet connection process
- **Network Detection**: Verifies network switching functionality
- **Token Operations**: Tests approve, transfer, and mint operations
- **Error Handling**: Validates error scenarios and user feedback

### Running Tests

```bash
# Run all tests
npm run test:e2e

# Run specific test file
npm run test:e2e tests/e2e/app-flow.spec.ts

# Debug tests
npm run test:e2e:ui
```

---

## 🚀 Deployment

### Build for Production

```bash
npm run build
npm start
```

### Environment Variables for Production

Ensure all environment variables are properly configured for your deployment platform.

---

## 📝 Development Notes

### Key Features Implemented

- ✅ Multi-wallet support with RainbowKit
- ✅ Automatic network detection and switching
- ✅ Real-time token balance fetching
- ✅ Token approval and transfer functionality
- ✅ Test token minting capability
- ✅ Comprehensive event tracking and display
- ✅ Responsive design with modern UI
- ✅ E2E testing with Playwright
- ✅ TypeScript for type safety
- ✅ Error handling and user feedback

### Performance Optimizations

- React Server Components for better initial load
- Dynamic imports for non-critical components
- Optimized re-renders with proper state management
- Efficient event handling and updates

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Submit a pull request

---

## 📄 License

This project is part of a frontend challenge and is for educational purposes.

---

_Built with ❤️ using Next.js, TypeScript, and modern web3 technologies_
