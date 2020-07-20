<template>
    <v-app>
        <v-main>
            <v-container>
                <v-row justify="center" content="center">
                    <v-col cols="12" md="6">
                        <v-card class="px-3 py-3">
                          <v-card-title>To Do List</v-card-title>
                            <v-row justify="center" content="center">
                                <v-col cols="12" sm="6" md="12">
                                    <v-text-field label="What is your work title?" outlined placeholder="write your work" v-model="todo.title"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="12">
                                    <v-text-field label="What to do?" outlined placeholder="write your work" v-model="todo.content"></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="12">
                                    <v-btn color="green" @click="saveToDo()" block dark>
                                        save to do
                                    </v-btn>
                                </v-col>
                            </v-row>
                            <div v-if="todos.length">
                              <v-spacer></v-spacer>
                            <v-list flat subheader three-line>
                                <v-subheader>To Do List</v-subheader>

                                <v-list-item-group multiple >
                                    <div v-for="(todo,index) in todos" :key="index">
                                        <v-list-item>
                                            <template v-slot:default="{active}">
                                                <v-list-item-action>
                                                    <v-checkbox v-model="todo.active"></v-checkbox>
                                                </v-list-item-action>

                                                <v-list-item-content>
                                                    <v-list-item-title>{{todo.title}}</v-list-item-title>
                                                    <v-list-item-subtitle>{{todo.content}}</v-list-item-subtitle>
                                                </v-list-item-content>
                                            </template>
                                        </v-list-item>
                                    </div>
                                </v-list-item-group>
                            </v-list>
                            <v-btn color="red" dark block @click="removeToDo()">
                                Done this works
                            </v-btn>
                            </div>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>


<script>

export default {
  name: 'App',

  components: {
  
  },

  data: () => ({
    todo:{
      title:'',
      content:'',
      active: false
    },
    todos:[]
  }),

  watch:{
    todos:{
      handler(){
        localStorage.setItem('todos',JSON.stringify(this.todos))
      }
    }
  },

  methods:{
    saveToDo(){
      let emptyTodo = {
        title:'',
        content:'',
        active:false
      };
      if(this.todo.title.length>0){
        this.todos.push(this.todo);
      }
      this.todo = emptyTodo; 
     
    },
    removeToDo(){
      this.todos.forEach((todo , index)=>{
        if(todo.active === true){
          this.todos.splice(index,1)
        }
      })
    }
  },

    mounted(){
    if(localStorage.getItem('todos')){
      this.todos = JSON.parse(localStorage.getItem('todos'))
    }
  }
};
</script>
