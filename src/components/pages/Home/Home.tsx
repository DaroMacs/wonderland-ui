import { redirect } from "next/navigation";
import { LOGIN } from "@/constants/routes";

const Home = () => {
  redirect(LOGIN);
};

export default Home;
