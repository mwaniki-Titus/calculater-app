import { poolRequest, sql } from "../utils/dbConnect.js";


export const getEventService = async () => {
    try {
        const result= await poolRequest().query(`SELECT * FROM Event`)
        return result.recordset;
    }catch(error){
        return error;
    }
}