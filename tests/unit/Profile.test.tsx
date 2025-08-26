/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Profile from "../../src/components/pages/Profile/Profile";
import { useToken } from "../../src/context/token";
import useWeb3 from "../../src/context/web3/useWeb3";

// Mock the web3 context
jest.mock("../../src/context/web3/useWeb3", () => ({
  __esModule: true,
  default: jest.fn(),
}));

// Mock the token context
jest.mock("../../src/context/token", () => ({
  useToken: jest.fn(),
}));

jest.mock("../../src/components/elements/FloatingNavbar", () => {
  return function MockFloatingNavbar() {
    return <div data-testid="floating-navbar">Floating Navbar</div>;
  };
});

jest.mock("../../src/components/pages/Profile/components/Banner/Banner", () => {
  return function MockBanner() {
    return <div data-testid="banner">Banner</div>;
  };
});

jest.mock(
  "../../src/components/pages/Profile/components/TokenContent/TokenContent",
  () => {
    return function MockTokenContent() {
      return <div data-testid="token-content">Token Content</div>;
    };
  },
);

jest.mock("../../src/components/ui/AddressChip", () => {
  return function MockAddressChip({ address, onClick }: any) {
    return (
      <button data-testid="address-chip" onClick={onClick}>
        {address}
      </button>
    );
  };
});

const mockUseWeb3 = useWeb3 as jest.MockedFunction<typeof useWeb3>;
const mockUseToken = useToken as jest.MockedFunction<typeof useToken>;

describe("Profile", () => {
  beforeEach(() => {
    jest.clearAllMocks();

    mockUseWeb3.mockReturnValue({
      address: null,
      handleLogout: jest.fn(),
      openConnectModal: jest.fn(),
      isConnected: false,
      chain: null,
    } as any);

    mockUseToken.mockReturnValue({
      activeToken: "dai",
      tokenInfo: null,
      setActiveToken: jest.fn(),
    } as any);
  });

  it("renders without crashing when wallet is not connected", () => {
    render(<Profile />);

    // Check if main components are rendered
    expect(screen.getByTestId("floating-navbar")).toBeInTheDocument();
    expect(screen.getByTestId("banner")).toBeInTheDocument();
    expect(screen.getByTestId("token-content")).toBeInTheDocument();

    expect(screen.queryByTestId("address-chip")).not.toBeInTheDocument();
  });

  it("renders address chip when wallet is connected", () => {
    const mockAddress = "0x1234567890123456789012345678901234567890";
    const mockHandleLogout = jest.fn();

    mockUseWeb3.mockReturnValue({
      address: mockAddress,
      handleLogout: mockHandleLogout,
      openConnectModal: jest.fn(),
      isConnected: true,
      chain: null,
    } as any);

    render(<Profile />);

    // Check if address chip is rendered with the address
    const addressChip = screen.getByTestId("address-chip");
    expect(addressChip).toBeInTheDocument();
    expect(addressChip).toHaveTextContent(mockAddress);
  });

  it("calls handleLogout when address chip is clicked", () => {
    const mockAddress = "0x1234567890123456789012345678901234567890";
    const mockHandleLogout = jest.fn();

    mockUseWeb3.mockReturnValue({
      address: mockAddress,
      handleLogout: mockHandleLogout,
      openConnectModal: jest.fn(),
      isConnected: true,
      chain: null,
    } as any);

    render(<Profile />);

    // Click the address chip
    const addressChip = screen.getByTestId("address-chip");
    addressChip.click();

    // Check if handleLogout was called
    expect(mockHandleLogout).toHaveBeenCalledTimes(1);
  });

  it("renders all main sections", () => {
    render(<Profile />);

    // Verify all main components are present
    expect(screen.getByTestId("floating-navbar")).toBeInTheDocument();
    expect(screen.getByTestId("banner")).toBeInTheDocument();
    expect(screen.getByTestId("token-content")).toBeInTheDocument();
  });

  it("handles null address gracefully", () => {
    mockUseWeb3.mockReturnValue({
      address: null,
      handleLogout: jest.fn(),
      openConnectModal: jest.fn(),
      isConnected: false,
      chain: null,
    } as any);

    render(<Profile />);

    // Should render without errors
    expect(screen.getByTestId("floating-navbar")).toBeInTheDocument();
    expect(screen.getByTestId("banner")).toBeInTheDocument();
    expect(screen.getByTestId("token-content")).toBeInTheDocument();
  });
});
