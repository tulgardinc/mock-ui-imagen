import { ChangeEvent, useState } from "react";

export default function UserEditor() {
  const roles = ["Admin", "Data Provider", "Data Engineer", "AI Engineer"];
  return (
    <div>
      {roles.map((role) => (
        <UserRole role={role} />
      ))}
    </div>
  );
}

function UserRole(props: { role: string }) {
  const [checked, setChecked] = useState(false);

  return (
    <div className="rounded-lg shadow-lg box-border bg-white p-2 flex mb-3">
      <input
        className="mr-4 ml-2"
        type="checkbox"
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setChecked(e.target.checked)
        }
      />
      <div>{props.role}</div>
    </div>
  );
}
