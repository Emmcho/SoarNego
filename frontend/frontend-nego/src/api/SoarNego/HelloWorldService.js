import axios from 'axios'
//This presently has nothing to do with the project
class HelloWorldService{
    executeHelloWorldService(){
        return axios.get('http://localhost:8080/hello-world')
        //console.log('executed service')
    }

    executeHelloWorldServiceBean(){
        return axios.get('http://localhost:8080/hello-world-bean')
        //console.log('executed service')
    }

    executeHelloWorldServicePathVariable(name){
        return axios.get(`http://localhost:8080/hello-world-bean/path-variable/${name}`)
        //console.log('executed service')
    }
}

export default new HelloWorldService()