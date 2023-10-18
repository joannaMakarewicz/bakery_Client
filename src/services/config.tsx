import axios  from "axios";


const { REACT_APP_DB_ID, REACT_APP_API_KEY } = process.env


// const REACT_APP_DB_ID = "appN0iO6hcNPbTv2d"
// const REACT_APP_API_KEY = "patBEpD2JS3QQTqo8.af08141e25a0c8bd47a23e2fd006d813569bcb97e502c6cca01396f4ff5eea2e"

const BASE_URL = `https://api.airtable.com/v0/${REACT_APP_DB_ID}`;


const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Authorization": `Bearer ${REACT_APP_API_KEY}`,
      },
  });

export default axiosInstance;