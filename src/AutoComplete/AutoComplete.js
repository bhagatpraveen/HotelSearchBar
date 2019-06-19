import React, { Component }from 'react';
import SearchBar from 'material-ui-search-bar';
import Script from 'react-load-script';
// import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";

export default class AutoCompleteSearch extends Component{

    constructor(props) {
      const google = window.google;
        super(props);

        // Declare State
        this.state = {
          city: '',
          query: ''
        };

        this.handlePlaceSelect = this.handlePlaceSelect.bind(this);
        this.handleScriptLoad = this.handleScriptLoad.bind(this);
    }


    //function for searching hotels within selected city


  //   search(cityName){
  //     var search = {
  //       bounds: map.getBounds(),
  //       types: ['hotel']
  //     };
  //     var nameArray =[];
  //     var MARKER_PATH;
  //     places.nearbySearch(search, function(results, status) {
  //       if (status ===  new google.maps.places.PlacesServiceStatus.OK) {
  //         console.log(results);
  //         for(let i =0;i<results.length;i++){
  //           nameArray[i]=results[i].name;
  //         }
  //         console.log(nameArray);
    
  //       }
  //     })
  // }

    handlePlaceSelect() {

        // Extract City From Address Object
        let addressObject = this.autocomplete.getPlace();
        let address = addressObject.address_components;
    
        // Check if address is valid
        if (address) {
          // Set State
          this.setState(
            {
              city: address[0].long_name,
              query: addressObject.formatted_address,
            }
          );
          //this.search(addressObject.formatted_address);
        }
      }

    handleScriptLoad() { 
        
        var options = { types: ['(cities)'] }; 
        console.log('Inside');
        
        // Initialize Google Autocomplete 
        /*global google*/
        const element =   document.getElementById('autocomplete');
        this.autocomplete = new google.maps.places.Autocomplete( element, options ); 
        
        // Fire Event when a suggested name is selected
        this.autocomplete.addListener('place_changed', this.handlePlaceSelect); 
      }

    render() {
        return (
          <div>
                <Script url="https://maps.googleapis.com/maps/api/js?key=AIzaSyAg766whHnVVG4gl140Mgqz5Pgyt4RTcHY&libraries=places"          
      onLoad={this.handleScriptLoad}        
    /> 
      <h2>Hotel Search Bar</h2>
            <SearchBar id="autocomplete" placeholder="" hintText="Enter city to get hotels" value={this.state.query}  onChange={()=>{ console.log("Inside")}}
              onRequestSearch={()=>console.log('Inside')}
              style={{
                margin: '0 auto',
                maxWidth: 800,
              }}
            />
          </div>
        );
      }
}