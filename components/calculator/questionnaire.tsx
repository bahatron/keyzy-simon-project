import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import {
    Slider,
    Button,
    TextField,
    ButtonGroup,
    MenuItem,
} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

function FormModel(params: {
    location: string;
    income: string;
    duration: number;
}) {
    return params;
}

let form = FormModel({
    location: "",
    income: "",
    duration: 5,
});

function updateDuration(number: number) {
    form.duration = number;
}

export default () => {
    const classes = useStyles();

    return (
        <Card className={`${classes.root} pa-4 min-w-max`}>
            <CardActionArea>
                <CardContent>
                    <div className="grid grid-rows-4 ">
                        <TextField
                            id="standard-multiline-flexible"
                            label="Location"
                            variant="outlined"
                            multiline
                            maxRows={4}
                            value={form.location}
                        />

                        <TextField
                            id="standard-multiline-flexible"
                            label="Income"
                            variant="outlined"
                            multiline
                            maxRows={4}
                            value={form.income}
                        />

                        <TextField
                            id="standard-select-currency"
                            select
                            className="mt-4"
                            label="Number of Years for Contract"
                            value={form.duration}
                        >
                            {[3, 5, 7].map((value, i) => (
                                <MenuItem key={i} value={value}>
                                    {value}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
};
