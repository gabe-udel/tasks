import React from "react";
import "./App.css";
import img from "./images/dolphin.jpeg";
import { Button, Container, Row, Col } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>This is header text</h1>
            <img
                src={img}
                alt="Here is an image of a complacent-looking dolphin."
            ></img>

            <ol>
                <li>First thing</li>
                <li>Another thing</li>
                <li>A third item</li>
            </ol>

            <Button
                onClick={() => {
                    console.log("Hello World!");
                }}
            >
                Log Hello World
            </Button>

            <Container
                id="container"
                style={{ height: 30, width: 30, backgroundColor: "red" }}
            >
                <Row>
                    <Col>First column.</Col>
                    <Col>Second column.</Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
