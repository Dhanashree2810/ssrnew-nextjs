'use server'
import {  fetchEnumDetailsData } from "@/services/enumdetails";


export async function fetchFunEnumDet() {
    const res = await fetchEnumDetailsData();
    return res;
}
