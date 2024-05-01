import { CiCircleRemove } from "react-icons/ci";

export default function TagWithData() {
  return (
    <span className="bg-gray-600 inline-block text-white m-1 py-0.5 px-2 rounded">
      #tag with data
      <span className="bg-gray-800 px-0.5 rounded ml-1" contentEditable>
        data
      </span>
      <CiCircleRemove className="inline ml-1" color="white" />
    </span>
  );
}
