import { useEffect, useState } from "react";

export default function ListItem(props: {
  onClick: Function;
  onSelect: Function;
  children: React.ReactNode;
  color?: string;
}) {
  const [bgc, setBgc] = useState("bg-white");

  return (
    <div
      onClick={() => props.onClick()}
      className={`rounded-lg shadow-md box-border px-5 py-2 mb-5 flex justify-between items-center hover:cursor-pointer hover:shadow-lg transition-all ${bgc} ${props.color}`}
    >
      {props.children}
    </div>
  );
}
