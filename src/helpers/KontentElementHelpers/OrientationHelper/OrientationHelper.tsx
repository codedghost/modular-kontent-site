import OrientationHelperProps from "./OrientationHelperProps";

export default function OrientationHelper({Orientation}: OrientationHelperProps) {
    return Orientation?.toLowerCase() ?? "center";
}