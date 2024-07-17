import axios from 'axios';

const connector = {
    getWeek: async () => {
        const response = await axios.get('http://localhost:8000/', {withCredentials: true});
        return response.data;
    },
    createTodo: async (data) => {
        const response = await axios.post('http://localhost:8000/todos/', data, {withCredentials:true});
        return response.data;
    },
    updateTodo: async (id, data) => {
        const response = await axios.put(`http://localhost:8000/todos/${id}`, data, {withCredentials: true})
        return response.data;
    },
    deleteTodo: async (id) => {
        await axios.delete(`http://localhost:8000/todos/${id}`, {withCredentials: true})
    }
};

export default connector;
