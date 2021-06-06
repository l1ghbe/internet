import React from 'react'
import './SignForm.scss'

const SignForm = () => {
    return (
        <div className="form-wrapper">
            <section class="main">
                <div class="form_wrapper">
                    <input type="radio" class="radio" name="radio" id="login" checked />
                    <input type="radio" class="radio" name="radio" id="signup" />
                    <div class="tile">
                        <h3 class="login">Login Form</h3>
                        <h3 class="signup">Sign-Up Form</h3>
                    </div>

                    <label class="tab login_tab" for="login">
                        Login
                    </label>

                    <label class="tab signup_tab" for="signup">
                        Sign-Up
                    </label>
                    <span class="shape"></span>
                    <div class="form_wrap">
                        <div class="form_fild login_form">
                            <div class="input_group">
                                <input type="email" class="input" placeholder="Email Address" />
                            </div>
                            <div class="input_group">
                                <input type="password" class="input" placeholder="Password" />
                            </div>

                            <a href="#forgot" class="forgot">Forgot password?</a>

                            <input type="submit" class="btn" value="Login" />

                            <div class="not_mem">
                                <label for="signup">Not a member? <span> Sign-up now</span></label>
                            </div>

                        </div>

                        <div class="form_fild signup_form">
                            <div class="input_group">
                                <input type="email" class="input" placeholder="Email Address" />
                            </div>
                            <div class="input_group">
                                <input type="password" class="input" placeholder="Password" />
                            </div>

                            <div class="input_group">
                                <input type="password" class="input" placeholder="Confirm Password" />
                            </div>

                            <button type="submit" class="btn">Sign-Up</button>

                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default SignForm
