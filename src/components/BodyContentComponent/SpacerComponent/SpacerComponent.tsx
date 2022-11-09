import SpacerComponentProps from "./SpacerComponentProps";

function SpacerComponent({vertical, shadowDirection}: SpacerComponentProps) {
    var spacerClassName = `spacer${vertical ? '-vertical' : ''} ${shadowDirection}`;
    return (
        <div className={spacerClassName}>
            <div className="mask"></div>
        </div>
    )
}

SpacerComponent.defaultProps = {
    vertical: false,
    shadowDirection: "left"
} as SpacerComponentProps;

export default SpacerComponent;