<template>
    <article class="boxInfoIntro">
      <h3>Sponsored</h3>
      <figure>
        <img :src="list.image">
        <figcaption><strong>It might be time to visit Iceland</strong><br/>{{list.subtitle}}</figcaption>
      </figure>
    </article>
</template>

<script>
  import Axios from 'axios';

  export default {
    name: 'infoIntro',
    data() {
      return {
        list:[]
      }
    },
    created() {
      Axios.get('/v2/book/search?q=javascript&alt=json&start=1&count=1')
      .then((result)=>{
          this.list = result.data.books[0];
          console.log(this.list)
      })
    },
    mounted() {
      
    },
    methods: {

    }
  }

</script>

<style lang="less">
  .boxInfoIntro {
    border: 1px solid #ccc;
    width: 100%;
    padding: 5px;
    box-sizing: border-box;

    h3 {
      width: 90%;
      margin: 0px auto;
      line-height: 30px;
      font-size: 14px;
      font-weight: bold;
    }

    figure{
      width: 90%;
      margin: 0 auto;
      img {
        background-size: contain;
        width: 100%;
      }
      figcaption {
        text-align: left;
        margin-top: 10px;
        line-height: 25px;
      }
    }
  }
  @media screen and (max-width: 1000px) {
    .boxInfoIntro {
      display: none;
    }
  }
</style>