import { Box } from "@mui/material";
import FloatingNavbar from "@/components/elements/FloatingNavbar";
import Banner from "@/components/pages/Profile/components/Banner";
import TokenContent from "@/components/pages/Profile/components/TokenContent";
import AddressChip from "@/components/ui/AddressChip";
import useWeb3 from "@/context/web3/useWeb3";

const Profile = () => {
  const { address, handleLogout } = useWeb3();

  return (
    <Box>
      <FloatingNavbar />
      <Box
        sx={{
          marginTop: "80px",
        }}
      >
        {address && (
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <AddressChip address={address} onClick={handleLogout} />
          </Box>
        )}
        <Banner />
        <TokenContent />
      </Box>
    </Box>
  );
};

export default Profile;
