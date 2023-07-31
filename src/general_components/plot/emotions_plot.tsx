import CanvasJSReact from "@canvasjs/react-charts";
interface Data {
    [emotion: string]: { [tone: string]: number };
}

function PlotEmotions(props: Data) {
    var CanvasJSChart = CanvasJSReact.CanvasJSChart;

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
                dataPoints: Object.keys(props.data).map((emotion) => {
                    return {
                        y: props.data[emotion] * 100, // Multiply by 1,000,000,000 to get a similar scale
                        label:
                            emotion.charAt(0).toUpperCase() + emotion.slice(1), // Capitalize the label

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
