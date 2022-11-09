import { Nav, Navbar } from "react-bootstrap";
import NavBarItemComponent from "./NavBarItemComponent/NavBarItemComponent";
import NavBarItemsComponentProps from "./NavBarItemsComponentProps";

export default function NavBarItemsComponent({NavBarItems}: NavBarItemsComponentProps) {
    var navBarItemsContent = NavBarItems.map((item) => {
        return (<NavBarItemComponent NavBarItem={item}></NavBarItemComponent>);
    });

    return (
        <>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav" className="justify-content-end">
                <Nav>
                    {navBarItemsContent}
                </Nav>
            </Navbar.Collapse>
        </>
    )
}