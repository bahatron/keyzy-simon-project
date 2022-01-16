import React from "react";
import Card from "@material-ui/core/Card";
import { CardContent } from "@material-ui/core";

function ResultModel(params: {
    maximum_budget: string;
    monthly_cost: string;
    product_fee: string;
    projected_value: string;
    total_converted_rent: string;
    total_payment_end_contract: string;
}) {
    return params;
}

export const data = ResultModel({
    maximum_budget: "string",
    monthly_cost: "string",
    product_fee: "string",
    projected_value: "string",
    total_converted_rent: "string",
    total_payment_end_contract: "string",
});

const displayName = {
    maximum_budget: "Maximum Budget",
    monthly_cost: "Monthly Cost",
    product_fee: "Product Fee",
    projected_value: "Project Value",
    total_converted_rent: "Total Invested from Rent",
    total_payment_end_contract: "Total Payment over Contract",
};

export default () => {
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
                                    <span>{(data as any)[key]}</span>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </CardContent>
        </Card>
    );
};
