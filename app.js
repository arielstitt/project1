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
    const question = prompt(`These two numbers added together equals 4 
    a. 2 
    b. 7
    c. 9
    `)
    console.log(question)
if(question === "a") {
alert(`You is kind. You is smart. Is important`)
} else {
alert("SHAME! SHAME! SHAME!")

}
})

$(`#200-points`).click(function(){   
    const question = prompt(`An animal with a three letter word that uses a litter box
    a. trash panda
    b. cat
    c. hairless molerat`)

    if(question === "b"){
        alert("Who's a pretty kitty?")
    }else {
        alert("A cat will chew through your macbook cord...")
    }
})

$(`#300-points`).click(function(){   
    const question = prompt(`A three letter word that is used to refer to a mother
    a. cat
    b. dog
    c. mom`)
    if(question === "c"){
        alert("When was the last time you called her?")
    }else {
        alert("She would be so disapointed")
    }
})

$(`#400-points`).click(function(){   
    const question = prompt(`99 is before this number
    a. One hundred twenty-five thousand sic hundred minutes
    b. peanuts
    c. 100 `)
    if (question === "c") {
        alert("Well, I'll be damned. You can math!")
    } else {
        alert("well, this is embarrassing")
    }
})

$(`#500-points`).click(function(){   
    const question = prompt(`H2O is another name for this essential life force
    a. boogers
    b. water
    c. lactose`)
    if (question === "b") {
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
