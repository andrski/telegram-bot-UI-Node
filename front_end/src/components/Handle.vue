<template>
  <v-container class="hadler-wrapper">
    <div class="row">
        <form class="col s12">
          <div class="row">
            <div class="input-field col s6">
              <i class="material-icons prefix">account_circle</i>
              <input id="icon_prefix"
                    type="text"
                    class="validate"
                    v-model="userSearch">
              <label for="icon_prefix">user name</label>
            </div>
          </div>
        </form>
    </div>

     <div class="row">
      <form class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input id="first_name"
                  type="text"
                  class="validate"
                  v-model="name">
            <label for="first_name">user name</label>
          </div>
        </div>
      
        <div class="row">
          <div class="input-field col s12">
            <input id="email"
                  type="email"
                  class="validate"
                  v-model="email">
            <label for="email">email</label>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s12">
            <input id="birth"
                  type="text"
                  class="validate"
                  v-model="birth">
            <label for="birth">date of birth</label>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s12">
            <input id="phone"
                  type="text" 
                  class="validate"
                  v-model="phoneNumber">
            <label for="phone">phone number</label>
          </div>
        </div>
      </form>
    </div>

    <div class="actions">
      <v-btn flat color="secondary"
              @click.prevent="updateUser()">
        update
      </v-btn>

      <v-btn flat color="secondary"
              @click.prevent="chooseUser()">
        choose user by name
      </v-btn>

      <v-btn flat color="secondary"
            @click.prevent="deleteUser()">
        delete
      </v-btn>
    </div>
    {{getUsers}}
  </v-container>
</template>

<script>
export default {
  name: 'Handle',

  data() {
    return {
      userSearch: '',
      name: '',
      email: '',
      birth: '',
      phoneNumber: '',
      userId: '',
    }
  },

  mounted () {
    this.$store.dispatch('getAllUsers');
  },

  computed: {
    getUsers() {
      return this.$store.getters.users;
    }
  },

  methods: {
    deleteUser: function() {
      if (this.getUsers.length) {
        this.getUsers.forEach((item) => {
          if (item.name === this.userSearch) {
            this.userId = item._id;
          }
        });
        this.$store.dispatch('deleteUser', {_id: this.userId});
        this.userSearch = '';
        this.userId = '';
      }
    },

    chooseUser: function() {
      if (this.getUsers.length) {
        this.getUsers.forEach((item) => {
          if (this.userSearch === item.name) {
            this.userId = item._id;
            this.name = item.name;
            this.email = item.email;
            this.birth = item.birth;
            this.phoneNumber = item.phoneNumber;
          }
        });
      }
    },

    updateUser: function() {
      this.$store.dispatch('updateUser', {
        _id: this.userId,
        name: this.name,
        email: this.email,
        birth: this.birth,
        phoneNumber: this.phoneNumber
      })
    }
  }
}
</script>

<style lang="scss">
  .hadler-wrapper {
    width: 70%;

    .input-field {

      ::placeholder {
      color: #C24646;
      }
    }

    .actions {
      width: 80%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;

      button {
        display: block;
      }
    }
  }
</style>