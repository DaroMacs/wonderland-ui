/**
 * Formats an Ethereum address by showing the first 6 and last 4 characters
 * @param address - The full Ethereum address
 * @returns Formatted address string (e.g., "0x1234...5678")
 */
export const formatAddress = (address: string): string => {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};
