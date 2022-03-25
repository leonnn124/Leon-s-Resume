<template>
  <div>
    <!-- 待修改 // bar展開可點外面收起 大頭照 整理code Q_Q-->
    <!-- 待增加 // home的往下小箭頭 a link滾動動畫-->
    <nav class="navbar fixed bg-transparent w-full py-4 z-50">
      <div class="inner-width flex items-center justify-between top-0">
        <a href="#" class="Logo w-16 h-11 bg-no-repeat z-50"></a>
        <button
          class="md:hidden bars block bg-none w-7 border-0 cursor-pointer relative outline-none z-50"
        >
          <span class="bars block h-0.5 bg-golden my-1 relative"></span>
          <span class="bars block h-0.5 bg-golden my-1 relative"></span>
          <span class="bars block h-0.5 bg-golden my-1 relative"></span>
        </button>
        <div class="navbar-menu font-normal active">
          <a
            href="#"
            class="text-base ml-7 text-golden font-medium hover:text-orange-100 active"
            >ABOUT</a
          >
          <a
            href="#"
            class="text-base ml-7 text-golden font-medium hover:text-orange-100 active"
            >EXPERIENCES</a
          >
          <a
            href="#"
            class="text-base ml-7 text-golden font-medium hover:text-orange-100 active"
            >PROJECT</a
          >
          <a
            href="#"
            class="text-base ml-7 text-golden font-medium hover:text-orange-100 active"
            >EDUCATION</a
          >
          <a
            href="#"
            class="text-base ml-7 text-golden font-medium hover:text-orange-100 active"
            >SKILLS</a
          >
          <a
            href="#"
            class="text-base ml-7 text-golden font-medium hover:text-orange-100 active"
            >ABILITIES</a
          >
        </div>
      </div>
    </nav>
    <!-- Home -->
    <section id="Home">
      <div
        class="inner-width flex items-center justify-center h-full text-center"
      >
        <div class="content">
          <h1 class="text-5xl mt-8 mb-4 after:content-['Leon'] text-golden">
            Hi I'm&nbsp;
          </h1>
          <div class="sm w-full">
            <a
              href="#"
              class="text-xl my-3 mx-3 text-golden font-medium hover:text-orange-100 fab fa-facebook-f"
            ></a>
            <a
              href="#"
              class="text-xl my-3 mx-3 text-golden font-medium hover:text-orange-100 fab fa-twitter"
            ></a>
            <a
              href="#"
              class="text-xl my-3 mx-3 text-golden font-medium hover:text-orange-100 fab fa-instagram"
            ></a>
            <a
              href="#"
              class="text-xl my-3 mx-3 text-golden font-medium hover:text-orange-100 fab fa-linkedin-in"
            ></a>
            <a
              href="#"
              class="text-xl my-3 mx-3 text-golden font-medium hover:text-orange-100 fab fa-youtube"
            ></a>
          </div>
        </div>
      </div>
    </section>
    <!-- About -->
    <section id="About">
      <div class="inner-width">
        <h1
          class="section-title text-center pt-12 pb-4 relative text-2xl text-golden"
        >
          ABOUT
        </h1>
        <div
          class="divider rounded-md border-t-4 border-neutral-300 border-solid m-auto mb-12"
        ></div>
        <div class="about-content flex item-center flex-wrap pt-12">
          <img
            src="../assets/Zs.png"
            alt=""
            class="about-pic w-48 md:rounded-xl mx-12 max-h-64 -md:rounded-full -md:h-24 -md:w-24"
          />
          <div class="about-text md:flex-1 mx-12">
            <h2 class="text-2xl pb-4 text-neutral-400">Hi ! I'm Leon</h2>
            <p
              class="text-lg text-justify justify-between flex-wrap mb-10 text-neutral-400"
            >
              就讀於國立台中科技大學，對於前端有相當大的興趣，喜歡研究新技術應用在自己的作品中，即便遇到挫折也不會輕易放棄。<br /><br />
              目前於創科資訊實習中，學習前後端設計，測試、開發、部署流程，專案實戰等，
              不定時分享交流資訊技術。
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- Experiences -->
    <section id="Experiences">
      <div class="inner-width float-none relative box-border">
        <h1
          class="section-title text-center pt-12 pb-4 relative text-2xl text-golden"
        >
          Experiences
        </h1>
        <div
          class="divider rounded-md border-t-4 border-neutral-300 border-solid m-auto mb-12"
        ></div>
        <div class="exp-timeline mt-28 overflow-hidden">
          <div
            class="timeline-item px-2 pl-1 pr-14 float-left mb-8 -mr-3 ml-auto w-full"
          >
            <div
              class="container float-left w-1/2 relative pr-10 pl-0 text-right timeline-box-right"
            >
              <div class="table w-full box-border md:text-right">
                <h3 class="text-golden">十二韻 - 晚班主管 / 工讀</h3>

                <p class="text-neutral-400">
                  <br />
                  有許多點子改善工作流程、節省精力和時間<br />
                  樂於與公司建立聯繫，維持良好溝通<br />
                  即使身為主管，仍向任何一位同事學習<br />
                  分享過往工作心得，讓同事一起進步與成長
                </p>
              </div>
              <div
                class="box-circle-l bg-golden w-5 h-5 absolute top-4 md:right-0 left-auto rounded-full mt-4 z-10"
              ></div>
              <div
                class="box-tale-l content-[''] absolute md:-right-3 w-0 h-0 box-border"
              ></div>
              <div
                class="box-date-l text-right -right-36 md:pl-16 absolute text-golden text-sm top-8 w-full"
              >
                Aug 2019
              </div>
            </div>
          </div>
          <div
            class="timeline-item px-2 pl-10 pr-1 float-left mb-8 -mr-3 ml-auto w-full"
          >
            <div
              class="container mt-0 float-right w-1/2 relative pr-10 pl-0 text-left timeline-box-left"
            >
              <div class="table w-full box-border text-left">
                <h3 class="text-golden">實習 / 創科資訊</h3>
                <p class="text-neutral-400">
                  <br />
                  Web前後端、App前端開發<br />
                  版本控制、資訊安全<br />
                  敏捷軟體開發、測試<br />
                  DevOps建置與部署<br />
                </p>
              </div>
              <div
                class="box-circle-r bg-golden w-5 h-5 absolute top-4 rounded-full mt-4 z-10"
              ></div>
              <div
                class="box-tale-r content-[''] absolute w-0 h-0 box-border"
              ></div>
              <div
                class="box-date-r text-left md:-left-36 absolute text-golden text-sm top-8 w-full"
              >
                Feb 2022
              </div>
            </div>
          </div>
          <div
            class="timeline-item px-2 pl-1 pr-14 float-left mb-8 -mr-3 ml-auto w-full"
          >
            <div
              class="container mt-0 float-left w-1/2 relative pr-10 pl-0 text-right timeline-box-right"
            >
              <div class="table w-full box-border md:text-right">
                <h3 class="text-golden">Experiences</h3>
                <p class="text-neutral-400">
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore ea obcaecati, totam natus numquam corrupti expedita
                  repellendus eum omnis quibusdam exercitationem veritatis, ab
                  magni sapiente vel, sit saepe repellat dignissimos?
                </p>
              </div>
              <div
                class="box-circle-l bg-golden w-5 h-5 absolute top-4 md:right-0 left-auto rounded-full mt-4 z-10"
              ></div>
              <div
                class="box-tale-l content-[''] absolute md:-right-3 w-0 h-0 box-border"
              ></div>
              <div
                class="box-date-l text-right -right-36 md:pl-16 absolute text-golden text-sm top-8 w-full"
              >
                Future ...
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Project -->
    <section id="Project">
      <div class="inner-width">
        <h1
          class="section-title text-center pt-12 pb-4 relative text-2xl text-golden"
        >
          Project
        </h1>
        <div
          class="divider rounded-md border-t-4 border-neutral-300 border-solid m-auto mb-12"
        ></div>
        <div class="project mt-28 owl-carousel owl-theme">
          <div class="pro-item flex">
            <img
              src="../assets/mono.png"
              alt=""
              class="pro-img h-24 w-24 m-2"
            />
            <div class="pro-text m-4">
              <h2 class="text-2xl">MonoLuck</h2>
              <p class="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tenetur autem placeat exercitationem perferendis praesentium ut,
                odio dicta est iure, explicabo suscipit quae ad. Id obcaecati
                tempore expedita esse, vitae nostrum?
              </p>
              <hr />
              <p class="float-right italic text-sm">〝 創科資訊 Trunk Studio</p>
            </div>
          </div>
          <div class="pro-item flex">
            <img
              src="../assets/mono.png"
              alt=""
              class="pro-img h-24 w-24 m-2"
            />
            <div class="pro-text m-4">
              <h2 class="text-2xl">MonoLuck</h2>
              <p class="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tenetur autem placeat exercitationem perferendis praesentium ut,
                odio dicta est iure, explicabo suscipit quae ad. Id obcaecati
                tempore expedita esse, vitae nostrum?
              </p>
              <hr />
              <p>lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
          <div class="pro-item flex">
            <img
              src="../assets/mono.png"
              alt=""
              class="pro-img h-24 w-24 m-2"
            />
            <div class="pro-text m-4">
              <h2 class="text-2xl">MonoLuck</h2>
              <p class="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tenetur autem placeat exercitationem perferendis praesentium ut,
                odio dicta est iure, explicabo suscipit quae ad. Id obcaecati
                tempore expedita esse, vitae nostrum?
              </p>
              <hr />
              <p>lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
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
  $(window).scroll(function () {
    if (this.scrollY > 20) $(".navbar").addClass("stick");
    else $(".navbar").removeClass("stick");
  });
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 2,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3500,
    autoplayHoverPause: true,
    smartSpeed: 2000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
    },
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

.inner-width {
  max-width: 1300px;
  margin: auto;
  padding: 0 40px;
}

nav,
.navbar-menu a,
button .bars,
.container {
  transition: 0.3s linear;
}

.stick {
  @apply bg-black py-2 opacity-70;
  transition: 0.3s linear;
}

#Home {
  height: 100vh;
  min-height: 500px;
  background: url(../assets/home.jpg) no-repeat center;
  background-size: cover;
  background-attachment: fixed;
}

#Home .content h1::after {
  animation: textanim 9s linear infinite;
}

.sm a {
  transition: 0.2s linear;
}

#About {
  background: url(../assets/about.jpg) no-repeat center;
  background-size: cover;
  background-attachment: fixed;
}

.divider {
  max-width: 44px;
}

.about-pic {
  transition: 0.1s linear;
}

#Experiences {
  background: url(../assets/experience.png) no-repeat center;
  background-size: cover;
  background-attachment: fixed;
  min-height: 100%;
}

.timeline-box-left {
  @apply py-2 px-5 table relative mb-8 -mr-6 ml-auto z-30;
  box-shadow: -15px 15px 23px 1px rgba(216, 174, 127, 42%);
}

.timeline-box-right {
  @apply py-2 px-5 table relative mb-8 -mr-3 -ml-4 z-30;
  box-shadow: 15px 15px 23px 1px rgba(216, 174, 127, 42%);
}

.box-circle-l {
  box-shadow: 0px 0px 1px 5px rgba(213, 213, 213, 0.4);
  margin-right: -52px;
}

.box-circle-r {
  box-shadow: 0px 0px 1px 5px rgba(213, 213, 213, 0.4);
  left: -52px;
}

.box-tale-l {
  top: 50px;
  transform: rotate(-135deg);
  transform-origin: 0 0;
  border-color: transparent transparent #fff #fff;
  border: 6px solid rgba(216, 174, 127, 42%);
  box-shadow: 0 0 23px 1px rgba(216, 174, 127, 42%);
}

.box-tale-r {
  left: -0.1px;
  top: 50px;
  transform: rotate(-135deg);
  transform-origin: 0 0;
  border-color: transparent transparent #fff #fff;
  border: 6px solid rgba(216, 174, 127, 42%);
  box-shadow: 0 0 23px 1px rgba(216, 174, 127, 42%);
}

.exp-timeline::after {
  @apply md:left-1/2;
  position: absolute;
  top: 100px;
  display: block;
  content: " ";
  width: 5px;
  height: 80%;
  margin-left: -2.5px;
  margin-top: 56px;
  z-index: 5;
  border-radius: 5px;
  background: rgba(172, 172, 172, 0.4);
  transition: 0.3s linear;
}
/* ######################################################################################################### */

hr {
  border-color: #d5ae7f;
}

#Project {
  height: 700px;
  min-height: 500px;
  background: url(../assets/pro.jpg) no-repeat center;
  background-size: cover;
  background-attachment: fixed;
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

@keyframes textanim {
  33% {
    content: "A Developer";
  }
  67% {
    content: "A Student";
  }
}

@screen p {
  #About {
    min-height: 500px;
  }
}

@screen -md {
  .inner-width > .active {
    @apply fixed h-screen w-1/3 bg-black top-0 pr-16 py-24 opacity-70;
    transition: 0.3s linear;
  }
  .inner-width > .active {
    right: -100%;
  }
  .navbar-menu > .active {
    @apply block text-base my-7;
  }
  .close span {
    @apply even:opacity-0 first:top-1.5 first:-rotate-45 last:bottom-1.5 last:rotate-45;
    transition: 0.3s linear;
  }
  #About > .inner-width > .about-content {
    @apply justify-around;
  }
  .about-text > h2 {
    @apply my-5 text-center;
  }
  #About > .inner-width > .divider {
    @apply mb-0;
  }
  #About {
    min-height: 100%;
  }
  .timeline-item {
    @apply px-2 pr-16 float-right mb-8 -mr-3 ml-auto w-10/12;
    transition: 0.3s linear;
  }
  .container {
    @apply mt-0 md:w-1/2 relative pr-10 pl-0 text-left timeline-box-left w-full;
  }
  .box-circle-l {
    @apply bg-golden w-5 h-5 absolute top-4 rounded-full mt-4 z-10;
    left: -15.5%;
  }
  .box-circle-r {
    left: -20.5%;
  }
  .box-tale-l {
    @apply content-[''] absolute w-0 h-0 box-border left-0;
  }
  .box-date-l {
    @apply text-left left-5 absolute text-golden text-sm top-8 w-full;
  }
  .exp-timeline::after {
    margin-left: 63px;
    transition: 0.3s linear;
  }
  .timeline-box-left {
    @apply py-2 px-5 table relative mb-8 -mr-6 ml-auto z-30;
    box-shadow: 15px 15px 23px 1px rgba(216, 174, 127, 42%);
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

@screen -sd {
  .exp-timeline::after {
    display: none;
    transition: 0.3s linear;
  }
  .box-circle-l,
  .box-circle-r {
    display: none;
    transition: 0.3s linear;
  }
  .timeline-item {
    @apply w-full;
    transition: 0.3s linear;
  }
}

@screen -p {
  .box-date-l {
    writing-mode: vertical-rl;
  }
  .box-date-r {
    writing-mode: vertical-rl;
  }
}
</style>
