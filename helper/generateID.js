import formatDateToDDMMYY from "./getDateID";

export default (code="TH",num1=1, num2=1,id)=>{
    const number = id * num1 + num2;
    const datePart = formatDateToDDMMYY();
    return `${code}${number}-${datePart}`
}