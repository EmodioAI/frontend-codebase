import React, { useRef, useState, useEffect } from "react";
import styles from "../../components/file_upload/file_upload.module.css";
import { FaCloudUploadAlt } from "react-icons/fa";
import { ScreenTwoProps } from "../../screen_two.props";
import { useQuery } from "@tanstack/react-query";
import { getTranscription } from "../../../../utils/apis";
import {
    setNotificationDetails,
    setUploadedTextContent,
    setNewFileContentState,
    setNewAnalysisContentState,
    setNewAudioContentState,
} from "../../../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import Notification from "../../../../general_components/notification_box/notification_box";

// interface MyResponse {
//     error?: string;
// }

function AudioUpload(props: ScreenTwoProps) {
    const dispatch = useDispatch();

    const status = useSelector((state: RootState) => state.status);
    const isNewAudio = useSelector(
        (state: RootState) => state.isNewFileContent
    );

    const audioFileRef = useRef<HTMLInputElement>(null);

    const [audioFile, setAudiofile] = useState<File>();

    const { data, isFetching, isError, error } = useQuery({
        queryKey: ["transcription"],
        enabled: isNewAudio,
        queryFn: () => getTranscription(audioFile as File),
    });

    useEffect(() => {
        // Function to run when the selectedFile state changes
        props.changeButton("disabled");
    }, []);

    useEffect(() => {
        if (!isFetching && isNewAudio) {
            // check if data is available
            if (data) {
                dispatch(setUploadedTextContent([data]));
                props.changeButton("enabled");
                dispatch(setNewFileContentState(false));
                dispatch(setNewAnalysisContentState(true));
                dispatch(setNewAudioContentState(true));
                dispatch(
                    setNotificationDetails({
                        status: true,
                        message: "Speech transcription successful",
                        state: "success",
                    })
                );
            }
        }

        // Check if there was an error
        if (isError) {
            dispatch(
                setNotificationDetails({
                    status: true,
                    message: "Error occured while uploading file",
                    state: "error",
                })
            );
            props.changeButton("disabled");
            dispatch(setNewFileContentState(false));
        }
    }, [data, error, isFetching, isError, isNewAudio]);

    const handleFormClick = () => {
        if (audioFileRef.current) {
            audioFileRef.current.click(); // Trigger the file input click event
        }
    };

    // function to accept file input
    async function handleFileChange(
        event: React.ChangeEvent<HTMLInputElement>
    ) {
        const file = event.target.files?.[0];

        if (file) {
            // check if file is audio
            const allowedExtensions = ["wav", "mp3"];
            const fileExtension =
                file.name.split(".").pop()?.toLowerCase() || "";

            // check if file extension is allowed
            if (allowedExtensions.includes(fileExtension)) {
                // set file to state
                setAudiofile(file);
                dispatch(setNewFileContentState(true));
            }
        } else {
            props.changeButton("disabled");
            dispatch(setNewFileContentState(false));
        }
    }

    return (
        <>
            {status && <Notification />}

            <div data-testid="file-upload" className={styles.container}>
                <form onClick={handleFormClick}>
                    <input
                        data-testid="input-file-uploader"
                        type="file"
                        className={styles.fileInput}
                        accept=".wav,.mp3"
                        hidden
                        onChange={handleFileChange}
                        ref={audioFileRef}
                    />
                    <i>
                        <FaCloudUploadAlt />
                    </i>
                    <p>Browse File to Upload</p>
                    <p className={styles.formInfo}>Supported files: MP3,WAV</p>
                </form>
            </div>
        </>
    );
}
export default AudioUpload;
