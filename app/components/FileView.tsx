import { FaFile, FaSearch } from "react-icons/fa";
import ListItem from "./ListItem";
import { useState } from "react";
import PanelContainer from "./PanelContainer";
import Tag from "./Tag";
import SearchBar from "./SearchBar";
import TagQuerry from "./TagQuerry";

export default function FileView() {
  const [selected, setSelected] = useState<number[]>([]);

  return (
    <div>
      <SearchBar />
      <TagQuerry>
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
      </TagQuerry>
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
