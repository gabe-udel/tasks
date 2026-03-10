import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [remainingAttempts, setRemainingAttempts] = useState<number>(3);
    const [requestedAttempts, setRequestedAttempts] = useState<number>(0);

    const changeRequested = (
        event: React.ChangeEvent<HTMLInputElement>,
    ): void => {
        setRequestedAttempts(parseInt(event.target.value));
    };

    const increaseAttempts = (x: number) => {
        setRemainingAttempts(remainingAttempts + x);
    };

    return (
        <div style={{ maxWidth: "30%", margin: "0 auto" }}>
            <p>You have {remainingAttempts} attempts left.</p>

            <Form.Group>
                <Form.Label>Request more attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={requestedAttempts}
                    onChange={changeRequested}
                />
            </Form.Group>

            <Button
                onClick={() => {
                    increaseAttempts(-1);
                }}
                disabled={remainingAttempts < 1}
            >
                Use
            </Button>
            <Button
                onClick={() => {
                    if (!isNaN(requestedAttempts)) {
                        increaseAttempts(requestedAttempts);
                    }
                }}
            >
                Gain
            </Button>
        </div>
    );
}
