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
    const question = prompt(`fnw question 100
    a. 
    b.
    c.`)
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
        alert(`incorrect`)
//  if the user answers the question incorrectly, change the color to red
       $(`#fnw-100`).removeClass(`answers`)
      $(`#fnw-100`).addClass(`wrong-answer`)
      totalPoints -= 100
    $('.playerscore').html(`Score: ${totalPoints}`)
    }
})
$(`#fnw-200`).click(function(){
        const question = prompt(`fnw question 200
        a. 
        b.
        c.`)
if (question === "a") {
            alert(`correct`)
//   thisi is where I am removing this class and adding a class
//   if user answer the question correctly change the color of the btn to purple
          $(`#fnw-200`).removeClass(`answers`)
          $(`#fnw-200`).addClass(`right-answer`)
          totalPoints += 200
          $('.playerscore').html(`Score: ${totalPoints}`)
        } else {
            alert(`incorrect`)
//  if the user answers the question incorrectly, change the color to red
           $(`#fnw-200`).removeClass(`answers`)
          $(`#fnw-200`).addClass(`wrong-answer`)
          totalPoints -= 200
          $('.playerscore').html(`Score: ${totalPoints}`)
        }
    })
$(`#fnw-300`).click(function(){
        const question = prompt(`fnw question 300
        a. 
        b.
        c.`)
  if (question === "a") {
            alert(`correct`)
          $(`#fnw-300`).removeClass(`answers`)
          $(`#fnw-300`).addClass(`right-answer`)
          totalPoints += 300
          $('.playerscore').html(`Score: ${totalPoints}`)
        } else {
            alert(`incorrect`)
           $(`#fnw-300`).removeClass(`answers`)
          $(`#fnw-300`).addClass(`wrong-answer`)
          totalPoints += 300
          $('.playerscore').html(`Score: ${totalPoints}`)
        }
    })
$(`#fnw-400`).click(function(){
        const question = prompt(`fnw question 400
        a. 
        b.
        c.`)
 if (question === "a") {
            alert(`correct`)
          $(`#fnw-400`).removeClass(`answers`)
          $(`#fnw-400`).addClass(`right-answer`)
          totalPoints += 400
          $('.playerscore').html(`Score: ${totalPoints}`)
        } else {
            alert(`incorrect`)
           $(`#fnw-400`).removeClass(`answers`)
          $(`#fnw-400`).addClass(`wrong-answer`)
          totalPoints += 400
          $('.playerscore').html(`Score: ${totalPoints}`)
        }
    })    
$(`#fnw-500`).click(function(){
        const question = prompt(`fnw question 500
        a. 
        b.
        c.`)
if (question === "a") {
            alert(`correct`)
          $(`#fnw-500`).removeClass(`answers`)
          $(`#fnw-500`).addClass(`right-answer`)
          totalPoints += 500
          $('.playerscore').html(`Score: ${totalPoints}`)
        } else {
            alert(`incorrect`)
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
    } else {
        alert(`incorrect`)
       $(`#anm-100`).removeClass(`answers`)
      $(`#anm-100`).addClass(`wrong-answer`)
      totalPoints -= 100
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
    } else {
        alert(`incorrect`)
       $(`#anm-200`).removeClass(`answers`)
      $(`#anm-200`).addClass(`wrong-answer`)
      totalPoints -= 200
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
    } else {
        alert(`incorrect`)
       $(`#anm-300`).removeClass(`answers`)
      $(`#anm-300`).addClass(`wrong-answer`)
      totalPoints -= 300
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
    } else {
        alert(`incorrect`)
       $(`#anm-400`).removeClass(`answers`)
      $(`#anm-400`).addClass(`wrong-answer`)
      totalPoints -= 400
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
    } else {
        alert(`incorrect`)
       $(`#anm-500`).removeClass(`answers`)
      $(`#anm-500`).addClass(`wrong-answer`)
      totalPoints -= 500
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
    } else {
        alert(`incorrect`)
       $(`#tnc-100`).removeClass(`answers`)
      $(`#tnc-100`).addClass(`wrong-answer`)
      totalPoints -= 100
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
    } else {
        alert(`incorrect`)
       $(`#tnc-200`).removeClass(`answers`)
      $(`#tnc-200`).addClass(`wrong-answer`)
      totalPoints -= 200
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
    } else {
        alert(`incorrect`)
       $(`#tnc-300`).removeClass(`answers`)
      $(`#tnc-300`).addClass(`wrong-answer`)
      totalPoints -= 300
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
    } else {
        alert(`incorrect`)
       $(`#tnc-400`).removeClass(`answers`)
      $(`#tnc-400`).addClass(`wrong-answer`)
      totalPoints -= 400
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
    } else {
        alert(`incorrect`)
       $(`#tnc-500`).removeClass(`answers`)
      $(`#tnc-500`).addClass(`wrong-answer`)
      totalPoints += -500
    }
})

// $('.playerscore').html(`Score: ${totalPoints}`)