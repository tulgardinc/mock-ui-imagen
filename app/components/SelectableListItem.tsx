import { useEffect, useState } from "react";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import { MdOutlineCheckBox } from "react-icons/md";

export default function SelectableListItem(props: {
  onClick: Function;
  onSelect: Function;
  children: React.ReactNode;
  selected: boolean;
  color?: string;
  margin?: string;
}) {
  const [bgc, setBgc] = useState("bg-white");

  useEffect(() => {
    setBgc(
      props.selected ? "bg-sky-100" : props.color ? props.color : "bg-white"
    );
  }, [props.selected, props.color]);

  return (
    <div
      className={`rounded-lg shadow-md box-border px-5 py-2 ${
        props.margin ? props.margin : "mb-5"
      } flex justify-between items-center hover:cursor-pointer hover:shadow-lg transition-all ${bgc} ${
        props.color
      }`}
    >
      <div className="mr-5" onClick={() => props.onSelect()}>
        {props.selected ? (
          <MdOutlineCheckBox size="20" />
        ) : (
          <MdOutlineCheckBoxOutlineBlank size="20" />
        )}
      </div>
      <div
        className="flex justify-between items-center flex-grow"
        onClick={() => props.onClick()}
      >
        {props.children}
      </div>
    </div>
  );
}
