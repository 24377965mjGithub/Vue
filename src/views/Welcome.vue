<script>

    import TheWelcome from '../components/TheWelcome.vue';
    import ComponentSample from '../components/ComponentSample.vue';

    export default {
        components: {
            TheWelcome,
            ComponentSample
        },
        mounted() {
            console.log('Hello World');
        }
    }
</script>

<template>
    <ComponentSample haha="hahaha" />
    Hello World
</template>