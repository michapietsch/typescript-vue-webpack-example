<template>
  <input type="text" :value="someValue" @input="setNewValue($event.target.value)" />
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      someValue: "some value"
    };
  },

  methods: {
    /**
     * We expect the input value to be a string.
     * We are required to explicitly acknowledge that.
     * But a method could get anything from the outside.
     */
    setNewValue(newValue: string) {
      this.someValue = newValue;

      /**
       * Remove the "+" and TS will show an error.
       * The "+" converts the string to a number.
       * If the string is empty, we get a zero.
       * The log method requires a number.
       */
      this.log(+newValue);
    },

    log(newValue: number) {
      console.log(newValue);
    }
  }
});
</script>