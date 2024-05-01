import { CiCircleRemove } from "react-icons/ci";

export default function Tag(props: {
  children?: React.ReactNode;
  removeable?: boolean;
}) {
  return (
    <span className="bg-gray-500 inline-block text-white m-1 py-0.5 px-2 rounded">
      {props.children ? props.children : "#tag"}
      {props.removeable && (
        <CiCircleRemove className="inline ml-1" color="white" />
      )}
    </span>
  );
}
