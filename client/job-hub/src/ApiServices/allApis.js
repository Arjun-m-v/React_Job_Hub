import base_url from "./base_url";
import commonApi from "./commonApi";

//to get company job details...
export const getCompanies=async(header)=>{
    return await commonApi(header,"",`${base_url}/company/`,"GET")
}

export const getSpecificCompany=(id,header)=>{
    return commonApi(header,"",`${base_url}/company/${id}/`,"GET")
}


export const getEmployees=async(header)=>{
    return await commonApi(header,"",`${base_url}/employee/`,"GET")
}

export const addEmployee=async(header,data)=>{
    return await commonApi(header,data,`${base_url}/employee/`,"POST")
}

export const addCompany=async(header,data)=>{
    return await commonApi(header,data,`${base_url}/company/`,"POST")
}

export const UserRegister=async(data)=>{
    return await commonApi("",data,`${base_url}/user/`,"POST")
}

export const getToken=async(data)=>{
    return await commonApi("",data,`${base_url}/token`,"POST")
}

export const getAppliedCompanies=async(header)=>{
    return await commonApi(header,"",`${base_url}/jobs/`,"GET")
}
