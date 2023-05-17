
type StepNumber = 1 | 2 | 3 | 4 ;
export interface ProgressBarProps {
    step: StepNumber;
  }

/**
 * Structure of props to pass to a progress bar
 
    /**
     * The current step of the progress bar
     * @type {StepNumber}
     * @memberof ProgressBarProps
     * @default '1'
     * @example
     * <ProgressBar step='1' />
     * <ProgressBar step='2' />
     * <ProgressBar step='3' />
     * <ProgressBar step='4' />
     * <ProgressBar step='5' />
     * <ProgressBar step='6' />
     * <ProgressBar step='7' />
     * <ProgressBar step='8' />
     * <ProgressBar step='9' />
     * 
     * @description
     * The step prop is used to determine which step of the progress bar to display
 */ 
  
// Path: /src/general_components/progress_bar/progress_bar.tsx
  