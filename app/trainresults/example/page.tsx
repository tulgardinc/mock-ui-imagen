"use client";

import Button from "@/app/components/Button";
import FileView from "@/app/components/FileView";
import PanelContainer from "@/app/components/PanelContainer";
import Title from "@/app/components/Title";
import { FaFile } from "react-icons/fa";

export default function Example() {
    const content = (
        <>
            <div className="flex">
                <div className="mr-5">
                    <FaFile size="24" color="gray" />
                </div>
                <h1>output.txt</h1>
            </div>
            <h1>4 April 2024</h1>
            <div>
                <span className="bg-green-500 rounded-lg px-2 py-0.5 font-semibold text-white mr-2">
                    #Output Tag
                </span>
            </div>
        </>
    );

    return (
        <div>
            <Title>(Data Related To Training)</Title>
            <FileView
                file={content}
                search={false}
                selectable={true}
                editable={false}
            >
                <div className="flex justify-end">
                    <div className="mr-4">
                        <Button value="Save Model" color="bg-green-500" />
                    </div>
                    <Button value="Download" color="bg-red-500" />
                </div>
            </FileView>
        </div>
    );
}
