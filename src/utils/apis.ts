import axios from "axios";

export const API_ENDPOINT = "http://127.0.0.1:8000";

//interface for the Helper
interface Params {
    baseUrl: string;
    headers: any;
    method: string;
}

export interface ParagraphData {
    paragraphs: string[];
}

//API call to send texts and receive emotions from the backend
export async function getEmotion(data: ParagraphData) {
    //helper config
    const getEmotionConfig: Params = {
        baseUrl: API_ENDPOINT,
        headers: {
            "Content-Type": "application/json",
        },
        method: "post",
    };

    return await axios({
        ...getEmotionConfig,
        url: `${getEmotionConfig.baseUrl}/${"emotion_classifications"}`,
        data,
    }).then((response) => {
        if (response.status === 200) {
            if (response.data.status === "success") {
                return response.data.emotion;
            } else {
                throw new Error("Something went wrong");
            }
        }
    });
    // .catch((error) => {
    //     alert(error);
    // });
}
