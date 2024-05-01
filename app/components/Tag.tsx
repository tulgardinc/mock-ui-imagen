import { CiCircleRemove } from "react-icons/ci";

export default function Tag() {
  return (
    <span className="bg-gray-600 inline-block text-white m-1 py-0.5 px-2 rounded">
      #tag
      <CiCircleRemove className="inline ml-1" color="white" />
    </span>
  );
}
