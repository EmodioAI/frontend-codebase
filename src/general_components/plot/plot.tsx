import PlotEmotions from "./emotions_plot";
import PlotTones from "./tones_plot";
import styles from "./plot.module.css";

interface PlotProps {
    setShowPlot: (value: boolean) => void;
    analysisIndex: number;
}

function Plot(props: PlotProps) {
    return (
        <>
            <section className={styles.container} data-testid="plot">
                <div className={styles.plot}>
                    <div className={styles.plot_tones}>
                        <PlotTones />
                    </div>
                    <div className={styles.plot_emotions}>
                        <PlotEmotions />
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
