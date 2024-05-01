import { FaFile, FaSearch } from "react-icons/fa";
import ListItem from "./ListItem";
import { useState } from "react";
import { arrayBuffer } from "stream/consumers";
import PanelContainer from "./PanelContainer";
import Tag from "./Tag";

export default function FileView() {
  const [selected, setSelected] = useState<number[]>([]);

  return (
    <div>
      <PanelContainer>
        <div className="flex w-full border-b-4 items-center">
          <input
            className="mr-4 flex-grow outline-none"
            type="text"
            placeholder="Search file by name"
          />
          <span>
            <FaSearch
              color="gray"
              className="mr-2 hover:cursor-pointer"
              size={17}
            />
          </span>
        </div>
      </PanelContainer>
      <PanelContainer>
        <input
          className="w-full border-b-4 flex-grow outline-none"
          type="text"
          placeholder="Add tag to querry"
        />
        <div className="bg-gray-50 mt-5 rounded-lg shadow-inner min-h-32 mb-6 box-border p-3">
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
          <Tag />
        </div>
      </PanelContainer>
      <PanelContainer>
        {[...Array(9)].map((_, i) => (
          <FileRow
            selected={selected.includes(i)}
            key={i}
            onClick={() => {
              if (selected.includes(i)) {
                const newArray = selected.filter((n) => n != i);
                setSelected(newArray);
              } else {
                setSelected([...selected, i]);
              }
            }}
          />
        ))}
      </PanelContainer>
    </div>
  );
}

function FileRow(props: { onClick: Function; selected: boolean }) {
  return (
    <ListItem
      onClick={() => {
        props.onClick();
      }}
      selected={props.selected}
    >
      <FaFile size="24" color="gray" />
      <h1>penapig20u4023.mp4</h1>
      <h1>4 April 2024</h1>
      <div>
        <span className="bg-green-500 rounded-lg px-2 py-0.5 font-semibold text-white mr-2">
          #Pen A
        </span>
        <span className="bg-blue-500 rounded-lg px-2 py-0.5 font-semibold text-white mr-2">
          #Pig
        </span>
        <span className="bg-red-500 rounded-lg px-2 py-0.5 font-semibold text-white">
          #Camera 24
        </span>
      </div>
    </ListItem>
  );
}
