// import { useState } from "react";

// const getDateRange = (type) => {
//     const today = new Date();
//     let start, end;

//     switch (type) {
//         case "current_month":
//             // current date
//             let prev30 = new Date(today);
//             // start = new Date(today.getFullYear(), today.getMonth() - 1, 1);
//             prev30.setDate(today.getDate() - 30);  // go back 30 days
//             start = new Date(prev30);
//             end = new Date();
//             break;
//         case "last_month":
//             start = new Date(today.getFullYear(), today.getMonth() - 1, 1);
//             end = new Date(today.getFullYear(), today.getMonth(), 0);
//             break;
//         case "last_3_months":
//             start = new Date(today.getFullYear(), today.getMonth() - 3, 1);
//             end = new Date(today.getFullYear(), today.getMonth(), 0);
//             break;
//         case "last_6_months":
//             start = new Date(today.getFullYear(), today.getMonth() - 6, 1);
//             end = new Date(today.getFullYear(), today.getMonth(), 0);
//             break;
//         case "financial_year": {
//             const currentYear = today.getFullYear();
//             const fiscalStart = new Date(today.getMonth() < 3 ? currentYear - 1 : currentYear, 3, 1); // Apr 1
//             const fiscalEnd = new Date(fiscalStart.getFullYear() + 1, 2, 31); // Mar 31 next year
//             start = fiscalStart;
//             end = fiscalEnd;
//             break;
//         }
//         default:
//             start = null;
//             end = null;
//             break;
//     }

//     return [start, end];
// };

// export const useDateRange = (initial = "current_month") => {
//     const [rangeLabel, setRangeLabel] = useState(initial);
//     const [rangeValue, setRangeValue] = useState(getDateRange(initial));
//     const setRange = (label) => {
//         setRangeLabel(label);
//         const newRange = getDateRange(label);
//         console.log("Set range:", label, newRange);
//         setRangeValue(newRange);
//     };
//     const setCustomRange = (start, end) => {
//         console.log("Set custom range", start, end);
//         setRangeLabel("custom");
//         setRangeValue([start, end]);
//     };

//     return {
//         rangeLabel,
//         fromDate: rangeValue[0],
//         toDate: rangeValue[1],
//         setRange,
//         setCustomRange,
//     };
// };



// import { useState } from "react";

// const getDateRange = (type) => {
//     // window.moment = moment;

//     const today = new Date();
//     let start, end;

//     switch (type) {
//         case "current_month":
//             start = new Date(today.getFullYear(), today.getMonth(), 1);
//             end = new Date(today.getFullYear(), today.getMonth() + 1, 0);
//             break;

//         case "last_month":
//             start = new Date(today.getFullYear(), today.getMonth() - 1, 1);
//             end = new Date(today.getFullYear(), today.getMonth(), 0);
//             break;

//         case "last_3_months":
//             start = new Date(today.getFullYear(), today.getMonth() - 3, 1);
//             end = new Date(today.getFullYear(), today.getMonth(), 0);
//             break;

//         case "last_6_months":
//             start = new Date(today.getFullYear(), today.getMonth() - 6, 1);
//             end = new Date(today.getFullYear(), today.getMonth(), 0);
//             break;

//         case "financial_year": {
//             const currentYear = today.getFullYear();
//             const fiscalStart = new Date(
//                 today.getMonth() < 3 ? currentYear - 1 : currentYear,
//                 3,
//                 1
//             ); // Apr 1
//             const fiscalEnd = new Date(fiscalStart.getFullYear() + 1, 2, 31); // Mar 31 next year
//             start = fiscalStart;
//             end = fiscalEnd;
//             break;
//         }

//         default:
//             start = null;
//             end = null;
//             break;
//     }

//     return [start, end];
// };

// export const useDateRange = (initial = "current_month") => {
//     const [rangeLabel, setRangeLabel] = useState(initial);
//     const [rangeValue, setRangeValue] = useState(getDateRange(initial));

//     const setRange = (label) => {
//         setRangeLabel(label);
//         if (label !== "custom") {
//             setRangeValue(getDateRange(label));
//         }
//     };

//     const setCustomRange = (start, end) => {
//         setRangeLabel("custom");
//         setRangeValue([start, end]);
//     };

//     return {
//         rangeLabel,
//         fromDate: rangeValue[0],
//         toDate: rangeValue[1],
//         setRange,
//         setCustomRange,
//     };
// };


import { useState } from "react";

const getDateRange = (type) => {
    const today = new Date();
    let start, end;

    switch (type) {
        case "current_month":
            start = new Date(today.getFullYear(), today.getMonth(), 1);
            end = new Date();
            break;

        case "last_month":
            start = new Date(today.getFullYear(), today.getMonth() - 1, 1);
            end = new Date(today.getFullYear(), today.getMonth(), 0);
            break;

        case "last_3_months":
            start = new Date(today.getFullYear(), today.getMonth() - 3, 1);
            end = today;
            break;

        case "last_6_months":
            start = new Date(today.getFullYear(), today.getMonth() - 6, 1);
            end = today;
            break;

        case "current_financial_year": {
            const currentYear = today.getFullYear();
            const fiscalStart = new Date(today.getMonth() < 3 ? currentYear - 1 : currentYear, 3, 1); // Apr 1
            const fiscalEnd = new Date(fiscalStart.getFullYear() + 1, 2, 31); // Mar 31 next year
            start = fiscalStart;
            end = fiscalEnd > today ? today : fiscalEnd; // don't go beyond today
            break;
        }

        case "last_year":
            start = new Date(today.getFullYear() - 1, 0, 1);
            end = new Date(today.getFullYear() - 1, 11, 31);
            break;

        case "last_financial_year": {
            const currentYear = today.getFullYear();
            const fiscalStart = new Date(today.getMonth() < 3 ? currentYear - 2 : currentYear - 1, 3, 1); // Apr 1 last FY
            const fiscalEnd = new Date(fiscalStart.getFullYear() + 1, 2, 31); // Mar 31 last FY
            start = fiscalStart;
            end = fiscalEnd;
            break;
        }

        default:
            start = null;
            end = null;
            break;
    }

    return [start, end];
};

export const useDateRange = (initial = "current_month") => {
    const [rangeLabel, setRangeLabel] = useState(initial);
    const [rangeValue, setRangeValue] = useState(getDateRange(initial));

    const setRange = (label) => {
        setRangeLabel(label);
        if (label !== "custom") {
            setRangeValue(getDateRange(label));
        }
    };

    const setCustomRange = (start, end) => {
        setRangeLabel("custom");
        setRangeValue([start, end]);
    };

    return {
        rangeLabel,
        fromDate: rangeValue[0],
        toDate: rangeValue[1],
        setRange,
        setCustomRange,
    };
};


