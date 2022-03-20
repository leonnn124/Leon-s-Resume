<template>
  <div>
    <!-- LOGO顏色重設 10/ 未設定 等等換sticky-->
    <nav class="navbar fixed bg-transparent w-full py-8 z-50">
      <div
        class="inner-width flex items-center justify-between max-w-7xl m-auto px-10 top-0"
      >
        <a href="/" class="Logo w-16 h-11 bg-no-repeat"></a>
        <button
          class="md:hidden bars block bg-none w-7 border-0 cursor-pointer relative outline-none z-50"
        >
          <span class="bars block h-0.5 bg-orange-300 my-1 relative"></span>
          <span class="bars block h-0.5 bg-orange-300 my-1 relative"></span>
          <span class="bars block h-0.5 bg-orange-300 my-1 relative"></span>
        </button>
        <div class="navbar-menu font-normal active">
          <a
            href="#"
            class="text-base ml-7 text-white font-medium hover:text-orange-300 active"
            >ABOUT</a
          >
          <a
            href="#"
            class="text-base ml-7 text-white font-medium hover:text-orange-300 active"
            >EXPERIENCES</a
          >
          <a
            href="#"
            class="text-base ml-7 text-white font-medium hover:text-orange-300 active"
            >PROJECT</a
          >
          <a
            href="#"
            class="text-base ml-7 text-white font-medium hover:text-orange-300 active"
            >EDUCATION</a
          >
          <a
            href="#"
            class="text-base ml-7 text-white font-medium hover:text-orange-300 active"
            >SKILLS</a
          >
          <a
            href="#"
            class="text-base ml-7 text-white font-medium hover:text-orange-300 active"
            >ABILITIES</a
          >
        </div>
      </div>
    </nav>
    <!-- About -->
    <section id="About"></section>
    <!-- Experiences -->
    <section id="Experiences"></section>
    <!-- Project -->
    <section id="Project"></section>
    <!-- Education -->
    <section id="Education"></section>
    <!-- Skills -->
    <section id="Skills"></section>
    <!-- Abilities -->
    <section id="Abilities"></section>
  </div>
</template>

<script>
$(document).ready(function () {
  $(".bars").click(function () {
    $(this).toggleClass("close");
    if ($(this).hasClass("close")) {
      $(".navbar-menu").css("right", "0");
    } else $(".navbar-menu").css("right", "-100%");
  });
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="postcss" scoped>
.solid {
  transition: background-color 0.5s ease 0s;
}

.Logo {
  background-image: url(../assets/logo.png);
  background-size: 64px 44px;
}

.navbar-menu a,
button .bars {
  transition: 0.3s linear;
}

#About {
  height: 100vh;
  min-height: 500px;
  background: url(../assets/bg.jpg) no-repeat center;
  background-size: cover;
  //background-attachment: fixed;
}

#Experiences {
  height: 500px;
  min-height: 500px;
  background: url(../assets/bg.jpg) no-repeat center;
  background-size: cover;
  //background-attachment: fixed;
}

#Project {
  height: 500px;
  min-height: 500px;
  background: url(../assets/bg.jpg) no-repeat center;
  background-size: cover;
  //background-attachment: fixed;
}

#Education {
  height: 500px;
  min-height: 500px;
  background: url(../assets/bg.jpg) no-repeat center;
  background-size: cover;
  //background-attachment: fixed;
}

#Skills {
  height: 500px;
  min-height: 500px;
  background: url(../assets/bg.jpg) no-repeat center;
  background-size: cover;
  //background-attachment: fixed;
}

#Abilities {
  height: 500px;
  min-height: 500px;
  background: url(../assets/bg.jpg) no-repeat center;
  background-size: cover;
  //background-attachment: fixed;
}

@screen -md {
  .inner-width > .active {
    @apply fixed h-screen w-1/3 bg-neutral-800 top-0  pr-16 py-16;
    transition: 0.3s linear;
  }
  .inner-width > .active {
    right: -100%;
  }
  .navbar-menu > .active {
    @apply block text-base my-7;
  }
  .close span {
    @apply even:opacity-0 first:top-1.5 first:-rotate-45 first:opacity-100 last:bottom-1.5 last:rotate-45 last:opacity-100;
    transition: 0.3s linear;
  }
}

@screen -s {
  .inner-width > .active {
    @apply w-screen;
  }
  .navbar-menu > .active {
    @apply flex justify-center ml-20;
  }
}
</style>
