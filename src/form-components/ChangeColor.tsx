import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const [color, setColor] = useState<string>("orange");

    const COLORS: string[] = [
        "red",
        "green",
        "blue",
        "yellow",
        "orange",
        "purple",
        "pink",
        "brown",
    ];

    return (
        <div>
            <h3>Change Color</h3>

            {COLORS.map((x: string) => {
                return (
                    <Form.Check
                        inline
                        type="radio"
                        id={x}
                        key={x}
                        label={x}
                        value={x}
                        onChange={() => {
                            setColor(x);
                        }}
                        checked={x == color}
                    />
                );
            })}
            <div>
                The user has chosen{" "}
                {
                    <p
                        style={{ backgroundColor: color }}
                        data-testid="colored-box"
                    >
                        {color}
                    </p>
                }
            </div>
        </div>
    );
}

// ChangeColor
// The ChangeColor component offers the user a bunch of radio buttons labeled with different colors; choosing a radio button updates the text and color of a nearby box of text.

// You will need state to represent the chosen color
// You are free to make up your own list of colors, but you must have AT LEAST 8 unique colors.
// Each color must be represented by a radio button.
// There should be a box of text with a data-testid="colored-box" attribute and value.
// The box of text should have the same text and backgroundColor style as the currently selected radio button.
// HINT: We strongly recommend you use map to render all the color’s Form.Check tags rather than hardcoding each one!

// HINT: We recommend you use the inline attribute for the radio buttons.
