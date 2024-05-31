import axios from 'axios';
import { TokenContext } from '../../App';
import { useContext } from 'react';
import Host from '../Globals/Host';
class ApiClient {

    constructor(baseURL = `http://${Host}`) {
        this.token = useContext(TokenContext);
        this.api = axios.create({
            baseURL,
            timeout: 5000,
            withCredentials: false,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'User-Agent': 'PostmanRuntime/7.29.0',
                'Accept': '*/*',
                'Accept-Encoding': 'gzip, deflate, br',
                'Authorization': "Bearer " + this.token.token
            }
        });
    }

    // Metoda do wysyłania żądania GET
    async get(endpoint) {
        try {
            const response = await this.api.get(endpoint);
            return response.data;
        } catch (error) {
            throw error; // przekazanie błędu do obsługi przez komponent wywołujący
        }
    }

    // Metoda do wysyłania żądania POST
    async post(endpoint, data) {
        try {
            const response = await this.api.post(endpoint, data);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    // Metoda do wysyłania żądania PUT
    async put(endpoint, data) {
        try {
            const response = await this.api.put(endpoint, data);
            return response.data;
        } catch (error) {
            throw error;
        }
    }

    // Metoda do wysyłania żądania DELETE
    async delete(endpoint) {
        try {
            const response = await this.api.delete(endpoint);
            return response.data;
        } catch (error) {
            console.error('error during deletingh data - (ApiClient): ', error)
            throw error;
        }
    }
}

export default ApiClient;
