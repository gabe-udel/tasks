import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [isEditMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setStudent] = useState<boolean>(true);

    const changeName: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setName(event.target.value);
    };

    const changeStudent: React.ChangeEventHandler<HTMLInputElement> = (
        event,
    ) => {
        setStudent(event.target.checked);
    };

    return (
        <div style={{ maxWidth: "30%", margin: "0 auto" }}>
            <Form.Check
                style={{ maxWidth: "150px", margin: "0 auto" }}
                type="switch"
                id="is-happy-check"
                label="Edit Mode"
                checked={isEditMode}
                onChange={() => {
                    setEditMode(!isEditMode);
                }}
            />

            {isEditMode ?
                <div>
                    <p>Welcome to Edit Mode</p>
                    <Form.Group>
                        <Form.Label>Enter your name:</Form.Label>
                        <Form.Control value={name} onChange={changeName} />

                        <Form.Check
                            id="student-check"
                            type="checkbox"
                            label="Are you a student?"
                            checked={isStudent}
                            onChange={changeStudent}
                        />
                    </Form.Group>
                </div>
            :   <div>
                    <p>Welcome to View Mode</p>
                    <p>
                        {name} is {isStudent ? "" : "not"} a student
                    </p>
                </div>
            }
        </div>
    );
}

// EditMode
// The EditMode component has two states controlled by a switch: the default state shows text indicating the user’s name
//  and whether they are a student, and then the alternate state is an editable form for editing the user’s name and whether they are a student.

// You will need state to handle the component being in “edit mode”, the user’s name, and whether or not the user is a student.
// The state of “edit mode” should be controlled by a switch (not a button or checkbox).
// Initially, the component is NOT in edit mode, the user’s name is literally the string Your Name (as in, that exact string, not your actual name), and the user IS a student.
// When not in edit mode, the text of the component must include Your Name is a student or Your Name is not a student.
// As another example, if the user entered their name as Charles Babbage and said they were NOT a student, then the text would be Charles Babbage is not a student.
// Whether or not the user is a student should be controlled by a regular checkbox, not a switch or button.
// HINT: We said “switch” and we meant it.

// HINT: If you can’t figure out why you are failing a test, read the test code. The tests are the most specific form of description.

// HINT: If an element is rendered not visible, then a test looking for it will fail. If a test fails, check to see if the elements you have written are rendered in the Javascript.
