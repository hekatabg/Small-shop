function hairsalon(input) {
    const haircutMens = 15;
    const haircutLadies = 20;
    const haircutKids = 10;
    const colorTouchUp = 20;
    const colorFull = 30;

    let index = 0;
    const todayNeeded = Number(input[index]);
    index++;
    let moneyToday = 0;
    let knowme = false;
    while (knowme !== true) {
        hair = input[index];
        if (hair == "closed") {
            knowme = true;
            let calcMy = todayNeeded - moneyToday;
            console.log(`Target not reached! You need ${calcMy}lv. more.`);
            console.log(`Earned money: ${moneyToday}lv.`);
            break;
        }
        if (moneyToday === todayNeeded) {
            knowme = true;
            console.log(`You have reached your target for the day!`);
            console.log(`Earned money: ${moneyToday}lv.`);
            break;
        }
        if (hair == null) {
            knowme = true;
            break;
        }

        switch (hair) {
            case "mens":
                moneyToday += haircutMens;
                break;
            case "ladies":
                moneyToday += haircutLadies;
                break;
            case "kids":
                moneyToday += haircutKids;
                break;
            case "touch up":
                moneyToday += colorTouchUp;
                break;
            case "full color":
                moneyToday += colorFull;
                break;

        }

        index++;

    }


}

hairsalon(["50",
    "color",
    "full",
    "color",
    "haircut",
    "ladies"
])