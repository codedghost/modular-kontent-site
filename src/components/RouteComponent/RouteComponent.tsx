import React from "react";
import { Route } from "react-router-dom";
import PageComponent from "../PageComponent/PageComponent";
import RouteComponentProps from "./RouteComponentsProps";

export default function RouteComponent({RouteContent: Elements}: RouteComponentProps) {

    return (
        <></>
    );
};

RouteComponent.defaultProps = {
    Elements: {}
};