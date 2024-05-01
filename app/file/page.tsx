"use client";

import Button from "../components/Button";
import FileView from "../components/FileView";
import Title from "../components/Title";

export default function File() {
    return (
        <div>
            <Title>All Files</Title>
            <FileView search={true} editable={true} selectable={true}>
                <div className="flex">
                    <div className="w-32 mr-10">
                        <Button color="bg-sky-500" value="Select All" />
                    </div>
                    <div className="w-32 mr-10 ">
                        <Button color="bg-cyan-500" value="Download" />
                    </div>
                    <div className="w-32 mr-10 ">
                        <Button color="bg-green-500" value="Edit Tags" />
                    </div>
                    <div className="w-32">
                        <Button color="bg-red-500" value="Delete" />
                    </div>
                </div>
            </FileView>
        </div>
    );
}
