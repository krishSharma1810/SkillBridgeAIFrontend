import React from "react";
import FlipWords from "../ui/flip-words";

function FlipWordsDemo() {
    const words = ["summaries", "key takeaways", "learning resources", "recommended articles" , "videos"];

    return (
        (<div className="h-[11rem] flex justify-center items-center px-4">
            <div
                className="text-3xl mx-auto font-normal  dark:bg-neutral-1200">
                SkillBridge AI enhances your understanding by providing
                <FlipWords words={words} />.
            </div>
        </div>)
    );
}

export default FlipWordsDemo
