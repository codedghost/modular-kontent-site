import { Nav } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import NavBarItemComponentProps from "./NavBarItemComponentProps";

export default function NavBarItemComponent({NavBarItem}: NavBarItemComponentProps) {
    const location = useLocation();
    var underline = NavBarItem.url_route.value === location.pathname ? "text-decoration-underline" : "";
  
    return (
    <>
        <Nav.Link href={NavBarItem.url_route.value} className={underline}>{NavBarItem.title.value}</Nav.Link>
    </>)
}