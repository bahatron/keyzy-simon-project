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
    Typography,
} from "@material-ui/core";
import { calculatorStore } from "../../state/calculator";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

function sliderMark(number: number) {
    return {
        value: number,
        label: number,
    };
}

export default () => {
    const classes = useStyles();

    const _calculator = calculatorStore();

    let income = "";

    return (
        <Card className={`${classes.root} pa-4`}>
            <CardActionArea>
                <CardContent>
                    <div className="grid grid-rows-4 ">
                        <TextField
                            label="Location"
                            variant="outlined"
                            maxRows={4}
                            value={_calculator.input.location}
                        />

                        <TextField
                            label="Income"
                            variant="outlined"
                            value={income}
                        />

                        <div>
                            <Typography id="slider" gutterBottom>
                                Number of Years for Contract
                            </Typography>

                            <Slider
                                defaultValue={5}
                                id="slider"
                                marks={[3, 5, 7].map(sliderMark)}
                                min={3}
                                max={7}
                                step={2}
                            />
                        </div>
                    </div>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
};
