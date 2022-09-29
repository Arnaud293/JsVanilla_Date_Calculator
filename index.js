// Convert start date input (dd)

const today = new Date().toISOString().split('T')[0];


// Start date
start_date.value = today;
start_date.min = today;


let tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
const tomorrowDate = tomorrow.toISOString().split('T')[0];

// Convert End Date format (dd + 1)

end_date.value = tomorrowDate;
end_date.min = tomorrowDate;

