import React from 'react'

export default function Body() {
  return (
    <div class="mainbody">
        <div class="imagebox">
            <img src="https://www.themasterclass.co.in/assets/images/preparatory-hub-mobile-banner.jpg" alt=""/>
        </div>
        <div class="formbox">
            <h2>Mastery Hub</h2>
            <form action="">
                <h4 class="user">Username or email:</h4><input type="text" class="username" placeholder="Username"/>
                <h4 class="pass">Password:</h4><input type="text" class="password" placeholder="Password" />
                <div class="forgot">
                    <a href="">Forgot Password</a>
                </div>
                <button class="button" type="submit">Sign In</button>
            </form>
        </div>
    </div>
  )
}
