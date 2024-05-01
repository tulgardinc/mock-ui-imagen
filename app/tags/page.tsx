"use client";

import PanelContainer from "../components/PanelContainer";
import ListItem from "../components/ListItem";
import { useState } from "react";
import Button from "../components/Button";

export default function Tags() {
  const list = [0, 0, 0, 0, 0];

  return (
    <main className="">
      <PanelContainer>
        {list.map((_) => (
          <ListItem onClick={() => {}}>
            <h1>#pog</h1>
            <h1>436 files</h1>
            <h1>15 variations</h1>
            <div className="flex">
              <div className="bg-sky-400 text-white text-m font-semibold py-1 px-3 mr-4 rounded hover:cursor-pointer">
                Rename
              </div>
              <div className="bg-red-400 text-white text-m font-semibold py-1 px-3 rounded hover:cursor-pointer">
                Delete
              </div>
            </div>
          </ListItem>
        ))}
      </PanelContainer>
      <PanelContainer>
        <div className="flex justify-end">
          <input className="mr-5 border-b-4" type="text" />
          <div className="flex justify-center items-center mr-5">
            <input className="mr-2" type="checkbox" name="" id="" />
            <h1>Contains data</h1>
          </div>
          <Button onClick={() => {}} value="Create Tag" color="bg-red-500" />
        </div>
      </PanelContainer>
    </main>
  );
}
