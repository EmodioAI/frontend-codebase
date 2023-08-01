import axios, { AxiosResponse } from "axios";

export const API_ENDPOINT = "https://backend-service-bzbd7k4ura-od.a.run.app";

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
                return {
                    emotions: response.data.results,
                    token: response.data.token,
                };
            } else {
                throw new Error("Something went wrong");
            }
        }
    });
}

//API call to recieve audio from the backend
export async function getAudio(token: string): Promise<HTMLAudioElement> {
    const getAudioConfig = {
        baseUrl: API_ENDPOINT,
        headers: {
            "Content-Type": "audio/mpeg",
            Authorization: `Bearer ${token}`,
        },
        method: "get",
        responseType: "arraybuffer" as "arraybuffer",
    };

    try {
        const response: AxiosResponse = await axios({
            ...getAudioConfig,
            url: `${getAudioConfig.baseUrl}/${"audio_synthesis/"}`,
        });

        if (response.status === 200 && response.data) {
            // Create a Blob from the audio data
            const audioBlob = new Blob([response.data], { type: "audio/mpeg" });
            const audioElement = new Audio();
            audioElement.src = URL.createObjectURL(audioBlob);
            return audioElement;
        } else {
            throw new Error("Something went wrong");
        }
    } catch (error) {
        console.error("Error fetching audio:", error);
        throw error; // Re-throw the error to maintain the return type
    }
}

//API call to transcribe text from audio
export async function getTranscription(file: File) {
    const formData = new FormData();
    formData.append("audio_file", file);

    //helper config
    const getTranscriptionConfig = {
        baseUrl: API_ENDPOINT,
        method: "post",
    };

    return await axios({
        ...getTranscriptionConfig,
        url: `${getTranscriptionConfig.baseUrl}/${"speech_transcription"}`,
        data: formData,
    }).then((response) => {
        if (response.status === 200) {
            if (response.data.status === "success") {
                
                return response.data.transcription;
            } else {
                throw new Error("Something went wrong, try again");
            }
        }
    });
}
