import { LayoutContainer, LayoutWrapper, SidebarWrapper } from "./styles";
import sideBar from "../assets/sidebar.svg"
import { Sidebar } from "./Sidebar";

export function Layout() {
    return (
        <LayoutContainer>
            <LayoutWrapper>
                <SidebarWrapper>
                    <img src={sideBar} />
                    <Sidebar/>
                </SidebarWrapper>
            </LayoutWrapper>
        </LayoutContainer>
    )
}