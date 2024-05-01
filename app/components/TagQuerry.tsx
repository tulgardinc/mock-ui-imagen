import PanelContainer from "./PanelContainer";

export default function TagQuerry(props: {
  children: React.ReactNode;
  placeholder: string;
}) {
  return (
    <PanelContainer>
      <input
        className="w-full border-b-4 flex-grow outline-none"
        type="text"
        placeholder={props.placeholder}
      />
      <div className="bg-gray-50 mt-5 rounded-lg shadow-inner min-h-32 mb-6 box-border p-3">
        {props.children}
      </div>
    </PanelContainer>
  );
}
