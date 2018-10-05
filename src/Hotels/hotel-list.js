import React, {Component} from 'react'
import HotelCard from './hotel-card'
import hotels from './hotels.json'

class HotelList extends Component {
  
  render() {
    return (
      <div>
            <ul>
                {hotels.results.map(function(hotel, index){
                    return <HotelCard key={index} hotel={hotel} />;
                  })}
            </ul>
      </div>
    )
  }
}

export default HotelList