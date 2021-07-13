import React from "react";
import "./TestLetter.css";

const TestLetter = ({ individualLetterInfo }) => {
    const statusClassName = {
        1: "test-letter-correct",
        0: "test-letter-incorrect",
        2: "test-letter-not-attempted",
    }[individualLetterInfo.status];

    return (
        <span className={`test-letter ${statusClassName}`}>
            {individualLetterInfo.testLetter}
        </span>
    );
};

export default TestLetter;