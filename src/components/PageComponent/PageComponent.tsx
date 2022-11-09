import { BodyContentContent } from "../../KontentTypes/BodyContent";
import { NavBarContent } from "../../KontentTypes/NavBar";
import BodyContentComponent from "../BodyContentComponent/BodyContentComponent";
import NavBarComponent from "../NavBarComponent/NavBarComponent";
import PageComponentProps from "./PageComponentProps";

export default function PageComponent({PageContent}: PageComponentProps) {

    var pageContent = PageContent.page_fragments.linkedItems.map((item) => {
        switch (item.system.type) {
            case 'nav_bar': {
                return (<NavBarComponent NavBarContent={item.elements as NavBarContent} />);
            }
            case 'body_content': {
                return (<BodyContentComponent BodyContent={item.elements as BodyContentContent} />)
            }
        }
    })

    return (
    <>
        {pageContent}
    </>)
}

PageComponent.defaultProps = {
    PageContent: {}
}