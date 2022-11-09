import { Col, Container, Row } from "react-bootstrap";
import { RichTextContent } from "../../KontentTypes/RichText";
import { TextWithImageContent } from "../../KontentTypes/TextWithImage";
import { TwoColumnListContent } from "../../KontentTypes/TwoColumnList";
import BodyContentComponentProps from "./BodyContentComponentProps";
import RichTextComponent from "./RichTextComponent/RichTextComponent";
import TextWithImageComponent from "./TextWithImageComponent/TextWithImageComponent";
import TwoColumnListComponent from "./TwoColumnListComponent/TwoColumnListComponent";

export default function BodyContentComponent({ BodyContent }: BodyContentComponentProps) {
    var bodyContent = BodyContent.body_fragments.linkedItems.map((item) => {
        switch (item.system.type) {
            case "rich_text": {
                return (
                    <>
                        <RichTextComponent RichTextContent={item.elements as RichTextContent} />
                        <br />
                    </>
                );
            }
            case "text_with_image": {
                return (
                    <>
                        <TextWithImageComponent TextWithImageContent={item.elements as TextWithImageContent} />
                        <br />
                    </>
                );
            }
            case "two_column_list": {
                return (
                    <>
                        <TwoColumnListComponent TwoColumnListContent={item.elements as TwoColumnListContent} />
                        <br />
                    </>
                );
            }
        }
    });
    return <>{bodyContent}</>;
}
