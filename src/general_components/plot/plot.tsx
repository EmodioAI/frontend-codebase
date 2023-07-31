import PlotEmotions from "./emotions_plot";
import PlotTones from "./tones_plot";
import styles from "./plot.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface PlotProps {
    setShowPlot: (value: boolean) => void;
    analysisIndex: number;
}

function Plot(props: PlotProps) {
    const analysisResults = useSelector(
        (state: RootState) => state.analysis_results
    );
    const emotionData = analysisResults[props.analysisIndex].emotion_results
    const toneData = analysisResults[props.analysisIndex].tone_results
    return (
        <>
            <section className={styles.container} data-testid="plot">
                <div className={styles.plot}>
                    <div className={styles.plot_tones}>
                        <PlotTones data={toneData}/>
                    </div>
                    <div className={styles.plot_emotions}>
                        <PlotEmotions data={emotionData}/>
                    </div>
                </div>
                <div className={styles.close}>
                    <p onClick={() => props.setShowPlot(false)}>Close</p>
                </div>
            </section>
        </>
    );
}

export default Plot;
