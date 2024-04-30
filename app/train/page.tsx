"use client";

import Button from "../components/Button";
import FileView from "../components/FileView";
import PanelContainer from "../components/PanelContainer";
import { IoIosArrowDropdown } from "react-icons/io";
import Title from "../components/Title";

export default function Train() {
    return (
        <div>
            <Title>Parameters</Title>
            <PanelContainer>
                <div className="flex justify-between">
                    <div className="w-40 shadow-md box-border rounded-xl bg-purple-500 h-13 text-white text-xl font-bold flex justify-center items-center hover:cursor-pointer hover:bg-purple-700">
                        YOLOv5 <IoIosArrowDropdown className="inline ml-2" />
                    </div>
                    <Input />
                    <Input />
                    <Input />
                </div>
                <div className="flex justify-between mt-8">
                    <Input />
                    <Input />
                    <Input />
                    <Input />
                </div>
            </PanelContainer>
            <Title>Training Data</Title>
            <FileView />
            <div className="mt-5">
                <Button color="bg-red-500" onClick={() => {}} value="Train" />
            </div>
        </div>
    );
}

function Input() {
    return (
        <input
            className="px-2 w-40 border-4 outline-none rounded-xl h-12"
            type="text"
            placeholder="parameter"
        />
    );
}
