import React from "react";
import Card from "@material-ui/core/Card";
import { Button, CardContent } from "@material-ui/core";
import { calculatorStore } from "../../state/calculator";

const displayName = {
    location: "Selected Location",
    product_fee: "Product Fee",
    maximum_budget: "Maximum Budget",
    monthly_cost: "Monthly Cost",
    projected_value: "Project Value",
    total_converted_rent: "Total Invested from Rent",
    total_payment_end_contract: "Total Payment over Contract",
};

export default () => {
    const { result } = calculatorStore();

    return (
        <Card>
            <CardContent>
                <h1 className="title font-bold">Calculation Results</h1>

                <div className="grid grid-rows-6">
                    {Object.entries(displayName).map(
                        (
                            [key, displayValue]: [string, string],
                            entryNumber
                        ) => (
                            <div
                                className="p-1 grid grid-cols-2"
                                key={entryNumber}
                            >
                                <div className="text-left">
                                    <span className="font-bold">
                                        {displayValue}:{" "}
                                    </span>
                                </div>

                                <div className="text-right">
                                    <span>{(result as any)[key]}</span>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </CardContent>
        </Card>
    );
};
