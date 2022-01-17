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
            parseFloat(contract_term ?? "5") *
            12
        ).toFixed(2) ?? "N/A"
    );
}

function calculateProjectedValue({
    maximum_budget,
    percentage_growth,
    contract_term,
}: {
    maximum_budget: string;
    percentage_growth: string;
    contract_term: string;
}) {
    return (
        (
            (parseFloat(maximum_budget) * (1 + parseFloat(percentage_growth))) ^
            parseInt(contract_term)
        ).toFixed(2) ?? "N/A"
    );
}

function calculateTotalPaymentEndContract({
    projected_value,
    total_converted_rent,
}: {
    projected_value: string;
    total_converted_rent: string;
}) {
    return (
        (
            parseFloat(projected_value) - parseFloat(total_converted_rent)
        ).toFixed(2) ?? "N/A"
    );
}

export const calculatorStore = create((set: any) => ({
    result: {
        maximum_budget: "",
        monthly_cost: "",
        product_fee: "£2990",
        projected_value: "",
        total_converted_rent: "",
        total_payment_end_contract: "",
        location: "NW3",
    },

    input: {
        contract_term: "5",
        income: "0",
        percentage_growth: "3.5",
    },

    updateLocation: (location: string) => {
        return set((state: any) => {
            state.result.location = location;
        });
    },

    updateContractTerm: (years: string) => {
        return set((state: any) => {
            state.input.contract_term = years;

            state.result.total_converted_rent = calculateTotalConvertedRent({
                monthly_cost: state.result.monthly_cost,
                contract_term: years,
            });

            state.result.projected_value = calculateProjectedValue({
                maximum_budget: state.result.maximum_budget,
                contract_term: state.input.contract_term,
                percentage_growth: state.input.percentage_growth,
            });

            state.result.total_payment_end_contract =
                calculateTotalPaymentEndContract({
                    projected_value: state.result.projected_value,
                    total_converted_rent: state.result.total_converted_rent,
                });
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

            state.result.total_converted_rent = calculateTotalConvertedRent({
                monthly_cost: state.result.monthly_cost,
                contract_term: state.input.monthly_cost,
            });

            state.result.projected_value = calculateProjectedValue({
                maximum_budget: state.result.maximum_budget,
                contract_term: state.input.contract_term,
                percentage_growth: state.input.percentage_growth,
            });

            state.result.total_payment_end_contract =
                calculateTotalPaymentEndContract({
                    projected_value: state.result.projected_value,
                    total_converted_rent: state.result.total_converted_rent,
                });
        });
    },

    updatePercentageGrowth: (growth: string) => {
        return set((state: any) => {
            state.input.percentage_growth = growth;

            state.result.projected_value = calculateProjectedValue({
                maximum_budget: state.result.maximum_budget,
                contract_term: state.input.contract_term,
                percentage_growth: state.input.percentage_growth,
            });
        });
    },
}));
