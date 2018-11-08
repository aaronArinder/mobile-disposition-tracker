<template>
  <Page>
    <ScrollView>
      <StackLayout>
        <Button @tap="increment" text="+" />
        <Button @tap="decrement" text="-" />
        <Label :text="getCount" />
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex';
  export default {
    computed: {
      ...mapGetters([
        'getCount',
      ])
    },
    methods: {
      ...mapMutations([
        'increment',
        'decrement'
      ])
    },
    data() {
      return {
        msg: 'Hello World!'
      }
    }
  }
</script>

<style scoped>
    ActionBar {
        background-color: #53ba82;
        color: #ffffff;
    }

    .message {
        vertical-align: center;
        text-align: center;
        font-size: 20;
        color: #333333;
    }
</style>
