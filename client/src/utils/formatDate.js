export const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    const formattedDate = date.toLocaleDateString("en-US", options);
    return formattedDate
}

export const formatDateToDateObject = (inputDate) =>{
    const dateObject = new Date(inputDate);
    const formattedDate = dateObject.toISOString();
    return formattedDate;
}