import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const SideBarSearch = (props) => {
	return (
		<form>
			<ul className="sidebar-travelpanel">
				<li>
					<input
						type="button"
						value="oneway"
						className={`btn ${props.travelFlow === 'oneway' ? 'active' : ''}`}
						onClick={() => props.travelFlowHandler('oneway')}
					/>
				</li>
				<li>
					<input
						type="button"
						value="Return"
						className={`btn ${props.travelFlow !== 'oneway' ? 'active' : ''}`}
						onClick={() => props.travelFlowHandler('return')}
					/>
				</li>
			</ul>

			<ul className="sidebar-search">
				<li>
					<input
						type="text"
						name="origin"
						value={props.origin}
						onChange={props.onInputChangeHandler}
						placeholder="Enter Origin"
					/>
				</li>
				<li>
					<input
						type="text"
						name="dest"
						value={props.dest}
						onChange={props.onInputChangeHandler}
						placeholder="Enter Destination"
					/>
				</li>
				<li className="calendar">
					<DatePicker
						selected={props.startDate}
						onChange={props.CalendarChangeHandler}
						className="calenderInput"
					/>
				</li>
				{props.travelFlow !== 'oneway' ? (
					<li className="calendar">
						<DatePicker
							selected={props.startDate}
							onChange={props.CalendarChangeHandler}
							className="calenderInput"
						/>
					</li>
				) : null}

				<li>
					<select name="passenger" value={props.passenger} onChange={props.onInputChangeHandler}>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
					</select>
				</li>
				<li>
					<button
						type="button"
						className="btn"
						onClick={props.onSearchHandler}
						disabled={!props.isDisablebtn}
					>
						Submit
					</button>
				</li>
			</ul>
		</form>
	);
};
export default SideBarSearch;
