import { useEffect, useState } from "react";

export default function ListItem(props: {
    onClick: Function;
    children: React.ReactNode;
    color?: string;
    margin?: string;
}) {
    return (
        <div
            onClick={() => props.onClick()}
            className={`rounded-lg shadow-md box-border px-5 py-2 ${
                props.margin ? props.margin : "mb-5"
            } flex justify-between items-center hover:cursor-pointer hover:shadow-lg transition-all ${
                props.color
            } ${props.color}`}
        >
            {props.children}
        </div>
    );
}
