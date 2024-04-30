import React from "react";
import PanelContainer from "./PanelContainer";

export default function Title(props: { children: React.ReactNode }) {
    return (
        <PanelContainer>
            <h1 className="text-center text-xl font-semibold">
                {props.children}
            </h1>
        </PanelContainer>
    );
}
