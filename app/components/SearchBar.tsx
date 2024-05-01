import { FaSearch } from "react-icons/fa";
import PanelContainer from "./PanelContainer";

export default function SearchBar(props: { placeholder?: string }) {
  return (
    <div className="flex w-full border-b-4 items-center">
      <input
        className="mr-4 flex-grow outline-none"
        type="text"
        placeholder={props.placeholder}
      />
      <span>
        <FaSearch
          color="gray"
          className="mr-2 hover:cursor-pointer"
          size={17}
        />
      </span>
    </div>
  );
}
