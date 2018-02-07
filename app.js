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
          totalPoints += 300
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
        const question = prompt(`This Northwest staple is made from crushed durum wheat
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
          totalPoints += 500
          $('.playerscore').html(`Score: ${totalPoints}`)
        }
    })
// SCIENCE CAT QUESTIONS
$(`#sci-100`).click(function(){
    const question = prompt(`sci question 100
    a. 
    b.
    c.`)
if (question === "a") {
            alert(`correct`)
          $(`#sci-100`).removeClass(`answers`)
          $(`#sci-100`).addClass(`right-answer`)
          totalPoints += 100
          $('.playerscore').html(`Score: ${totalPoints}`)
        } else {
            alert(`incorrect`)
           $(`#sci-100`).removeClass(`answers`)
          $(`#sci-100`).addClass(`wrong-answer`)
          totalPoints -= 100
          $('.playerscore').html(`Score: ${totalPoints}`)
        }
    })
$(`#sci-200`).click(function(){
    const question = prompt(`sci question 200
    a. 
    b.
    c.`)
    if (question === "a") {
        alert(`correct`)
      $(`#sci-200`).removeClass(`answers`)
      $(`#sci-200`).addClass(`right-answer`)
      totalPoints += 200
      $('.playerscore').html(`Score: ${totalPoints}`)
    } else {
        alert(`incorrect`)
       $(`#sci-200`).removeClass(`answers`)
      $(`#sci-200`).addClass(`wrong-answer`)
      totalPoints -= 200
      $('.playerscore').html(`Score: ${totalPoints}`)
    }
})
$(`#sci-300`).click(function(){
    const question = prompt(`sci question 300
    a. 
    b.
    c.`)
if (question === "a") {
            alert(`correct`)
          $(`#sci-300`).removeClass(`answers`)
          $(`#sci-300`).addClass(`right-answer`)
          totalPoints += 300
          $('.playerscore').html(`Score: ${totalPoints}`)
        } else {
            alert(`incorrect`)
           $(`#sci-300`).removeClass(`answers`)
          $(`#sci-300`).addClass(`wrong-answer`)
          totalPoints -= 300
          $('.playerscore').html(`Score: ${totalPoints}`)
        }
    })
$(`#sci-400`).click(function(){
    const question = prompt(`sci question 400
    a. 
    b.
    c.`)
if (question === "a") {
            alert(`correct`)
          $(`#sci-400`).removeClass(`answers`)
          $(`#sci-400`).addClass(`right-answer`)
          totalPoints += 400
          $('.playerscore').html(`Score: ${totalPoints}`)
        } else {
            alert(`incorrect`)
           $(`#sci-400`).removeClass(`answers`)
          $(`#sci-400`).addClass(`wrong-answer`)
          totalPoints -= 400
          $('.playerscore').html(`Score: ${totalPoints}`)
        }
    })
$(`#sci-500`).click(function(){
    const question = prompt(`sci question 500
    a. 
    b.
    c.`)
if (question === "a") {
            alert(`correct`)
          $(`#sci-500`).removeClass(`answers`)
          $(`#sci-500`).addClass(`right-answer`)
          totalPoints += 500
          $('.playerscore').html(`Score: ${totalPoints}`)
        } else {
            alert(`incorrect`)
            $(`#sci-500`).removeClass(`answers`)
          $(`#sci-500`).addClass(`wrong-answer`)
          totalPoints -= 500
          $('.playerscore').html(`Score: ${totalPoints}`)
        }
    })
// ANIMALS TRIVIA QUESTIONS

$(`#anm-100`).click(function(){
    const question = prompt(`anm question 100
    a. 
    b.
    c.`)
if (question === "a") {
        alert(`correct`)
      $(`#anm-100`).removeClass(`answers`)
      $(`#anm-100`).addClass(`right-answer`)
      totalPoints += 100
      $('.playerscore').html(`Score: ${totalPoints}`)

    } else {
        alert(`incorrect`)
       $(`#anm-100`).removeClass(`answers`)
      $(`#anm-100`).addClass(`wrong-answer`)
      totalPoints -= 100
      $('.playerscore').html(`Score: ${totalPoints}`)

    }
})
$(`#anm-200`).click(function(){
    const question = prompt(`anm question 200
    a. 
    b.
    c.`)
    if (question === "a") {
        alert(`correct`)
      $(`#anm-200`).removeClass(`answers`)
      $(`#anm-200`).addClass(`right-answer`)
      totalPoints += 200
      $('.playerscore').html(`Score: ${totalPoints}`)

    } else {
        alert(`incorrect`)
       $(`#anm-200`).removeClass(`answers`)
      $(`#anm-200`).addClass(`wrong-answer`)
      totalPoints -= 200
      $('.playerscore').html(`Score: ${totalPoints}`)

    }
})
$(`#anm-300`).click(function(){
    const question = prompt(`anm question 300
    a. 
    b.
    c.`)
    if (question === "a") {
        alert(`correct`)
      $(`#anm-300`).removeClass(`answers`)
      $(`#anm-300`).addClass(`right-answer`)
      totalPoints += 300
      $('.playerscore').html(`Score: ${totalPoints}`)

    } else {
        alert(`incorrect`)
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
    const question = prompt(`anm question 500
    a. 
    b.
    c.`)
    if (question === "a") {
        alert(`correct`)
      $(`#anm-500`).removeClass(`answers`)
      $(`#anm-500`).addClass(`right-answer`)
      totalPoints += 500
      $('.playerscore').html(`Score: ${totalPoints}`)

    } else {
        alert(`incorrect`)
       $(`#anm-500`).removeClass(`answers`)
      $(`#anm-500`).addClass(`wrong-answer`)
      totalPoints -= 500
      $('.playerscore').html(`Score: ${totalPoints}`)

    }
})
// TV and cinema category
$(`#tnc-100`).click(function(){
    const question = prompt(`tnc question 100
    a. 
    b.
    c.`)
    if (question === "a") {
        alert(`correct`)
      $(`#tnc-100`).removeClass(`answers`)
      $(`#tnc-100`).addClass(`right-answer`)
      totalPoints += 100
      $('.playerscore').html(`Score: ${totalPoints}`)

    } else {
        alert(`incorrect`)
       $(`#tnc-100`).removeClass(`answers`)
      $(`#tnc-100`).addClass(`wrong-answer`)
      totalPoints -= 100
      $('.playerscore').html(`Score: ${totalPoints}`)

    }
})
$(`#tnc-200`).click(function(){
    const question = prompt(`tnc question 200
    a. 
    b.
    c.`)
    if (question === "a") {
        alert(`correct`)
      $(`#tnc-200`).removeClass(`answers`)
      $(`#tnc-200`).addClass(`right-answer`)
      totalPoints += 200
      $('.playerscore').html(`Score: ${totalPoints}`)

    } else {
        alert(`incorrect`)
       $(`#tnc-200`).removeClass(`answers`)
      $(`#tnc-200`).addClass(`wrong-answer`)
      totalPoints -= 200
      $('.playerscore').html(`Score: ${totalPoints}`)

    }
})
$(`#tnc-300`).click(function(){
    const question = prompt(`tnc question 300
    a. 
    b.
    c.`)
    if (question === "a") {
        alert(`correct`)
      $(`#tnc-300`).removeClass(`answers`)
      $(`#tnc-300`).addClass(`right-answer`)
      totalPoints += 300
      $('.playerscore').html(`Score: ${totalPoints}`)

    } else {
        alert(`incorrect`)
       $(`#tnc-300`).removeClass(`answers`)
      $(`#tnc-300`).addClass(`wrong-answer`)
      totalPoints -= 300
      $('.playerscore').html(`Score: ${totalPoints}`)

    }
})
$(`#tnc-400`).click(function(){
    const question = prompt(`tnc question 400
    a. 
    b.
    c.`)
    if (question === "a") {
        alert(`correct`)
      $(`#tnc-400`).removeClass(`answers`)
      $(`#tnc-400`).addClass(`right-answer`)
      totalPoints += 400
      $('.playerscore').html(`Score: ${totalPoints}`)

    } else {
        alert(`incorrect`)
       $(`#tnc-400`).removeClass(`answers`)
      $(`#tnc-400`).addClass(`wrong-answer`)
      totalPoints -= 400
      $('.playerscore').html(`Score: ${totalPoints}`)

    }
})
$(`#tnc-500`).click(function(){
    const question = prompt(`tnc question 500
    a. 
    b.
    c.`)
    if (question === "a") {
        alert(`correct`)
      $(`#tnc-500`).removeClass(`answers`)
      $(`#tnc-500`).addClass(`right-answer`)
      totalPoints += 500
      $('.playerscore').html(`Score: ${totalPoints}`)

    } else {
        alert(`incorrect`)
       $(`#tnc-500`).removeClass(`answers`)
      $(`#tnc-500`).addClass(`wrong-answer`)
      totalPoints += -500
      $('.playerscore').html(`Score: ${totalPoints}`)
    }
})
.playerscore

// $('.playerscore').html(`Score: ${totalPoints}`)