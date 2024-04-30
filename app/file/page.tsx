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
            <PanelContainer>
                <div className="flex w-full border-b-4 items-center">
                    <input
                        className="mr-4 flex-grow outline-none"
                        type="text"
                        placeholder="Search file by name"
                    />
                    <span>
                        <FaSearch
                            color="gray"
                            className="mr-2 hover:cursor-pointer"
                            size={17}
                        />
                    </span>
                </div>
            </PanelContainer>
            <PanelContainer>
                <input
                    className="w-full border-b-4 flex-grow outline-none"
                    type="text"
                    placeholder="Add tag to querry"
                />
                <div className="bg-gray-50 mt-5 rounded-lg shadow-inner min-h-32 mb-6 box-border p-3">
                    <Tag />
                    <Tag />
                    <Tag />
                    <Tag />
                    <Tag />
                    <Tag />
                    <Tag />
                </div>
            </PanelContainer>
            <FileView />
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
