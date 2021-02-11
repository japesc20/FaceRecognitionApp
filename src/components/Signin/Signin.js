import React from 'react'

const Signin = ({ onRouteChange }) => {
    return (
        <article className="mw6 center bg-light-gray br4 pa3 pa4-ns mv3 ba b--black-10 shadow-5"> 
            <main className="white-80">
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f2 fw6 ph0 mh0 black">Sign In</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6 black" htmlFor="email-address">Email</label>
                            <input className="black pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  id="email-address" />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6 black" htmlFor="password">Password</label>
                            <input className="black b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password" />
                        </div>
                    </fieldset>
                    <div className="">
                        <input 
                        onClick={() => onRouteChange('home')}
                        className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
                        type="submit" 
                        value="Sign in" 
                        />
                    </div>
                    <div className="lh-copy mt5 mb2">
                        <p onClick={() => onRouteChange('Register')} className="f4 link dim db black pointer">Register</p>
                    </div>
                </div>
            </main>
        </article>
    );
}


export default Signin;