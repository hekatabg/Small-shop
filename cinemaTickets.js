function cinemaTicket (input){

    const day = input[0];

    if (day === "Monday" || day === "Tuesday" || day ==="Friday"){

        console.log(12);
    } else if (day === "Wednesday" || day === "Tuesday"){

        console.log(14);
    }else {
        console.log(16);
    }
}

cinemaTicket(["Monday"]);