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
        const response = await fetch(`${this.baseUrl}/names`);
        const names = await response.json() as string[];
        console.log(`names:`, names);
        return names;
    }
}

export {PetNameService};
