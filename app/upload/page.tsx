"use client";

import PanelContainer from "../components/PanelContainer";
import ListItem from "../components/ListItem";
import { useState } from "react";
import FloatingPanel from "../components/FloatingPanel";
import UserEditor from "../components/UserEditor";
import Button from "../components/Button";
import { IoCloudUploadOutline } from "react-icons/io5";
import { IoIosAddCircleOutline } from "react-icons/io";
import { CiCircleRemove } from "react-icons/ci";

export default function Upload() {
  const list = [0, 0, 0, 0, 0];

  const [popupToDisplay, setPopupToDisplay] = useState<React.ReactNode | null>(
    null
  );

  const nextPopup = (node: React.ReactNode) => {
    setPopupToDisplay(node);
  };

  const onUploadClick = () => {
    setPopupToDisplay(<FileUploader nextPopup={nextPopup} />);
  };

  return (
    <main className="">
      {popupToDisplay && (
        <FloatingPanel onCloseClick={() => setPopupToDisplay(null)}>
          {popupToDisplay}
        </FloatingPanel>
      )}
      <PanelContainer>
        <h1 className="text-xl">(Files From Previous Step If Applicable)</h1>
        {list.map((_) => (
          <ListItem onClick={() => {}}>
            <h1>SomeData.mp4</h1>
            <h1>24 April 2024</h1>
            <div>
              <span className="rounded px-1 py-0.5 font-bold bg-green-400 text-white mr-3">
                #some-tag
              </span>
              <span className="rounded px-1 py-0.5 font-bold bg-blue-400 text-white">
                #other-tag
              </span>
            </div>
          </ListItem>
        ))}
      </PanelContainer>
      <div className="flex justify-end mt-4">
        <Button
          onClick={() => {
            onUploadClick();
          }}
          value="Upload Files"
          color="red"
        />
      </div>
    </main>
  );
}

function FileUploader(props: { nextPopup: Function }) {
  return (
    <div>
      <div className="bg-gray-50 shadow-inner flex flex-col justify-center items-center w-full h-full mb-4">
        <IoCloudUploadOutline size="250" color="grey" />
        <h1 className="text-gray-500 font-semibold text-xl mb-4">
          Upload Data
        </h1>
      </div>
      <Button
        color="blue"
        onClick={() => {
          props.nextPopup(<TagSelector nextPopup={props.nextPopup} />);
        }}
        value="Next"
      />
    </div>
  );
}

function TagSelector(props: { nextPopup: Function }) {
  return (
    <div>
      <input
        className="border-b-4 outline-none text-2xl font-semibold mb-5 w-52"
        type="text"
        value="File Name"
      />
      <div className="flex items-center mb-5">
        <input
          className="border-b-2 outline-none text-lg flex-grow mr-5"
          type="text"
          placeholder="Add tags"
        />
        <IoIosAddCircleOutline size="20" className="hover:cursor-pointer" />
      </div>
      <div className="bg-gray-50 rounded-lg shadow-inner min-h-40 mb-6 box-border p-3">
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
        <Tag />
      </div>
      <Button
        color="blue"
        onClick={() => {
          console.log("pggers");
          props.nextPopup(<SourceSelector nextPopup={props.nextPopup} />);
        }}
        value="Next"
      />
    </div>
  );
}

function Tag() {
  return (
    <span className="bg-gray-600 inline-block text-white m-1 py-0.5 px-2 rounded">
      #tag
      <CiCircleRemove className="inline ml-1" color="white" />
    </span>
  );
}

function SourceSelector(props: { nextPopup: Function }) {
  return (
    <div>
      <Button
        color="blue"
        onClick={() => {
          <SourceSelector nextPopup={props.nextPopup} />;
        }}
        value="Next"
      />
    </div>
  );
}
