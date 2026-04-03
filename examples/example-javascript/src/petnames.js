/**
 * Calls the Pet Name API to suggest pet names.
 */
class PetNameService {
    baseUrl;

    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    /**
     * Suggest names.
     *
     * @returns {Promise<string[]>}
     */
    async suggestNames() {
        const response = await fetch(`${this.baseUrl}/names`);
        const names = await response.json();
        console.log(`names:`, names);
        return names;
    }
}

export {PetNameService};
