import React, { Component } from 'react';
import '../styles/content/mainComponent.css';
import ContactInfoComponent from './ContactInfoComponent';
import ToolbarComponent from './ToolbarComponent';
import UsersTableComponent from './UsersTableComponent';

class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: ' ',
      sorted:false};
  }

componentWillMount(){
  const API = './contacts.json';
  fetch(API)
      .then(response => response.json())
      .then(data => {
        this.setState({
          active:true, 
          contacts: data, 
          cities:this.getCities(data),
          headers:this.getHeaders(data),
          fullContactList:data,
          nameString:''})
      });

}

selectContact(contact){
  this.setState({selectContact:contact});
}

reverseList(contacts){
  let reversedList=[];
  for(let i=contacts.length-1; i>-1; i--){
    reversedList.push(contacts[i]);
  }
  return reversedList;
}

sortAlphabeticaly(contacts){
  contacts.sort(((a,b) => {
    if(a.name < b.name) 
      return -1
    if(a.name > b.name)
      return 1;
    else 
      return 0;
  }));
  return contacts;
}

sortByAlphabet(contacts){
    if(this.state.sorted) {
      contacts=this.reverseList(contacts);
      this.setState({sorted:false});
    } else if (!this.state.sorted){
      contacts=this.sortAlphabeticaly(contacts);
      this.setState({sorted:true});
    }
  this.setState({contacts:contacts});
}

sortByCity(selectedCity){
  if(selectedCity==='All'){
    this.setState({contacts:this.state.fullContactList});
  }else{
  let filteredByCitiesList=[];
  this.state.fullContactList.map(contact=>{
    if(contact.city===selectedCity){
      filteredByCitiesList.push(contact);
    }
  });
  this.setState({contacts:filteredByCitiesList});
  }
}

sortActive(){
  this.setState({contactsBeforeActive:this.state.contacts});
    if(this.state.active){
      this.setState({contacts:this.getActiveUsers()});
    }else{
      this.setState({contacts:this.state.contactsBeforeActive});
    }
    this.setState({active:!this.state.active});
}

getActiveUsers(){
  let activeUsers=[];
  this.state.contacts.map(user=>{
    if(user.active){
      activeUsers.push(user);
    }
  });
    return activeUsers;
}

getCities(dataArray){
    let cities=[];
    for(let i=0; i<dataArray.length; i++){
      cities.push(dataArray[i].city);
    }
    cities = cities.filter(function(item, pos) {
      return cities.indexOf(item) === pos;
  })
    return cities;
}

getHeaders(data){
  let headers = Object.keys(data[0]);
  var index = headers.indexOf('id');
    if (index !== -1) {
       headers.splice(index, 1);
    }  
  return headers;
}

sortByName(event){
  if(event){
  let prevData=this.state.contacts;
  this.setState({nameString:event});
  let queryResult=[];
  let queryDataSet=this.state.contacts;

  queryDataSet.forEach((contact)=>{
    if(contact.name.toLowerCase().indexOf(this.state.nameString)!=-1)
    queryResult.push(contact);
});
  this.setState({contacts:queryResult});
  }else{
    this.setState({nameString:''});
    this.setState({contacts:this.state.fullContactList});
  }

}


  render() {
    return (
      <div className="mainComponent">
            <ToolbarComponent 
              cities={this.state.cities?this.state.cities:[]} 
              nameValue={this.state.nameString}
              sortByCity={this.sortByCity.bind(this)} 
              sortActive={this.sortActive.bind(this)} 
              sortByName={this.sortByName.bind(this)} />
            <div className="contactPanel">
              <ContactInfoComponent selectedContact={this.state.selectContact} />
              <UsersTableComponent 
                headers={this.state.headers?this.state.headers:[]}
                contacts={this.state.contacts?this.state.contacts:[]} 
                inspectContact={this.selectContact.bind(this)} 
                sortByAlphabet={this.sortByAlphabet.bind(this)}
                sorted={this.state.sorted} />
            </div>
      </div>
    );
  }
}

export default MainComponent;