console.log("javascript")
$("#addburger").on("click", function(){
    event.preventDefault()
    let newBurger={
        name: $("#burger").val()
    }
    console.log(newBurger)
    //ajax
    $.ajax({
        url:"/api/burgers",
        method:"post",
        data: newBurger
    })
    .then(function (result){
        console.log(result)
        location.reload()
    })
})

$(".devour").on("click", function(){
    const id = $(this).attr("data-id")

    $.ajax({
        url:"/api/burgers/" + id, 
        method: "put"
    }).then(function (result){
        console.log(result);
       location.reload()
    })
})