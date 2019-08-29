import React from 'react';

class Body extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            users: []
        }

    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                return res.json()
            }).then(data => {
                let usrs = data.map(obj =>{
                    return(
                        <li>
                            <h1> {obj.name} </h1>   
                            <p> {obj.email} </p> 
                        </li>
                    )
                });
                this.setState({users : usrs})
            })
    }

    render(){
        return(
            <div>
                <ul>
                    {this.state.users}
                </ul>
            </div>
        )
    }
}

export default Body;