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

start_date.addEventListener('change', (e) => {
    let day = new Date(e.target.value);

    if (end_date.value <= start_date.value){
        day.setDate(day.getDate() + 1);
        let tomorrowDate = day.toISOString().split('T')[0];
        end_date.value = tomorrowDate;
    }
})

