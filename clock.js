var time = new Vue({
    el: "time",
    data: {
        h: ""
        m: ""
        s: ""
    }, 
    methods: {
        setClock: function() {
            var date = new Date();           // 新增日期物件 : 包含年月日時分秒
             this. h = date.getHours();      // 這個物件的時 = 日期.取得小時
             this. m = date.getMinutes();    // 這個物件的分 = 日期.取得分鐘
             this. s = date.getSeconds();    // 這個物件的秒 = 日期.取得秒鐘
         },
         addZero: function(t) {
             var r = ('0'+t).substr(-2);
             return r;
         }
        },
    // 已安裝完成 : 指定元素內的所有元素都顯示完成會執行這裡一次
    monunted() {
        // 設定間隔時間執行 API setInterval
        setInterval (this.setClock, 1000);
    }
})