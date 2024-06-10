"use server";

import { revalidatePath } from "next/cache";
import User from "../database/models/user.model";
import { connectToDatabase } from "../database/mongoose";
import { handleError } from "../utils";

export async function getUserById(userId:string){
  try{
    await connectToDatabase();
    const user = await User.findOne({clerkId:userId});

    if(!user) throw new Error("user not found");
    return JSON.parse(JSON.stringify(user));
  }catch(error){
    handleError(error);
  }
}