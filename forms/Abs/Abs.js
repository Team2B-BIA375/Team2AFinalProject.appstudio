Abs.onshow=function(){

  query = "SELECT workout_id FROM workout WHERE user_id = " + user_id + " AND `date` = '" + workout_date + "' AND body_part = '" + exercise_group + "'"

  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + database + "&query=" + query)

   if (req.status == 200) { //transit trip worked. 
        results = JSON.parse(req.responseText)
        workoutID = results
        console.log(`Your workout ID is ${workoutID
        }`)
    } else   // the transit didn't work - bad wifi? server turned off?
        lblAbsCheck.value = "Error code: " + req.status
}

absContinue.onclick = function() {
  ChangeForm(Final)
}
 
absDropdown.onclick=function(s){
  if (typeof(s) == "object"){  // means the control was clicked 
    return                     // but no selection made yet so do nothing
  } else {                     // a selection made
    absDropdown.value = s     // make dropdown show choice the user made
  }
}

absSubmit.onclick=function(){
  let absActivity = absDropdown.value
  let absSet = absSets.value
  let absRep = absReps.value
  let absWeights = absWeight.value
  
  console.log(`user id is: ${user_id}`)
  console.log(`date is: ${workout_date}`)
  console.log(`body_type is: ${exercise_group}`)
  console.log(`absActivity is: ${absActivity}`)
  console.log(`absSet is: ${absSet}`)
  console.log(`absRep is: ${absRep}`)
  console.log(`absWeights is: ${absWeights}`)
  
  query = "INSERT into exercise(workout_id, name, reps, sets, weight, body_part) VALUES(" + workoutID + ", '" + absActivity + "', " + absRep + "," + absSet + "," + absWeights + ", 'Abs')"


req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + database + "&query=" + query)

if (req.status == 200) { //transit worked.
        if (req.responseText == 500)    // for our server - this means the insert succeeded
            lblAbsCheck.value = "Success!"
        else
            lblAbsCheck.value = "There was a problem!"
    } else // transit error
        lblAbsCheck.value = "Error: " + req.status
}