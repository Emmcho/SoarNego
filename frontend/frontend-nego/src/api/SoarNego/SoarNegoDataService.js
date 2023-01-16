import axios from 'axios'

class SoarNegoDataService {
    retrieveAllFiles(){
        return axios.get('http://localhost:8080/user/username/dirFile')
        //console.log('executed service')
    }


}

export default new SoarNegoDataService()