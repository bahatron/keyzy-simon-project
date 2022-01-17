import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Slider, Button, TextField, Typography } from "@material-ui/core";
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

    return (
        <Card className={`${classes.root} pa-4`}>
            <CardContent>
                <div className="grid grid-rows-4 ">
                    <TextField
                        label="Location"
                        variant="outlined"
                        value={_calculator.result.location}
                        onChange={(e) => {
                            _calculator.updateLocation(e.target.value);
                        }}
                    />

                    <TextField
                        label="Income"
                        variant="outlined"
                        value={_calculator.input.income}
                        onChange={(e) =>
                            _calculator.updateIncome(e.target.value)
                        }
                    />

                    <div>
                        <Typography gutterBottom>
                            Number of Years for Contract
                        </Typography>

                        <Slider
                            defaultValue={5}
                            onChange={(e: any, val: any) =>
                                _calculator.updateContractTerm(val)
                            }
                            marks={[3, 5, 7].map(sliderMark)}
                            min={3}
                            max={7}
                            step={2}
                        />
                    </div>

                    <div className="mt-4">
                        <Typography gutterBottom>
                            Assumed Property Price Growth
                        </Typography>

                        <Slider
                            defaultValue={3.5}
                            onChange={(e: any, val: any) =>
                                _calculator.updatePercentageGrowth(val)
                            }
                            min={0}
                            max={7}
                            step={0.1}
                        />

                        <p className="text-center">
                            {`${_calculator.input.percentage_growth}%`}
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};
