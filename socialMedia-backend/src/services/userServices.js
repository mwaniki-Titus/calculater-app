import { poolRequest, sql } from "../utils/dbConnect.js"; 

export const getUserService = async () => {
    try {
        const result = await poolRequest().query("SELECT * FROM [User]");
        return result.recordset;
    } catch (error) {
        throw error; 
    }
}

export const getUserByIdService = async (id) => {
    try {
        const result = await poolRequest()
            .input('id', sql.Int, id)
            .query("SELECT * FROM [User] WHERE id = @id");
        return result.recordset[0]; 
    } catch (error) {
        throw error; 
    }
}


export const createUserService= async (newUser) => {
  try {
    const result = await poolRequest()
      .input("UserID", sql.Int, newUser.UserID)
      .input("Username", sql.VarChar, newUser.Username)
      .input("Email", sql.VarChar, newUser.Email)
      .input("Password", sql.VarChar, newUser.Password)
      .input("TagName", sql.VarChar, newUser.TagName)
      .input("location",sql.VarChar,newUser.Location)
      .query(
        "INSERT INTO [User](UserID, Username, Email, Password, TagName, Location) VALUES (@UserID, @Username,@Email,@Password,@TagName,@Location)"
      );
    return result;
  } catch (error) {
    return error;
  }
};


export const updateUserService = async (UserID, userData) => {
    try {
        const result = await poolRequest()
            .input('UserID', sql.Int, UserID)
            .input('Username', sql.VarChar, userData.username)
            .input('Email', sql.VarChar, userData.email)
            .input('Password', sql.VarChar, userData.password)
            .input('TagName', sql.VarChar, userData.tagname)
            .input('Location', sql.VarChar, userData.location)
            .query("UPDATE [User] SET username = @Username, email = @Email, password = @Password, tagname = @TagName, location = @Location WHERE UserID = @UserID");
        return result; 
    } catch (error) {
        throw error; 
    }
}


export const deleteUserService = async (id) => {
    try {
        const result = await poolRequest()
            .input('id', sql.Int, id)
            .query("DELETE FROM [User] WHERE UserID = @id"); 
        return result; 
    } catch (error) {
        throw error; 
    }
}










