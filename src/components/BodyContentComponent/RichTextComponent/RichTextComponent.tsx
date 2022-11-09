import { Card, Container } from "react-bootstrap";
import RichTextElement from "../../../helpers/KontentElementHelpers/RichTextElement/RichTextElement";
import RichTextComponentProps from "./RichTextComponentProps";

export default function RichTextComponent({ RichTextContent }: RichTextComponentProps) {
    return (
        <>
            <Container>
                <Card>
                    <Card.Body>
                        <div className="d-flex align-items-center justify-content-center">
                            <RichTextElement Element={RichTextContent.text} />
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}
