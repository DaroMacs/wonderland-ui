import { Box } from "@mui/material";
import {
  profileContainerStyles,
  mobileAddressChipContainerStyles,
} from "./styles";
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
      <Box sx={profileContainerStyles}>
        {address && (
          <Box sx={mobileAddressChipContainerStyles}>
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
