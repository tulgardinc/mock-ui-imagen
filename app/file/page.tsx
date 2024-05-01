"use client";

import { CiCircleRemove } from "react-icons/ci";
import FileView from "../components/FileView";
import PanelContainer from "../components/PanelContainer";
import Title from "../components/Title";
import { FaSearch } from "react-icons/fa";

export default function File() {
  return (
    <div>
      <Title>All Files</Title>
      <FileView />
    </div>
  );
}
