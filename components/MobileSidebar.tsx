//@ts-nocheck
import { SidebarComponent } from "@syncfusion/ej2-react-navigations";
import { Link } from "react-router";
import NavItems from "./NavItems";

const MobileSidebar = () => {
  let sidebar: SidebarComponent;
  const toggleSidebar = () => {
    if (sidebar.isOpen) {
      sidebar.hide();
    } else {
      sidebar.show();
    }
  };

  return (
    <div className="mobile-sidebar wrapper">
      <header>
        <Link to="/">
          <img
            src="/assets/icons/logo.svg"
            alt=" Logo"
            className="size-[30px]"
          />
          <h2>Tourvisto</h2>
        </Link>
        <button onClick={toggleSidebar}></button>
        <img src="/assets/icons/menu.svg" alt="menu" className="size-7" />
      </header>
      <SidebarComponent
        width={270}
        ref={(Sidebar) => (sidebar = Sidebar)}
        created={() => sidebar.hide()}
        closeOnDocumentClick={true}
        showBackdrop={true}
        type="over"
      >
        <NavItems handleClick={toggleSidebar} />
      </SidebarComponent>
    </div>
  );
};

export default MobileSidebar;
