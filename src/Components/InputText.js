import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
			width: "100%",
		},
	},
}));

export default function InputText({ label, value, onChange }) {
	const classes = useStyles();

	return (
		<div className={classes.root} noValidate autoComplete="off">
			<TextField
				id="standard-basic"
				label={label}
				value={value}
				onChange={onchange}
			/>
		</div>
	);
}
