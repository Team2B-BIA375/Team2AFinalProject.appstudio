Cardio.onshow=function(){

  query = "SELECT workout_id FROM workout WHERE user_id = " + user_id + " AND `date` = '" + workout_date + "' AND body_part = '" + exercise_group + "'"

  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + database + "&query=" + query)

   if (req.status == 200) { //transit trip worked. 
        results = JSON.parse(req.responseText)
        workoutID = results
        console.log(`Your workout ID is ${workoutID
        }`)
    } else   // the transit didn't work - bad wifi? server turned off?
        lblCardioCheck.value = "Error code: " + req.status
}

cardioContinue.onclick = function() {
  ChangeForm(Final)
}
 
cardioDropdown.onclick=function(s){
  if (typeof(s) == "object"){  // means the control was clicked 
    return                     // but no selection made yet so do nothing
  } else {                     // a selection made
    cardioDropdown.value = s     // make dropdown show choice the user made
  }
}

cardioSubmit.onclick=function(){
  let cardioActivity = cardioDropdown.value
  
  console.log(`user id is: ${user_id}`)
  console.log(`date is: ${workout_date}`)
  console.log(`body_type is: ${exercise_group}`)
  console.log(`cardioActivity is: ${cardioActivity}`)
  
  query = "INSERT into exercise(workout_id, name, body_part) VALUES(" + workoutID + ", '" + cardioActivity + "', 'Cardio')"


req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + database + "&query=" + query)

if (req.status == 200) { //transit worked.
        if (req.responseText == 500)    // for our server - this means the insert succeeded
            lblCardioCheck.value = "Success!"
        else
            lblCardioCheck.value = "There was a problem!"
    } else // transit error
        lblCardioCheck.value = "Error: " + req.status
}