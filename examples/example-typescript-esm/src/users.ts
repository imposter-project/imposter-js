import axios from "axios";

/**
 * Calls the
 */
class UserService {
    baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async addUser(userName: string) {
        const response = await axios.post(`${this.baseUrl}/users/${userName}`);
        console.log(`add user response:`, response.data);
        return response.data;
    }
}

export {UserService};
