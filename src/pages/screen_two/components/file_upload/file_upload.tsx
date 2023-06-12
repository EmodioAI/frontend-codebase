import React, { useRef, useState, useEffect } from "react";
import styles from "./file_upload.module.css";
import { FaCheck, FaCloudUploadAlt } from "react-icons/fa";
import { BsFileTextFill } from "react-icons/bs";
import { ScreenTwoProps } from "../../screen_two.props";
import { getParagraphs } from "../read_files.module";


function FileUpload(props: ScreenTwoProps) {
    const [selectedFile, setselectedFile] = useState<File>();
    const fileInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        // Function to run when the selectedFile state changes
        if (!selectedFile) {
            props.changeButton("disabled");
        } else {
            props.changeButton("enabled");
        }

        // Clean-up function (optional)
        return () => {
            props.changeButton("disabled");
        };
    }, [selectedFile]);

    const handleFormClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click(); // Trigger the file input click event
        }
    };

    // function to accept file input
    function handleFileChange(
        event: React.ChangeEvent<HTMLInputElement>
    ) {
        const file = event.target.files?.[0];

        if (file) {
            const allowedExtensions = ["pdf", "doc", "docx",'txt'];
            const fileExtension =
                file.name.split(".").pop()?.toLowerCase() || "";

            if (allowedExtensions.includes(fileExtension)) {
                // File is accepted
                setselectedFile(file);
                props.changeButton("enabled");

                if (fileExtension === "docx" || fileExtension === "doc") {
                    const reader = new FileReader();

                    reader.onload = (event: ProgressEvent<FileReader>) => {
                        const content = event.target?.result as string;
                        const paragraphs = getParagraphs(content);
                        console.log(paragraphs);
                    };

                    reader.onerror = (err) => console.error(err);

                    reader.readAsBinaryString(file);
                }
               
                
                else {
                    console.log("Unsupported file format");
                }
            } else {
                // File is rejected
                alert("Invalid file type. Please select a PDF or DOC file.");
                props.changeButton("disabled");
            }
        }
    }

    //function to format file size
    function formatFileSize(sizeInBytes: number): string {
        const units = ["B", "KB", "MB", "GB"];
        let fileSize = sizeInBytes;
        let unitIndex = 0;

        while (fileSize >= 1024 && unitIndex < units.length - 1) {
            fileSize /= 1024;
            unitIndex++;
        }

        return fileSize.toFixed(1) + units[unitIndex];
    }

    return (
        <>
            <div data-testid="file-upload" className={styles.container}>
                <form onClick={handleFormClick}>
                    <input
                        data-testid="input-file-uploader"
                        type="file"
                        className={styles.fileInput}
                        accept=".pdf,.doc,.docx,.PDF"
                        hidden
                        onChange={handleFileChange}
                        ref={fileInputRef}
                    />
                    <i>
                        <FaCloudUploadAlt />
                    </i>
                    <p>Browse File to Upload</p>
                    <p className={styles.formInfo}>
                        Supported files: DOCX, DOC, PDF
                    </p>
                </form>

                {selectedFile ? (
                    <section
                        className={styles.uploadedArea}
                        data-testid="upload-file-details"
                    >
                        <li className={styles.row}>
                            <div className={styles.content}>
                                <i>
                                    <BsFileTextFill />
                                </i>
                                <div className={styles.details}>
                                    <span
                                        className={styles.name}
                                        data-testid="file-name"
                                    >
                                        {selectedFile.name}
                                    </span>
                                    <span className={styles.size}>
                                        {formatFileSize(selectedFile.size)}
                                    </span>
                                </div>
                            </div>
                            <i>
                                <FaCheck />
                            </i>
                        </li>
                    </section>
                ) : null}
            </div>
        </>
    );
}

export default FileUpload;
