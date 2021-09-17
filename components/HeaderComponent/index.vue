<template>
  <!-- banner -->
  <div :class="$style.banner">
    <div class="header">
      <div class="header-left">
        <div class="w3layouts-logo">
          <h1>
            <a href="/">Бассейн ПНИПУ</a>
          </h1>
        </div>
        <div class="agileinfo-social-grids">
          <ul>
            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
            <li><a href="#"><i class="fa fa-rss"></i></a></li>
            <li><a href="#"><i class="fa fa-vk"></i></a></li>
          </ul>
        </div>
        <div class="clearfix"></div>
      </div>
      <div class="top-nav">
        <nav class="navbar navbar-default">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <!-- Collect the nav links, forms, and other content for toggling -->
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li><a class="active" href="/">Главная</a></li>
              <li><a href="#about" class="scroll">Расписание</a></li>
              <li><a href="#services" class="scroll">Прайс</a></li>
              <li><a href="#gallery" class="scroll">Галерея</a></li>
              <li><a href="#team" class="scroll">Сотрудники</a></li>
              <li><a href="#news" class="scroll">Перечень услуг</a></li>
              <li><a href="#contact" class="scroll">Контакты</a></li>
            </ul>
            <div class="clearfix"></div>
          </div>
        </nav>
      </div>
      <div class="clearfix"></div>
    </div>
    <div class="banner-info">
      <div class="container">
        <h3>A new generation in learn to</h3>
        <h2>swim classes</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut posuere tempor quam, vitae vestibulum lacus
          placerat non. Donec volutpat odio sed neque molestie elementum quis nec nisi. Phasellus elit leo, lobortis non
          massa in, elementum maximus urna.</p>
        <div class="w3-button">
          <a href="#" class="hvr-sweep-to-bottom" data-toggle="modal" data-target="#myModal">Read More</a>
        </div>
      </div>
    </div>
  </div>
  <!-- //banner -->
</template>

<script>
export default {
  name: "headerComponents"
}
</script>

<style module lang="css">
.banner {
  background: url(/swim/static/images/2.jpg) no-repeat 0px -52px;
  background-size: cover;
  padding: 0 0 12em 0;
}
</style>
