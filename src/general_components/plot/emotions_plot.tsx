import { useState } from "react";
import CanvasJSReact from "@canvasjs/react-charts";

function PlotEmotions() {
    var CanvasJSChart = CanvasJSReact.CanvasJSChart;

    const [emotions] = useState({
        sequence: "I am so happy",
        labels: ["happy", "surprise", "neutral", "sad", "disgust", "anger"],
        scores: [0.94593, 0.04282, 0.00757, 0.00138, 0.00115, 0.00114],
    });

    const options = {
        exportEnabled: true,
        animationEnabled: true,
        title: {
            text: "Emotional Analysis Graphs",
        },
        data: [
            {
                type: "pie",
                startAngle: 75,
                toolTipContent: "<b>{label}</b>: {y}%",
                showInLegend: "true",
                legendText: "{label}",
                indexLabelFontSize: 16,
                indexLabel: "{label} - {y}%",
                dataPoints: emotions.labels.map((label, index) => {
                    return {
                        y: emotions.scores[index] * 100, // Multiply by 100 to get a similar scale
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

export default PlotEmotions;
