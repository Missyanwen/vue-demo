<template>
    <article class="bodyContent">
      <WebHeader></WebHeader>
      <section class="box-layout">
        <div class="box-left">
          <Intro></Intro>
          <Photo></Photo>
        </div>
        <div class="box-middle">
          <Show></Show>
        </div>
        <div class="box-right">
          <InfoIntro></InfoIntro>
        </div>
      </section>
    </article>
</template>

<script type="text/javascript">
  import WebHeader from './../../components/header';
  import Intro from './left/intro';
  import Photo from './left/photo';
  import Show from './middle/show';
  import InfoIntro from './right/infoIntro';

	export default {
    components: {
      WebHeader,
      Intro,
      Photo,
      Show,
      InfoIntro
    },
    data() {
        return {
            message: ''
        }
    },
    created() {
    },
    mounted() {

    },
    methods: {

    }
  }
</script>

<style lang="less">
  .box-layout {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    display: flex;
    
    div {
      align-items:center;
      justify-content:center;

      &.box-left {
        flex:0 0 22%;
      }
      &.box-middle {
        flex:0 0 56%;
      }
      &.box-right {
        flex:0 0 22%;
      }
    }
  }

  @media screen and (max-width: 1200px) {
    .box-layout{
      width: auto;
    }
  }

  @media screen and (max-width: 1000px) {
    .box-layout{
      flex-direction: column;
    }
    .navbar {
      margin-bottom: 0;
    }
  }
</style>