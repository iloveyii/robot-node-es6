new Vue({
    el: '#vue-app',
    data: {
        server: '/index.php',
        form: {
            command: `2
1 1
N 3
W 4
            `,
            result : '...'
        }
    },

    created: function () {

    },

    methods: {
        getId : function () {
                var vars = {};
                var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
                    vars[key] = value;
                });
                return vars['id'] ? vars['id'] : false;
        },

        runCommand: function (e) {
            e.preventDefault();
            let app = this;
            let params = $.param(this.form);
            this.$http.get(this.server + '?' + params)
                .then(function (response) {
                    console.log('SET CMD STATUS:', response.data);
                    if(response.data.status === true) {
                        app.form.result = response.data.output;
                    }
                });
        }
    }

});