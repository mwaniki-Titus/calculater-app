import { poolRequest, sql } from "../utils/dbConnect.js";

export const getPostService = async () => {
    try {
        const result= await poolRequest().query(`SELECT * FROM Post`)
        return result.recordset;
    }catch(error){
        return error;
    }
}
