<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h2 :class="clsColor" v-on:click="changeColor()">{{ demo }}</h2>
    <button v-on:click="plus()">Count</button>: <p>{{ count }}</p>
    <br>
    <input type="text" placeholder="Nhap du lieu vao day" v-model="txt_data" v-on:keyup="updateTxtData()">
    <p style="color: black;">{{ txt_data }}</p>
    <p style="color: black;">{{ word_count }}/255</p>
    <p class="red" v-if="msg_error == true">Ban nhap qua 255 ky tu</p>
    <p class="green" v-else>Ban co the nhap toi da 255 ky tu</p>
    <br>
    <h3>Danh sach nguoi dung:</h3>
    <table border="1">
      <thead>
        <tr>
          <td>#</td>
          <td>Email</td>
          <td>Address</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in list_user">
          <td>{{ user.id }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.address }}</td>
          <td>
            <Button v-on:click="removeUser(user.id)">Remove</Button>
          </td>
        </tr>
      </tbody>
    </table>
    <br>
    <input type="text" name="email" v-model="email" placeholder="example@gmail.com">
    <input type="text" name="address" v-model="address" placeholder="Ha Noi">
    <button v-on:click="store()">Add user</button>
  </div>
</template>

<script>
    // import Vue from 'vue'
    // import axios from 'axios'
    // import component1 from 'component1'
    // import component2 from 'component2'

    export default {
        /***********************************************************************************************************
         ******************************* Pass data to child component **********************************************
         **********************************************************************************************************/
        // prop: [variable1, variable2],
        // components: {component1, component2},
        data() {
            /***********************************************************************************************************
             ******************************* Initialize global variables ***********************************************
             **********************************************************************************************************/
            return {
                msg: 'Hello world!',
                demo: 'Day la demo thu nhat',
                clsColor: 'red',
                count: 0,
                txt_data: '',
                word_count: 0,
                msg_error: false,
                list_user: [
                  {"id": 1, "email" : "phamsangit137@gmail.com", "address" : "Germ Education"},
                  {"id": 2, "email" : "phamthesang1307@gmail.com", "address" : "Hung Yen"}
                ],
                email:'',
                address: '',
            }
        },
        created() {
            /***********************************************************************************************************
             *********************** Initialize data when this component is used. **************************************
             **********************************************************************************************************/
            console.log('Init created component and call to function get data from api server.');
        },
        mounted() {
            /***********************************************************************************************************
             ******************** Once created, the interface is displayed and calls mounted. **************************
             **********************************************************************************************************/
        },
        watch: {
            /***********************************************************************************************************
             ********************************* Methods change value for a variable *************************************
             **********************************************************************************************************/
            msg() {
                console.log("When the value of the msg variable changes, this method will be executed.");
            },
            word_count() {
              if (this.word_count > 255) {
                this.msg_error = true;
              } else {
                this.msg_error = false;
              }
            }
        },
        computed: {
            appendMsg() {
                return msg + "Process the value and assign the value to the corresponding variable the var has changed.";
            }
        },
        methods: {
            /***********************************************************************************************************
             ******************************* Default functions that handle local data **********************************
             **********************************************************************************************************/

            /**
             * Example default function not using param
             */
            defaultFunction() {
                this.msg = "Replace message here!";
            },
            changeColor() {
              if (this.clsColor == "red") {
                this.clsColor = "green"
              } else {
                this.clsColor = "red"
              }
            },
            plus() {
              this.count++;
            },
            updateTxtData() {
              this.word_count = this.txt_data.length;
            },
            removeUser(id) {
              for (let i = 0; i < this.list_user.length; i++) {
                if (id == this.list_user[i].id) {
                  this.list_user.splice(i, 1);
                }
              }
            },
            store() {
              // Get max value
              let max = 0;
              for (let i = 0; i < this.list_user.length; i++) {
                if (this.list_user[i].id > max) {
                  max = this.list_user[i].id;
                }
              }
              let newUser = {
                "id": max + 1,
                "email": this.email,
                "address": this.address
              };
              this.list_user.push(newUser);
              thsi.email = '';
              this.address = '';
            },

            /**
             * Example default function using param 
             *
             * @param int pageNum number of page
             * @return boolean
             */
            defaultFunctionUsingParam(pageNum) {
                console.log(pageNum);
                return false;
            },

            /***********************************************************************************************************
             ******* Async and await functions for manipulating server-side data through internal API protocols ********
             **********************************************************************************************************/

            /**
             * Call API sample
             */
            async callAPI() {
                try {
                    const callAPI = await axios.get('/apiendpoint', {
                        /************ Attach param for request here ***************/
                    });
                    console.log(callAPI.data);
                } catch (err) {
                    console.log(err);
                }
            },
        },
    }
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
.red {
  color: red;
}
</style>
