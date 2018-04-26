import React from 'react';
import * as moment from 'moment';

const FlightList = ({ list }) => {
	return (
		<div className="App-card">
			<div className="App-card-content">
            <h3>{list.airline}</h3>
				<h4 className="App-card-price"><span>Rs.&nbsp;{list.price}</span></h4>
				<div className="App-card-details">

                    <p className="tt-waktu"><label>From :</label> <span>{list.origin}</span> - <span>{list.destination}</span> </p>
					<p className="tt-waktu"><label>Arrival :</label> {moment(list.arrival).format('DD/MM/YYYY HH:MM:SS')} </p>
					<p className="tt-airline"><label>Departure :</label> {moment(list.departure).format('DD/MM/YYYY HH:MM:SS')} </p>
				</div>
			</div>
			<div className="App-card-booking">
				<button className="btn">
					Book
				</button>
			</div>
		</div>
	);
};
export default FlightList;
