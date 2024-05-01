import { FaFile, FaSearch } from "react-icons/fa";
import ListItem from "./ListItem";
import { IoMdDownload } from "react-icons/io";
import React, { useState } from "react";
import PanelContainer from "./PanelContainer";
import Tag from "./Tag";
import SearchBar from "./SearchBar";
import TagQuerry from "./TagQuerry";
import SelectableListItem from "./SelectableListItem";
import { IoIosAddCircleOutline } from "react-icons/io";
import Button from "./Button";

export default function FileView(props: {
    children?: React.ReactNode;
    file?: React.ReactNode;
    selectable: boolean;
    editable: boolean;
    search: boolean;
}) {
    return (
        <div>
            {props.search && (
                <div>
                    <PanelContainer>
                        <SearchBar placeholder="File name" />
                    </PanelContainer>

                    <TagQuerry placeholder="Querry tag">
                        <Tag removeable={true} />
                        <Tag removeable={true} />
                        <Tag removeable={true} />
                        <Tag removeable={true} />
                        <Tag removeable={true} />
                        <Tag removeable={true} />
                    </TagQuerry>
                </div>
            )}

            {props.children && (
                <PanelContainer>{props.children}</PanelContainer>
            )}

            <PanelContainer>
                {[...Array(9)].map((_, i) => (
                    <ExtendableFileView
                        selectable={props.selectable}
                        editable={props.editable}
                        file={props.file}
                        key={i}
                    />
                ))}
            </PanelContainer>
        </div>
    );
}

function ExtendableFileView(props: {
    selectable: boolean;
    editable: boolean;
    file: React.ReactNode;
}) {
    const [extended, setExtended] = useState(false);
    const [selected, setSelected] = useState(false);

    const content = props.file ? (
        props.file
    ) : (
        <>
            <div className="flex">
                <div className="mr-5">
                    <FaFile size="24" color="gray" />
                </div>
                <h1>penapig20u4023.mp4</h1>
            </div>
            <h1>4 April 2024</h1>
            <div>
                <span className="bg-green-500 rounded-lg px-2 py-0.5 font-semibold text-white mr-2">
                    #Pen A
                </span>
                <span className="bg-blue-500 rounded-lg px-2 py-0.5 font-semibold text-white mr-2">
                    #Pig
                </span>
                <span className="bg-red-500 rounded-lg px-2 py-0.5 font-semibold text-white">
                    #Camera 24
                </span>
            </div>
        </>
    );

    const listItem = props.selectable ? (
        <SelectableListItem
            margin="m-0"
            onClick={() => {
                setExtended(!extended);
            }}
            onSelect={() => setSelected(!selected)}
            selected={selected}
        >
            {content}
        </SelectableListItem>
    ) : (
        <ListItem
            margin="m-0"
            onClick={() => {
                setExtended(!extended);
            }}
        >
            {content}
        </ListItem>
    );

    return (
        <div className="mb-4">
            {extended ? (
                <div
                    style={{ borderRadius: "50px 50px 0 0" }}
                    className="bg-white"
                >
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
                            <h1>Uploaded By: Wouter Wouter</h1>
                            <h1>Created on: 24th April 2024</h1>
                            <h1>Type: Raw Data</h1>
                        </div>
                        <div>
                            <span>Tags: </span>
                            <Tag removeable={props.editable} />
                            <Tag removeable={props.editable} />
                            <Tag removeable={props.editable} />
                            <Tag removeable={props.editable} />
                            {props.editable && (
                                <span className="text-gray-500 box-border border-gray-500 border-2 inline-block m-1 py-0.5 px-2 rounded">
                                    Add
                                    <IoIosAddCircleOutline className="inline ml-1 text-gray-500" />
                                </span>
                            )}
                        </div>
                        <div>
                            <span>Implied Tags:</span>
                            <Tag />
                            <Tag />
                            <Tag />
                            <Tag />
                            <Tag />
                            <Tag />
                        </div>
                        <div className="flex justify-end">
                            <div>
                                <div className="bg-slate-400 hover:cursor-pointer rounded-md font-semibold text-white inline px-3 py-0.5">
                                    <span className="mr-1">Download</span>
                                    <IoMdDownload className="inline" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
