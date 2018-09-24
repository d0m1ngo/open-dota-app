// services are state-less
// they act as utility facades that abstract the details for complex operations
// normally, our interface to any sort of server API will be as a service

class OpenDotaService {
    getSearchString() {
        return "https://api.opendota.com/api/search?q="
  }
}

export default new OpenDotaService();