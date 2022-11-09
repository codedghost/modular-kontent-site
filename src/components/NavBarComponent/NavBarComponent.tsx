import { Container, Navbar } from "react-bootstrap";
import { NavBarItemContent } from "../../KontentTypes/NavBarItem";
import NavBarHeaderComponent from "./Header/NavBarHeaderComponent";
import NavBarItemsComponent from "./Items/NavBarItemsComponent";
import NavBarComponentProps from "./NavBarComponentProps";


export default function NavBarComponent({NavBarContent}: NavBarComponentProps) {
    
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <NavBarHeaderComponent HeaderContent={NavBarContent.header.linkedItems[0].elements}></NavBarHeaderComponent>
                    <NavBarItemsComponent NavBarItems={NavBarContent.nav_items.linkedItems.map((item) => item.elements as NavBarItemContent)} />
                </Container>
            </Navbar>
        </>)
}