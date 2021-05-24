import client from "../client";

export default {
    Query:{
        seeUser:(_,{id})=>
            client.user.findUnique({where: {id}}),
    },

    Mutation: {
        createUser: async (_,{email, name})=>{
            return client.user.create({
                data: {
                    email,
                    name
                }
            });
        },
        editUser: async (_,{id, name})=>{
            const updatedUser = await client.user.update({
                where: {
                    id,
                },
                data: {
                    name,
                },
            });

            if(!updatedUser.id){
                return {ok: false,error:"fail user update"}
            } else {
                return {ok: true}
            }
        }
    }


}
