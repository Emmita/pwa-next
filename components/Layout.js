import React from 'react';
import Title from './Title';
import Body from './Body';
import Footer from './Footer';
import Meta from './Meta';


class Layout extends React.Component{
    render(){
        return(
            <div>
                <Meta />
                <Title />
                <div> {this.props.children} </div>
                <Footer />
            </div>
        )
    }
}

export default Layout;