import { BASE_TRIVIA_API_URL } from ".";

export async function getCategories() {
    try {
        const response = await fetch(`${BASE_TRIVIA_API_URL}category.php`);
        const { trivia_categories, error = "Something went wrong" } = await response.json();
        if (response.ok) {
            return [null, trivia_categories];
        } else {
            throw new Error(error);
        }
    } catch (error) {
        return [error.message, null];
    }
}