import { useState } from "react";
import CanvasJSReact from "@canvasjs/react-charts";
// var CanvasJSReact = require("@canvasjs/react-charts");

function PlotTones() {
    var CanvasJSChart = CanvasJSReact.CanvasJSChart;

    const [tones] = useState({
        sequence: "I am so happy",
        labels: ["positive", "neutral", "negative"],
        scores: [0.99139, 0.0064, 0.00221],
    });

    const options = {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: "Emotional Tones Graphs",
        },
        axisX: {
            title: "Tones",
            reversed: true,
        },
        axisY: {
            title: "Scores",
            includeZero: true,
            minimum: 0,
        },
        data: [
            {
                type: "bar",
                dataPoints: tones.labels.map((label, index) => {
                    return {
                        y: tones.scores[index], // Multiply by 1,000,000,000 to get a similar scale
                        label: label.charAt(0).toUpperCase() + label.slice(1), // Capitalize the label
                    };
                }),
            },
        ],
    };
    return (
        <div>
            <CanvasJSChart options={options} />
        </div>
    );
}

export default PlotTones;
