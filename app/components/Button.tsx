export default function Button(props: {
  onClick?: Function;
  value: string;
  color: string;
}) {
  return (
    <div
      className={`hover:cursor-pointer ${props.color} text-white font-bold text-lg box-border px-3 py-1 rounded-lg flex-grow-0 text-center`}
      onClick={() => {
        if (props.onClick) {
          props.onClick();
        }
      }}
    >
      {props.value}
    </div>
  );
}
