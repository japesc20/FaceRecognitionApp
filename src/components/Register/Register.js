import React from 'react'

const Register = ({ onRouteChange }) => {
    return (
        <article className="mw6 center bg-light-gray br4 pa3 pa4-ns mv3 ba b--black-10 shadow-5"> 
            <main className="white-80">
                <div className="measure">
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f2 fw6 ph0 mh0 black">Register</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6 black" htmlFor="password">Name</label>
                            <input className="black b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name" id="name" />
                        </div>
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
                        value="Register" 
                        />
                    </div>
                </div>
            </main>
        </article>
    );
}


export default Register;