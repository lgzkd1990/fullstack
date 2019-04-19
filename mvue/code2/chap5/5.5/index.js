let app = new Vue({
    el: '#app',
    data: {
        list: [
            {
                id: 1,
                name: 'ihpne8',
                price: 6188,
                count: 1
            }, {
                id: 2,
                name: 'Ipad Pro',
                price: 7188,
                count: 1
            }, {
                id: 3,
                name: 'MacBook Pro',
                price: 16188,
                count: 1
            }, {
                id: 4,
                name: 'XPS13',
                price: 16188,
                count: 1
            }
        ],
        checkedAll: false,
        checkModel: []
    },
    computed: {
        totalPrice: function () {
            var total = 0;
            for (var i = 0; i < this.list.length; i++) {
                var item = this.list[i];
                total += item.price * item.count;
            }
            return total.toString().replace(/\B(?=(\d{3})+$)/g, ',');
        }
    },
    watch: {
        checkModel: {
            handler() {
                if (this.checkModel.length == this.list.length) {
                    this.checkedAll = true;
                } else {
                    this.checkedAll = false;
                }
            },
            deep: true
        }
    },
    methods: {
        handleAdd: function (index) {
            this.list[index].count++;
        },
        handleReduce: function (index) {
            if (this.list[index].count === 1) { return; }
            this.list[index].count--;
        },
        handleRemove: function (index) {
            this.list.splice(index, 1);
        },
        changeState: function (e) {
            this.checkModel = [];
            if (this.checkedAll) {
                this.list.forEach((value,index) => {
                    this.checkModel.push(index);
                });
            }
        }
    }
});
