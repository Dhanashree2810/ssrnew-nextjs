'use server'
import { addAppUser,  deleteAppUser, fetchAppUsers, fileUploadAppUser, updateAppUser } from "@/services/appusers";

export async function fetchFunAllUsers() {
    const res = await fetchAppUsers();
    return res;
}

export async function deleteFunAllUsers(data: any) {
    const res = await deleteAppUser(data);
    return res;
}

export async function addFunAllUsers(data: any) {
    const res = await addAppUser(data);
    return res;
}

export async function updateFunAllUsers(data: any) {
    const res = await updateAppUser(data);
    return res;
}

export async function uploadFunAllUsers(file: File) {
    const res = await fileUploadAppUser(file);
    return res;
}
