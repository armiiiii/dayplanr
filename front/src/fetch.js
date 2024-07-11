import axios from 'axios';

const connector = {
    getTodo: async () => {
        const response = await axios.get('http://localhost:8000/', {withCredentials: true});
        return response.data;
    },
    createTodo: async (data) => {
        const response = await axios.post('http://localhost:8000/', data, {withCredentials:true});
        return response;
    },
    updateTodo: async (data) => {
        return 'BASTA!';
    }
};

export default connector;
