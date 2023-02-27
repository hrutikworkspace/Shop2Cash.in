/** @format */
import { makeObservable, action, observable } from "mobx";
import axios from "./axiosInterceptor";

export default class ServiceStore {
	planList = null;
	

	constructor() {
		makeObservable(this, {
			GetAllData:observable,
			InsertData:action,
			UpdateData:action,
			GetDataByID:action,
			DeleteData:action,
			Login:action,
			GetDataBYFilter:action,
			UploadFile:action,
			UploadFileOHIFServer:action
		
		});
	}
	
	Login = (method,data) => {
		return axios
			.post(method, data)
			.then((response) => {
				console.log("response:::::",response)
				return { response }
				
			})
			.catch((error) => {
				// console.log("error",error)
				if(error.response.data == ''){
					const response = {data:error.response.data,status:0}
					return {response}
				}
				return Promise.reject(error);
			});
	};
	GetAllData = (method) => {
		return axios
			.get(method)
			.then((response) => {
				let data = [];
				let error = "success";
				if (response.status == 1) {
					 error = "success";
					  data = response.data;
				} else {
					error = "error";
				}
				return { data, error };
			})
			.catch((error) => {
				return Promise.reject(error);
			});
	};

	InsertData = (method,data) => {
		console.log("method::::::::::::::",method)
		return axios
			.post(method, JSON.stringify(data))
			.then((response) => {
				console.log("response:::::",response)
				return { response }
				// let data = response;
				// let error = "success";
				// if (response.responseCode === 200) {
				// 	this.adminPropertyList = response.responseData;
				// } else {
				// 	error = "error";
				// }
				// return { data, error };
			})
			.catch((error) => {
				return Promise.reject(error);
			});
	};
	UpdateData = (method,data) => {
		console.log("method",method)
		return axios
			.put(method, data)
			.then((response) => {
				console.log("response:::::",response)
				return { response }
				// let data = response;
				// let error = "success";
				// if (response.responseCode === 200) {
				// 	this.adminPropertyList = response.responseData;
				// } else {
				// 	error = "error";
				// }
				// return { data, error };
			})
			.catch((error) => {
				return Promise.reject(error);
			});
	};


	GetDataByID = (method,id) => {
		return axios
			.get(method+id)
			.then((response) => {
				let data = [];
				let msg = "success";
				if (response.status == 1) {
					msg = "success";
					  data = response.data;
				} else {
					msg = "error";
				}
				return { data, msg };
			})
			.catch((error) => {
				return Promise.reject(error);
			});
	};
	
	DeleteData = (method,id) => {
		return axios
			.delete(method+id)
			.then((response) => {
				let data = [];
				let msg = "success";
				if (response.status == 1) {
					msg = "success";
					  data = response.data;
				} else {
					msg = "error";
				}
				return { data, msg };
			})
			.catch((error) => {
				return Promise.reject(error);
			});
	};

	GetDataBYFilter = (method,data) => {
		return axios
			.post(method, data)
			.then((response) => {
				console.log("response:::::",response)
				return { response }
				// let data = response;
				// let error = "success";
				// if (response.responseCode === 200) {
				// 	this.adminPropertyList = response.responseData;
				// } else {
				// 	error = "error";
				// }
				// return { data, error };
			})
			.catch((error) => {
				return Promise.reject(error);
			});
	};

	UploadFile = (method,data) => {
		console.log("data:::::::::::::::::",data)
		return axios
			.post(method, data)
			.then((response) => {
				console.log("response:::::",response)
				let data = response;
				let error = "success";
				// if (response.responseCode === 200) {
				// 	this.adminPropertyList = response.responseData;
				// } else {
				// 	error = "error";
				// }
				return { data, error };
			})
			.catch((error) => {
				return Promise.reject(error);
			});
	};
	UploadFileOHIFServer = (method,data) => {
		console.log("data:::::::::::::::::",data)
		return axios
			.post(method, data)
			.then((response) => {
				console.log("response:::::",response)
				let data = response;
				let error = "success";
				// if (response.responseCode === 200) {
				// 	this.adminPropertyList = response.responseData;
				// } else {
				// 	error = "error";
				// }
				return { data, error };
			})
			.catch((error) => {
				return Promise.reject(error);
			});
	};


	
	


	



	
	
	

}
