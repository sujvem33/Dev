let menu= {
    Lunch: [
        {
            name: "Pancakes",
            smallprice: "$6",
            spicelevel: "Extra Pancake",
            largeprice: "$7"
        },
        {
            name: "Omelette",
            smallprice: "$7",
            spicelevel: "Extra Egg",
            largeprice: "$8"
        },
        {
            name: "Waffles",
            smallprice: "$6",
            spicelevel: "Lg",
            largeprice: "$7"
        },
        {
            name: "Home Fries",
            smallprice: "$5",
            spicelevel: "Lg",
            largeprice: "$6"
        },
        {
            name: "Hash Browns",
            smallprice: "$5",
            spicelevel: "Lg",
            largeprice: "$6"
        },
        {
            name: "Fruit Cup",
            smallprice: "$4",
            spicelevel: "Lg",
            largeprice: "$5"
        },
    ],
    Brunch: [
        {
            name: "sandwich",
            smallprice: "$6",
            spicelevel: "Extra Pancake",
            largeprice: "$7"
        },
        {
            name: "Omelette",
            smallprice: "$7",
            spicelevel: "Extra Egg",
            largeprice: "$8"
        },
        {
            name: "Waffles",
            smallprice: "$6",
            spicelevel: "Lg",
            largeprice: "$7"
        },
        {
            name: "Home Fries",
            smallprice: "$5",
            spicelevel: "Lg",
            largeprice: "$6"
        },
        {
            name: "Hash Browns",
            smallprice: "$5",
            spicelevel: "Lg",
            largeprice: "$6"
        },
        {
            name: "Fruit Cup",
            smallprice: "$4",
            spicelevel: "Lg",
            largeprice: "$5"
        },
    ],
    Dinner: [
        {
            name: "pizza",
            smallprice: "$6",
            spicelevel: "Extra Pancake",
            largeprice: "$7"
        },
        {
            name: "Omelette",
            smallprice: "$7",
            spicelevel: "Extra Egg",
            largeprice: "$8"
        },
        {
            name: "Waffles",
            smallprice: "$6",
            spicelevel: "Lg",
            largeprice: "$7"
        },
        {
            name: "Home Fries",
            smallprice: "$5",
            spicelevel: "Lg",
            largeprice: "$6"
        },
        {
            name: "Hash Browns",
            smallprice: "$5",
            spicelevel: "Lg",
            largeprice: "$6"
        },
        {
            name: "Fruit Cup",
            smallprice: "$4",
            spicelevel: "Lg",
            largeprice: "$5"
        },
    ],
    Desert: [
        {
            name: "Pancakes",
            smallprice: "$6",
            spicelevel: "Extra Pancake",
            largeprice: "$7"
        },
        {
            name: "Omelette",
            smallprice: "$7",
            spicelevel: "Extra Egg",
            largeprice: "$8"
        },
        {
            name: "Waffles",
            smallprice: "$6",
            spicelevel: "Lg",
            largeprice: "$7"
        },
        {
            name: "Home Fries",
            smallprice: "$5",
            spicelevel: "Lg",
            largeprice: "$6"
        },
        {
            name: "Hash Browns",
            smallprice: "$5",
            spicelevel: "Lg",
            largeprice: "$6"
        },
        {
            name: "Fruit Cup",
            smallprice: "$4",
            spicelevel: "Lg",
            largeprice: "$5"
        },
    ],
    Beverages: [
        {
            name: "Pancakes",
            smallprice: "$6",
            spicelevel: "Extra Pancake",
            largeprice: "$7"
        },
        {
            name: "Omelette",
            smallprice: "$7",
            spicelevel: "Extra Egg",
            largeprice: "$8"
        },
        {
            name: "Waffles",
            smallprice: "$6",
            spicelevel: "Lg",
            largeprice: "$7"
        },
        {
            name: "Home Fries",
            smallprice: "$5",
            spicelevel: "Lg",
            largeprice: "$6"
        },
        {
            name: "Hash Browns",
            smallprice: "$5",
            spicelevel: "Lg",
            largeprice: "$6"
        },
        {
            name: "Fruit Cup",
            smallprice: "$4",
            spicelevel: "Lg",
            largeprice: "$5"
        },
    ],
    Entrees: [
        {
            name: "Pancakes",
            smallprice: "$6",
            spicelevel: "Extra Pancake",
            largeprice: "$7"
        },
        {
            name: "Omelette",
            smallprice: "$7",
            spicelevel: "Extra Egg",
            largeprice: "$8"
        },
        {
            name: "Waffles",
            smallprice: "$6",
            spicelevel: "Lg",
            largeprice: "$7"
        },
        {
            name: "Home Fries",
            smallprice: "$5",
            spicelevel: "Lg",
            largeprice: "$6"
        },
        {
            name: "Hash Browns",
            smallprice: "$5",
            spicelevel: "Lg",
            largeprice: "$6"
        },
        {
            name: "Fruit Cup",
            smallprice: "$4",
            spicelevel: "Lg",
            largeprice: "$5"
        },
    ],
    Appetizers: [
        {
            name: "Pancakes",
            smallprice: "$6",
            spicelevel: "Extra Pancake",
            largeprice: "$7"
        },
        {
            name: "Omelette",
            smallprice: "$7",
            spicelevel: "Extra Egg",
            largeprice: "$8"
        },
        {
            name: "Waffles",
            smallprice: "$6",
            spicelevel: "Lg",
            largeprice: "$7"
        },
        {
            name: "Home Fries",
            smallprice: "$5",
            spicelevel: "Lg",
            largeprice: "$6"
        },
        {
            name: "Hash Browns",
            smallprice: "$5",
            spicelevel: "Lg",
            largeprice: "$6"
        },
        {
            name: "Fruit Cup",
            smallprice: "$4",
            spicelevel: "Lg",
            largeprice: "$5"
        }
    ]
}


    let changeItems = (evt) => {
        let menuitems = document.querySelectorAll(".menuitem")
        for(let i = 0; i <menuitems.length; i++ ){
            menuitems[i].innerHTML = `<ul>
            <li class="item${i+1}">${menu[evt][i].name}</li>
            <li class="item${i+1}">${menu[evt][i].smallprice}</li>
            <li class="item${i+1}">${menu[evt][i].spicelevel}</li>
            <li class="item${i+1}">${menu[evt][i].largeprice}</li>
        </ul> `
        }
    }