import React, { useState } from "react";
import { Form } from "react-bootstrap";

interface CheckAnswerProps {
    expectedAnswer: string;
}

export function CheckAnswer({
    expectedAnswer,
}: CheckAnswerProps): React.JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }

    return (
        <div style={{ maxWidth: "30%", margin: "0 auto" }}>
            <Form.Group>
                <Form.Label>Enter your answer</Form.Label>
                <Form.Control value={answer} onChange={updateName} />
            </Form.Group>
            <div>{answer === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
