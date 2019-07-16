
var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      text: '',
      todos: [

      ],
      showAlert : false
    },
    methods : {
        addTodo(){
            if(this.text == "" || this.text == null){
                this.showAlert = true;
            }else{
                var obj = { text : this.text}
                this.todos.push(obj);
                this.text= '';
                this.showAlert = false;
            }

        },
         removeTodo(index){
            this.todos.splice(index, 1);
        },
        removeAlert(){
            this.showAlert = false
        }

    }
})