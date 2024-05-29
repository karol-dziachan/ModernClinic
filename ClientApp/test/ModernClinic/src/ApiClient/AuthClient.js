import axios from 'axios';

class ApiClient {
    constructor(baseURL = "https://dev-ybphej2xq6gl61hx.us.auth0.com") {
        this.api = axios.create({
            baseURL,
            timeout: 5000, 
            withCredentials: false,
            headers: {
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',   
                'User-Agent': 'PostmanRuntime/7.29.0',
                'Accept': '*/*',
                'Accept-Encoding': 'gzip, deflate, br',
                'Content-Type': 'application/json'
            }
        });
        this.ednpoint = "/oauth/token"
        this.data = {
            grant_type: "client_credentials",
            client_id: "Ijbt0hvJOiDNUt2pRIgj4D42bB2uPfAt",
            client_secret: "PLPZ-KCzQ6zO_zLAr_PBtTVDObi6TXMHkHfGskrj2wg8i8SEA8tp9l4o3urhQJNe",
            username: "test@gmail.com",
            password: "Test123!",
            scope: "openid profile email"
        }
    }

    const


    async getToken() {
        try {
            const response = await this.api.post(this.endpoint, this.data);
            return response.data;
        } catch (error) {
            console.log('post error: ', error)
             throw error;
        }
    }

}

export default ApiClient;
