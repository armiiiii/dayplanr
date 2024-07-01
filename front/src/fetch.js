const connector = {
    getTasks: async () => {
        let content = await fetch('http://localhost:8000/');
        return await content.json();
    },
    createTask: async (data) => {
        return 'BASTA!';
    },
};

export default connector;
