const API_URL = 'http://127.0.0.1:8000/api';

export const fetchServices = async () => {
    try {
        const response = await fetch(`${API_URL}/services/`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching services:", error);
        return [];
    }
};

export const submitContactForm = async (data) => {
    try {
        const response = await fetch(`${API_URL}/contact/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error('Form submission failed');
        }
        return await response.json();
    } catch (error) {
        console.error("Error submitting form:", error);
        throw error;
    }
};
