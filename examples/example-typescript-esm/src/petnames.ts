import axios, {AxiosResponse} from "axios";

/**
 * Calls the Pet Name API to suggest pet names.
 */
class PetNameService {
    baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    /**
     * Suggest names.
     */
    async suggestNames(): Promise<string[]> {
        const response = await axios.get<any, AxiosResponse<string[]>>(`${this.baseUrl}/names`);
        console.log(`names:`, response.data);
        return response.data;
    }
}

export {PetNameService};
