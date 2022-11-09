import { Card, Col, Container, Row } from "react-bootstrap";
import RichTextElement from "../../../helpers/KontentElementHelpers/RichTextElement/RichTextElement";
import BackgroundImageComponent from "../BackgroundImageComponent/BackgroundImageComponent";
import SpacerComponent from "../SpacerComponent/SpacerComponent";
import TwoColumnListComponentProps from "./TwoColumnListComponentProps";

export default function TwoColumnListComponent({ TwoColumnListContent }: TwoColumnListComponentProps) {
    var content = (
        <Card>
            <Card.Body className="two-column">
                <Row>
                    <Col xs="12" md="5" className="d-flex align-items-center ps-4">
                        <RichTextElement Element={TwoColumnListContent.left_column} />
                    </Col>
                    <Col xs="2" className="d-none d-md-block">
                        <SpacerComponent vertical={true} shadowDirection="right" />
                    </Col>
                    <Col xs="12" className="d-block d-md-none">
                        <SpacerComponent />
                    </Col>
                    <Col xs="12" md="5" className="d-flex align-items-center ps-4">
                        <RichTextElement Element={TwoColumnListContent.right_column} />
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )

    var backgroundContent = TwoColumnListContent.background_image.value.some((x) => true)
        ? (<BackgroundImageComponent 
                Url={TwoColumnListContent.background_image.value[0].url} 
                Orientation={"center"} 
                Content={content} 
                Container={true} />)
        : (
            <Container>
                {content}
            </Container>
        );

    return (
        <>
            {backgroundContent}
        </>
    );
}
