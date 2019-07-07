var app = new Vue({
    el: '#app',
    data: {
        countries_list: [],
    },

    mounted() {
        axios
            .get('https://restcountries.eu/rest/v2/region/americas?fields=name;capital;flag;population')
            .then(response => (
                this.countries_list = response.data
                ))
            .catch(error =>(
                console.log(error)
                ));
    }

})