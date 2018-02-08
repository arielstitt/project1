// The total points are equal to zero because the user starts with 0 points, obvi
totalPoints = 0;

// The buttons is linked to an onclick function
$(".100-points").one("click", function(){

    $(this).attr("disabled", true)
});
$(".200-points").one("click", function(){
    $(this).attr("disabled", true);
});
$(".300-points").one("click", function(){
    $(this).attr("disabled", true);
});
$(".400-points").one("click", function(){
    $(this).attr("disabled", true);
});
$(".500-points").one("click", function(){
    $(this).attr("disabled", true);
});
$(`#final-answer`).one("click", function(){
    $(this).attr("disabled", true);
});
// FINAL QUESTION
$(`#final-answer`).click(function(){
    prompt(`this is your final answer!`)
    $(`.jeopradyboard`).remove()
})
// FOOD AND WINE CAT QUESTIONS
$(`#fnw-100`).click(function(){
    const question = prompt(`Malbec, sangiovese, and syrah are all types of what?
    a. What is Wine
    b. What is Countries
    c. What is Pharaohs
    `)
if (question === "a") {
        alert(`correct`)
//   thisi is where I am removing this class and adding a class
//   if user answer the question correctly change the color of the btn to purple
      $(`#fnw-100`).removeClass(`answers`)
      $(`#fnw-100`).addClass(`right-answer`)
    //   here I am adding 100 points to the users score which will be updated in the DOM
      totalPoints += 100
      $('.playerscore').html(`Score: ${totalPoints}`)
    } else {
        alert(`Incorrect. The answer is Wine`)
//  if the user answers the question incorrectly, change the color to red
       $(`#fnw-100`).removeClass(`answers`)
      $(`#fnw-100`).addClass(`wrong-answer`)
      totalPoints -= 100
    $('.playerscore').html(`Score: ${totalPoints}`)
    }
})
$(`#fnw-200`).click(function(){
        const question = prompt(`fWhat common kitchen item is made up of sodium and chlorine atons
        a. What is Sugar
        b. What is Baking soda
        c. What is Salt
        `)
if (question === "c") {
            alert(`correct`)
//   thisi is where I am removing this class and adding a class
//   if user answer the question correctly change the color of the btn to purple
          $(`#fnw-200`).removeClass(`answers`)
          $(`#fnw-200`).addClass(`right-answer`)
          totalPoints += 200
          $('.playerscore').html(`Score: ${totalPoints}`)
        } else {
            alert(`Incorrect. The answer is Salt`)
//  if the user answers the question incorrectly, change the color to red
           $(`#fnw-200`).removeClass(`answers`)
          $(`#fnw-200`).addClass(`wrong-answer`)
          totalPoints -= 200
          $('.playerscore').html(`Score: ${totalPoints}`)
        }
    })
$(`#fnw-300`).click(function(){
        const question = prompt(`Cheddar cheese originated in this country
        a. What is France
        b. What is Germany
        c. What is England
        `)
  if (question === "c") {
            alert(`correct`)
          $(`#fnw-300`).removeClass(`answers`)
          $(`#fnw-300`).addClass(`right-answer`)
          totalPoints += 300
          $('.playerscore').html(`Score: ${totalPoints}`)
        } else {
            alert(`incorrect. The answer is England.`)
           $(`#fnw-300`).removeClass(`answers`)
          $(`#fnw-300`).addClass(`wrong-answer`)
          totalPoints -= 300
          $('.playerscore').html(`Score: ${totalPoints}`)
        }
    })
$(`#fnw-400`).click(function(){
        const question = prompt(`“Caviar” is the salt-cured roe of what fish?
        a. Salmon
        b. Beluga
        c. Sturgeon
        `)
 if (question === "c") {
            alert(`correct`)
          $(`#fnw-400`).removeClass(`answers`)
          $(`#fnw-400`).addClass(`right-answer`)
          totalPoints += 400
          $('.playerscore').html(`Score: ${totalPoints}`)
        } else {
            alert(`incorrect. The answer is Sturgeon`)
           $(`#fnw-400`).removeClass(`answers`)
          $(`#fnw-400`).addClass(`wrong-answer`)
          totalPoints += 400
          $('.playerscore').html(`Score: ${totalPoints}`)
        }
    })    
$(`#fnw-500`).click(function(){
        const question = prompt(`This Northwest African staple is made from crushed durum wheat
        a. Fufu
        b. Couscous
        c. Injera
        `)
if (question === "b") {
            alert(`correct`)
          $(`#fnw-500`).removeClass(`answers`)
          $(`#fnw-500`).addClass(`right-answer`)
          totalPoints += 500
          $('.playerscore').html(`Score: ${totalPoints}`)
        } else {
            alert(`incorrect. The answer is Couscous`)
           $(`#fnw-500`).removeClass(`answers`)
          $(`#fnw-500`).addClass(`wrong-answer`)
          totalPoints -= 500
          $('.playerscore').html(`Score: ${totalPoints}`)
        }
    })
// SCIENCE CAT QUESTIONS
$(`#sci-100`).click(function(){
    const question = prompt(`This gland regulates metabolism in the human body.
    a. What is hypothalamus
    b. What is Thyroid
    c. What is pituitary gland.
    `)
if (question === "b") {
            alert(`correct`)
          $(`#sci-100`).removeClass(`answers`)
          $(`#sci-100`).addClass(`right-answer`)
          totalPoints += 100
          $('.playerscore').html(`Score: ${totalPoints}`)
        } else {
            alert(`incorrect. The correct answer is Thyroid`)
           $(`#sci-100`).removeClass(`answers`)
          $(`#sci-100`).addClass(`wrong-answer`)
          totalPoints -= 100
          $('.playerscore').html(`Score: ${totalPoints}`)
        }
    })
$(`#sci-200`).click(function(){
    const question = prompt(`Hale-Bopp is a classification of which type of small solar system body?
    a. What is meteor
    b. What is pluto
    c. What is comet`)
    if (question === "c") {
        alert(`correct`)
      $(`#sci-200`).removeClass(`answers`)
      $(`#sci-200`).addClass(`right-answer`)
      totalPoints += 200
      $('.playerscore').html(`Score: ${totalPoints}`)
    } else {
        alert(`incorrect. The answer is Comet`)
       $(`#sci-200`).removeClass(`answers`)
      $(`#sci-200`).addClass(`wrong-answer`)
      totalPoints -= 200
      $('.playerscore').html(`Score: ${totalPoints}`)
    }
})
$(`#sci-300`).click(function(){
    const question = prompt(`In the US and Canada, one ton is a unit of measure that contains how many pounds?
    a. What is 3000
    b. What is 2000
    c. What is 1000`)
if (question === "b") {
            alert(`correct`)
          $(`#sci-300`).removeClass(`answers`)
          $(`#sci-300`).addClass(`right-answer`)
          totalPoints += 300
          $('.playerscore').html(`Score: ${totalPoints}`)
        } else {
            alert(`incorrect. The answer is 2000`)
           $(`#sci-300`).removeClass(`answers`)
          $(`#sci-300`).addClass(`wrong-answer`)
          totalPoints -= 300
          $('.playerscore').html(`Score: ${totalPoints}`)
        }
    })
$(`#sci-400`).click(function(){
    const question = prompt(`The Molecule "hemoblobin" is used in which type of cells?"
    a. What is Red blood cells
    b. What is White blood cells
    c. What is Blue blood cells`)
if (question === "a") {
            alert(`correct`)
          $(`#sci-400`).removeClass(`answers`)
          $(`#sci-400`).addClass(`right-answer`)
          totalPoints += 400
          $('.playerscore').html(`Score: ${totalPoints}`)
        } else {
            alert(`incorrect. The answer is Red Blood Cells`)
           $(`#sci-400`).removeClass(`answers`)
          $(`#sci-400`).addClass(`wrong-answer`)
          totalPoints -= 400
          $('.playerscore').html(`Score: ${totalPoints}`)
        }
    })
$(`#sci-500`).click(function(){
    const question = prompt(`Penicillin was discovered in 1928 by which Scottish scientist?
    a. Who is Alan MacMasters
    b. Who is Alexander Graham Bell
    c. Who is Sir Alexander Fleming`)
if (question === "c") {
            alert(`correct`)
          $(`#sci-500`).removeClass(`answers`)
          $(`#sci-500`).addClass(`right-answer`)
          totalPoints += 500
          $('.playerscore').html(`Score: ${totalPoints}`)
        } else {
            alert(`incorrect. The answer is Sir ALexander Fleming.`)
            $(`#sci-500`).removeClass(`answers`)
          $(`#sci-500`).addClass(`wrong-answer`)
          totalPoints -= 500
          $('.playerscore').html(`Score: ${totalPoints}`)
        }
    })
// ANIMALS TRIVIA QUESTIONS

$(`#anm-100`).click(function(){
    const question = prompt(`This Chemical element gives the blood of a lobster a bluish tint.
    a. What is copper
    b. What is iron
    c. What is nickle`)
if (question === "a") {
        alert(`correct`)
      $(`#anm-100`).removeClass(`answers`)
      $(`#anm-100`).addClass(`right-answer`)
      totalPoints += 100
      $('.playerscore').html(`Score: ${totalPoints}`)

    } else {
        alert(`incorrect. The answer is Copper.`)
       $(`#anm-100`).removeClass(`answers`)
      $(`#anm-100`).addClass(`wrong-answer`)
      totalPoints -= 100
      $('.playerscore').html(`Score: ${totalPoints}`)

    }
})
$(`#anm-200`).click(function(){
    const question = prompt(`This snakes untreated bite is almost 100% fate
    a. What is King Cobra
    b. What is Echis Carinatus
    c. What is Black Mamba`)
    if (question === "c") {
        alert(`correct`)
      $(`#anm-200`).removeClass(`answers`)
      $(`#anm-200`).addClass(`right-answer`)
      totalPoints += 200
      $('.playerscore').html(`Score: ${totalPoints}`)

    } else {
        alert(`incorrect. The answer is Black Mamba`)
       $(`#anm-200`).removeClass(`answers`)
      $(`#anm-200`).addClass(`wrong-answer`)
      totalPoints -= 200
      $('.playerscore').html(`Score: ${totalPoints}`)

    }
})
$(`#anm-300`).click(function(){
    const question = prompt(`Cynophobia is the fear of what kind of animal?
    a. What is squirrel
    b. What is dog
    c. What is catepillar`)
    if (question === "b") {
        alert(`correct`)
      $(`#anm-300`).removeClass(`answers`)
      $(`#anm-300`).addClass(`right-answer`)
      totalPoints += 300
      $('.playerscore').html(`Score: ${totalPoints}`)

    } else {
        alert(`incorrect. The answer is Dog`)
       $(`#anm-300`).removeClass(`answers`)
      $(`#anm-300`).addClass(`wrong-answer`)
      totalPoints -= 300
      $('.playerscore').html(`Score: ${totalPoints}`)

    }
})
$(`#anm-400`).click(function(){
    const question = prompt(`anm question 400
    a. 
    b.
    c.`)
    if (question === "a") {
        alert(`correct`)
      $(`#anm-400`).removeClass(`answers`)
      $(`#anm-400`).addClass(`right-answer`)
      totalPoints += 400
      $('.playerscore').html(`Score: ${totalPoints}`)

    } else {
        alert(`incorrect`)
       $(`#anm-400`).removeClass(`answers`)
      $(`#anm-400`).addClass(`wrong-answer`)
      totalPoints -= 400
      $('.playerscore').html(`Score: ${totalPoints}`)

    }
})
$(`#anm-500`).click(function(){
    const question = prompt(`A group of whales is called this.
    a. What is a pod
    b. What is a committee
    c. What is a school`)
    if (question === "a") {
        alert(`correct`)
      $(`#anm-500`).removeClass(`answers`)
      $(`#anm-500`).addClass(`right-answer`)
      totalPoints += 500
      $('.playerscore').html(`Score: ${totalPoints}`)

    } else {
        alert(`incorrect. The answer is Pod.`)
       $(`#anm-500`).removeClass(`answers`)
      $(`#anm-500`).addClass(`wrong-answer`)
      totalPoints -= 500
      $('.playerscore').html(`Score: ${totalPoints}`)

    }
})
// TV and cinema category
$(`#tnc-100`).click(function(){
    const question = prompt(`"I'd buy that for a dollar", is a catchphrase from what 1987 action movie set in Detroit, Michigan
    a. What is Lethal Weapon
    b. What is Robocop
    c. What is Masters of the Universe`)
    if (question === "b") {
        alert(`correct`)
      $(`#tnc-100`).removeClass(`answers`)
      $(`#tnc-100`).addClass(`right-answer`)
      totalPoints += 100
      $('.playerscore').html(`Score: ${totalPoints}`)

    } else {
        alert(`incorrect. The answer is Robocop`)
       $(`#tnc-100`).removeClass(`answers`)
      $(`#tnc-100`).addClass(`wrong-answer`)
      totalPoints -= 100
      $('.playerscore').html(`Score: ${totalPoints}`)

    }
})
$(`#tnc-200`).click(function(){
    const question = prompt(`This animated sci-fi sitcome is about the misadventures of a mad scientist and his grandson.
    a. Who is Doc Brown and Marty
    b. What is Hubert j, Farnsworth and Philip J. Fry
    c. Who is Rick and Morty`)
    if (question === "c") {
        alert(`correct`)
      $(`#tnc-200`).removeClass(`answers`)
      $(`#tnc-200`).addClass(`right-answer`)
      totalPoints += 200
      $('.playerscore').html(`Score: ${totalPoints}`)

    } else {
        alert(`incorrect. The answer is Rick and Morty.`)
       $(`#tnc-200`).removeClass(`answers`)
      $(`#tnc-200`).addClass(`wrong-answer`)
      totalPoints -= 200
      $('.playerscore').html(`Score: ${totalPoints}`)

    }
})
$(`#tnc-300`).click(function(){
    const question = prompt(`The Looney Tunes' character FogHorn J. Leghorn is this type of animal?"
    a. What is Rooster
    b. What is a Cat
    c.What is a Rabbit`)
    if (question === "a") {
        alert(`correct`)
      $(`#tnc-300`).removeClass(`answers`)
      $(`#tnc-300`).addClass(`right-answer`)
      totalPoints += 300
      $('.playerscore').html(`Score: ${totalPoints}`)

    } else {
        alert(`incorrect. The answer is Rooster`)
       $(`#tnc-300`).removeClass(`answers`)
      $(`#tnc-300`).addClass(`wrong-answer`)
      totalPoints -= 300
      $('.playerscore').html(`Score: ${totalPoints}`)

    }
})
$(`#tnc-400`).click(function(){
    const question = prompt(`John Candy's character was named ____, in the comedy movie, "Planes, Trains, and Automobiles"
    a. What is Mel Griffin
    b. What is Del Griffin
    c. What is Peter Griffin`)
    if (question === "b") {
        alert(`correct`)
      $(`#tnc-400`).removeClass(`answers`)
      $(`#tnc-400`).addClass(`right-answer`)
      totalPoints += 400
      $('.playerscore').html(`Score: ${totalPoints}`)

    } else {
        alert(`incorrect. The answer is Del Griffin.`)
       $(`#tnc-400`).removeClass(`answers`)
      $(`#tnc-400`).addClass(`wrong-answer`)
      totalPoints -= 400
      $('.playerscore').html(`Score: ${totalPoints}`)

    }
})
$(`#tnc-500`).click(function(){
    const question = prompt(`This actor played the leading role in the 1982 American comedy Tootsie
    a. Dustin Hoffman
    b. Gene Hackman
    c. Robert Redford`)
    if (question === "a") {
        alert(`correct`)
      $(`#tnc-500`).removeClass(`answers`)
      $(`#tnc-500`).addClass(`right-answer`)
      totalPoints += 500
      $('.playerscore').html(`Score: ${totalPoints}`)

    } else {
        alert(`incorrect. The answer is Dustin Hoffman`)
       $(`#tnc-500`).removeClass(`answers`)
      $(`#tnc-500`).addClass(`wrong-answer`)
      totalPoints -= 500
      $('.playerscore').html(`Score: ${totalPoints}`)
    }
})
.playerscore

// $('.playerscore').html(`Score: ${totalPoints}`)