const connector = {
    getTasks: async () => {
        const response = await fetch('http://localhost:8000');
        return await response.json();
    },
    createTask: async (data) => {
        return 'BASTA!';
    },
};

export default connector;
