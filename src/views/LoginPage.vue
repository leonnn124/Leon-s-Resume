<template>
  <div id="login">
    <form action="#" class="login-form">
      <h1>Login</h1>
      <div class="textb">
        <input type="text" required />
        <div class="placeholder">Username</div>
      </div>

      <div class="textb">
        <input type="password" required />
        <div class="placeholder">Password</div>
        <div class="show-password fas fa-eye-slash"></div>
      </div>

      <button class="btn fas fa-arrow-right" disabled></button>
      <a href="signin">Create Account</a>
    </form>
  </div>
</template>

<script>
$(document).ready(function () {
  var fields = document.querySelectorAll(".textb input");
  var btn = document.querySelector(".btn");
  function check() {
    if (fields[0].value != "" && fields[1].value != "") btn.disabled = false;
    else btn.disabled = true;
  }

  fields[0].addEventListener("keyup", check);
  fields[1].addEventListener("keyup", check);

  document
    .querySelector(".show-password")
    .addEventListener("click", function () {
      if (this.classList[2] == "fa-eye-slash") {
        this.classList.remove("fa-eye-slash");
        this.classList.add("fa-eye");
        fields[1].type = "text";
      } else {
        this.classList.remove("fa-eye");
        this.classList.add("fa-eye-slash");
        fields[1].type = "password";
      }
    });
});
</script>

<style>
#login {
  background: url(../assets/login.jpg) no-repeat center;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-form {
  width: calc(100% - 20px);
  max-width: 500px;
  height: 600px;
  background-color: #fff;
  padding: 50px 40px;
}

.login-form h1 {
  text-align: center;
  margin: 15px 0 35px 0;
  font-size: 36px;
  color: #111;
  font-size: 36px;
}

.textb {
  margin-bottom: 12px;
  position: relative;
}

.textb input {
  width: 100%;
  height: 70px;
  border: none;
  background-color: #ededed;
  border-radius: 4px;
  color: #333;
  font-size: 18px;
  font-weight: 700;
  padding: 14px 60px 0 10px;
}

.placeholder {
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 700;
  position: absolute;
  line-height: 70px;
  top: 0;
  left: 20px;
  color: #9d9d9d;
  user-select: none;
  pointer-events: none;
}

.show-password {
  position: absolute;
  right: 20px;
  line-height: 70px;
  color: #9d9d9d;
  font-size: 22px;
  cursor: pointer;
}

.textb input:focus ~ .placeholder,
.textb input:valid ~ .placeholder {
  left: 10px;
  top: -16px;
  transition: 0.1s linear;
}

.btn {
  display: block;
  width: 100px;
  height: 100px;
  margin: 100px auto 40px auto;
  background-color: #d5ae7f;
  color: #fff;
  font-size: 40px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: 0.3s linear;
}

.btn:hover {
  opacity: 0.85;
}

.login-form a {
  display: block;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  color: #555;
  text-transform: uppercase;
  font-weight: 500;
  margin-bottom: 8px;
  transition: 0.2s linear;
}

.login-form a:hover {
  color: #111;
}

.btn:disabled {
  background-color: transparent;
  color: #ddd;
  border: 2px solid;
}
</style>
