<template>
    <article class="boxPhoto">
        <ul class="pt">
          <li class="items" :style="{height: oHeight}" v-for="item in list"><img :src="item.image" /></li>
        </ul>
    </article>
</template>

<script>
  import Axios from 'axios';
  import throttle from '../../../mixins/throttle';

  export default {
    name:'photo',
    mixins: [throttle],
    data() {
      return {
        list: [],
        oHeight: 0
      }
    },
    
    created() {
      Axios.get('/v2/book/search?q=javascript&alt=json&start=1&count=4')
      .then((result)=>{
          this.list = result.data.books;
      })
    },
    mounted() {
      $(window).on('resize', ()=>{
        if(this.list.length) {
          this.throttle(this.picSize, 500, 1000)
        }else {
          setTimeout(()=>{
            this.throttle(this.picSize, 500, 1000)
          },100)
        }
      }).trigger('resize');
    },
    methods: {
      picSize() {
        const $dom = $('.pt > .items');
        if($(window).width() < 1000 && $(window).width() > 400) {
          $dom.css('width', '15%');
        }else {
          $dom.css('width', '40%');
        }
        
        this.oHeight = $dom.width() + 'px'  
      }
    }
  }

</script>

<style lang="less">
  .boxPhoto{
    border: 1px solid #ccc;
    width: 100%;
    margin-top: 20px;
    overflow: hidden;
      .items {
        width: 40%;
        float: left;
        margin: 5px 5%;
        overflow: hidden;
        img {
          background-size: cover;
          width: 100%;
        }
      }
  }
  @media screen and (max-width: 1000px) {
    .boxPhoto {
      width: 94%;
      margin: 0px auto;
    }
  }
</style>