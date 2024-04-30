"use client";

import PanelContainer from "../components/PanelContainer";
import ListItem from "../components/ListItem";
import { useState } from "react";
import FloatingPanel from "../components/FloatingPanel";
import UserEditor from "../components/UserEditor";
import Button from "../components/Button";

export default function Admin() {
  const list = [0, 0, 0, 0, 0];

  const [userEditor, setUserEditor] = useState(false);

  const onItemClick = () => {
    setUserEditor(true);
  };

  return (
    <main className="">
      {userEditor && (
        <FloatingPanel onCloseClick={() => setUserEditor(false)}>
          <UserEditor />
        </FloatingPanel>
      )}
      <PanelContainer>
        {list.map((_) => (
          <ListItem onClick={onItemClick}>
            <h1>Wouter Wouter</h1>
            <h1>wouter.wouter@wouter.nl</h1>
            <h1>24 April 2024</h1>
          </ListItem>
        ))}
      </PanelContainer>
      <div className="flex justify-end mt-4">
        <Button onClick={() => {}} value="Create User" color="red" />
      </div>
    </main>
  );
}
