import { poolRequest, sql } from "../utils/dbConnect.js"; 

export const getGroupService = async () => {
    try {
        const result = await poolRequest().query(`SELECT * FROM [Group]`)
        return result.recordset;
    } catch (error) {
        return error; 
    }
}

export const createGroupService = async (groupname, description, createddate) => {
    try {
        const result = await poolRequest()
            .input('groupid', sql.Int, id) 
            .input('groupname', sql.VarChar, groupname)
            .input('description', sql.VarChar, description)
            .input('createddate', sql.VarChar, createddate)
            .query("INSERT INTO [Group] (groupid, groupname, createddate) VALUES (@groupid, @groupname, @description, @createddate)");
        return result;
    } catch (error) {
        throw error; 
    }
}