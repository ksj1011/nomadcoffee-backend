import bcrypt from "bcrypt";
import client from "../../client";

export default {
    Mutation: {
        createAccount: async (_,{
            username,
            email,
            name,
            location,
            password,
            avatarUrl,
            githubUsername
        })=>{
            try {
                // check if username or email are already on DB
                const existingUser = await client.user.findFirst({
                    where: {
                        OR: [
                            {email},
                            {username}
                        ]
                    }
                });
                if(existingUser){
                    throw new Error('This email/username is already taken.');
                }
                // hash password
                const uglyPassword = await bcrypt.hash(password, 10);
                // save and return the user
                await client.user.create({
                    data: {
                        username,
                        email,
                        name,
                        location,
                        password: uglyPassword,
                        avatarUrl,
                        githubUsername
                    }
                });
                return { ok: true }
            }catch (e){
                return { ok: false, error:"create account error" };
            }
        }
    }
}
