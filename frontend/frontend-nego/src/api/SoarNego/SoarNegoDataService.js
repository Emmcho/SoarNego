import axios from 'axios'

class SoarNegoDataService {
    retrieveAllFiles(){
        return axios.get('http://localhost:8080/user/username/dirFile')
        //console.log('executed service')
    }

    // retrieveFileIndex(){
    //     return axios.post('http://localhost:8080/api/find/files/index')
    //     //console.log('exec
       

    // }


}

export default new SoarNegoDataService()