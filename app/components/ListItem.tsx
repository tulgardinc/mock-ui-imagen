export default function ListItem(props: {
  onClick: Function;
  children: React.ReactNode;
}) {
  return (
    <div
      onClick={() => props.onClick()}
      className="bg-white rounded-lg shadow-md box-border px-5 py-2 mb-5 flex justify-between items-center"
    >
      {props.children}
    </div>
  );
}
