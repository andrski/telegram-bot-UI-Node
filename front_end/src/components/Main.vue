<template>
  <v-container>
     <div class="error" v-if="isError">
      <h4>you entered not right value</h4>
    </div>

    <div class="row inputs-wrapper">
      <form class="col s12">
        <div class="row">
          <div class="input-field col s12">
            <input id="first_name"
                  :placeholder="nameMessage"
                  required
                  type="text"
                  class="validate"
                  v-on:input="validate($event, 'name')">
            <label for="first_name">user name</label>
          </div>
        </div>
      
        <div class="row">
          <div class="input-field col s12">
            <input id="email"
                  type="email"
                  class="validate"
                  @input="validate($event, 'email')">
            <label for="email">email</label>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s12">
            <input id="birth"
                  type="text"
                  class="validate"
                  @input="validate($event, 'birth')">
            <label for="birth">date of birth</label>
          </div>
        </div>

        <div class="row">
          <div class="input-field col s12">
            <input id="phone"
                  type="text" 
                  class="validate"
                  @input="validate($event, 'phone')">
            <label for="phone">phone number</label>
          </div>
        </div>
      </form>
    </div>

    <v-btn
        flat
        color="secondary"
        :disabled="disableBtn"
        @click.prevent="submit()">
        create user
    </v-btn>
  </v-container>
</template>

<script>
export default {
  name: 'Main',

  data(){
    return {
      name: '',
      email: '',
      birth: '',
      phoneNumber: '',
      isError: false,
      disableBtn: true,
      nameMessage: '',
      emptyString: '',
    }
  },

  methods: {
    submit: function() {
      this.$store.dispatch('createUser', {
        name: this.name,
        email: this.email,
        birth: this.birth,
        phoneNumber: this.phoneNumber
      });
    },

    validate: function(event, identificator) {
      switch(identificator) {
        case 'name': this.name = event.target.value.match(/^[-a-zA-Z]+$/) ?
                      event.target.value : 'error';
                      if (this.name === 'error') {
                        this.nameMessage = 'user name is required';
                      }
                      this.clearError(this.name);
        break;

        case 'email': this.email = event.target.value.match(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/) ?
                      event.target.value : 'error';
                      this.clearError(this.email);
        break;

        case 'birth': this.birth = event.target.value.match(/^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$/) ?
                      event.target.value : 'error';
                      this.clearError(this.birth);
        break;

        case 'phone': this.phoneNumber = event.target.value.match(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/) ?
                      event.target.value : 'error';
                      this.clearError(this.phoneNumber);
        break;
      }
    },

    clearError(value) {
      if (value === 'error' || this.name === 'error') {
        this.isError = true;

        setTimeout(() => {
          this.isError = false;
        },2000);

        this.disableBtn = true;
      } else {
        this.disableBtn = false;
        this.isError = false;
      }
    },
  }
}
</script>

<style lang="scss">
.v-container {

  .error {
    position: absolute;
    left: 35%;
    top: 3rem;
    color: #C24646;

    .v-banner::after {
      border-style: none;
    }

  }
}

.inputs-wrapper {
  width: 80%;

  ::placeholder {
    color: #C24646;
  }
}
</style>
