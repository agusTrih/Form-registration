import React, { useState, useEffect } from "react";
import Styled from "styled-components";
import InputText from "../Components/InputText";
import SelectOption from "../Components/SelectOption";

import DataPlace from "../Data/DataPlace";
import DataTitle from "../Data/DataTitle";
import DataPosition from "../Data/DataPosition";

const Container = Styled.section`
display: flex;
flex-direction: row;
justify-content: center;
margin-top: 5rem;
@media (max-width: 968px) {
  flex-direction: column;
  padding: 10px;
}
`;
const Section = Styled.div`
background-color: ${(props) => (props.general ? "#E0E5ED" : "#E67E2E")};
padding: 50px;
border-radius: ${(props) =>
	props.general ? "10px 0px 0px 10px" : "0px 10px 10px 0px"};

  @media (max-width: 968px) {
    border-radius: ${(props) =>
			props.general ? "10px 10px 0px 0px" : "0px 0px 10px 10px"};
  }
`;
const Title = Styled.h2`
color: ${(props) => (props.general ? "#367CDE" : "white")} ;
`;

const FlexRows = Styled.div`
display: flex;
flex-direction: row;
@media (max-width: 968px) {
  display: flex;
  flex-direction: column;
 
}
`;

const Button = Styled.button`
padding: 10px 50px;
font-size: 16px;
border: none;
border-radius: 50px;
font-weight: bold;
`;
export default function FormRegister() {
	const [data, setData] = useState(null);
	const [form, setForm] = useState({
		title: "",
		first_name: "",
		last_name: "",
		position: "",
		company: "",
		address: "",
		zip_code: "",
		place: "",
		country: "",
		code: "",
		phone_number: "",
		email: "",
	});
	console.log(data, "data");
	const fetchDataCountry = async () => {
		const url = "https://restcountries.eu/rest/v2/all";
		const options = {
			method: "GET",
			headers: {
				"content-type": "application/json",
				"user-key": "79153cbd47b4b1c0805bac2a97dc5fc8",
			},
		};
		const response = await fetch(url, options);
		const result = await response.json();
		console.log(result, "result");
		setData(result);
	};

	useEffect(() => {
		fetchDataCountry();
		// eslint-disable-next-line
	}, [1]);
	return (
		<Container>
			<Section general>
				<Title general>General Information</Title>
				<div>
					<SelectOption label="Title" data={DataTitle} />

					<FlexRows>
						<div style={{ paddingRight: "20px" }}>
							<InputText label="First Name" />
						</div>
						<InputText label="Last Name" />
					</FlexRows>
					<SelectOption label="Position" data={DataPosition} />
					<InputText label="Company" />
				</div>
			</Section>
			<Section>
				<Title>Contact Details</Title>
				<div>
					<InputText label="Address" />
					<FlexRows>
						<div style={{ paddingRight: "20px", width: "100%" }}>
							<InputText label="Zip Code" />
						</div>
						<div style={{ width: "100%" }}>
							<SelectOption label="Place" data={DataPlace} />
						</div>
					</FlexRows>
					<SelectOption country label="Country" data={data} />
					<FlexRows>
						<div style={{ paddingRight: "20px" }}>
							<InputText label="Code" />
						</div>
						<InputText label="Phone Number" />
					</FlexRows>
					<InputText label="Email" />
					<div>
						<label>
							<input type="checkbox" /> I do accept the Terms and Conditions of
							your site
						</label>
					</div>

					<Button>Submit</Button>
				</div>
			</Section>
		</Container>
	);
}
