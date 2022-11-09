import { Navbar } from "react-bootstrap";
import NavBarHeaderComponentProps from "./NavBarHeaderComponentProps";

export default function NavBarHeaderComponent({HeaderContent}: NavBarHeaderComponentProps) {

    return (
        <>
            <Navbar.Brand href={HeaderContent.url_route.value}>{HeaderContent.header_text.value}</Navbar.Brand>
        </>
        
    )
}