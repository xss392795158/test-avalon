const avalon = require('avalon2')

var vm = avalon.define({
  $id: "test",
  firstName: '333',
  lastName: 'xxx',
  name: "司徒正美234",
  array: [11,22,33],
  $computed: {
    fullName: {
      get: function(){
        return this.firstName+' '+this.lastName
      },
      set: function(val) {
        var arr = val.split(' ')
        this.firstName = arr[0]
        this.lastName = arr[1]
      }
      
    },
    xxx: function(){
      return this.firstName+'!!'
    }
  },
  submitData(){
    // var data = vm.Item.$model //如果Item是数组，在IE6－8，请改用
    // data = vm.Item.toJSON(), 如果想提交整个vm，请改用
    var data = vm.$model;

    /* fetch('users.json').then(response => {
      console.log(response.headers.get('Content-Type'))
      console.log(response.headers.get('Date'))
      console.log(response.status)
      console.log(response.statusText)
      return response.json()
    }).then(function(json) {
      debugger
      console.log('parsed json', json)
    }).catch(function(ex) {
      debugger
      console.log('parsing failed', ex)
    }) */
    debugger
    fetch('/api/testAjax', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(status).then(json=>json.json()).then(function(json) {
      debugger
      // json
    })
  }
})
var c1, c2;
avalon.component('ms-a', {
  template: '<button type="button" :on-click="changeB">{{@buttonText}}</button>',
  defaults: {
    // 初始化自动执行
    onInit:function(e){
      c1 = e.vmodel;
    },
    buttonText: "默认A",
    changeB() {
      c2.buttonText = '我是由A改变的'
    }
  }
})
avalon.component('ms-b', {
  template: '<button type="button" :on-click="changeA">{{@buttonText}}</button>',
  defaults: {
    // 初始化自动执行
    onInit:function(e){
      c2 = e.vmodel
    },
    buttonText: "默认B",
    changeA() {
      c1.buttonText = '我是由B改变的'
    }
  }
})

avalon.component('ms-view', {
  template: '<div class="view"><button type="button" :on-click="@onPlus">+++</button><slot name="content" /><slot /><input type="text" ms-duplex-number="@num"/></div>',
  defaults: {
    num: 2333,
    content: '默认context',
    buttonText: '默认text',
    onPlus: function () {
      this.num++;
    }
  },
  soleSlot: 'buttonText'
})
setTimeout(function(){
  vm.array.set(0, 444)
}, 3000)
