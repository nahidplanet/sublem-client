import axios from "axios";
import { api } from "../urlConfig";

const axiosInst = axios.create({
	baseURL: api,
	headers: {
		'authorization': `Bearer ${localStorage.getItem('accessToken')}`,
		'content-type': 'application/json'
	}
});

export default axiosInst;