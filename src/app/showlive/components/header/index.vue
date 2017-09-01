<!--顶部导航条-->

<template>
    <header class="header">
        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="#"></a>
            </div>
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul class="nav navbar-nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">Profile</a></li>
                <li><a href="#">Messages</a></li>
                <li><a href="#">Docs</a></li>
              </ul>
              <ul class="nav navbar-nav navbar-right">
                <li><input type="text" class="form-control" placeholder="Search"></li>
              </ul>
            </div>
          </div>
        </nav>
    </header>
</template>

<style lang="less">
    .navbar-default{
        background: #3097D1;
        border-color: none;
        color: #fff;
        
        .navbar-header {
            //margin: 13px 15px;
            .navbar-brand {
                background: url("../../images/brand-white.png") no-repeat;
                background-size: contain;
                width: 80px;
                height: 25px;
                overflow: hidden;
                margin:13px 0 0 0px;
            }
        }
        .navbar-nav{
            a {
                color: #fff !important;
            }
            .form-control {
                margin-top: 6px;
            }

        }
    }

    @media (max-width: 768px) {
        #bs-example-navbar-collapse-1 {
            background: #3097D1;
            border-top: none;
        }
        .form-control {
            display: none;
        }
    }
</style>