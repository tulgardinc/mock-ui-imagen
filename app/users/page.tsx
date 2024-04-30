"use client";

import PanelContainer from "../components/PanelContainer";
import ListItem from "../components/ListItem";
import { ChangeEvent, useState } from "react";
import FloatingPanel from "../components/FloatingPanel";
import Button from "../components/Button";

export default function Admin() {
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
                {[...Array(12)].map((_) => (
                    <ListItem onClick={onItemClick}>
                        <h1>Wouter Wouter</h1>
                        <h1>wouter.wouter@wouter.nl</h1>
                        <h1>24 April 2024</h1>
                    </ListItem>
                ))}
            </PanelContainer>
            <div className="flex justify-end mt-4"></div>
        </main>
    );
}

function UserEditor() {
    const roles = ["Admin", "Data Provider", "Data Engineer", "AI Engineer"];
    return (
        <div>
            {roles.map((role) => (
                <UserRole role={role} />
            ))}
            <Button
                onClick={() => {}}
                value="Assign Roles"
                color="bg-blue-500"
            ></Button>
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
