<template>
<div id="app" class="body">
<h2>{{$store.state.counter}}</h2>
    <Top></Top>
    <Next class=""></Next>
        <Header></Header>
         <Grid></Grid>
        <Then class=""></Then>
  
       <router-view></router-view>
    
</div>
</template>

<script>
import Top from './components/Top.vue';
import Next from './components/Next.vue';
import Header from './components/Header.vue';
import Grid from './components/Grid.vue';
import Then from './components/Then.vue';
// import Page from './components/Page.vue';


export default {
    name: 'App',

    components: {
        Top,
        Next,
        Header,
        Grid,
        Then,

       

    }
}
</script>

<style>
.body {
    width: 1540px;
    height: 5000px;
    overflow: scroll;

}
</style>
