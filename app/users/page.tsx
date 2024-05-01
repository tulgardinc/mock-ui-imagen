"use client";

import PanelContainer from "../components/PanelContainer";
import ListItem from "../components/ListItem";
import { ChangeEvent, useState } from "react";
import FloatingPanel from "../components/FloatingPanel";
import Button from "../components/Button";
import SearchBar from "../components/SearchBar";
import Tag from "../components/Tag";
import TagQuerry from "../components/TagQuerry";
import TagWithData from "../components/TagWithData";
import { IoIosArrowDropdown } from "react-icons/io";
import SelectableListItem from "../components/SelectableListItem";

export default function Users() {
  const [userEditor, setUserEditor] = useState(false);

  const onItemClick = () => {
    setUserEditor(true);
  };

  return (
    <div>
      <PanelContainer>
        <div>
          <Button color="bg-red-500" value="Delete" />
        </div>
      </PanelContainer>
      <PanelContainer>
        <div className="flex items-center">
          <div className="mr-5 flex-grow">
            <SearchBar placeholder="Search for user" />
          </div>
          <div
            className={`bg-sky-300 hover:cursor-pointer items-center flex text-white font-bold text-lg box-border px-3 py-1 rounded-lg  text-center`}
          >
            Roles
            <IoIosArrowDropdown className="inline ml-2" />
          </div>
        </div>
      </PanelContainer>
      {userEditor && (
        <FloatingPanel width="w-3/5" onCloseClick={() => setUserEditor(false)}>
          <UserEditor />
        </FloatingPanel>
      )}
      <PanelContainer>
        {[...Array(12)].map((_) => (
          <User
            onClick={() => {
              onItemClick();
            }}
            onSelect={() => {}}
          />
        ))}
      </PanelContainer>
      <div className="flex justify-end mt-4"></div>
    </div>
  );
}

function User(props: { onClick: Function; onSelect: Function }) {
  const [selected, setSelected] = useState(false);

  const onSelect = () => {
    setSelected(!selected);
  };

  return (
    <SelectableListItem
      selected={selected}
      onSelect={onSelect}
      onClick={props.onClick}
    >
      <div>checkboxcheck</div>
      <div className="flex">
        <h1 className="">wouter.wouter@wouter.nl</h1>
      </div>
      <div className="flex items-center">
        <RoleElement>Admin</RoleElement>
        <RoleElement>Data Engineer</RoleElement>
        <RoleElement>Data Annotator</RoleElement>
      </div>
    </SelectableListItem>
  );
}

function RoleElement(props: { children: React.ReactNode }) {
  return (
    <span className=" mx-0.5 text-white px-2 py-0.25 font-semibold rounded bg-gray-400">
      {props.children}
    </span>
  );
}

function UserEditor() {
  const roles = ["Admin", "Data Provider", "Data Engineer", "AI Engineer"];
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 ml-3">wouter.wouter@wouter.wt</h1>
      <div className="flex">
        <div className="bg-white rounded-xl flex-1 mr-5 shadow-xl box-border px-5 py-4">
          {roles.map((role) => (
            <UserRole role={role} />
          ))}
          <Button
            onClick={() => {}}
            value="Assign Roles"
            color="bg-blue-500"
          ></Button>
        </div>
        <div className="flex-1">
          <TagQuerry placeholder="Assign tags">
            <Tag />
            <Tag />
            <Tag />
            <Tag />
            <Tag />
          </TagQuerry>
        </div>
      </div>
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
