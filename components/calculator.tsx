import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default () => {
    const classes = useStyles();

    return (
        <Card className={`${classes.root} pa-4 min-w-max`}>
            <CardActionArea>
                <CardContent>
                    <div className="grid grid-rows-4">
                        <div>
                            <div className="grid grid-cols-2">
                                <span className="text-align-center">
                                    where do you want to live
                                </span>
                                <TextField
                                    id="standard-multiline-flexible"
                                    label="Multiline"
                                    variant="outlined"
                                    multiline
                                    maxRows={4}
                                />
                            </div>
                        </div>
                        <div>
                            <span>what is your anual income</span>
                        </div>

                        <div>
                            <span>contract length</span>
                        </div>

                        <div>
                            <span>Expected property price growth</span>
                        </div>
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
