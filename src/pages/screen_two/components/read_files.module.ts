import PizZip from "pizzip";
import { DOMParser } from "@xmldom/xmldom";
import {
    GlobalWorkerOptions,
    getDocument,
    PDFDocumentProxy,
} from "pdfjs-dist/legacy/build/pdf";

GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/3.7.107/pdf.worker.js`;

function str2xml(str: string) {
    if (str.charCodeAt(0) === 65279) {
        // BOM sequence
        str = str.substr(1);
    }
    return new DOMParser().parseFromString(str, "text/xml");
}

// Get paragraphs as javascript array
export function getParagraphs(content: string) {
    const zip = new PizZip(content);
    const xml = str2xml(zip.files["word/document.xml"].asText());
    const paragraphsXml = xml.getElementsByTagName("w:p");
    const paragraphs = [];

    for (let i = 0, len = paragraphsXml.length; i < len; i++) {
        let fullText = "";
        const textsXml = paragraphsXml[i].getElementsByTagName("w:t");
        for (let j = 0, len2 = textsXml.length; j < len2; j++) {
            const textXml = textsXml[j];
            if (textXml.childNodes) {
                fullText += textXml.childNodes[0].nodeValue;
            }
        }
        if (fullText) {
            paragraphs.push(fullText);
        }
    }
    return paragraphs;
}

//Read text from pdfs
export async function readPDFText(file: File): Promise<string> {
    const pdf: PDFDocumentProxy = await getDocument(URL.createObjectURL(file))
        .promise;
    const totalPages = pdf.numPages;
    let text = "";

    for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
        const page = await pdf.getPage(pageNumber);
        const content = await page.getTextContent();

        const pageText = content.items
            .map((item) => {
                if ("str" in item) {
                    return item.str;
                }
                return "";
            })
            .join(" ");

        text += pageText + "\n";
    }
    return text;
}
