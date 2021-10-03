import React, {Component} from 'react';

class Profile extends Component {
    
      componentDidMount(){
    
      }

    render() {
          
        const name = this.props.user.name

        return (
            <div className="view-component container px-20 py-10">
                <p>Your Name  {name}</p>
                <p>Your Email  {name}</p>
            </div>
        );
    }
}

export default Profile;
