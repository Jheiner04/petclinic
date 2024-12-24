class Urls {
    constructor(environment) {
        this.env = environment[0] || 'qa';
    }

    getBaseUrl() {
        let baseUrl = {
            dev : 'https://petclinic-production.up.railway.app',
            qa  : 'https://petclinic-production.up.railway.app',
            prod: 'https://petclinic-production.up.railway.app'
        };
        return baseUrl[this.env];
    }

    getAllUrls() {
        let baseUrl = this.getBaseUrl();
        return {
            "base"    : baseUrl,
            "owner"   : `${baseUrl}/owners/find`
        }
    }

}

module.exports = (env) => new Urls(env);