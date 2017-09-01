<template>
    <article class="middle-box">
        <dl v-for="item in list">
          <dt><img :src="item.image"/></dt>
          <dd>
          <h3>{{item.title}}</h3>
          You know some birds are not meant to be caged, their feathers are just too bright.There is something inside ,that they can't get to , that they can't touch. That's yours.{{item.subtitle}}
          </dd>
        </dl>
    </article>
</template>

<script type="text/javascript">

  import Axios from 'axios';

	export default {
    name: 'show',
    data() {
        return {
          list: [],
        }
    },
    created() {
      Axios.get('/v2/book/search?q=javascript&alt=json&start=1&count=4')
      .then((result)=>{
          this.list = result.data.books;
      })
    },
    mounted() {

    },
    methods: {

    }
  }
</script>

<style lang="less">
  .middle-box {
    border: 1px solid #ccc;
    width: 94%;
    margin: 0 auto;
    dl {
      width: 100%;
      overflow: hidden;
      border-bottom: 1px solid #ccc;
      padding: 10px 0;
      &:last-child{
        border-bottom: none;
      }
      dt{
        width: 70px;
        float: left;
        overflow: hidden;
        img{
          width: 50px;
          height: 50px;
          border-radius: 50% 50%;
          background-size: contain;
          margin: 10px;
        }
      }
      dd{
        float:left;
        padding: 0 15px;
        width:~'calc(100% - 70px)';
      }
    }
  }

  @media screen and (max-width: 1000px) {
    .middle-box {
      margin-top: 20px;
    }
  }
</style>