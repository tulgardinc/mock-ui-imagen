import { useEffect, useState } from "react";

export default function ListItem(props: {
    onClick: Function;
    children: React.ReactNode;
    selected?: boolean;
    color?: string;
}) {
    const [bgc, setBgc] = useState("bg-white");

    useEffect(() => {
        setBgc(props.selected ? "bg-sky-100" : "bg-white");
    }, [props.selected]);

    return (
        <div
            onClick={() => props.onClick()}
            className={`rounded-lg shadow-md box-border px-5 py-2 mb-5 flex justify-between items-center hover:cursor-pointer hover:shadow-lg transition-all ${bgc} ${props.color}`}
        >
            {props.children}
        </div>
    );
}
