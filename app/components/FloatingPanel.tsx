import { IoClose } from "react-icons/io5";

export default function FloatingPanel(props: {
  children: React.ReactNode;
  onCloseClick: Function;
  width?: string;
}) {
  return (
    <div className="flex justify-center items-center top-0 left-0 absolute w-screen h-screen bg-gray-600 bg-opacity-50 backdrop-blur-md">
      <div
        className={`bg-white rounded-lg box-border ${
          props.width ? props.width : "w-2/5"
        } p-5 `}
      >
        <div className="flex justify-end h-4 mb-5">
          <IoClose
            className="hover:cursor-pointer"
            onClick={() => props.onCloseClick()}
            size="25"
          />
        </div>
        {props.children}
      </div>
    </div>
  );
}
