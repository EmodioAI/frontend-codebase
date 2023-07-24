import axios from "axios";
import { setToken } from "../store/actions";

export const API_ENDPOINT = "https://backend-codebase-bzbd7k4ura-ew.a.run.app";

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
                //set token
                setToken(response.data.token);
                return response.data.emotions;
            } else {
                throw new Error("Something went wrong");
            }
        }
    });
}

//API call to sreceive synthesised audio from the backend
export async function getAudio(token: string) {
    //helper config
    const getAudioConfig: Params = {
        baseUrl: API_ENDPOINT,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        method: "get",
    };

    return await axios({
        ...getAudioConfig,
        url: `${getAudioConfig.baseUrl}/${"audio_synthesis"}`,
    }).then((response) => {
        if (response.status === 200) {
            if (response.data.status === "success") {
                //set token
                return response;
            } else {
                throw new Error("Something went wrong");
            }
        }
    });
}

//API call to transcribe text from audio
export async function getTranscription(file:File) {
    console.log(file);
    const formData = new FormData();
    formData.append('audio_file', file);
    
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
          if (response.data.transcription == null || response.data.transcription == undefined) {
            throw new Error("No text found");
          }
          return response.data.transcription;
        } else {
          throw new Error("Something went wrong, try again");
        }
      }
    });
  }
  