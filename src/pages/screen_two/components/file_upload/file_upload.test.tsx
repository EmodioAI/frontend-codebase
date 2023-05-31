import { describe, test, expect } from "vitest";
import { render, fireEvent, waitFor } from "@testing-library/react";

import FileUpload from "./file_upload";

// checks if File upload component is mounted
describe("File upload", () => {
    test("should render the component", () => {
        const { getByTestId } = render(<FileUpload changeButton={() => {}} />);
        const component = getByTestId("file-upload");

        expect(component).toBeInTheDocument();
    });
});

// checks if file can be uploaded
describe("Simulate file upload", () => {
    let file: File;

    beforeEach(() => {
        file = new File(["Hello"], "Test_File.pdf", { type: "pdf" });
    });
    test("should upload file when input box is clicked", async () => {
        const { getByTestId } = render(<FileUpload changeButton={() => {}} />);
        const input = getByTestId("input-file-uploader");

        // simulate upload event and wait until finish
        await waitFor(() =>
            fireEvent.change(input, {
                target: { files: [file] },
            })
        );

        //get rendered component that displays uploaded file content
        const uploadedFileSection = getByTestId("upload-file-details");
        const fileNameSpan = getByTestId("file-name");

        const uploadedFileName = fileNameSpan?.textContent;

        expect(uploadedFileSection).toBeInTheDocument();
        expect(uploadedFileName).toBe("Test_File.pdf");
    });
});
