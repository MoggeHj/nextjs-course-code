import LoginNavigation from "@/components/login-navigation/login-navigation";
import exp from "constants";

const CommunityLayout = ({ children }) => {
  return (
    <>
      <LoginNavigation />
      {children}
    </>
  );
};

export default CommunityLayout;
