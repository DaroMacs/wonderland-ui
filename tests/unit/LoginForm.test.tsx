import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoginForm from "../../src/components/pages/Login/components/LoginForm/LoginForm";

// Mock the web3 context
jest.mock("../../src/context/web3", () => ({
  useWeb3: () => ({
    openConnectModal: jest.fn(),
  }),
}));

jest.mock("../../src/components/ui/AnimatedButton", () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function MockAnimatedButton({ children, ...props }: any) {
    return <button {...props}>{children}</button>;
  };
});

jest.mock(
  "../../src/components/pages/Login/components/FeaturesList/FeaturesList",
  () => {
    return function MockFeaturesList() {
      return <div data-testid="features-list">Features List</div>;
    };
  },
);

jest.mock("../../src/components/pages/Login/components/LogoSection", () => {
  return function MockLogoSection() {
    return <div data-testid="logo-section">Logo Section</div>;
  };
});

describe("LoginForm", () => {
  it("renders without crashing", () => {
    render(<LoginForm />);

    expect(screen.getByText("Sign in to your account")).toBeInTheDocument();
    expect(screen.getByText("Connect Wallet")).toBeInTheDocument();
    expect(screen.getByText("Get MetaMask")).toBeInTheDocument();
    expect(screen.getByTestId("features-list")).toBeInTheDocument();
    expect(screen.getByTestId("logo-section")).toBeInTheDocument();
  });
});
