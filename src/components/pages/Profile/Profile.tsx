import { Box } from "@mui/material";
import { FloatingNavbar } from "@/components/elements/FloatingNavbar";
import Banner from "@/components/pages/Profile/components/Banner";
import TokenContent from "@/components/pages/Profile/components/TokenContent";

const Profile = () => (
  <Box>
    <FloatingNavbar />

    <Box
      sx={{
        marginTop: "100px",
      }}
    >
      <Banner />
      <TokenContent />
    </Box>
  </Box>
);

export default Profile;
