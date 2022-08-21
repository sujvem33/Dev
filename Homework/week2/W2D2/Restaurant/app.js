let menu= {
    Lunch: [
        {
            name: "Chicken Biryani",
            smallprice: "$10",
            spicelevel: "High",
            largeprice: "$12"
        },
        {
            name: "Goat Biryani",
            smallprice: "$12",
            spicelevel: "High",
            largeprice: "$15"
        },
        {
            name: "Salad",
            smallprice: "$10",
            spicelevel: "Medium",
            largeprice: "$12"
        },
        {
            name: "Chicken Fried Rice",
            smallprice: "$9",
            spicelevel: "Medium",
            largeprice: "$11"
        },
        {
            name: "Noodles",
            smallprice: "$10",
            spicelevel: "Low",
            largeprice: 12
        },
        {
            name: "Thali",
            smallprice: "$10",
            spicelevel: "Low",
            largeprice: "$12"
        },
    ],
    Brunch: [
        {
            name: "Omlette",
            smallprice: "$12",
            spicelevel: "Low",
            largeprice: "$14"
        },
        {
            name: "Bisibila bath",
            smallprice: "$7",
            spicelevel: "Medium",
            largeprice: "$8"
        },
        {
            name: "Chicken Butter Masala",
            smallprice: "$10",
            spicelevel: "Medium",
            largeprice: "$12"
        },
        {
            name: "Chicken Salad",
            smallprice: "$8",
            spicelevel: "Low",
            largeprice: "$10"
        },
        {
            name: "Pasta",
            smallprice: "$10",
            spicelevel: "Medium",
            largeprice: "$12"
        },
        {
            name: "Green Salad with Fruits",
            smallprice: "$12",
            spicelevel: "Low",
            largeprice: "$14"
        },
    ],
    Dinner: [
        {
            name: "Chicken Biryani",
            smallprice: "$10",
            spicelevel: "High",
            largeprice: "$12"
        },
        {
            name: "Goat Biryani",
            smallprice: "$12",
            spicelevel: "High",
            largeprice: "$15"
        },
        {
            name: "Chicken Curry with Rice",
            smallprice: "$10",
            spicelevel: "Medium",
            largeprice: "$12"
        },
        {
            name: "Chicken Fried Rice",
            smallprice: "$9",
            spicelevel: "Medium",
            largeprice: "$11"
        },
        {
            name: "Noodles",
            smallprice: "$10",
            spicelevel: "Low",
            largeprice: 12
        },
        {
            name: "Thai Fried Rice",
            smallprice: "$10",
            spicelevel: "Low",
            largeprice: "$12"
        },
    ],
    Desert: [
        {
            name: "Choclate Ice Cream",
            smallprice: "$6",
            spicelevel: "NA",
            largeprice: "$8"
        },
        {
            name: "Vanilla Ice Cream",
            smallprice: "$7",
            spicelevel: "NA",
            largeprice: "$8"
        },
        {
            name: "Sundae",
            smallprice: "$6",
            spicelevel: "NA",
            largeprice: "$7"
        },
        {
            name: "Brownie",
            smallprice: "$5",
            spicelevel: "NA",
            largeprice: "$6"
        },
        {
            name: "Cheese Cake",
            smallprice: "$5",
            spicelevel: "NA",
            largeprice: "$6"
        },
        {
            name: "Fruit Custard",
            smallprice: "$4",
            spicelevel: "NA",
            largeprice: "$5"
        },
    ],
    Beverages: [
        {
            name: "Coke",
            smallprice: "$6",
            spicelevel: "NA",
            largeprice: "$7"
        },
        {
            name: "Sprite",
            smallprice: "$7",
            spicelevel: "NA",
            largeprice: "$8"
        },
        {
            name: "Blue Moon",
            smallprice: "$6",
            spicelevel: "NA",
            largeprice: "$7"
        },
        {
            name: "Corona",
            smallprice: "$5",
            spicelevel: "NA",
            largeprice: "$6"
        },
        {
            name: "Wine",
            smallprice: "$5",
            spicelevel: "NA",
            largeprice: "$6"
        },
        {
            name: "Champaigne",
            smallprice: "$4",
            spicelevel: "NA",
            largeprice: "$5"
        },
    ],
    Entrees: [
        {
            name: "Chicken Biryani",
            smallprice: "$10",
            spicelevel: "High",
            largeprice: "$12"
        },
        {
            name: "Goat Biryani",
            smallprice: "$12",
            spicelevel: "High",
            largeprice: "$15"
        },
        {
            name: "Chicken Tikka Masala",
            smallprice: "$10",
            spicelevel: "Medium",
            largeprice: "$12"
        },
        {
            name: "Chicken Fried Rice",
            smallprice: "$9",
            spicelevel: "Medium",
            largeprice: "$11"
        },
        {
            name: "Noodles",
            smallprice: "$10",
            spicelevel: "Low",
            largeprice: 12
        },
        {
            name: "Thali",
            smallprice: "$10",
            spicelevel: "Low",
            largeprice: "$12"
        },
    ],
    Appetizers: [
        {
            name: "Chilli Chicken",
            smallprice: "$10",
            spicelevel: "High",
            largeprice: "$13"
        },
        {
            name: "Chicken Magestic",
            smallprice: "$10",
            spicelevel: "High",
            largeprice: "$13"
        },
        {
            name: "Fried Shrimp",
            smallprice: "$14",
            spicelevel: "Low",
            largeprice: "$17"
        },
        {
            name: "Apollo Fish",
            smallprice: "$13",
            spicelevel: "Medium",
            largeprice: "$16"
        },
        {
            name: "Gobi Manchurian",
            smallprice: "$5",
            spicelevel: "Medium",
            largeprice: "$8"
        },
        {
            name: "Lamb Chops",
            smallprice: "$10",
            spicelevel: "High",
            largeprice: "$15"
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