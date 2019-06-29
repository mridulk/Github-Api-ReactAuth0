import React, { Component } from 'react'
import './App.css';
import TopSection  from './components/TopSection.js'
import Github from './Github.js'
import Auth0Lock from 'auth0-lock'
class App extends Component {
  static defaultProps={
    ClientId:'geyE5YsYNPd57qIlhO5i2sMhmboRBJu1',
    Domain:'dev-efx7thxq.auth0.com'
  }
  constructor(props) {
    super(props)
  
    this.state = {
      accessToken:'',
      profile:{},
      nickname:''
    }
    
  }
  onLogout(){
    this.setState({
      accessToken:'',
      profile:{},
      nickname:''
    },()=>{
      localStorage.removeItem('accessToken');
      localStorage.removeItem('profile')
      localStorage.removeItem('nickname');
      })
  }
  
  componentWillMount(){
    this.lock=new Auth0Lock(this.props.ClientId,this.props.Domain)
    this.lock.on('authenticated',(auth)=>{
      console.log(auth)
      this.lock.getProfile(auth.accessToken,(error,profile)=>{
        if(error){
          console.log(error)
          return;
        }
        
        console.log(profile)
        this.setProfile(auth.accessToken,profile,profile.nickname);
      
      });
    });
    this.getProfile();
  }
  setProfile(accessToken,profile,nickname){
    localStorage.setItem('accessToken',accessToken);
    localStorage.setItem('profile',JSON.stringify(profile))
    localStorage.setItem('nickname',nickname);
    this.setState({
      idToken:localStorage.getItem('accessToken'),
      profile:JSON.parse(localStorage.getItem('profile')),
      nickname:localStorage.getItem('nickname')
    })
 
  }
  getProfile(){
    if(localStorage.getItem('accessToken')!=null){
      this.setState({
        accessToken:localStorage.getItem('accessToken'),
        profile:JSON.parse(localStorage.getItem('profile')),
        nickname:localStorage.getItem('nickname')
      },()=>{
       console.log(this.state);
      })
    }
  }
  showLock(){
    this.lock.show()
  }
  render() {
    let gitty;
    if(this.state.accessToken){
     
      gitty= 
      <div>
      <Github />
      <h3>Welcome,{this.state.nickname}</h3>
      </div>

    }else{
      gitty="Click On Login"
    }
    return (
      <div className="App">
       <TopSection
       lock={this.lock}
       accessToken={this.state.accessToken}
       profile={this.state.profile}
       onLogout={this.onLogout.bind(this)} 
       onLogin={this.showLock.bind(this)} />
       {gitty} 
      </div>
    );
  }
}

export default App;
