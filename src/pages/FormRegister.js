import React from "react";
import InputText from "../Components/InputText";
import SelectOption from "../Components/SelectOption";

export default function FormRegister() {
	return (
		<section>
			<div>
				<h2>General Information</h2>
				<div>
					<SelectOption label="Title" />
					<div>
						<InputText label="First Name" />
						<InputText label="Last Name" />
					</div>
				</div>
			</div>
			<div></div>
		</section>
	);
}
