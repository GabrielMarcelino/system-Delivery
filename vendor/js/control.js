// FUNÇÃO DE FILTRAR QUAL DIV MOSTRAR DE ACORDO COM O MENU
$('.cortes input').on("click", function () {
    var id = $(this).attr("id").replace("bt_", "");
    $('#galeria .item-c').hide();
    $('#galeria .cortes-item-' + id + '').show();
});


//// inicio item one //////////
const btnAumentarOne = document.querySelector('#aumentar-item-one');

btnAumentarOne.onclick = function () {
    if (document.getElementById("item-one-qtd").innerHTML < 20) {
        document.getElementById("item-one-qtd").innerHTML++;
        const qtdItemOne = document.getElementById("item-one-qtd").innerHTML;
        const itemOneName = document.getElementById("item-one").innerHTML;
        const itemOnePrice = document.getElementById("item-one-price").innerHTML.replace("$", "");
        const itemOnePriceTotal = (itemOnePrice * qtdItemOne).toFixed(2);
        document.getElementById("car-itens-one").innerHTML = "" + qtdItemOne + "x - " + itemOneName + " = <b>R$" + itemOnePriceTotal + "</b>";




        const qtdItemTwo = document.getElementById("item-two-qtd").innerHTML;
        const itemTwoPrice = document.getElementById("item-two-price").innerHTML.replace("$", "");
        const itemTwoPriceTotal = (itemTwoPrice * qtdItemTwo).toFixed(2);

        const qtdItemThree = document.getElementById("item-three-qtd").innerHTML;
        const itemThreePrice = document.getElementById("item-three-price").innerHTML.replace("$", "");
        const itemThreePriceTotal = (itemThreePrice * qtdItemThree).toFixed(2);

        const qtdItemFour = document.getElementById("item-four-qtd").innerHTML;
        const itemFourPrice = document.getElementById("item-four-price").innerHTML.replace("$", "");
        const itemFourPriceTotal = (itemFourPrice * qtdItemFour).toFixed(2);

        const qtdItemFive = document.getElementById("item-five-qtd").innerHTML;
        const itemFivePrice = document.getElementById("item-five-price").innerHTML.replace("$", "");
        const itemFivePriceTotal = (itemFivePrice * qtdItemFive).toFixed(2);

        const qtdItemSix = document.getElementById("item-six-qtd").innerHTML;
        const itemSixPrice = document.getElementById("item-six-price").innerHTML.replace("$", "");
        const itemSixPriceTotal = (itemSixPrice * qtdItemSix).toFixed(2);
        
        const qtdItemSeven = document.getElementById("item-seven-qtd").innerHTML;
        const itemSevenPrice = document.getElementById("item-seven-price").innerHTML.replace("$", "");
        const itemSevenPriceTotal = (itemSevenPrice * qtdItemSeven).toFixed(2);
        
        const qtdItemEight = document.getElementById("item-eight-qtd").innerHTML;
        const itemEightPrice = document.getElementById("item-eight-price").innerHTML.replace("$", "");
        const itemEightPriceTotal = (itemEightPrice * qtdItemEight).toFixed(2);


        document.getElementById("total-products").innerHTML = (parseFloat(itemOnePriceTotal) + parseFloat(itemTwoPriceTotal) + parseFloat(itemThreePriceTotal) + parseFloat(itemFourPriceTotal) + parseFloat(itemFivePriceTotal) + parseFloat(itemSixPriceTotal) + parseFloat(itemSevenPriceTotal) + parseFloat(itemEightPriceTotal)).toFixed(2);
        
        document.getElementById("qtd-car-atual").innerHTML = (parseFloat(qtdItemOne) + parseFloat(qtdItemTwo) + parseFloat(qtdItemThree) + parseFloat(qtdItemFour) + parseFloat(qtdItemFive) + parseFloat(qtdItemSix) + parseFloat(qtdItemSeven) + parseFloat(qtdItemEight));


        document.querySelector('#diminuir-item-one').removeAttribute("disabled");
        
        document.querySelector('#ir-car-one').style.display = "block";
    } else {
        alert('Desculpe, só pode comprar 20 por vez amigão !')
    };
}

const btnDiminuirOne = document.querySelector('#diminuir-item-one');

btnDiminuirOne.onclick = function () {
    if (document.getElementById("item-one-qtd").innerHTML > 1) {
        document.getElementById("item-one-qtd").innerHTML--;
        const qtdItemOne = document.getElementById("item-one-qtd").innerHTML;
        const itemOneName = document.getElementById("item-one").innerHTML;
        const itemOnePrice = document.getElementById("item-one-price").innerHTML.replace("$", "");
        const itemOnePriceTotal = (itemOnePrice * qtdItemOne).toFixed(2);
        document.getElementById("car-itens-one").innerHTML = "" + qtdItemOne + "x - " + itemOneName + " = <b>R$" + itemOnePriceTotal + "</b>";



        const qtdItemTwo = document.getElementById("item-two-qtd").innerHTML;
        const itemTwoPrice = document.getElementById("item-two-price").innerHTML.replace("$", "");
        const itemTwoPriceTotal = (itemTwoPrice * qtdItemTwo).toFixed(2);

        const qtdItemThree = document.getElementById("item-three-qtd").innerHTML;
        const itemThreePrice = document.getElementById("item-three-price").innerHTML.replace("$", "");
        const itemThreePriceTotal = (itemThreePrice * qtdItemThree).toFixed(2);

        const qtdItemFour = document.getElementById("item-four-qtd").innerHTML;
        const itemFourPrice = document.getElementById("item-four-price").innerHTML.replace("$", "");
        const itemFourPriceTotal = (itemFourPrice * qtdItemFour).toFixed(2);

        const qtdItemFive = document.getElementById("item-five-qtd").innerHTML;
        const itemFivePrice = document.getElementById("item-five-price").innerHTML.replace("$", "");
        const itemFivePriceTotal = (itemFivePrice * qtdItemFive).toFixed(2);

        const qtdItemSix = document.getElementById("item-six-qtd").innerHTML;
        const itemSixPrice = document.getElementById("item-six-price").innerHTML.replace("$", "");
        const itemSixPriceTotal = (itemSixPrice * qtdItemSix).toFixed(2);
        
        const qtdItemSeven = document.getElementById("item-seven-qtd").innerHTML;
        const itemSevenPrice = document.getElementById("item-seven-price").innerHTML.replace("$", "");
        const itemSevenPriceTotal = (itemSevenPrice * qtdItemSeven).toFixed(2);
        
        const qtdItemEight = document.getElementById("item-eight-qtd").innerHTML;
        const itemEightPrice = document.getElementById("item-eight-price").innerHTML.replace("$", "");
        const itemEightPriceTotal = (itemEightPrice * qtdItemEight).toFixed(2);


        document.getElementById("total-products").innerHTML = (parseFloat(itemOnePriceTotal) + parseFloat(itemTwoPriceTotal) + parseFloat(itemThreePriceTotal) + parseFloat(itemFourPriceTotal) + parseFloat(itemFivePriceTotal) + parseFloat(itemSixPriceTotal) + parseFloat(itemSevenPriceTotal) + parseFloat(itemEightPriceTotal)).toFixed(2);
        
        document.getElementById("qtd-car-atual").innerHTML = (parseFloat(qtdItemOne) + parseFloat(qtdItemTwo) + parseFloat(qtdItemThree) + parseFloat(qtdItemFour) + parseFloat(qtdItemFive) + parseFloat(qtdItemSix) + parseFloat(qtdItemSeven) + parseFloat(qtdItemEight));






    } else if (document.getElementById("item-one-qtd").innerHTML = 1) {
        document.getElementById("item-one-qtd").innerHTML--;

        document.getElementById("car-itens-one").innerHTML = "";


        const qtdItemOne = document.getElementById("item-one-qtd").innerHTML;
        const itemOnePrice = document.getElementById("item-one-price").innerHTML.replace("$", "");
        const itemOnePriceTotal = (itemOnePrice * qtdItemOne).toFixed(2);

        const qtdItemTwo = document.getElementById("item-two-qtd").innerHTML;
        const itemTwoPrice = document.getElementById("item-two-price").innerHTML.replace("$", "");
        const itemTwoPriceTotal = (itemTwoPrice * qtdItemTwo).toFixed(2);

        const qtdItemThree = document.getElementById("item-three-qtd").innerHTML;
        const itemThreePrice = document.getElementById("item-three-price").innerHTML.replace("$", "");
        const itemThreePriceTotal = (itemThreePrice * qtdItemThree).toFixed(2);

        const qtdItemFour = document.getElementById("item-four-qtd").innerHTML;
        const itemFourPrice = document.getElementById("item-four-price").innerHTML.replace("$", "");
        const itemFourPriceTotal = (itemFourPrice * qtdItemFour).toFixed(2);

        const qtdItemFive = document.getElementById("item-five-qtd").innerHTML;
        const itemFivePrice = document.getElementById("item-five-price").innerHTML.replace("$", "");
        const itemFivePriceTotal = (itemFivePrice * qtdItemFive).toFixed(2);

        const qtdItemSix = document.getElementById("item-six-qtd").innerHTML;
        const itemSixPrice = document.getElementById("item-six-price").innerHTML.replace("$", "");
        const itemSixPriceTotal = (itemSixPrice * qtdItemSix).toFixed(2);
        
        const qtdItemSeven = document.getElementById("item-seven-qtd").innerHTML;
        const itemSevenPrice = document.getElementById("item-seven-price").innerHTML.replace("$", "");
        const itemSevenPriceTotal = (itemSevenPrice * qtdItemSeven).toFixed(2);
        
        const qtdItemEight = document.getElementById("item-eight-qtd").innerHTML;
        const itemEightPrice = document.getElementById("item-eight-price").innerHTML.replace("$", "");
        const itemEightPriceTotal = (itemEightPrice * qtdItemEight).toFixed(2);

        document.getElementById("total-products").innerHTML = (parseFloat(itemOnePriceTotal) + parseFloat(itemTwoPriceTotal) + parseFloat(itemThreePriceTotal) + parseFloat(itemFourPriceTotal) + parseFloat(itemFivePriceTotal) + parseFloat(itemSixPriceTotal) + parseFloat(itemSevenPriceTotal) + parseFloat(itemEightPriceTotal)).toFixed(2);
        
        document.getElementById("qtd-car-atual").innerHTML = (parseFloat(qtdItemOne) + parseFloat(qtdItemTwo) + parseFloat(qtdItemThree) + parseFloat(qtdItemFour) + parseFloat(qtdItemFive) + parseFloat(qtdItemSix) + parseFloat(qtdItemSeven) + parseFloat(qtdItemEight));



        btnDiminuirOne.setAttribute("disabled", "disabled");
        
        document.querySelector('#ir-car-one').style.display = "none";
    } else {
        alert('não pode !');
    }
}

//// fim item One   //////////




//// inicio item two //////////
const btnAumentarTwo = document.querySelector('#aumentar-item-two');

btnAumentarTwo.onclick = function () {
    if (document.getElementById("item-two-qtd").innerHTML < 20) {
        document.getElementById("item-two-qtd").innerHTML++;
        const qtdItemTwo = document.getElementById("item-two-qtd").innerHTML;
        const itemTwoName = document.getElementById("item-two").innerHTML;
        const itemTwoPrice = document.getElementById("item-two-price").innerHTML.replace("$", "");
        const itemTwoPriceTotal = (itemTwoPrice * qtdItemTwo).toFixed(2);
        document.getElementById("car-itens-two").innerHTML = "" + qtdItemTwo + "x - " + itemTwoName + " = <b>R$" + itemTwoPriceTotal + "</b>"


        const qtdItemOne = document.getElementById("item-one-qtd").innerHTML;
        const itemOnePrice = document.getElementById("item-one-price").innerHTML.replace("$", "");
        const itemOnePriceTotal = (itemOnePrice * qtdItemOne).toFixed(2);

        const qtdItemThree = document.getElementById("item-three-qtd").innerHTML;
        const itemThreePrice = document.getElementById("item-three-price").innerHTML.replace("$", "");
        const itemThreePriceTotal = (itemThreePrice * qtdItemThree).toFixed(2);

        const qtdItemFour = document.getElementById("item-four-qtd").innerHTML;
        const itemFourPrice = document.getElementById("item-four-price").innerHTML.replace("$", "");
        const itemFourPriceTotal = (itemFourPrice * qtdItemFour).toFixed(2);

        const qtdItemFive = document.getElementById("item-five-qtd").innerHTML;
        const itemFivePrice = document.getElementById("item-five-price").innerHTML.replace("$", "");
        const itemFivePriceTotal = (itemFivePrice * qtdItemFive).toFixed(2);

        const qtdItemSix = document.getElementById("item-six-qtd").innerHTML;
        const itemSixPrice = document.getElementById("item-six-price").innerHTML.replace("$", "");
        const itemSixPriceTotal = (itemSixPrice * qtdItemSix).toFixed(2);
        
        const qtdItemSeven = document.getElementById("item-seven-qtd").innerHTML;
        const itemSevenPrice = document.getElementById("item-seven-price").innerHTML.replace("$", "");
        const itemSevenPriceTotal = (itemSevenPrice * qtdItemSeven).toFixed(2);
        
        const qtdItemEight = document.getElementById("item-eight-qtd").innerHTML;
        const itemEightPrice = document.getElementById("item-eight-price").innerHTML.replace("$", "");
        const itemEightPriceTotal = (itemEightPrice * qtdItemEight).toFixed(2);

        document.getElementById("total-products").innerHTML = (parseFloat(itemOnePriceTotal) + parseFloat(itemTwoPriceTotal) + parseFloat(itemThreePriceTotal) + parseFloat(itemFourPriceTotal) + parseFloat(itemFivePriceTotal) + parseFloat(itemSixPriceTotal) + parseFloat(itemSevenPriceTotal) + parseFloat(itemEightPriceTotal)).toFixed(2);
        
        document.getElementById("qtd-car-atual").innerHTML = (parseFloat(qtdItemOne) + parseFloat(qtdItemTwo) + parseFloat(qtdItemThree) + parseFloat(qtdItemFour) + parseFloat(qtdItemFive) + parseFloat(qtdItemSix) + parseFloat(qtdItemSeven) + parseFloat(qtdItemEight));



        document.querySelector('#diminuir-item-two').removeAttribute("disabled");
        
        document.querySelector('#ir-car-two').style.display = "block";
    } else {
        alert('Desculpe, só pode comprar 20 por vez amigão !')
    };
}

const btnDiminuirTwo = document.querySelector('#diminuir-item-two');

btnDiminuirTwo.onclick = function () {
    if (document.getElementById("item-two-qtd").innerHTML > 1) {
        document.getElementById("item-two-qtd").innerHTML--;
        const qtdItemTwo = document.getElementById("item-two-qtd").innerHTML;
        const itemTwoName = document.getElementById("item-two").innerHTML;
        const itemTwoPrice = document.getElementById("item-two-price").innerHTML.replace("$", "");
        const itemTwoPriceTotal = (itemTwoPrice * qtdItemTwo).toFixed(2);
        document.getElementById("car-itens-two").innerHTML = "" + qtdItemTwo + "x - " + itemTwoName + " = <b>R$" + itemTwoPriceTotal + "</b>"

        const qtdItemOne = document.getElementById("item-one-qtd").innerHTML;
        const itemOnePrice = document.getElementById("item-one-price").innerHTML.replace("$", "");
        const itemOnePriceTotal = (itemOnePrice * qtdItemOne).toFixed(2);

        const qtdItemThree = document.getElementById("item-three-qtd").innerHTML;
        const itemThreePrice = document.getElementById("item-three-price").innerHTML.replace("$", "");
        const itemThreePriceTotal = (itemThreePrice * qtdItemThree).toFixed(2);

        const qtdItemFour = document.getElementById("item-four-qtd").innerHTML;
        const itemFourPrice = document.getElementById("item-four-price").innerHTML.replace("$", "");
        const itemFourPriceTotal = (itemFourPrice * qtdItemFour).toFixed(2);

        const qtdItemFive = document.getElementById("item-five-qtd").innerHTML;
        const itemFivePrice = document.getElementById("item-five-price").innerHTML.replace("$", "");
        const itemFivePriceTotal = (itemFivePrice * qtdItemFive).toFixed(2);

        const qtdItemSix = document.getElementById("item-six-qtd").innerHTML;
        const itemSixPrice = document.getElementById("item-six-price").innerHTML.replace("$", "");
        const itemSixPriceTotal = (itemSixPrice * qtdItemSix).toFixed(2);
        
        const qtdItemSeven = document.getElementById("item-seven-qtd").innerHTML;
        const itemSevenPrice = document.getElementById("item-seven-price").innerHTML.replace("$", "");
        const itemSevenPriceTotal = (itemSevenPrice * qtdItemSeven).toFixed(2);
        
        const qtdItemEight = document.getElementById("item-eight-qtd").innerHTML;
        const itemEightPrice = document.getElementById("item-eight-price").innerHTML.replace("$", "");
        const itemEightPriceTotal = (itemEightPrice * qtdItemEight).toFixed(2);

        document.getElementById("total-products").innerHTML = (parseFloat(itemOnePriceTotal) + parseFloat(itemTwoPriceTotal) + parseFloat(itemThreePriceTotal) + parseFloat(itemFourPriceTotal) + parseFloat(itemFivePriceTotal) + parseFloat(itemSixPriceTotal) + parseFloat(itemSevenPriceTotal) + parseFloat(itemEightPriceTotal)).toFixed(2);
        
        document.getElementById("qtd-car-atual").innerHTML = (parseFloat(qtdItemOne) + parseFloat(qtdItemTwo) + parseFloat(qtdItemThree) + parseFloat(qtdItemFour) + parseFloat(qtdItemFive) + parseFloat(qtdItemSix) + parseFloat(qtdItemSeven) + parseFloat(qtdItemEight));



    } else if (document.getElementById("item-two-qtd").innerHTML = 1) {
        document.getElementById("item-two-qtd").innerHTML--;

        document.getElementById("car-itens-two").innerHTML = "";

        const qtdItemOne = document.getElementById("item-one-qtd").innerHTML;
        const itemOnePrice = document.getElementById("item-one-price").innerHTML.replace("$", "");
        const itemOnePriceTotal = (itemOnePrice * qtdItemOne).toFixed(2);

        const qtdItemTwo = document.getElementById("item-two-qtd").innerHTML;
        const itemTwoPrice = document.getElementById("item-two-price").innerHTML.replace("$", "");
        const itemTwoPriceTotal = (itemTwoPrice * qtdItemTwo).toFixed(2);

        const qtdItemThree = document.getElementById("item-three-qtd").innerHTML;
        const itemThreePrice = document.getElementById("item-three-price").innerHTML.replace("$", "");
        const itemThreePriceTotal = (itemThreePrice * qtdItemThree).toFixed(2);

        const qtdItemFour = document.getElementById("item-four-qtd").innerHTML;
        const itemFourPrice = document.getElementById("item-four-price").innerHTML.replace("$", "");
        const itemFourPriceTotal = (itemFourPrice * qtdItemFour).toFixed(2);

        const qtdItemFive = document.getElementById("item-five-qtd").innerHTML;
        const itemFivePrice = document.getElementById("item-five-price").innerHTML.replace("$", "");
        const itemFivePriceTotal = (itemFivePrice * qtdItemFive).toFixed(2);

        const qtdItemSix = document.getElementById("item-six-qtd").innerHTML;
        const itemSixPrice = document.getElementById("item-six-price").innerHTML.replace("$", "");
        const itemSixPriceTotal = (itemSixPrice * qtdItemSix).toFixed(2);
        
        const qtdItemSeven = document.getElementById("item-seven-qtd").innerHTML;
        const itemSevenPrice = document.getElementById("item-seven-price").innerHTML.replace("$", "");
        const itemSevenPriceTotal = (itemSevenPrice * qtdItemSeven).toFixed(2);
        
        const qtdItemEight = document.getElementById("item-eight-qtd").innerHTML;
        const itemEightPrice = document.getElementById("item-eight-price").innerHTML.replace("$", "");
        const itemEightPriceTotal = (itemEightPrice * qtdItemEight).toFixed(2);

        document.getElementById("total-products").innerHTML = (parseFloat(itemOnePriceTotal) + parseFloat(itemTwoPriceTotal) + parseFloat(itemThreePriceTotal) + parseFloat(itemFourPriceTotal) + parseFloat(itemFivePriceTotal) + parseFloat(itemSixPriceTotal) + parseFloat(itemSevenPriceTotal) + parseFloat(itemEightPriceTotal)).toFixed(2);
        
        document.getElementById("qtd-car-atual").innerHTML = (parseFloat(qtdItemOne) + parseFloat(qtdItemTwo) + parseFloat(qtdItemThree) + parseFloat(qtdItemFour) + parseFloat(qtdItemFive) + parseFloat(qtdItemSix) + parseFloat(qtdItemSeven) + parseFloat(qtdItemEight));



        btnDiminuirTwo.setAttribute("disabled", "disabled");
        
        document.querySelector('#ir-car-two').style.display = "none";
    } else {
        alert('não pode !');
    }
}

//// fim item Two   //////////




//// inicio item three //////////
const btnAumentarThree = document.querySelector('#aumentar-item-three');

btnAumentarThree.onclick = function () {
    if (document.getElementById("item-three-qtd").innerHTML < 20) {
        document.getElementById("item-three-qtd").innerHTML++;
        const qtdItemThree = document.getElementById("item-three-qtd").innerHTML;
        const itemThreeName = document.getElementById("item-three").innerHTML;
        const itemThreePrice = document.getElementById("item-three-price").innerHTML.replace("$", "");
        const itemThreePriceTotal = (itemThreePrice * qtdItemThree).toFixed(2);
        document.getElementById("car-itens-three").innerHTML = "" + qtdItemThree + "x - " + itemThreeName + " = <b>R$" + itemThreePriceTotal + "</b>"


        const qtdItemOne = document.getElementById("item-one-qtd").innerHTML;
        const itemOnePrice = document.getElementById("item-one-price").innerHTML.replace("$", "");
        const itemOnePriceTotal = (itemOnePrice * qtdItemOne).toFixed(2);

        const qtdItemTwo = document.getElementById("item-two-qtd").innerHTML;
        const itemTwoPrice = document.getElementById("item-two-price").innerHTML.replace("$", "");
        const itemTwoPriceTotal = (itemTwoPrice * qtdItemTwo).toFixed(2);

        const qtdItemFour = document.getElementById("item-four-qtd").innerHTML;
        const itemFourPrice = document.getElementById("item-four-price").innerHTML.replace("$", "");
        const itemFourPriceTotal = (itemFourPrice * qtdItemFour).toFixed(2);

        const qtdItemFive = document.getElementById("item-five-qtd").innerHTML;
        const itemFivePrice = document.getElementById("item-five-price").innerHTML.replace("$", "");
        const itemFivePriceTotal = (itemFivePrice * qtdItemFive).toFixed(2);

        const qtdItemSix = document.getElementById("item-six-qtd").innerHTML;
        const itemSixPrice = document.getElementById("item-six-price").innerHTML.replace("$", "");
        const itemSixPriceTotal = (itemSixPrice * qtdItemSix).toFixed(2);
        
        const qtdItemSeven = document.getElementById("item-seven-qtd").innerHTML;
        const itemSevenPrice = document.getElementById("item-seven-price").innerHTML.replace("$", "");
        const itemSevenPriceTotal = (itemSevenPrice * qtdItemSeven).toFixed(2);
        
        const qtdItemEight = document.getElementById("item-eight-qtd").innerHTML;
        const itemEightPrice = document.getElementById("item-eight-price").innerHTML.replace("$", "");
        const itemEightPriceTotal = (itemEightPrice * qtdItemEight).toFixed(2);

        document.getElementById("total-products").innerHTML = (parseFloat(itemOnePriceTotal) + parseFloat(itemTwoPriceTotal) + parseFloat(itemThreePriceTotal) + parseFloat(itemFourPriceTotal) + parseFloat(itemFivePriceTotal) + parseFloat(itemSixPriceTotal) + parseFloat(itemSevenPriceTotal) + parseFloat(itemEightPriceTotal)).toFixed(2);
        
        document.getElementById("qtd-car-atual").innerHTML = (parseFloat(qtdItemOne) + parseFloat(qtdItemTwo) + parseFloat(qtdItemThree) + parseFloat(qtdItemFour) + parseFloat(qtdItemFive) + parseFloat(qtdItemSix) + parseFloat(qtdItemSeven) + parseFloat(qtdItemEight));



        document.querySelector('#diminuir-item-three').removeAttribute("disabled");
        
        document.querySelector('#ir-car-three').style.display = "block";
    } else {
        alert('Desculpe, só pode comprar 20 por vez amigão !')
    };
}

const btnDiminuirThree = document.querySelector('#diminuir-item-three');

btnDiminuirThree.onclick = function () {
    if (document.getElementById("item-three-qtd").innerHTML > 1) {
        document.getElementById("item-three-qtd").innerHTML--;
        const qtdItemThree = document.getElementById("item-three-qtd").innerHTML;
        const itemThreeName = document.getElementById("item-three").innerHTML;
        const itemThreePrice = document.getElementById("item-three-price").innerHTML.replace("$", "");
        const itemThreePriceTotal = (itemThreePrice * qtdItemThree).toFixed(2);
        document.getElementById("car-itens-three").innerHTML = "" + qtdItemThree + "x - " + itemThreeName + " = <b>R$" + itemThreePriceTotal + "</b>"

        const qtdItemOne = document.getElementById("item-one-qtd").innerHTML;
        const itemOnePrice = document.getElementById("item-one-price").innerHTML.replace("$", "");
        const itemOnePriceTotal = (itemOnePrice * qtdItemOne).toFixed(2);

        const qtdItemTwo = document.getElementById("item-two-qtd").innerHTML;
        const itemTwoPrice = document.getElementById("item-two-price").innerHTML.replace("$", "");
        const itemTwoPriceTotal = (itemTwoPrice * qtdItemTwo).toFixed(2);

        const qtdItemFour = document.getElementById("item-four-qtd").innerHTML;
        const itemFourPrice = document.getElementById("item-four-price").innerHTML.replace("$", "");
        const itemFourPriceTotal = (itemFourPrice * qtdItemFour).toFixed(2);

        const qtdItemFive = document.getElementById("item-five-qtd").innerHTML;
        const itemFivePrice = document.getElementById("item-five-price").innerHTML.replace("$", "");
        const itemFivePriceTotal = (itemFivePrice * qtdItemFive).toFixed(2);

        const qtdItemSix = document.getElementById("item-six-qtd").innerHTML;
        const itemSixPrice = document.getElementById("item-six-price").innerHTML.replace("$", "");
        const itemSixPriceTotal = (itemSixPrice * qtdItemSix).toFixed(2);
        
        const qtdItemSeven = document.getElementById("item-seven-qtd").innerHTML;
        const itemSevenPrice = document.getElementById("item-seven-price").innerHTML.replace("$", "");
        const itemSevenPriceTotal = (itemSevenPrice * qtdItemSeven).toFixed(2);
        
        const qtdItemEight = document.getElementById("item-eight-qtd").innerHTML;
        const itemEightPrice = document.getElementById("item-eight-price").innerHTML.replace("$", "");
        const itemEightPriceTotal = (itemEightPrice * qtdItemEight).toFixed(2);

        document.getElementById("total-products").innerHTML = (parseFloat(itemOnePriceTotal) + parseFloat(itemTwoPriceTotal) + parseFloat(itemThreePriceTotal) + parseFloat(itemFourPriceTotal) + parseFloat(itemFivePriceTotal) + parseFloat(itemSixPriceTotal) + parseFloat(itemSevenPriceTotal) + parseFloat(itemEightPriceTotal)).toFixed(2);
        
        document.getElementById("qtd-car-atual").innerHTML = (parseFloat(qtdItemOne) + parseFloat(qtdItemTwo) + parseFloat(qtdItemThree) + parseFloat(qtdItemFour) + parseFloat(qtdItemFive) + parseFloat(qtdItemSix) + parseFloat(qtdItemSeven) + parseFloat(qtdItemEight));




    } else if (document.getElementById("item-three-qtd").innerHTML = 1) {
        document.getElementById("item-three-qtd").innerHTML--;

        document.getElementById("car-itens-three").innerHTML = "";

        const qtdItemOne = document.getElementById("item-one-qtd").innerHTML;
        const itemOnePrice = document.getElementById("item-one-price").innerHTML.replace("$", "");
        const itemOnePriceTotal = (itemOnePrice * qtdItemOne).toFixed(2);

        const qtdItemTwo = document.getElementById("item-two-qtd").innerHTML;
        const itemTwoPrice = document.getElementById("item-two-price").innerHTML.replace("$", "");
        const itemTwoPriceTotal = (itemTwoPrice * qtdItemTwo).toFixed(2);

        const qtdItemThree = document.getElementById("item-three-qtd").innerHTML;
        const itemThreePrice = document.getElementById("item-three-price").innerHTML.replace("$", "");
        const itemThreePriceTotal = (itemThreePrice * qtdItemThree).toFixed(2);

        const qtdItemFour = document.getElementById("item-four-qtd").innerHTML;
        const itemFourPrice = document.getElementById("item-four-price").innerHTML.replace("$", "");
        const itemFourPriceTotal = (itemFourPrice * qtdItemFour).toFixed(2);

        const qtdItemFive = document.getElementById("item-five-qtd").innerHTML;
        const itemFivePrice = document.getElementById("item-five-price").innerHTML.replace("$", "");
        const itemFivePriceTotal = (itemFivePrice * qtdItemFive).toFixed(2);

        const qtdItemSix = document.getElementById("item-six-qtd").innerHTML;
        const itemSixPrice = document.getElementById("item-six-price").innerHTML.replace("$", "");
        const itemSixPriceTotal = (itemSixPrice * qtdItemSix).toFixed(2);
        
        const qtdItemSeven = document.getElementById("item-seven-qtd").innerHTML;
        const itemSevenPrice = document.getElementById("item-seven-price").innerHTML.replace("$", "");
        const itemSevenPriceTotal = (itemSevenPrice * qtdItemSeven).toFixed(2);
        
        const qtdItemEight = document.getElementById("item-eight-qtd").innerHTML;
        const itemEightPrice = document.getElementById("item-eight-price").innerHTML.replace("$", "");
        const itemEightPriceTotal = (itemEightPrice * qtdItemEight).toFixed(2);

        document.getElementById("total-products").innerHTML = (parseFloat(itemOnePriceTotal) + parseFloat(itemTwoPriceTotal) + parseFloat(itemThreePriceTotal) + parseFloat(itemFourPriceTotal) + parseFloat(itemFivePriceTotal) + parseFloat(itemSixPriceTotal) + parseFloat(itemSevenPriceTotal) + parseFloat(itemEightPriceTotal)).toFixed(2);
        
        document.getElementById("qtd-car-atual").innerHTML = (parseFloat(qtdItemOne) + parseFloat(qtdItemTwo) + parseFloat(qtdItemThree) + parseFloat(qtdItemFour) + parseFloat(qtdItemFive) + parseFloat(qtdItemSix) + parseFloat(qtdItemSeven) + parseFloat(qtdItemEight));


        btnDiminuirThree.setAttribute("disabled", "disabled");
        
        document.querySelector('#ir-car-three').style.display = "none";
    } else {
        alert('não pode !');
    }
}

//// fim item three   //////////





//// inicio item four //////////
const btnAumentarFour = document.querySelector('#aumentar-item-four');

btnAumentarFour.onclick = function () {
    if (document.getElementById("item-four-qtd").innerHTML < 20) {
        document.getElementById("item-four-qtd").innerHTML++;
        const qtdItemFour = document.getElementById("item-four-qtd").innerHTML;
        const itemFourName = document.getElementById("item-four").innerHTML;
        const itemFourPrice = document.getElementById("item-four-price").innerHTML.replace("$", "");
        const itemFourPriceTotal = (itemFourPrice * qtdItemFour).toFixed(2);
        document.getElementById("car-itens-four").innerHTML = "" + qtdItemFour + "x - " + itemFourName + " = <b>R$" + itemFourPriceTotal + "</b>"

        const qtdItemOne = document.getElementById("item-one-qtd").innerHTML;
        const itemOnePrice = document.getElementById("item-one-price").innerHTML.replace("$", "");
        const itemOnePriceTotal = (itemOnePrice * qtdItemOne).toFixed(2);

        const qtdItemTwo = document.getElementById("item-two-qtd").innerHTML;
        const itemTwoPrice = document.getElementById("item-two-price").innerHTML.replace("$", "");
        const itemTwoPriceTotal = (itemTwoPrice * qtdItemTwo).toFixed(2);

        const qtdItemThree = document.getElementById("item-three-qtd").innerHTML;
        const itemThreePrice = document.getElementById("item-three-price").innerHTML.replace("$", "");
        const itemThreePriceTotal = (itemThreePrice * qtdItemThree).toFixed(2);

        const qtdItemFive = document.getElementById("item-five-qtd").innerHTML;
        const itemFivePrice = document.getElementById("item-five-price").innerHTML.replace("$", "");
        const itemFivePriceTotal = (itemFivePrice * qtdItemFive).toFixed(2);

        const qtdItemSix = document.getElementById("item-six-qtd").innerHTML;
        const itemSixPrice = document.getElementById("item-six-price").innerHTML.replace("$", "");
        const itemSixPriceTotal = (itemSixPrice * qtdItemSix).toFixed(2);
        
        const qtdItemSeven = document.getElementById("item-seven-qtd").innerHTML;
        const itemSevenPrice = document.getElementById("item-seven-price").innerHTML.replace("$", "");
        const itemSevenPriceTotal = (itemSevenPrice * qtdItemSeven).toFixed(2);
        
        const qtdItemEight = document.getElementById("item-eight-qtd").innerHTML;
        const itemEightPrice = document.getElementById("item-eight-price").innerHTML.replace("$", "");
        const itemEightPriceTotal = (itemEightPrice * qtdItemEight).toFixed(2);

        document.getElementById("total-products").innerHTML = (parseFloat(itemOnePriceTotal) + parseFloat(itemTwoPriceTotal) + parseFloat(itemThreePriceTotal) + parseFloat(itemFourPriceTotal) + parseFloat(itemFivePriceTotal) + parseFloat(itemSixPriceTotal) + parseFloat(itemSevenPriceTotal) + parseFloat(itemEightPriceTotal)).toFixed(2);
        
        document.getElementById("qtd-car-atual").innerHTML = (parseFloat(qtdItemOne) + parseFloat(qtdItemTwo) + parseFloat(qtdItemThree) + parseFloat(qtdItemFour) + parseFloat(qtdItemFive) + parseFloat(qtdItemSix) + parseFloat(qtdItemSeven) + parseFloat(qtdItemEight));



        document.querySelector('#diminuir-item-four').removeAttribute("disabled");
        
        document.querySelector('#ir-car-four').style.display = "block";
    } else {
        alert('Desculpe, só pode comprar 20 por vez amigão !')
    };
}

const btnDiminuirFour = document.querySelector('#diminuir-item-four');

btnDiminuirFour.onclick = function () {
    if (document.getElementById("item-four-qtd").innerHTML > 1) {
        document.getElementById("item-four-qtd").innerHTML--;
        const qtdItemFour = document.getElementById("item-four-qtd").innerHTML;
        const itemFourName = document.getElementById("item-four").innerHTML;
        const itemFourPrice = document.getElementById("item-four-price").innerHTML.replace("$", "");
        const itemFourPriceTotal = (itemFourPrice * qtdItemFour).toFixed(2);
        document.getElementById("car-itens-four").innerHTML = "" + qtdItemFour + "x - " + itemFourName + " = <b>R$" + itemFourPriceTotal + "</b>"

        const qtdItemOne = document.getElementById("item-one-qtd").innerHTML;
        const itemOnePrice = document.getElementById("item-one-price").innerHTML.replace("$", "");
        const itemOnePriceTotal = (itemOnePrice * qtdItemOne).toFixed(2);

        const qtdItemTwo = document.getElementById("item-two-qtd").innerHTML;
        const itemTwoPrice = document.getElementById("item-two-price").innerHTML.replace("$", "");
        const itemTwoPriceTotal = (itemTwoPrice * qtdItemTwo).toFixed(2);

        const qtdItemThree = document.getElementById("item-three-qtd").innerHTML;
        const itemThreePrice = document.getElementById("item-three-price").innerHTML.replace("$", "");
        const itemThreePriceTotal = (itemThreePrice * qtdItemThree).toFixed(2);

        const qtdItemFive = document.getElementById("item-five-qtd").innerHTML;
        const itemFivePrice = document.getElementById("item-five-price").innerHTML.replace("$", "");
        const itemFivePriceTotal = (itemFivePrice * qtdItemFive).toFixed(2);

        const qtdItemSix = document.getElementById("item-six-qtd").innerHTML;
        const itemSixPrice = document.getElementById("item-six-price").innerHTML.replace("$", "");
        const itemSixPriceTotal = (itemSixPrice * qtdItemSix).toFixed(2);
        
        const qtdItemSeven = document.getElementById("item-seven-qtd").innerHTML;
        const itemSevenPrice = document.getElementById("item-seven-price").innerHTML.replace("$", "");
        const itemSevenPriceTotal = (itemSevenPrice * qtdItemSeven).toFixed(2);
        
        const qtdItemEight = document.getElementById("item-eight-qtd").innerHTML;
        const itemEightPrice = document.getElementById("item-eight-price").innerHTML.replace("$", "");
        const itemEightPriceTotal = (itemEightPrice * qtdItemEight).toFixed(2);

        document.getElementById("total-products").innerHTML = (parseFloat(itemOnePriceTotal) + parseFloat(itemTwoPriceTotal) + parseFloat(itemThreePriceTotal) + parseFloat(itemFourPriceTotal) + parseFloat(itemFivePriceTotal) + parseFloat(itemSixPriceTotal) + parseFloat(itemSevenPriceTotal) + parseFloat(itemEightPriceTotal)).toFixed(2);
        
        document.getElementById("qtd-car-atual").innerHTML = (parseFloat(qtdItemOne) + parseFloat(qtdItemTwo) + parseFloat(qtdItemThree) + parseFloat(qtdItemFour) + parseFloat(qtdItemFive) + parseFloat(qtdItemSix) + parseFloat(qtdItemSeven) + parseFloat(qtdItemEight));


    } else if (document.getElementById("item-four-qtd").innerHTML = 1) {
        document.getElementById("item-four-qtd").innerHTML--;

        document.getElementById("car-itens-four").innerHTML = "";

        const qtdItemOne = document.getElementById("item-one-qtd").innerHTML;
        const itemOnePrice = document.getElementById("item-one-price").innerHTML.replace("$", "");
        const itemOnePriceTotal = (itemOnePrice * qtdItemOne).toFixed(2);

        const qtdItemTwo = document.getElementById("item-two-qtd").innerHTML;
        const itemTwoPrice = document.getElementById("item-two-price").innerHTML.replace("$", "");
        const itemTwoPriceTotal = (itemTwoPrice * qtdItemTwo).toFixed(2);

        const qtdItemThree = document.getElementById("item-three-qtd").innerHTML;
        const itemThreePrice = document.getElementById("item-three-price").innerHTML.replace("$", "");
        const itemThreePriceTotal = (itemThreePrice * qtdItemThree).toFixed(2);

        const qtdItemFour = document.getElementById("item-four-qtd").innerHTML;
        const itemFourPrice = document.getElementById("item-four-price").innerHTML.replace("$", "");
        const itemFourPriceTotal = (itemFourPrice * qtdItemFour).toFixed(2);

        const qtdItemFive = document.getElementById("item-five-qtd").innerHTML;
        const itemFivePrice = document.getElementById("item-five-price").innerHTML.replace("$", "");
        const itemFivePriceTotal = (itemFivePrice * qtdItemFive).toFixed(2);

        const qtdItemSix = document.getElementById("item-six-qtd").innerHTML;
        const itemSixPrice = document.getElementById("item-six-price").innerHTML.replace("$", "");
        const itemSixPriceTotal = (itemSixPrice * qtdItemSix).toFixed(2);
        
        const qtdItemSeven = document.getElementById("item-seven-qtd").innerHTML;
        const itemSevenPrice = document.getElementById("item-seven-price").innerHTML.replace("$", "");
        const itemSevenPriceTotal = (itemSevenPrice * qtdItemSeven).toFixed(2);
        
        const qtdItemEight = document.getElementById("item-eight-qtd").innerHTML;
        const itemEightPrice = document.getElementById("item-eight-price").innerHTML.replace("$", "");
        const itemEightPriceTotal = (itemEightPrice * qtdItemEight).toFixed(2);

        document.getElementById("total-products").innerHTML = (parseFloat(itemOnePriceTotal) + parseFloat(itemTwoPriceTotal) + parseFloat(itemThreePriceTotal) + parseFloat(itemFourPriceTotal) + parseFloat(itemFivePriceTotal) + parseFloat(itemSixPriceTotal) + parseFloat(itemSevenPriceTotal) + parseFloat(itemEightPriceTotal)).toFixed(2);
        
        document.getElementById("qtd-car-atual").innerHTML = (parseFloat(qtdItemOne) + parseFloat(qtdItemTwo) + parseFloat(qtdItemThree) + parseFloat(qtdItemFour) + parseFloat(qtdItemFive) + parseFloat(qtdItemSix) + parseFloat(qtdItemSeven) + parseFloat(qtdItemEight));


        btnDiminuirFour.setAttribute("disabled", "disabled");
        
        document.querySelector('#ir-car-four').style.display = "none";
    } else {
        alert('não pode !');
    }
}

//// fim item four   //////////






//// inicio item five //////////
const btnAumentarFive = document.querySelector('#aumentar-item-five');

btnAumentarFive.onclick = function () {
    if (document.getElementById("item-five-qtd").innerHTML < 20) {
        document.getElementById("item-five-qtd").innerHTML++;
        const qtdItemFive = document.getElementById("item-five-qtd").innerHTML;
        const itemFiveName = document.getElementById("item-five").innerHTML;
        const itemFivePrice = document.getElementById("item-five-price").innerHTML.replace("$", "");
        const itemFivePriceTotal = (itemFivePrice * qtdItemFive).toFixed(2);
        document.getElementById("car-itens-five").innerHTML = "" + qtdItemFive + "x - " + itemFiveName + " = <b>R$" + itemFivePriceTotal + "</b>"


        const qtdItemOne = document.getElementById("item-one-qtd").innerHTML;
        const itemOnePrice = document.getElementById("item-one-price").innerHTML.replace("$", "");
        const itemOnePriceTotal = (itemOnePrice * qtdItemOne).toFixed(2);

        const qtdItemTwo = document.getElementById("item-two-qtd").innerHTML;
        const itemTwoPrice = document.getElementById("item-two-price").innerHTML.replace("$", "");
        const itemTwoPriceTotal = (itemTwoPrice * qtdItemTwo).toFixed(2);

        const qtdItemThree = document.getElementById("item-three-qtd").innerHTML;
        const itemThreePrice = document.getElementById("item-three-price").innerHTML.replace("$", "");
        const itemThreePriceTotal = (itemThreePrice * qtdItemThree).toFixed(2);

        const qtdItemFour = document.getElementById("item-four-qtd").innerHTML;
        const itemFourPrice = document.getElementById("item-four-price").innerHTML.replace("$", "");
        const itemFourPriceTotal = (itemFourPrice * qtdItemFour).toFixed(2);

        const qtdItemSix = document.getElementById("item-six-qtd").innerHTML;
        const itemSixPrice = document.getElementById("item-six-price").innerHTML.replace("$", "");
        const itemSixPriceTotal = (itemSixPrice * qtdItemSix).toFixed(2);
        
        const qtdItemSeven = document.getElementById("item-seven-qtd").innerHTML;
        const itemSevenPrice = document.getElementById("item-seven-price").innerHTML.replace("$", "");
        const itemSevenPriceTotal = (itemSevenPrice * qtdItemSeven).toFixed(2);
        
        const qtdItemEight = document.getElementById("item-eight-qtd").innerHTML;
        const itemEightPrice = document.getElementById("item-eight-price").innerHTML.replace("$", "");
        const itemEightPriceTotal = (itemEightPrice * qtdItemEight).toFixed(2);

        document.getElementById("total-products").innerHTML = (parseFloat(itemOnePriceTotal) + parseFloat(itemTwoPriceTotal) + parseFloat(itemThreePriceTotal) + parseFloat(itemFourPriceTotal) + parseFloat(itemFivePriceTotal) + parseFloat(itemSixPriceTotal) + parseFloat(itemSevenPriceTotal) + parseFloat(itemEightPriceTotal)).toFixed(2);
        
        document.getElementById("qtd-car-atual").innerHTML = (parseFloat(qtdItemOne) + parseFloat(qtdItemTwo) + parseFloat(qtdItemThree) + parseFloat(qtdItemFour) + parseFloat(qtdItemFive) + parseFloat(qtdItemSix) + parseFloat(qtdItemSeven) + parseFloat(qtdItemEight));




        document.querySelector('#diminuir-item-five').removeAttribute("disabled");
        
        document.querySelector('#ir-car-five').style.display = "block";
    } else {
        alert('Desculpe, só pode comprar 20 por vez amigão !')
    };
}

const btnDiminuirFive = document.querySelector('#diminuir-item-five');

btnDiminuirFive.onclick = function () {
    if (document.getElementById("item-five-qtd").innerHTML > 1) {
        document.getElementById("item-five-qtd").innerHTML--;
        const qtdItemFive = document.getElementById("item-five-qtd").innerHTML;
        const itemFiveName = document.getElementById("item-five").innerHTML;
        const itemFivePrice = document.getElementById("item-five-price").innerHTML.replace("$", "");
        const itemFivePriceTotal = (itemFivePrice * qtdItemFive).toFixed(2);
        document.getElementById("car-itens-five").innerHTML = "" + qtdItemFive + "x - " + itemFiveName + " = <b>R$" + itemFivePriceTotal + "</b>"

        const qtdItemOne = document.getElementById("item-one-qtd").innerHTML;
        const itemOnePrice = document.getElementById("item-one-price").innerHTML.replace("$", "");
        const itemOnePriceTotal = (itemOnePrice * qtdItemOne).toFixed(2);

        const qtdItemTwo = document.getElementById("item-two-qtd").innerHTML;
        const itemTwoPrice = document.getElementById("item-two-price").innerHTML.replace("$", "");
        const itemTwoPriceTotal = (itemTwoPrice * qtdItemTwo).toFixed(2);

        const qtdItemThree = document.getElementById("item-three-qtd").innerHTML;
        const itemThreePrice = document.getElementById("item-three-price").innerHTML.replace("$", "");
        const itemThreePriceTotal = (itemThreePrice * qtdItemThree).toFixed(2);

        const qtdItemFour = document.getElementById("item-four-qtd").innerHTML;
        const itemFourPrice = document.getElementById("item-four-price").innerHTML.replace("$", "");
        const itemFourPriceTotal = (itemFourPrice * qtdItemFour).toFixed(2);

        const qtdItemSix = document.getElementById("item-six-qtd").innerHTML;
        const itemSixPrice = document.getElementById("item-six-price").innerHTML.replace("$", "");
        const itemSixPriceTotal = (itemSixPrice * qtdItemSix).toFixed(2);
        
        const qtdItemSeven = document.getElementById("item-seven-qtd").innerHTML;
        const itemSevenPrice = document.getElementById("item-seven-price").innerHTML.replace("$", "");
        const itemSevenPriceTotal = (itemSevenPrice * qtdItemSeven).toFixed(2);
        
        const qtdItemEight = document.getElementById("item-eight-qtd").innerHTML;
        const itemEightPrice = document.getElementById("item-eight-price").innerHTML.replace("$", "");
        const itemEightPriceTotal = (itemEightPrice * qtdItemEight).toFixed(2);

        document.getElementById("total-products").innerHTML = (parseFloat(itemOnePriceTotal) + parseFloat(itemTwoPriceTotal) + parseFloat(itemThreePriceTotal) + parseFloat(itemFourPriceTotal) + parseFloat(itemFivePriceTotal) + parseFloat(itemSixPriceTotal) + parseFloat(itemSevenPriceTotal) + parseFloat(itemEightPriceTotal)).toFixed(2);
        
        document.getElementById("qtd-car-atual").innerHTML = (parseFloat(qtdItemOne) + parseFloat(qtdItemTwo) + parseFloat(qtdItemThree) + parseFloat(qtdItemFour) + parseFloat(qtdItemFive) + parseFloat(qtdItemSix) + parseFloat(qtdItemSeven) + parseFloat(qtdItemEight));


    } else if (document.getElementById("item-five-qtd").innerHTML = 1) {
        document.getElementById("item-five-qtd").innerHTML--;

        document.getElementById("car-itens-five").innerHTML = "";

        const qtdItemOne = document.getElementById("item-one-qtd").innerHTML;
        const itemOnePrice = document.getElementById("item-one-price").innerHTML.replace("$", "");
        const itemOnePriceTotal = (itemOnePrice * qtdItemOne).toFixed(2);

        const qtdItemTwo = document.getElementById("item-two-qtd").innerHTML;
        const itemTwoPrice = document.getElementById("item-two-price").innerHTML.replace("$", "");
        const itemTwoPriceTotal = (itemTwoPrice * qtdItemTwo).toFixed(2);

        const qtdItemThree = document.getElementById("item-three-qtd").innerHTML;
        const itemThreePrice = document.getElementById("item-three-price").innerHTML.replace("$", "");
        const itemThreePriceTotal = (itemThreePrice * qtdItemThree).toFixed(2);

        const qtdItemFour = document.getElementById("item-four-qtd").innerHTML;
        const itemFourPrice = document.getElementById("item-four-price").innerHTML.replace("$", "");
        const itemFourPriceTotal = (itemFourPrice * qtdItemFour).toFixed(2);

        const qtdItemFive = document.getElementById("item-five-qtd").innerHTML;
        const itemFivePrice = document.getElementById("item-five-price").innerHTML.replace("$", "");
        const itemFivePriceTotal = (itemFivePrice * qtdItemFive).toFixed(2);

        const qtdItemSix = document.getElementById("item-six-qtd").innerHTML;
        const itemSixPrice = document.getElementById("item-six-price").innerHTML.replace("$", "");
        const itemSixPriceTotal = (itemSixPrice * qtdItemSix).toFixed(2);
        
        const qtdItemSeven = document.getElementById("item-seven-qtd").innerHTML;
        const itemSevenPrice = document.getElementById("item-seven-price").innerHTML.replace("$", "");
        const itemSevenPriceTotal = (itemSevenPrice * qtdItemSeven).toFixed(2);
        
        const qtdItemEight = document.getElementById("item-eight-qtd").innerHTML;
        const itemEightPrice = document.getElementById("item-eight-price").innerHTML.replace("$", "");
        const itemEightPriceTotal = (itemEightPrice * qtdItemEight).toFixed(2);

        document.getElementById("total-products").innerHTML = (parseFloat(itemOnePriceTotal) + parseFloat(itemTwoPriceTotal) + parseFloat(itemThreePriceTotal) + parseFloat(itemFourPriceTotal) + parseFloat(itemFivePriceTotal) + parseFloat(itemSixPriceTotal) + parseFloat(itemSevenPriceTotal) + parseFloat(itemEightPriceTotal)).toFixed(2);
        
        document.getElementById("qtd-car-atual").innerHTML = (parseFloat(qtdItemOne) + parseFloat(qtdItemTwo) + parseFloat(qtdItemThree) + parseFloat(qtdItemFour) + parseFloat(qtdItemFive) + parseFloat(qtdItemSix) + parseFloat(qtdItemSeven) + parseFloat(qtdItemEight));


        btnDiminuirFive.setAttribute("disabled", "disabled");
        
        document.querySelector('#ir-car-five').style.display = "none";
    } else {
        alert('não pode !');
    }
}

//// fim item five   //////////





//// inicio item six //////////
const btnAumentarSix = document.querySelector('#aumentar-item-six');

btnAumentarSix.onclick = function () {
    if (document.getElementById("item-six-qtd").innerHTML < 20) {
        document.getElementById("item-six-qtd").innerHTML++;
        const qtdItemSix = document.getElementById("item-six-qtd").innerHTML;
        const itemSixName = document.getElementById("item-six").innerHTML;
        const itemSixPrice = document.getElementById("item-six-price").innerHTML.replace("$", "");
        const itemSixPriceTotal = (itemSixPrice * qtdItemSix).toFixed(2);
        document.getElementById("car-itens-six").innerHTML = "" + qtdItemSix + "x - " + itemSixName + " = <b>R$" + itemSixPriceTotal + "</b>"

        const qtdItemOne = document.getElementById("item-one-qtd").innerHTML;
        const itemOnePrice = document.getElementById("item-one-price").innerHTML.replace("$", "");
        const itemOnePriceTotal = (itemOnePrice * qtdItemOne).toFixed(2);

        const qtdItemTwo = document.getElementById("item-two-qtd").innerHTML;
        const itemTwoPrice = document.getElementById("item-two-price").innerHTML.replace("$", "");
        const itemTwoPriceTotal = (itemTwoPrice * qtdItemTwo).toFixed(2);

        const qtdItemThree = document.getElementById("item-three-qtd").innerHTML;
        const itemThreePrice = document.getElementById("item-three-price").innerHTML.replace("$", "");
        const itemThreePriceTotal = (itemThreePrice * qtdItemThree).toFixed(2);

        const qtdItemFour = document.getElementById("item-four-qtd").innerHTML;
        const itemFourPrice = document.getElementById("item-four-price").innerHTML.replace("$", "");
        const itemFourPriceTotal = (itemFourPrice * qtdItemFour).toFixed(2);

        const qtdItemFive = document.getElementById("item-five-qtd").innerHTML;
        const itemFivePrice = document.getElementById("item-five-price").innerHTML.replace("$", "");
        const itemFivePriceTotal = (itemFivePrice * qtdItemFive).toFixed(2);
        
        const qtdItemSeven = document.getElementById("item-seven-qtd").innerHTML;
        const itemSevenPrice = document.getElementById("item-seven-price").innerHTML.replace("$", "");
        const itemSevenPriceTotal = (itemSevenPrice * qtdItemSeven).toFixed(2);
        
        const qtdItemEight = document.getElementById("item-eight-qtd").innerHTML;
        const itemEightPrice = document.getElementById("item-eight-price").innerHTML.replace("$", "");
        const itemEightPriceTotal = (itemEightPrice * qtdItemEight).toFixed(2);

        document.getElementById("total-products").innerHTML = (parseFloat(itemOnePriceTotal) + parseFloat(itemTwoPriceTotal) + parseFloat(itemThreePriceTotal) + parseFloat(itemFourPriceTotal) + parseFloat(itemFivePriceTotal) + parseFloat(itemSixPriceTotal) + parseFloat(itemSevenPriceTotal) + parseFloat(itemEightPriceTotal)).toFixed(2);
        
        document.getElementById("qtd-car-atual").innerHTML = (parseFloat(qtdItemOne) + parseFloat(qtdItemTwo) + parseFloat(qtdItemThree) + parseFloat(qtdItemFour) + parseFloat(qtdItemFive) + parseFloat(qtdItemSix) + parseFloat(qtdItemSeven) + parseFloat(qtdItemEight));

        document.querySelector('#diminuir-item-six').removeAttribute("disabled");
        
        document.querySelector('#ir-car-six').style.display = "block";
    } else {
        alert('Desculpe, só pode comprar 20 por vez amigão !')
    };
}

const btnDiminuirSix = document.querySelector('#diminuir-item-six');

btnDiminuirSix.onclick = function () {
    if (document.getElementById("item-six-qtd").innerHTML > 1) {
        document.getElementById("item-six-qtd").innerHTML--;
        const qtdItemSix = document.getElementById("item-six-qtd").innerHTML;
        const itemSixName = document.getElementById("item-six").innerHTML;
        const itemSixPrice = document.getElementById("item-six-price").innerHTML.replace("$", "");
        const itemSixPriceTotal = (itemSixPrice * qtdItemSix).toFixed(2);
        document.getElementById("car-itens-six").innerHTML = "" + qtdItemSix + "x - " + itemSixName + " = <b>R$" + itemSixPriceTotal + "</b>"


        const qtdItemOne = document.getElementById("item-one-qtd").innerHTML;
        const itemOnePrice = document.getElementById("item-one-price").innerHTML.replace("$", "");
        const itemOnePriceTotal = (itemOnePrice * qtdItemOne).toFixed(2);

        const qtdItemTwo = document.getElementById("item-two-qtd").innerHTML;
        const itemTwoPrice = document.getElementById("item-two-price").innerHTML.replace("$", "");
        const itemTwoPriceTotal = (itemTwoPrice * qtdItemTwo).toFixed(2);

        const qtdItemThree = document.getElementById("item-three-qtd").innerHTML;
        const itemThreePrice = document.getElementById("item-three-price").innerHTML.replace("$", "");
        const itemThreePriceTotal = (itemThreePrice * qtdItemThree).toFixed(2);

        const qtdItemFour = document.getElementById("item-four-qtd").innerHTML;
        const itemFourPrice = document.getElementById("item-four-price").innerHTML.replace("$", "");
        const itemFourPriceTotal = (itemFourPrice * qtdItemFour).toFixed(2);

        const qtdItemFive = document.getElementById("item-five-qtd").innerHTML;
        const itemFivePrice = document.getElementById("item-five-price").innerHTML.replace("$", "");
        const itemFivePriceTotal = (itemFivePrice * qtdItemFive).toFixed(2);
        
        const qtdItemSeven = document.getElementById("item-seven-qtd").innerHTML;
        const itemSevenPrice = document.getElementById("item-seven-price").innerHTML.replace("$", "");
        const itemSevenPriceTotal = (itemSevenPrice * qtdItemSeven).toFixed(2);
        
        const qtdItemEight = document.getElementById("item-eight-qtd").innerHTML;
        const itemEightPrice = document.getElementById("item-eight-price").innerHTML.replace("$", "");
        const itemEightPriceTotal = (itemEightPrice * qtdItemEight).toFixed(2);

        document.getElementById("total-products").innerHTML = (parseFloat(itemOnePriceTotal) + parseFloat(itemTwoPriceTotal) + parseFloat(itemThreePriceTotal) + parseFloat(itemFourPriceTotal) + parseFloat(itemFivePriceTotal) + parseFloat(itemSixPriceTotal) + parseFloat(itemSevenPriceTotal) + parseFloat(itemEightPriceTotal)).toFixed(2);
        
        document.getElementById("qtd-car-atual").innerHTML = (parseFloat(qtdItemOne) + parseFloat(qtdItemTwo) + parseFloat(qtdItemThree) + parseFloat(qtdItemFour) + parseFloat(qtdItemFive) + parseFloat(qtdItemSix) + parseFloat(qtdItemSeven) + parseFloat(qtdItemEight));



    } else if (document.getElementById("item-six-qtd").innerHTML = 1) {
        document.getElementById("item-six-qtd").innerHTML--;

        document.getElementById("car-itens-six").innerHTML = "";


        const qtdItemOne = document.getElementById("item-one-qtd").innerHTML;
        const itemOnePrice = document.getElementById("item-one-price").innerHTML.replace("$", "");
        const itemOnePriceTotal = (itemOnePrice * qtdItemOne).toFixed(2);

        const qtdItemTwo = document.getElementById("item-two-qtd").innerHTML;
        const itemTwoPrice = document.getElementById("item-two-price").innerHTML.replace("$", "");
        const itemTwoPriceTotal = (itemTwoPrice * qtdItemTwo).toFixed(2);

        const qtdItemThree = document.getElementById("item-three-qtd").innerHTML;
        const itemThreePrice = document.getElementById("item-three-price").innerHTML.replace("$", "");
        const itemThreePriceTotal = (itemThreePrice * qtdItemThree).toFixed(2);

        const qtdItemFour = document.getElementById("item-four-qtd").innerHTML;
        const itemFourPrice = document.getElementById("item-four-price").innerHTML.replace("$", "");
        const itemFourPriceTotal = (itemFourPrice * qtdItemFour).toFixed(2);

        const qtdItemFive = document.getElementById("item-five-qtd").innerHTML;
        const itemFivePrice = document.getElementById("item-five-price").innerHTML.replace("$", "");
        const itemFivePriceTotal = (itemFivePrice * qtdItemFive).toFixed(2);

        const qtdItemSix = document.getElementById("item-six-qtd").innerHTML;
        const itemSixPrice = document.getElementById("item-six-price").innerHTML.replace("$", "");
        const itemSixPriceTotal = (itemSixPrice * qtdItemSix).toFixed(2);
        
        const qtdItemSeven = document.getElementById("item-seven-qtd").innerHTML;
        const itemSevenPrice = document.getElementById("item-seven-price").innerHTML.replace("$", "");
        const itemSevenPriceTotal = (itemSevenPrice * qtdItemSeven).toFixed(2);
        
        const qtdItemEight = document.getElementById("item-eight-qtd").innerHTML;
        const itemEightPrice = document.getElementById("item-eight-price").innerHTML.replace("$", "");
        const itemEightPriceTotal = (itemEightPrice * qtdItemEight).toFixed(2);

        document.getElementById("total-products").innerHTML = (parseFloat(itemOnePriceTotal) + parseFloat(itemTwoPriceTotal) + parseFloat(itemThreePriceTotal) + parseFloat(itemFourPriceTotal) + parseFloat(itemFivePriceTotal) + parseFloat(itemSixPriceTotal) + parseFloat(itemSevenPriceTotal) + parseFloat(itemEightPriceTotal)).toFixed(2);
        
        document.getElementById("qtd-car-atual").innerHTML = (parseFloat(qtdItemOne) + parseFloat(qtdItemTwo) + parseFloat(qtdItemThree) + parseFloat(qtdItemFour) + parseFloat(qtdItemFive) + parseFloat(qtdItemSix) + parseFloat(qtdItemSeven) + parseFloat(qtdItemEight));


        btnDiminuirSix.setAttribute("disabled", "disabled");
        
        document.querySelector('#ir-car-six').style.display = "none";
    } else {
        alert('não pode !');
    }
}

//// fim item six //////////



//// inicio item seven //////////
const btnAumentarSeven = document.querySelector('#aumentar-item-seven');

btnAumentarSeven.onclick = function () {
    if (document.getElementById("item-seven-qtd").innerHTML < 20) {
        document.getElementById("item-seven-qtd").innerHTML++;
        const qtdItemSeven = document.getElementById("item-seven-qtd").innerHTML;
        const itemSevenName = document.getElementById("item-seven").innerHTML;
        const itemSevenPrice = document.getElementById("item-seven-price").innerHTML.replace("$", "");
        const itemSevenPriceTotal = (itemSevenPrice * qtdItemSeven).toFixed(2);
        document.getElementById("car-itens-seven").innerHTML = "" + qtdItemSeven + "x - " + itemSevenName + " = <b>R$" + itemSevenPriceTotal + "</b>"

        const qtdItemOne = document.getElementById("item-one-qtd").innerHTML;
        const itemOnePrice = document.getElementById("item-one-price").innerHTML.replace("$", "");
        const itemOnePriceTotal = (itemOnePrice * qtdItemOne).toFixed(2);

        const qtdItemTwo = document.getElementById("item-two-qtd").innerHTML;
        const itemTwoPrice = document.getElementById("item-two-price").innerHTML.replace("$", "");
        const itemTwoPriceTotal = (itemTwoPrice * qtdItemTwo).toFixed(2);

        const qtdItemThree = document.getElementById("item-three-qtd").innerHTML;
        const itemThreePrice = document.getElementById("item-three-price").innerHTML.replace("$", "");
        const itemThreePriceTotal = (itemThreePrice * qtdItemThree).toFixed(2);

        const qtdItemFour = document.getElementById("item-four-qtd").innerHTML;
        const itemFourPrice = document.getElementById("item-four-price").innerHTML.replace("$", "");
        const itemFourPriceTotal = (itemFourPrice * qtdItemFour).toFixed(2);

        const qtdItemFive = document.getElementById("item-five-qtd").innerHTML;
        const itemFivePrice = document.getElementById("item-five-price").innerHTML.replace("$", "");
        const itemFivePriceTotal = (itemFivePrice * qtdItemFive).toFixed(2);
        
        const qtdItemSix = document.getElementById("item-six-qtd").innerHTML;
        const itemSixPrice = document.getElementById("item-six-price").innerHTML.replace("$", "");
        const itemSixPriceTotal = (itemSixPrice * qtdItemSix).toFixed(2);
        
        const qtdItemEight = document.getElementById("item-eight-qtd").innerHTML;
        const itemEightPrice = document.getElementById("item-eight-price").innerHTML.replace("$", "");
        const itemEightPriceTotal = (itemEightPrice * qtdItemEight).toFixed(2);

        document.getElementById("total-products").innerHTML = (parseFloat(itemOnePriceTotal) + parseFloat(itemTwoPriceTotal) + parseFloat(itemThreePriceTotal) + parseFloat(itemFourPriceTotal) + parseFloat(itemFivePriceTotal) + parseFloat(itemSixPriceTotal) + parseFloat(itemSevenPriceTotal) + parseFloat(itemEightPriceTotal)).toFixed(2);
        
        document.getElementById("qtd-car-atual").innerHTML = (parseFloat(qtdItemOne) + parseFloat(qtdItemTwo) + parseFloat(qtdItemThree) + parseFloat(qtdItemFour) + parseFloat(qtdItemFive) + parseFloat(qtdItemSix) + parseFloat(qtdItemSeven) + parseFloat(qtdItemEight));

        document.querySelector('#diminuir-item-seven').removeAttribute("disabled");
        
        document.querySelector('#ir-car-seven').style.display = "block";
    } else {
        alert('Desculpe, só pode comprar 20 por vez amigão !')
    };
}


const btnDiminuirSeven = document.querySelector('#diminuir-item-seven');

btnDiminuirSeven.onclick = function () {
    if (document.getElementById("item-seven-qtd").innerHTML > 1) {
        document.getElementById("item-seven-qtd").innerHTML--;
        const qtdItemSeven = document.getElementById("item-seven-qtd").innerHTML;
        const itemSevenName = document.getElementById("item-seven").innerHTML;
        const itemSevenPrice = document.getElementById("item-seven-price").innerHTML.replace("$", "");
        const itemSevenPriceTotal = (itemSevenPrice * qtdItemSeven).toFixed(2);
        document.getElementById("car-itens-seven").innerHTML = "" + qtdItemSeven + "x - " + itemSevenName + " = <b>R$" + itemSevenPriceTotal + "</b>"


        const qtdItemOne = document.getElementById("item-one-qtd").innerHTML;
        const itemOnePrice = document.getElementById("item-one-price").innerHTML.replace("$", "");
        const itemOnePriceTotal = (itemOnePrice * qtdItemOne).toFixed(2);

        const qtdItemTwo = document.getElementById("item-two-qtd").innerHTML;
        const itemTwoPrice = document.getElementById("item-two-price").innerHTML.replace("$", "");
        const itemTwoPriceTotal = (itemTwoPrice * qtdItemTwo).toFixed(2);

        const qtdItemThree = document.getElementById("item-three-qtd").innerHTML;
        const itemThreePrice = document.getElementById("item-three-price").innerHTML.replace("$", "");
        const itemThreePriceTotal = (itemThreePrice * qtdItemThree).toFixed(2);

        const qtdItemFour = document.getElementById("item-four-qtd").innerHTML;
        const itemFourPrice = document.getElementById("item-four-price").innerHTML.replace("$", "");
        const itemFourPriceTotal = (itemFourPrice * qtdItemFour).toFixed(2);

        const qtdItemFive = document.getElementById("item-five-qtd").innerHTML;
        const itemFivePrice = document.getElementById("item-five-price").innerHTML.replace("$", "");
        const itemFivePriceTotal = (itemFivePrice * qtdItemFive).toFixed(2);
        
        const qtdItemSix = document.getElementById("item-six-qtd").innerHTML;
        const itemSixPrice = document.getElementById("item-six-price").innerHTML.replace("$", "");
        const itemSixPriceTotal = (itemSixPrice * qtdItemSix).toFixed(2);
        
        const qtdItemEight = document.getElementById("item-eight-qtd").innerHTML;
        const itemEightPrice = document.getElementById("item-eight-price").innerHTML.replace("$", "");
        const itemEightPriceTotal = (itemEightPrice * qtdItemEight).toFixed(2);

        document.getElementById("total-products").innerHTML = (parseFloat(itemOnePriceTotal) + parseFloat(itemTwoPriceTotal) + parseFloat(itemThreePriceTotal) + parseFloat(itemFourPriceTotal) + parseFloat(itemFivePriceTotal) + parseFloat(itemSixPriceTotal) + parseFloat(itemSevenPriceTotal) + parseFloat(itemEightPriceTotal)).toFixed(2);
        
        document.getElementById("qtd-car-atual").innerHTML = (parseFloat(qtdItemOne) + parseFloat(qtdItemTwo) + parseFloat(qtdItemThree) + parseFloat(qtdItemFour) + parseFloat(qtdItemFive) + parseFloat(qtdItemSix) + parseFloat(qtdItemSeven) + parseFloat(qtdItemEight));



    } else if (document.getElementById("item-seven-qtd").innerHTML = 1) {
        document.getElementById("item-seven-qtd").innerHTML--;

        document.getElementById("car-itens-seven").innerHTML = "";


        const qtdItemOne = document.getElementById("item-one-qtd").innerHTML;
        const itemOnePrice = document.getElementById("item-one-price").innerHTML.replace("$", "");
        const itemOnePriceTotal = (itemOnePrice * qtdItemOne).toFixed(2);

        const qtdItemTwo = document.getElementById("item-two-qtd").innerHTML;
        const itemTwoPrice = document.getElementById("item-two-price").innerHTML.replace("$", "");
        const itemTwoPriceTotal = (itemTwoPrice * qtdItemTwo).toFixed(2);

        const qtdItemThree = document.getElementById("item-three-qtd").innerHTML;
        const itemThreePrice = document.getElementById("item-three-price").innerHTML.replace("$", "");
        const itemThreePriceTotal = (itemThreePrice * qtdItemThree).toFixed(2);

        const qtdItemFour = document.getElementById("item-four-qtd").innerHTML;
        const itemFourPrice = document.getElementById("item-four-price").innerHTML.replace("$", "");
        const itemFourPriceTotal = (itemFourPrice * qtdItemFour).toFixed(2);

        const qtdItemFive = document.getElementById("item-five-qtd").innerHTML;
        const itemFivePrice = document.getElementById("item-five-price").innerHTML.replace("$", "");
        const itemFivePriceTotal = (itemFivePrice * qtdItemFive).toFixed(2);

        const qtdItemSix = document.getElementById("item-six-qtd").innerHTML;
        const itemSixPrice = document.getElementById("item-six-price").innerHTML.replace("$", "");
        const itemSixPriceTotal = (itemSixPrice * qtdItemSix).toFixed(2);
        
        const qtdItemSeven = document.getElementById("item-seven-qtd").innerHTML;
        const itemSevenPrice = document.getElementById("item-seven-price").innerHTML.replace("$", "");
        const itemSevenPriceTotal = (itemSevenPrice * qtdItemSeven).toFixed(2);
        
        const qtdItemEight = document.getElementById("item-eight-qtd").innerHTML;
        const itemEightPrice = document.getElementById("item-eight-price").innerHTML.replace("$", "");
        const itemEightPriceTotal = (itemEightPrice * qtdItemEight).toFixed(2);

        document.getElementById("total-products").innerHTML = (parseFloat(itemOnePriceTotal) + parseFloat(itemTwoPriceTotal) + parseFloat(itemThreePriceTotal) + parseFloat(itemFourPriceTotal) + parseFloat(itemFivePriceTotal) + parseFloat(itemSixPriceTotal) + parseFloat(itemSevenPriceTotal) + parseFloat(itemEightPriceTotal)).toFixed(2);
        
        document.getElementById("qtd-car-atual").innerHTML = (parseFloat(qtdItemOne) + parseFloat(qtdItemTwo) + parseFloat(qtdItemThree) + parseFloat(qtdItemFour) + parseFloat(qtdItemFive) + parseFloat(qtdItemSix) + parseFloat(qtdItemSeven) + parseFloat(qtdItemEight));


        btnDiminuirSeven.setAttribute("disabled", "disabled");
        
        document.querySelector('#ir-car-seven').style.display = "none";
    } else {
        alert('não pode !');
    }
}


//// fim item seven //////////




//// inicio item eight //////////
const btnAumentarEight = document.querySelector('#aumentar-item-eight');

btnAumentarEight.onclick = function () {
    if (document.getElementById("item-eight-qtd").innerHTML < 20) {
        document.getElementById("item-eight-qtd").innerHTML++;
        const qtdItemEight = document.getElementById("item-eight-qtd").innerHTML;
        const itemEightName = document.getElementById("item-eight").innerHTML;
        const itemEightPrice = document.getElementById("item-eight-price").innerHTML.replace("$", "");
        const itemEightPriceTotal = (itemEightPrice * qtdItemEight).toFixed(2);
        document.getElementById("car-itens-eight").innerHTML = "" + qtdItemEight + "x - " + itemEightName + " = <b>R$" + itemEightPriceTotal + "</b>"

        const qtdItemOne = document.getElementById("item-one-qtd").innerHTML;
        const itemOnePrice = document.getElementById("item-one-price").innerHTML.replace("$", "");
        const itemOnePriceTotal = (itemOnePrice * qtdItemOne).toFixed(2);

        const qtdItemTwo = document.getElementById("item-two-qtd").innerHTML;
        const itemTwoPrice = document.getElementById("item-two-price").innerHTML.replace("$", "");
        const itemTwoPriceTotal = (itemTwoPrice * qtdItemTwo).toFixed(2);

        const qtdItemThree = document.getElementById("item-three-qtd").innerHTML;
        const itemThreePrice = document.getElementById("item-three-price").innerHTML.replace("$", "");
        const itemThreePriceTotal = (itemThreePrice * qtdItemThree).toFixed(2);

        const qtdItemFour = document.getElementById("item-four-qtd").innerHTML;
        const itemFourPrice = document.getElementById("item-four-price").innerHTML.replace("$", "");
        const itemFourPriceTotal = (itemFourPrice * qtdItemFour).toFixed(2);

        const qtdItemFive = document.getElementById("item-five-qtd").innerHTML;
        const itemFivePrice = document.getElementById("item-five-price").innerHTML.replace("$", "");
        const itemFivePriceTotal = (itemFivePrice * qtdItemFive).toFixed(2);
        
        const qtdItemSix = document.getElementById("item-six-qtd").innerHTML;
        const itemSixPrice = document.getElementById("item-six-price").innerHTML.replace("$", "");
        const itemSixPriceTotal = (itemSixPrice * qtdItemSix).toFixed(2);
        
        const qtdItemSeven = document.getElementById("item-seven-qtd").innerHTML;
        const itemSevenPrice = document.getElementById("item-seven-price").innerHTML.replace("$", "");
        const itemSevenPriceTotal = (itemSevenPrice * qtdItemSeven).toFixed(2);
          

        document.getElementById("total-products").innerHTML = (parseFloat(itemOnePriceTotal) + parseFloat(itemTwoPriceTotal) + parseFloat(itemThreePriceTotal) + parseFloat(itemFourPriceTotal) + parseFloat(itemFivePriceTotal) + parseFloat(itemSixPriceTotal) + parseFloat(itemSevenPriceTotal) + parseFloat(itemEightPriceTotal)).toFixed(2);
        
        document.getElementById("qtd-car-atual").innerHTML = (parseFloat(qtdItemOne) + parseFloat(qtdItemTwo) + parseFloat(qtdItemThree) + parseFloat(qtdItemFour) + parseFloat(qtdItemFive) + parseFloat(qtdItemSix) + parseFloat(qtdItemSeven) + parseFloat(qtdItemEight));

        document.querySelector('#diminuir-item-eight').removeAttribute("disabled");
        
        document.querySelector('#ir-car-eight').style.display = "block";
    } else {
        alert('Desculpe, só pode comprar 20 por vez amigão !')
    };
}

const btnDiminuirEight = document.querySelector('#diminuir-item-eight');

btnDiminuirEight.onclick = function () {
    if (document.getElementById("item-eight-qtd").innerHTML > 1) {
        document.getElementById("item-eight-qtd").innerHTML--;
        const qtdItemEight = document.getElementById("item-eight-qtd").innerHTML;
        const itemEightName = document.getElementById("item-eight").innerHTML;
        const itemEightPrice = document.getElementById("item-eight-price").innerHTML.replace("$", "");
        const itemEightPriceTotal = (itemEightPrice * qtdItemEight).toFixed(2);
        document.getElementById("car-itens-eight").innerHTML = "" + qtdItemEight + "x - " + itemEightName + " = <b>R$" + itemEightPriceTotal + "</b>"


        const qtdItemOne = document.getElementById("item-one-qtd").innerHTML;
        const itemOnePrice = document.getElementById("item-one-price").innerHTML.replace("$", "");
        const itemOnePriceTotal = (itemOnePrice * qtdItemOne).toFixed(2);

        const qtdItemTwo = document.getElementById("item-two-qtd").innerHTML;
        const itemTwoPrice = document.getElementById("item-two-price").innerHTML.replace("$", "");
        const itemTwoPriceTotal = (itemTwoPrice * qtdItemTwo).toFixed(2);

        const qtdItemThree = document.getElementById("item-three-qtd").innerHTML;
        const itemThreePrice = document.getElementById("item-three-price").innerHTML.replace("$", "");
        const itemThreePriceTotal = (itemThreePrice * qtdItemThree).toFixed(2);

        const qtdItemFour = document.getElementById("item-four-qtd").innerHTML;
        const itemFourPrice = document.getElementById("item-four-price").innerHTML.replace("$", "");
        const itemFourPriceTotal = (itemFourPrice * qtdItemFour).toFixed(2);

        const qtdItemFive = document.getElementById("item-five-qtd").innerHTML;
        const itemFivePrice = document.getElementById("item-five-price").innerHTML.replace("$", "");
        const itemFivePriceTotal = (itemFivePrice * qtdItemFive).toFixed(2);
        
        const qtdItemSix = document.getElementById("item-six-qtd").innerHTML;
        const itemSixPrice = document.getElementById("item-six-price").innerHTML.replace("$", "");
        const itemSixPriceTotal = (itemSixPrice * qtdItemSix).toFixed(2);
        
        const qtdItemSeven = document.getElementById("item-seven-qtd").innerHTML;
        const itemSevenPrice = document.getElementById("item-seven-price").innerHTML.replace("$", "");
        const itemSevenPriceTotal = (itemSevenPrice * qtdItemSeven).toFixed(2);

        document.getElementById("total-products").innerHTML = (parseFloat(itemOnePriceTotal) + parseFloat(itemTwoPriceTotal) + parseFloat(itemThreePriceTotal) + parseFloat(itemFourPriceTotal) + parseFloat(itemFivePriceTotal) + parseFloat(itemSixPriceTotal) + parseFloat(itemSevenPriceTotal) + parseFloat(itemEightPriceTotal)).toFixed(2);
        
        document.getElementById("qtd-car-atual").innerHTML = (parseFloat(qtdItemOne) + parseFloat(qtdItemTwo) + parseFloat(qtdItemThree) + parseFloat(qtdItemFour) + parseFloat(qtdItemFive) + parseFloat(qtdItemSix) + parseFloat(qtdItemSeven) + parseFloat(qtdItemEight));



    } else if (document.getElementById("item-eight-qtd").innerHTML = 1) {
        document.getElementById("item-eight-qtd").innerHTML--;

        document.getElementById("car-itens-eight").innerHTML = "";


        const qtdItemOne = document.getElementById("item-one-qtd").innerHTML;
        const itemOnePrice = document.getElementById("item-one-price").innerHTML.replace("$", "");
        const itemOnePriceTotal = (itemOnePrice * qtdItemOne).toFixed(2);

        const qtdItemTwo = document.getElementById("item-two-qtd").innerHTML;
        const itemTwoPrice = document.getElementById("item-two-price").innerHTML.replace("$", "");
        const itemTwoPriceTotal = (itemTwoPrice * qtdItemTwo).toFixed(2);

        const qtdItemThree = document.getElementById("item-three-qtd").innerHTML;
        const itemThreePrice = document.getElementById("item-three-price").innerHTML.replace("$", "");
        const itemThreePriceTotal = (itemThreePrice * qtdItemThree).toFixed(2);

        const qtdItemFour = document.getElementById("item-four-qtd").innerHTML;
        const itemFourPrice = document.getElementById("item-four-price").innerHTML.replace("$", "");
        const itemFourPriceTotal = (itemFourPrice * qtdItemFour).toFixed(2);

        const qtdItemFive = document.getElementById("item-five-qtd").innerHTML;
        const itemFivePrice = document.getElementById("item-five-price").innerHTML.replace("$", "");
        const itemFivePriceTotal = (itemFivePrice * qtdItemFive).toFixed(2);

        const qtdItemSix = document.getElementById("item-six-qtd").innerHTML;
        const itemSixPrice = document.getElementById("item-six-price").innerHTML.replace("$", "");
        const itemSixPriceTotal = (itemSixPrice * qtdItemSix).toFixed(2);
        
        const qtdItemSeven = document.getElementById("item-seven-qtd").innerHTML;
        const itemSevenPrice = document.getElementById("item-seven-price").innerHTML.replace("$", "");
        const itemSevenPriceTotal = (itemSevenPrice * qtdItemSeven).toFixed(2);
        
        const qtdItemEight = document.getElementById("item-eight-qtd").innerHTML;
        const itemEightPrice = document.getElementById("item-eight-price").innerHTML.replace("$", "");
        const itemEightPriceTotal = (itemEightPrice * qtdItemEight).toFixed(2);

        document.getElementById("total-products").innerHTML = (parseFloat(itemOnePriceTotal) + parseFloat(itemTwoPriceTotal) + parseFloat(itemThreePriceTotal) + parseFloat(itemFourPriceTotal) + parseFloat(itemFivePriceTotal) + parseFloat(itemSixPriceTotal) + parseFloat(itemSevenPriceTotal) + parseFloat(itemEightPriceTotal)).toFixed(2);
        
        document.getElementById("qtd-car-atual").innerHTML = (parseFloat(qtdItemOne) + parseFloat(qtdItemTwo) + parseFloat(qtdItemThree) + parseFloat(qtdItemFour) + parseFloat(qtdItemFive) + parseFloat(qtdItemSix) + parseFloat(qtdItemSeven) + parseFloat(qtdItemEight));


        btnDiminuirEight.setAttribute("disabled", "disabled");
        
        document.querySelector('#ir-car-eight').style.display = "none";
    } else {
        alert('não pode !');
    }
}

//// fim item eight //////////



var enviar = document.querySelector('#enviar');

enviar.onclick = function () {

    const qtdItemOne = document.getElementById("item-one-qtd").innerHTML;
    const itemOnePrice = document.getElementById("item-one-price").innerHTML.replace("$", "");
    const itemOnePriceTotal = (itemOnePrice * qtdItemOne).toFixed(2);

    const qtdItemTwo = document.getElementById("item-two-qtd").innerHTML;
    const itemTwoPrice = document.getElementById("item-two-price").innerHTML.replace("$", "");
    const itemTwoPriceTotal = (itemTwoPrice * qtdItemTwo).toFixed(2);

    const qtdItemThree = document.getElementById("item-three-qtd").innerHTML;
    const itemThreePrice = document.getElementById("item-three-price").innerHTML.replace("$", "");
    const itemThreePriceTotal = (itemThreePrice * qtdItemThree).toFixed(2);

    const qtdItemFour = document.getElementById("item-four-qtd").innerHTML;
    const itemFourPrice = document.getElementById("item-four-price").innerHTML.replace("$", "");
    const itemFourPriceTotal = (itemFourPrice * qtdItemFour).toFixed(2);

    const qtdItemFive = document.getElementById("item-five-qtd").innerHTML;
    const itemFivePrice = document.getElementById("item-five-price").innerHTML.replace("$", "");
    const itemFivePriceTotal = (itemFivePrice * qtdItemFive).toFixed(2);

    const qtdItemSix = document.getElementById("item-six-qtd").innerHTML;
    const itemSixPrice = document.getElementById("item-six-price").innerHTML.replace("$", "");
    const itemSixPriceTotal = (itemSixPrice * qtdItemSix).toFixed(2);
    
    const qtdItemSeven = document.getElementById("item-seven-qtd").innerHTML;
    const itemSevenPrice = document.getElementById("item-seven-price").innerHTML.replace("$", "");
    const itemSevenPriceTotal = (itemSevenPrice * qtdItemSeven).toFixed(2);
        
    const qtdItemEight = document.getElementById("item-eight-qtd").innerHTML;
    const itemEightPrice = document.getElementById("item-eight-price").innerHTML.replace("$", "");
    const itemEightPriceTotal = (itemEightPrice * qtdItemEight).toFixed(2);

    const valorTotalProcucts = (parseFloat(itemOnePriceTotal) + parseFloat(itemTwoPriceTotal) + parseFloat(itemThreePriceTotal) + parseFloat(itemFourPriceTotal) + parseFloat(itemFivePriceTotal) + parseFloat(itemSixPriceTotal) + parseFloat(itemSevenPriceTotal) + parseFloat(itemEightPriceTotal)).toFixed(2);
        
    const qtdItensVerificar = (parseFloat(qtdItemOne) + parseFloat(qtdItemTwo) + parseFloat(qtdItemThree) + parseFloat(qtdItemFour) + parseFloat(qtdItemFive) + parseFloat(qtdItemSix) + parseFloat(qtdItemSeven) + parseFloat(qtdItemEight));
    
    if (qtdItensVerificar == "0") {
        alert("Você não possui nenhum produto no carrinho.");
        window.location.reload()
    } 



    if (document.getElementById("car-itens-one").innerHTML == "") {
        var itemOne = ""
    } else {
        var itemOne = document.getElementById("car-itens-one").innerHTML.replace("<b>", "*").replace("</b>", "*") + "%0A";
    }
    if (document.getElementById("car-itens-two").innerHTML == "") {
        var itemTwo = ""
    } else {
        var itemTwo = document.getElementById("car-itens-two").innerHTML.replace("<b>", "*").replace("</b>", "*") + "%0A";
    }
    if (document.getElementById("car-itens-three").innerHTML == "") {
        var itemThree = ""
    } else {
        var itemThree = document.getElementById("car-itens-three").innerHTML.replace("<b>", "*").replace("</b>", "*") + "%0A";
    }
    if (document.getElementById("car-itens-four").innerHTML == "") {
        var itemFour = ""
    } else {
        var itemFour = document.getElementById("car-itens-four").innerHTML.replace("<b>", "*").replace("</b>", "*") + "%0A";
    }
    if (document.getElementById("car-itens-five").innerHTML == "") {
        var itemFive = ""
    } else {
        var itemFive = document.getElementById("car-itens-five").innerHTML.replace("<b>", "*").replace("</b>", "*") + "%0A";
    }
    if (document.getElementById("car-itens-six").innerHTML == "") {
        var itemSix = ""
    } else {
        var itemSix = document.getElementById("car-itens-six").innerHTML.replace("<b>", "*").replace("</b>", "*") + "%0A";
    }
    if (document.getElementById("car-itens-seven").innerHTML == "") {
        var itemSeven = ""
    } else {
        var itemSeven = document.getElementById("car-itens-seven").innerHTML.replace("<b>", "*").replace("</b>", "*") + "%0A";
    }
    if (document.getElementById("car-itens-eight").innerHTML == "") {
        var itemEight = ""
    } else {
        var itemEight = document.getElementById("car-itens-eight").innerHTML.replace("<b>", "*").replace("</b>", "*") + "%0A";
    }



    var tudo = itemOne + itemTwo + itemThree + itemFour + itemFive + itemSix + itemSeven + itemEight;

    $("#myModal").modal()

    document.getElementById("total-pedido-troco").innerHTML = "<b> R$" + valorTotalProcucts + "</b>";

    const finalizar = document.getElementById("finalizar");

    finalizar.onclick = function () {

        const nome = document.getElementById("nome").value;
        const rua = document.getElementById("rua").value;
        const numero = document.getElementById("numero").value;
        const bairro = document.getElementById("bairro").value;
        const municipio = document.getElementById("municipio").value;
        const troco = document.getElementById("troco").value;

        $("#myModalFinal").modal()

        document.getElementById("produtos-final").innerHTML = tudo.replace("%0A", "<br>").replace("%0A", "<br>").replace("%0A", "<br>").replace("%0A", "<br>").replace("%0A", "<br>").replace("", "");
        document.getElementById("valor-final").innerHTML = valorTotalProcucts;
        document.getElementById("nome-final").innerHTML = nome;
        document.getElementById("end-final").innerHTML = "<b>Rua:</b> " + rua + " - <b>Nº:</b> " + numero + " - <b>Bairro:</b> " + bairro + " - <b>Município:</b> " + municipio;
        document.getElementById("troco-final").innerHTML = troco;

    }

    const enviarFinal = document.getElementById("enviar-final");

    enviarFinal.onclick = function () {

        const nome = document.getElementById("nome").value;
        const rua = document.getElementById("rua").value;
        const numero = document.getElementById("numero").value;
        const bairro = document.getElementById("bairro").value;
        const municipio = document.getElementById("municipio").value;
        const troco = document.getElementById("troco").value;


        var d = new Date();

        var dia = d.getDate();
        if (dia.toString().length == 1) dia = '0' + dia;
        var mes = d.getMonth() + 1;
        if (mes.toString().length == 1) mes = '0' + mes;
        var ano = d.getFullYear();

        var data = dia + "/" + mes + "/" + ano;

        var hora = d.getHours();
        if (hora.toString().length == 1) hora = '0' + hora;
        var minuto = d.getMinutes();
        if (minuto.toString().length == 1) minuto = '0' + minuto;

        var horas = hora + ":" + minuto;


        document.getElementById("enviar-final").href = "https://api.whatsapp.com/send?phone=5521995886204&text=" + "*appDoMarcelino - Novo Pedido*" + "%0A" + "----------------------------------" + "%0A" + "%0A" + "*Nome do Cliente:*" + "%0A" + nome + "." + "%0A" + "%0A" + "*Produtos:*%0A" + tudo + "%0A" + "*Valor Total de Produtos:* %0A" + "R$" + valorTotalProcucts + " %0A" + "%0A" + "*Troco:* " + troco + " %0A" + "%0A" + "*Endereço de entrega:* %0A" + "Rua: " + rua + " - Nº " + numero + " - Bairro: " + bairro + " - Município: " + municipio + "%0A" + "%0A" + "---------------------------------- %0A" + "_Pedido realizado em " + data + " às " + horas + " via appDoMarcelino._"
    }



    //document.getElementById("enviar").href = "https://api.whatsapp.com/send?phone=5521995886204&text=" + tudo + "*Valor Total de Produtos: R$" + valorTotalProcucts + "*"
};



// FUNÇÃO DE FILTRAR QUAL DIV MOSTRAR DE ACORDO COM O MENU
$('.categorias input').on("click", function () {
    var id = $(this).attr("id").replace("bt_", "");
    $('#galeria .item-c').hide();
    $('#galeria .categorias-item-' + id + '').show();
});