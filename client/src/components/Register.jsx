import RegisterPageIcon from '../assets/RegisterPageIcon.png'
import SignIn from './SignIn'
import { Route, Routes } from 'react-router-dom'
import {Link} from 'react-router-dom'

export default function Register () {
    return (
    <div id='RegisterContent'>

        <div id="RegisterPreview">
        <img src={RegisterPageIcon}/>
        </div>

        <div id="RegisterInfo">

            <div id="RegisterInfoLogo">
            <h1>❄️Holly-Gram❄️</h1>
            </div>

            <div id="RegisterInfoInput">
                <form id="RegisterInfoForm">

                    <label>
                    Email
                    <input type="text" name="Email" />
                    </label>
                                        
                    <label>
                    Full Name
                    <input type="text" name="FullName" />
                    </label>
                                        
                    <label>
                    Username
                    <input type="text" name="Username" />
                    </label>
                                        
                    <label>
                    Password
                    <input type="text" name="Password" />
                    </label>

                    <input type="submit" value="Sign Up" />
                </form>
            </div>

            <div id="RouteToGoToSignIn">
            <Link to= "/SignIn">
                <button>SignIn</button>
            </Link>
            
            <Routes>
                <Route exact path="SignIn"     element={<SignIn/>}/>
            </Routes>
            </div>


        </div>


    </div>
    )}