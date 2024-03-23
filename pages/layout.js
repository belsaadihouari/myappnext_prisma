import ResponsiveDrawer from "@/component/drawer";
import Appbar from "@/component/Appbar";
const drawerWidth = 240;
const Layout = ({ children }) => {
  const showDrawer = () => {
    setdrawerType("temporary");
    setnoneORblock("block");
  };

  const hideDrawer = () => {
    setdrawerType("permanent");
    setnoneORblock("none");
  };
  return (
    <div>
      <Appbar drawerWidth={drawerWidth} showDrawer={showDrawer} />
      {children}
      <ResponsiveDrawer />
    </div>
  );
};

export default Layout;
