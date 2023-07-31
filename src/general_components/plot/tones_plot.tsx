import CanvasJSReact from "@canvasjs/react-charts";
// var CanvasJSReact = require("@canvasjs/react-charts");

interface Data {
    [emotion: string]: { [tone: string]: number };
}
function PlotTones(props: Data) {
    var CanvasJSChart = CanvasJSReact.CanvasJSChart;


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
                dataPoints: Object.keys(props.data).map((tone) => {
                    return {
                        y: props.data[tone], // Multiply by 1,000,000,000 to get a similar scale
                        label: tone.charAt(0).toUpperCase() + tone.slice(1), // Capitalize the label

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
