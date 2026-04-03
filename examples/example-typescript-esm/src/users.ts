/**
 * Calls the
 */
class UserService {
    baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async addUser(userName: string) {
        const response = await fetch(`${this.baseUrl}/users/${userName}`, { method: 'POST' });
        const data = await response.text();
        console.log(`add user response:`, data);
        return data;
    }
}

export {UserService};
