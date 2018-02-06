// alert('this is working')

// The buttons is linked to an onclick function
$(`#100-points`).click(function(){  
// The answer 
    // prompt("these numbers added together equals")
    // const answer;
    // if (answer === 2) {
    //     alert("You is smart. You is kind. You is important.")
    // } else {
    //     alert("YOU SHOULD BE ASHAMED!")
    // }

// 
    const question = prompt("These two numbers added together equals 4")
    console.log(question)
if(question === "2") {
alert("You is kind. You is smart. Is important")
} else {
alert("SHAME! SHAME! SHAME!")

}
})

$(`#200-points`).click(function(){   
    const question = prompt("An animal with a three letter word that uses a litter box")
    if(question === "cat" || question === "Cat" || question === "CAT"){
        alert("Who's a pretty kitty?")
    }else {
        alert("A cat will chew through your macbook cord...")
    }
})

$(`#300-points`).click(function(){   
    const question = prompt("A three letter word that is used to refer to a mother")
    if(question === "mom" || question === "Mom" || question === "MOM"){
        alert("When was the last time you called her?")
    }else {
        alert("She would be so disapointed")
    }
})

$(`#400-points`).click(function(){   
    const question = prompt("99 is before this number")
    if (question === "100") {
        alert("Well, I'll be damned. You can math!")
    } else {
        alert("well, this is embarrassing")
    }
})

$(`#500-points`).click(function(){   
    const question = prompt("H2O is another name for this essential life force")
    if (question === "water" || question === "Water" || question === "WATER") {
        alert("Drink up, ho!")
    } else {
        alert("Cape town would be disapointed ")
    }
})
$(`#final-answer`).click(function(){   
    const question = prompt("How much wood could a woodchuck chuck if a woodchuck couldn't chuck wood?")
    if (question === "42") {
        alert("I cant belive you guessed it!")
    } else {
        alert("maybeeeeee?")
    }
})
