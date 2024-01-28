import { ContentWrapper, LayoutContainer, LayoutWrapper, SidebarWrapper } from "./styles";
import sideBar from "../assets/sidebar.svg"
import { Sidebar } from "./Sidebar";
import { Outlet } from "react-router-dom";
import { FormBox } from "../components/FormBox";

export function Layout() {
    return (
        <LayoutContainer>
            <LayoutWrapper>
                <SidebarWrapper>
                    <img src={sideBar} />
                    <Sidebar/>
                </SidebarWrapper>
                <ContentWrapper>
                    <FormBox />    
                    <Outlet />
                </ContentWrapper>
            </LayoutWrapper>
        </LayoutContainer>
    )
}