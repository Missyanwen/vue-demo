<template>
    <article class="boxIntro">
      <div class="bg-picture"></div>
      <div class="photo"></div>
      <div class="show-intro">
        <span><h3>{{title}}</h3>
        {{intro}}</span>
      </div>

      <ul class="popbox">
        <li>
          <a data-toggle="modal" data-target="#myModal">
            Friends
            <h6>12M</h6>
          </a>
        </li>
        <li>
          <a data-toggle="modal" data-target="#myModal">
            Enemies
            <h6>1</h6>
          </a>
        </li>
      </ul>


      <modal></modal>
    </article>
</template>

<script>
  import Axios from 'axios';
  import modal from '../../../components/modal';

  export default {
    name: 'intro',
    components: {
      modal
    },  
    data() {
      return {
        title: '',
        intro: ''
      }
    },
    created() {
      Axios.get('/v2/book/search?q=javascript&alt=json&start=1&count=1')
      .then((result)=>{
          this.title = result.data.books[0].title;
          this.intro = result.data.books[0].subtitle;
      })
    },
    mounted() {
      
    },
    methods: {

    }
  }

</script>

<style lang="less">
  .boxIntro {
    border: 1px solid #ccc;
    height: 385px;
    width: 100%;

    .bg-picture {
      background: url("../../../images/iceland.jpg") no-repeat;
      background-size: contain;
      width: 100%;
      height: 150px;
    }
    .photo{
      background: url("../../../images/avatar-dhg.png") center center;
      background-size: contain;
      width: 100px;
      height: 100px;
      margin: -70px auto;
      border: 3px solid #fff;
      border-radius: 100%;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    }
    .show-intro {
      width: 80%;
      margin:0 auto;
      padding-top: 70px;
      text-align: center;
      h3 {
        font-size: 14px;
        font-weight: bold;
        display: block;
        overflow: hidden;
      }
    }
    .popbox {
      width: 80%;
      height: 38px;
      padding: 0;
      margin: 15px auto;
      li {
        width: 50%;
        float: left;
        list-style: none;
        text-align: center;
        a{
          &:hover {
            cursor: pointer;            
          }
          color: #000;
        }
      }
    }
  }

  @media screen and (max-width: 1000px) {
    .bg-picture{
      background-size: cover !important;
    }
    .popbox {
      width: 160px !important;
    }
    .boxIntro {
      width: 94%;
      margin: 20px auto;
    }
  }
</style>