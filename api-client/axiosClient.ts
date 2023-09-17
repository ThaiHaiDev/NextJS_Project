import axios, { AxiosError } from 'axios'
const axiosClient = axios.create({
	baseURL: '/api',
	headers: {
		'Content-Type': 'application/json',
	},
})

export default axiosClient