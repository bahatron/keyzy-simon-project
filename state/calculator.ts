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

export const calculatorStore = create((set: any) => ({
    result: {
        maximum_budget: "string",
        monthly_cost: "string",
        product_fee: "£2990",
        projected_value: "string",
        total_converted_rent: "string",
        total_payment_end_contract: "string",
    },

    input: {
        contract_term: 5,
        location: "",
    },

    update: (data: any) => {
        return set((state: any) => {
            state.data = {
                ...state.data,
                ...data,
            };
        });
    },

    updateYears: (years: number) => {
        return set((state: any) => {
            state.input.years = years;
        });
    },

    updateIncome: (income: number) => {
        return set((state: any) => {
            state.input.income = income;
            state.result.maximum_budget = (income * 6.25).toFixed(2) ?? "N/A";
            state.result.monthly_cost =
                ((state.result.maximum_budget / 12) * 0.045).toFixed(2) ??
                "N/A";
        });
    },
}));
