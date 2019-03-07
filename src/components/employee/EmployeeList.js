import React, { Component } from 'react';
import "../animals/Animal.css"

export default class EmployeeList extends Component {
	render() {
		return (
			<article clasName="employees">
				{this.props.employees.map((singleEmployee) => (
					<div key={singleEmployee.id} className="card">
						<div className="card-body">
							<h5 className="card-title">
								{singleEmployee.name}
								<button
									className="card-link"
									onClick={() => this.props.fireEmployee(singleEmployee.id)}
								>
									Fire
								</button>
							</h5>
						</div>
					</div>
				))}
			</article>
		);
	}
}
