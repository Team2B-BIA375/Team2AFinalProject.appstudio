Push.onshow=function(){

  query = "SELECT workout_id FROM workout WHERE user_id = " + user_id + " AND `date` = '" + workout_date + "' AND body_part = '" + exercise_group + "'"

  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + database + "&query=" + query)

   if (req.status == 200) { //transit trip worked. 
        results = JSON.parse(req.responseText)
        workoutID = results
        console.log(`Your workout ID is ${workoutID
        }`)
    } else   // the transit didn't work - bad wifi? server turned off?
        lblLegsCheck.value = "Error code: " + req.status
}

pushContinue.onclick = function() {
  ChangeForm(Final)
}
 
chestDropdown.onclick=function(s){
  if (typeof(s) == "object"){  // means the control was clicked 
    return                     // but no selection made yet so do nothing
  } else {                     // a selection made
    chestDropdown.value = s     // make dropdown show choice the user made
  }
}

chestSubmit.onclick=function(){
  let chestActivity = chestDropdown.value
  let chestSet = chestSets.value
  let chestRep = chestReps.value
  let chestWeights = chestWeight.value
  
  console.log(`user id is: ${user_id}`)
  console.log(`date is: ${workout_date}`)
  console.log(`body_type is: ${exercise_group}`)
  console.log(`chestActivity is: ${chestActivity}`)
  console.log(`chestSet is: ${chestSet}`)
  console.log(`chestRep is: ${chestRep}`)
  console.log(`chestWeights is: ${chestWeights}`)
  
  query = "INSERT into exercise(workout_id, name, reps, sets, weight, body_part) VALUES(" + workoutID + ", '" + chestActivity + "', " + chestRep + "," + chestSet + "," + chestWeights + ", 'Upper Body: Push')"


req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + database + "&query=" + query)

if (req.status == 200) { //transit worked.
        if (req.responseText == 500)    // for our server - this means the insert succeeded
            lblPushCheck.value = "Success!"
        else
            lblPushCheck.value = "There was a problem!"
    } else // transit error
        lblPushCheck.value = "Error: " + req.status
}

shouldersDropdown.onclick=function(s){
  if (typeof(s) == "object"){  // means the control was clicked 
    return                     // but no selection made yet so do nothing
  } else {                     // a selection made
    shouldersDropdown.value = s     // make dropdown show choice the user made
  }
}

shouldersSubmit.onclick=function(){
  let shouldersActivity = shouldersDropdown.value
  let shouldersSet = shouldersSets.value
  let shouldersRep = shouldersReps.value
  let shouldersWeights = shouldersWeight.value
  
  console.log(`user id is: ${user_id}`)
  console.log(`date is: ${workout_date}`)
  console.log(`body_type is: ${exercise_group}`)
  console.log(`shouldersActivity is: ${shouldersActivity}`)
  console.log(`shouldersSet is: ${shouldersSet}`)
  console.log(`shouldersRep is: ${shouldersRep}`)
  console.log(`shouldersWeights is: ${shouldersWeights}`)
  
  query = "INSERT into exercise(workout_id, name, reps, sets, weight, body_part) VALUES(" + workoutID + ", '" + shouldersActivity + "', " + shouldersRep + "," + shouldersSet + "," + shouldersWeights + ", 'Upper Body: Push')"


req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + database + "&query=" + query)

if (req.status == 200) { //transit worked.
        if (req.responseText == 500)    // for our server - this means the insert succeeded
            lblPushCheck1.value = "Success!"
        else
            lblPushCheck1.value = "There was a problem!"
    } else // transit error
        lblPushCheck1.value = "Error: " + req.status
}

tricepsDropdown.onclick=function(s){
  if (typeof(s) == "object"){  // means the control was clicked 
    return                     // but no selection made yet so do nothing
  } else {                     // a selection made
    tricepsDropdown.value = s     // make dropdown show choice the user made
  }
}

tricepsSubmit.onclick=function(){
  let tricepsActivity = tricepsDropdown.value
  let tricepsSet = tricepsSets.value
  let tricepsRep = tricepsReps.value
  let tricepsWeights = tricepsWeight.value
  
  console.log(`user id is: ${user_id}`)
  console.log(`date is: ${workout_date}`)
  console.log(`body_type is: ${exercise_group}`)
  console.log(`tricepsActivity is: ${tricepsActivity}`)
  console.log(`tricepsSet is: ${tricepsSet}`)
  console.log(`tricepsRep is: ${tricepsRep}`)
  console.log(`tricepsWeights is: ${tricepsWeights}`)
  
  query = "INSERT into exercise(workout_id, name, reps, sets, weight, body_part) VALUES(" + workoutID + ", '" + tricepsActivity + "', " + tricepsRep + "," + tricepsSet + "," + tricepsWeights + ", 'Upper Body: Push')"


req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + database + "&query=" + query)

if (req.status == 200) { //transit worked.
        if (req.responseText == 500)    // for our server - this means the insert succeeded
            lblPushCheck2.value = "Success!"
        else
            lblPushCheck2.value = "There was a problem!"
    } else // transit error
        lblPushCheck2.value = "Error: " + req.status
}