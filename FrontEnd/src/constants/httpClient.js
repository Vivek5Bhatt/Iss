import axios from "axios";
import { base_url } from "./appConstant";

export const httpClient = axios.create({
    baseURL: base_url

})