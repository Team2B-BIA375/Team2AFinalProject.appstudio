Pull.onshow=function(){

  query = "SELECT workout_id FROM workout WHERE user_id = " + user_id + " AND `date` = '" + workout_date + "' AND body_part = '" + exercise_group + "'"

  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + database + "&query=" + query)

   if (req.status == 200) { //transit trip worked. 
        results = JSON.parse(req.responseText)
        workoutID = results
        console.log(`Your workout ID is ${workoutID
        }`)
    } else   // the transit didn't work - bad wifi? server turned off?
        lblPullCheck.value = "Error code: " + req.status
}

pullContinue.onclick = function() {
  ChangeForm(Final)
}
 
backDropdown.onclick=function(s){
  if (typeof(s) == "object"){  // means the control was clicked 
    return                     // but no selection made yet so do nothing
  } else {                     // a selection made
    backDropdown.value = s     // make dropdown show choice the user made
  }
}

backSubmit.onclick=function(){
  let backActivity = backDropdown.value
  let backSet = backSets.value
  let backRep = backReps.value
  let backWeights = backWeight.value
  
  console.log(`user id is: ${user_id}`)
  console.log(`date is: ${workout_date}`)
  console.log(`body_type is: ${exercise_group}`)
  console.log(`backActivity is: ${backActivity}`)
  console.log(`backSet is: ${backSet}`)
  console.log(`backRep is: ${backRep}`)
  console.log(`backWeights is: ${backWeights}`)
  
  query = "INSERT into exercise(workout_id, name, reps, sets, weight, body_part) VALUES(" + workoutID + ", '" + backActivity + "', " + backRep + "," + backSet + "," + backWeights + ", 'Upper Body: Pull')"


req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + database + "&query=" + query)

if (req.status == 200) { //transit worked.
        if (req.responseText == 500)    // for our server - this means the insert succeeded
            lblPullCheck.value = "Success!"
        else
            lblPullCheck.value = "There was a problem!"
    } else // transit error
        lblPullCheck.value = "Error: " + req.status
}

bicepsDropdown.onclick=function(s){
  if (typeof(s) == "object"){  // means the control was clicked 
    return                     // but no selection made yet so do nothing
  } else {                     // a selection made
    bicepsDropdown.value = s     // make dropdown show choice the user made
  }
}

bicepsSubmit.onclick=function(){
  let bicepsActivity = bicepsDropdown.value
  let bicepsSet = bicepsSets.value
  let bicepsRep = bicepsReps.value
  let bicepsWeights = bicepsWeight.value
  
  console.log(`user id is: ${user_id}`)
  console.log(`date is: ${workout_date}`)
  console.log(`body_type is: ${exercise_group}`)
  console.log(`bicepsActivity is: ${bicepsActivity}`)
  console.log(`bicepsSet is: ${bicepsSet}`)
  console.log(`bicepsRep is: ${bicepsRep}`)
  console.log(`bicepsWeights is: ${bicepsWeights}`)
  
  query = "INSERT into exercise(workout_id, name, reps, sets, weight, body_part) VALUES(" + workoutID + ", '" + bicepsActivity + "', " + bicepsRep + "," + bicepsSet + "," + bicepsWeights + ", 'Upper Body: Pull')"


req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + database + "&query=" + query)

if (req.status == 200) { //transit worked.
        if (req.responseText == 500)    // for our server - this means the insert succeeded
            lblPullCheck1.value = "Success!"
        else
            lblPullCheck1.value = "There was a problem!"
    } else // transit error
        lblPullCheck1.value = "Error: " + req.status
}