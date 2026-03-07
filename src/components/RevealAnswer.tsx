import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function RevealAnswer(): React.JSX.Element {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    return (
        <div>
            <Button
                onClick={() => {
                    setIsVisible(!isVisible);
                }}
            >
                Reveal Answer
            </Button>
            <p>{isVisible && "42"}</p>
        </div>
    );
}
