// Class based COmponent 
// Class based component is normal JS Class
/// EARLIER WE WROTE CODE LIKE THIS
import React from "react"

class UserClass extends React.Component{
    constructor(props){
        super(props);
        // console.log(); 
           this.state = {
            userInfo: {
                name:"Dummy",
                avatar_url:"Dummy Photo",
            }
           };

    }
    
    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/er-harshpal");
        const json = await data.json();

        this.setState({
             userInfo: json,
        }
        )
    }

    componentDidUpdate(){
        console.log("This ran in the end")
    }
    componentWillUnmount(){
        console.log("WHen will it be dissapear?When we will go to another page")
    }

    render(){


      const {name,avatar_url} = this.state.userInfo
        return ( 
           <div className="user-card">
            <img src={avatar_url}/>
            <h2> Name: {name}</h2>
            <h3> Avatar URL:{avatar_url}</h3>
            <h4>Contact: @harshpal</h4>
           </div>
        )
    }
}

export default UserClass;

// Class Base Component is mounted on web page :
// Behind the scenes: 
