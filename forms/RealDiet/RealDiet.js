btnSumbit.onclick = function() {
    let mealType = drpmealType.value
    let calories = inptcalories.value
    let Protein = inptprotein.value
    let Fats = inptfats.value
    let Carbs = inptcarbs.value
    let foodType = inptfoodType.value
    let currentDate = inptcurrentDate.value
 //MatthewDietForms
        let query = "INSERT INTO diet (`Calories`,`Meal_Type`, `user_id`, `DATE`, `Fats`, `Carbs`, `Protein`, `Food_Type`) VALUES (" + calories + ", '" + mealType + "', " + user_id + ",'" + currentDate + "', " + Fats + ", " + Carbs + ", " + Protein + ",' " + foodType + "')"    


    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=375groupa2&query=" + query)

    if (req.status == 200) { 
        if (req.responseText == 500) // for our server - this means the insert succeeded
            lblMessage3.textContent = "You have successfully added the Meal Type, Food Type, Calories, Fats, Carbs, Date and Protein!"
        else
            lblMessage3.textContent = "There was a problem with adding your Entry into the database"
    } else // transit error
        lblMessage3.textContent = "Error: " + req.status
}



drpmealType.onclick=function(s){
  if (typeof(s) == "object"){
  return
}else {
    drpmealType.value = s
    }
    }

btnBacktoHome.onclick=function(){
  ChangeForm(Diet)
}


