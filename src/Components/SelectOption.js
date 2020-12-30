import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 125,
		width: "100%",
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
}));

export default function SelectOption({ label, data, country }) {
	const classes = useStyles();

	const [age, setAge] = React.useState("");

	const handleChange = (event) => {
		setAge(event.target.value);
	};
	return (
		<>
			<FormControl className={classes.formControl}>
				<InputLabel>{label}</InputLabel>
				<Select
					labelId="demo-simple-select-label"
					value={age}
					onChange={handleChange}
				>
					{data === null || data === undefined ? (
						<MenuItem value="No-data">No data</MenuItem>
					) : country ? (
						data.map((item, index) => {
							return (
								<MenuItem key={index} value={item.name}>
									{item.name}
								</MenuItem>
							);
						})
					) : (
						data.map((item, index) => {
							return (
								<MenuItem key={index} value={item.value}>
									{item.label}
								</MenuItem>
							);
						})
					)}
				</Select>
			</FormControl>
		</>
	);
}
