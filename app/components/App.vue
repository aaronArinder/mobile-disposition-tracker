<template>
  <Page class="page">
    <ActionBar class="action-bar" title="Disposition Tracker"></ActionBar>
    <GridLayout rows="auto, *" columns="*">
      <StackLayout class="form" row="0" col="0">
        <StackLayout class="input-field">
          <Label text="Current Disposition" class="label font-weight-bold m-b-5" />
          <TextField class="input" v-model="input.disposition" />
          <StackLayout class="hr-light"></StackLayout>
        </StackLayout>
        <StackLayout class="input-field">
          <Label text="Context" class="label font-weight-bold m-b-5" />
          <TextField class="input" v-model="input.context" />
          <StackLayout class="hr-light"></StackLayout>
        </StackLayout>
        <GridLayout rows="auto, auto" columns="*, *">
          <Button text="Save" @tap="save" class="btn btn-primary" row="0" col="0" />
        </GridLayout>
      </StackLayout>
      <ListView for="disposition in $store.state.data.slice().reverse()" class="list-group" row="1" col="0">
        <v-template>
          <StackLayout class="list-group-item">
            <Label v-bind:text="disposition.disposition" />
            <Label v-bind:text="disposition.context" />
            <Label v-bind:text="disposition.date | date" />
          </StackLayout>
        </v-template>
      </ListView>
    </GridLayout>
  </Page>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex';
  export default {
    data(){
      return {
        input: {
          disposition: '',
          context: '',
        }
      }
    },
    methods: {
      save(){
        this.$store.dispatch('insert', this.input);
      },
    },
  }
</script>

<style scoped>
  ActionBar {
    background-color: #53ba82;
    color: #ffffff;
  }
</style>
