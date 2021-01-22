//https://github.com/tanvir-ahmeed/assignment-js




//01- kilometerToMeter

function kilometerToMeter(kilometer) {
    var getmeter = kilometer * 1000;
    return getmeter;
}
var resultMeter = kilometerToMeter(1);

//console output

console.log(resultMeter);



//02- bugetcalculator

function bugetcalculator(watch, phone, laptop) {
    var watchPrice = watch * 50;
    var phonePrice = phone * 100;
    var laptopPrice = laptop * 500;
    var getTotalPrice = watchPrice + phonePrice + laptopPrice;
    return getTotalPrice;
}

var bugetResult = bugetcalculator(1, 2, 3);

//console outPut

console.log(bugetResult);




//03- hotelCost(dayCount) 

    function hotelCost(dayCount) {
        var totalPrice = 0;
        if (dayCount <= 10) {
            totalPrice = dayCount * 100;
        } else if (dayCount <= 20) {
            var firstStayPrice = 10 * 100;
            var secondStay = dayCount - 10;
            var secondStayPrice = secondStay * 80;
            var totalPrice = firstStayPrice + secondStayPrice;
        } else {
            var firstStayPrice = 10 * 100;
            var secondStayPrice = 10 * 80;
            var thirdStay = dayCount - 20;
            var thirdStayPrice = thirdStay * 50;
            var totalPrice = firstStayPrice + secondStayPrice + thirdStayPrice;
        }
        return totalPrice;
    }
    var getHotelCost = hotelCost(21);

    // Console Output

    console.log(getHotelCost);



    //04-megafriend

    function megaFriend(friendsName) {
        var longestName = '';
        for (var i = 0; i < friendsName.length; i++) {
            if (longestName.length < friendsName[i].length) {
                longestName = friendsName[i];
            }
        }
        return longestName;
    }
    
    // Friends Name

    var getMegaFriend = megaFriend([
        'Yeasin Arafat',
        'Tanvir Ahmed shuvo',
        'Tamim Ahmed',
    ]);
    
    // Console Output

    console.log(getMegaFriend);


    
    