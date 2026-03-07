import React, { useState } from "react";
import { Button } from "react-bootstrap";

// type Holiday =
//     | "Christmas 🎁"
//     | "Halloween 🎃"
//     | "Easter 🐇"
//     | "Saint Patrick's Day 🍀"
//     | "New Year 🎉";

export function CycleHoliday(): React.JSX.Element {
    type Holiday = "🎁" | "🎃" | "🐇" | "🍀" | "🎉";

    const cycleAlpha: Record<Holiday, Holiday> = {
        "🎁": "🐇",
        "🐇": "🎃",
        "🎃": "🎉",
        "🎉": "🍀",
        "🍀": "🎁",
    };

    const cycleTime: Record<Holiday, Holiday> = {
        "🎉": "🍀",
        "🍀": "🐇",
        "🐇": "🎃",
        "🎃": "🎁",
        "🎁": "🎉",
    };

    const [holiday, setHoliday] = useState<Holiday>("🎁");

    return (
        <div>
            <p>Holiday: {holiday}</p>
            <div>
                <Button
                    onClick={() => {
                        setHoliday(cycleAlpha[holiday]);
                    }}
                >
                    Advance by Alphabet
                </Button>
                <Button
                    onClick={() => {
                        setHoliday(cycleTime[holiday]);
                    }}
                >
                    Advance by Year
                </Button>
            </div>
        </div>
    );
}
