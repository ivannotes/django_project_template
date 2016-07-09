export const USER_ADD = "USER_ADD";
export const USER_REMOVE = "USER_REMOVE";

export function addUser(user) {
    return {
        type: USER_ADD,
        user: user
    };
}

export function removeUser(userId) {
    return {
        type: USER_REMOVE,
        userId: userId
    }
}
