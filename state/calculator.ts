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

function calculateTotalConvertedRent({
    monthly_cost,
    contract_term,
}: {
    monthly_cost: string;
    contract_term: string;
}) {
    return (
        (
            0.25 *
            parseFloat(monthly_cost) *
            parseFloat(contract_term) *
            12
        ).toFixed(2) ?? "N/A"
    );
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
        income: "",
    },

    update: (data: any) => {
        return set((state: any) => {
            state.data = {
                ...state.data,
                ...data,
            };
        });
    },

    updateLocation: (location: string) => {
        return set((state: any) => {
            state.input.location = location;
        });
    },

    updateContractTerm: (years: string) => {
        return set((state: any) => {
            state.input.contract_term = years;

            state.result.total_converted_rent =
                calculateTotalConvertedRent(state);
        });
    },

    updateIncome: (income: string) => {
        return set((state: any) => {
            state.input.income = income;
            state.result.maximum_budget =
                (parseFloat(income) * 6.25).toFixed(2) ?? "N/A";
            state.result.monthly_cost =
                ((state.result.maximum_budget / 12) * 0.045).toFixed(2) ??
                "N/A";

            state.result.total_converted_rent =
                calculateTotalConvertedRent(state);
        });
    },
}));
