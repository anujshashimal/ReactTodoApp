import React, {Component} from 'react'
import logo from '../assets/logo.png'

class Header extends Component{
    render() {


        return(
            <div className='header-deco'>

            {/*    <img src={logo} height='200px' weight={'200px'}></img>*/}
            {/*<h1> TODO APP</h1>*/}
            {/*    <h2>Sri Lanka Institute Of Information Technology</h2>*/}

            {/*    <h2> ID : IT 18121834</h2>*/}
            {/*    <h2>Name :Jayasekara A.S</h2>*/}

                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home"
                           role="tab" aria-controls="nav-home" aria-selected="true">TODO APP</a>
                        <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile"
                           role="tab" aria-controls="nav-profile" aria-selected="false">About Me</a>

                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                            <img src={logo} height='200px' weight={'200px'}></img>
                        <h1> {this.props.title}</h1>
                    </div>
                    <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                            <img src={logo} height='200px' weight={'200px'}></img>
                            <h2>Sri Lanka Institute Of Information Technology</h2>

                            <h2> ID : IT 18121834</h2>
                            <h2>Name :Jayasekara A.S</h2>
                    </div>

                </div>



            </div>
        )
    }
}
export default Header;