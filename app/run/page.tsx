"use client";
import { IoIosArrowDropdown } from "react-icons/io";
import FileView from "../components/FileView";
import PanelContainer from "../components/PanelContainer";
import Title from "../components/Title";
import Button from "../components/Button";
import TagQuerry from "../components/TagQuerry";

export default function Run() {
    return (
        <div>
            <Title>Select Input Data</Title>
            <FileView search={true} editable={false} selectable={true} />
            <Title>Select Output Tags</Title>
            <TagQuerry placeholder="Output tags"></TagQuerry>
            <PanelContainer>
                <div className="flex justify-between">
                    <div className="flex">
                        <div className="w-40 shadow-md box-border rounded-xl bg-purple-500 h-13 text-white text-xl font-bold flex justify-center items-center hover:cursor-pointer hover:bg-purple-700 mr-5">
                            YOLOv5{" "}
                            <IoIosArrowDropdown className="inline ml-2" />
                        </div>
                        <div className="w-40 shadow-md box-border rounded-xl bg-blue-500 h-13 text-white text-xl font-bold flex justify-center items-center hover:cursor-pointer hover:bg-blue-700">
                            v2.6 <IoIosArrowDropdown className="inline ml-2" />
                        </div>
                    </div>
                    <Button
                        value="Run Model"
                        color="bg-red-500"
                        onClick={() => {}}
                    />
                </div>
            </PanelContainer>
        </div>
    );
}
