"use client";

import ListItem from "../components/ListItem";
import PanelContainer from "../components/PanelContainer";
import Title from "../components/Title";

export default function TrainResults() {
    return (
        <div>
            <Title>Previous Training Results</Title>
            <PanelContainer>
                <ListItem color="bg-blue-100" onClick={() => {}}>
                    <h1>YOLOv5</h1>
                    <h1>16 November 2024</h1>
                    <h1>Running</h1>
                </ListItem>
                <ListItem color="bg-red-100" onClick={() => {}}>
                    <h1>YOLOv5</h1>
                    <h1>16 November 2024</h1>
                    <h1>Error</h1>
                </ListItem>
                {[...Array(10)].map((_) => (
                    <ListItem color="bg-green-100" onClick={() => {}}>
                        <h1>YOLOv5</h1>
                        <h1>16 November 2024</h1>
                        <h1>Success</h1>
                    </ListItem>
                ))}
            </PanelContainer>
        </div>
    );
}
