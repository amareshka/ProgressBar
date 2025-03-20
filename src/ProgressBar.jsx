import { useEffect, useState } from "react";

const Progressbar = ({ progressVal }) => {

    const [animatedProgressBar, setAnimatedProgressBar] = useState(0);

    useEffect(() => {
        setTimeout(() => setAnimatedProgressBar(progressVal), 100);
    }, [progressVal])

    return (
        <div className="container">
            <div
                style={{
                    color: animatedProgressBar < 5 ? "#000" : "#fff",
                    transform: `translateX(${animatedProgressBar - 100}%)`
                }}
                className="progressbar"
            >
                {animatedProgressBar}%
            </div>
        </div>
    );
};

export default Progressbar;
