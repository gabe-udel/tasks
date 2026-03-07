import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";
// import { Record } from

export function ChangeType(): React.JSX.Element {
    const [qType, setQType] = useState<QuestionType>("short_answer_question");

    const transitions: Record<QuestionType, QuestionType> = {
        multiple_choice_question: "short_answer_question",
        short_answer_question: "multiple_choice_question",
    };

    return (
        <div>
            <Button
                onClick={() => {
                    setQType(transitions[qType]);
                }}
            >
                Change Type
            </Button>
            <span>
                {qType === "multiple_choice_question" && "Multiple Choice"}
            </span>
            <span>{qType === "short_answer_question" && "Short Answer"}</span>
        </div>
    );
}
