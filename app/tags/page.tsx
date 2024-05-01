"use client";

import { IoIosAddCircleOutline } from "react-icons/io";
import PanelContainer from "../components/PanelContainer";
import { useState } from "react";
import Button from "../components/Button";
import TagQuerry from "../components/TagQuerry";
import Tag from "../components/Tag";
import Title from "../components/Title";
import SelectableListItem from "../components/SelectableListItem";
import FloatingPanel from "../components/FloatingPanel";

export default function Tags() {
  const [creatingTag, setCreatingTag] = useState(false);

  return (
    <div>
      {creatingTag && (
        <FloatingPanel
          onCloseClick={() => {
            setCreatingTag(false);
          }}
        >
          <Title>Create Tag</Title>
          <PanelContainer>
            <input
              className="outline-none border-b-4 w-full"
              type="text"
              placeholder="Tag name"
            />
          </PanelContainer>
          <PanelContainer>
            <div className="flex items-center">
              <input type="checkbox" />
              <h1 className="ml-4 inline">Is mandatory</h1>
            </div>
            <div className="flex items-center">
              <input type="checkbox" />
              <h1 className="ml-4 inline">Holds data</h1>
            </div>
          </PanelContainer>
          <TagQuerry placeholder="Add parents"></TagQuerry>
          <TagQuerry placeholder="Add children"></TagQuerry>
          <div className="mt-5">
            <Button color="bg-blue-500" value="Submit"></Button>
          </div>
        </FloatingPanel>
      )}
      <Title>Tags</Title>
      <TagQuerry placeholder="Search for tags">
        <Tag removeable={true} />
        <Tag removeable={true} />
        <Tag removeable={true} />
        <Tag removeable={true} />
      </TagQuerry>
      <PanelContainer>
        <div className="flex">
          <div className="w-32 mr-10">
            <Button color="bg-sky-500" value="Select All" />
          </div>
          <div className="w-32 mr-10 ">
            <Button
              color="bg-green-500"
              value="Create Tag"
              onClick={() => {
                setCreatingTag(true);
              }}
            />
          </div>
          <div className="w-32">
            <Button color="bg-red-500" value="Delete Tags" />
          </div>
        </div>
      </PanelContainer>
      <PanelContainer>
        {[...Array(10)].map((_) => (
          <ExtendableTag />
        ))}
      </PanelContainer>
    </div>
  );
}

function ExtendableTag() {
  const [extended, setExtended] = useState(false);
  const [selected, setSelected] = useState(false);

  const listItem = (
    <SelectableListItem
      margin="m-0"
      onClick={() => {
        setExtended(!extended);
      }}
      onSelect={() => {
        setSelected(!selected);
      }}
      selected={selected}
    >
      <h1>#pog</h1>
      <h1>436 files</h1>
      <h1>5 children</h1>
      <div className="flex">
        <div className="bg-sky-400 text-white text-m font-semibold py-1 px-3 mr-4 rounded hover:cursor-pointer">
          Rename
        </div>
        <div className="bg-red-400 text-white text-m font-semibold py-1 px-3 rounded hover:cursor-pointer">
          Delete
        </div>
      </div>
    </SelectableListItem>
  );

  return (
    <div className="mb-4">
      {extended ? (
        <div style={{ borderRadius: "50px 50px 0 0" }} className="bg-white">
          {listItem}
        </div>
      ) : (
        listItem
      )}
      {extended && (
        <div
          style={{
            borderRadius: "0 0 10px 10px",
            boxShadow: "0 0 10px 2px rgba(0,0,0,0.1) inset",
          }}
          className="bg-white"
        >
          <div className="box-border p-4">
            <div className="flex justify-between mb-4">
              <h1>Created By: Wouter Wouter</h1>
              <h1>Created on: 24th April 2024</h1>
              <h1>Type: None Data</h1>
            </div>
            <div>
              <span>Children: </span>
              <Tag />
              <Tag />
              <Tag />
              <Tag />
              <Tag />
              <span className="text-gray-500 box-border border-gray-500 border-2 inline-block m-1 py-0.5 px-2 rounded">
                Add
                <IoIosAddCircleOutline className="inline ml-1 text-gray-500" />
              </span>
            </div>
            <div>
              <span>Parents: </span>
              <Tag />
              <Tag />
              <Tag />
              <span className="text-gray-500 box-border border-gray-500 border-2 inline-block m-1 py-0.5 px-2 rounded">
                Add
                <IoIosAddCircleOutline className="inline ml-1 text-gray-500" />
              </span>
            </div>
            <div className="flex justify-between">
              <div>Mandatory: False</div>
              <div>
                <div className="bg-slate-400 mr-5 hover:cursor-pointer rounded-md font-semibold text-white inline px-3 py-0.5">
                  Make Mandatory
                </div>
                <div className="bg-slate-400 hover:cursor-pointer rounded-md font-semibold text-white inline px-3 py-0.5">
                  Querry
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
