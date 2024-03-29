import client from "../client";

export default {
  User:{
    totalFollowing:({id})=>
      client.user.count({
        where: {
          followers: {
            some: {
              id,
            }
          }
        }
      }
    ),
    totalFollowers:({id})=>
      client.user.count({
        where: {
          following: {
            some: {
              id,
            }
          }
        }
      }
    ),
  }
}
