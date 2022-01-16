import create from "zustand";

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

export const calculatorStore = create((_set: any) => ({
    data: {
        maximum_budget: "string",
        monthly_cost: "string",
        product_fee: "string",
        projected_value: "string",
        total_converted_rent: "string",
        total_payment_end_contract: "string",
    },

    update: (data: any) => {
        return _set((state: any) => {
            state.data = {
                ...state.data,
                ...data,
            };
        });
    },
}));
