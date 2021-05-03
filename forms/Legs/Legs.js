let workoutID = ""

Legs.onshow=function(){

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

legsContinue.onclick = function() {
  ChangeForm(Final)
}
 
quadsDropdown.onclick=function(s){
  if (typeof(s) == "object"){  // means the control was clicked 
    return                     // but no selection made yet so do nothing
  } else {                     // a selection made
    quadsDropdown.value = s     // make dropdown show choice the user made
  }
}

quadsSubmit.onclick=function(){
  let quadsActivity = quadsDropdown.value
  let quadsSet = quadsSets.value
  let quadsRep = quadsReps.value
  let quadsWeights = quadsWeight.value
  
  console.log(`user id is: ${user_id}`)
  console.log(`date is: ${workout_date}`)
  console.log(`body_type is: ${exercise_group}`)
  console.log(`quadsActivity is: ${quadsActivity}`)
  console.log(`quadsSet is: ${quadsSet}`)
  console.log(`quadsRep is: ${quadsRep}`)
  console.log(`quadsWeights is: ${quadsWeights}`)
  
  query = "INSERT into exercise(workout_id, name, reps, sets, weight, body_part) VALUES(" + workoutID + ", '" + quadsActivity + "', " + quadsRep + "," + quadsSet + "," + quadsWeights + ", 'Legs')"


req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + database + "&query=" + query)

if (req.status == 200) { //transit worked.
        if (req.responseText == 500)    // for our server - this means the insert succeeded
            lblLegsCheck.value = "Success!"
        else
            lblLegsCheck.value = "There was a problem!"
    } else // transit error
        lblLegsCheck.value = "Error: " + req.status
}

hamstringsDropdown.onclick=function(s){
  if (typeof(s) == "object"){  // means the control was clicked 
    return                     // but no selection made yet so do nothing
  } else {                     // a selection made
    hamstringsDropdown.value = s     // make dropdown show choice the user made
  }
}

hamstringsSubmit.onclick=function(){
  let hamstringsActivity = hamstringsDropdown.value
  let hamstringsSet = hamstringsSets.value
  let hamstringsRep = hamstringsReps.value
  let hamstringsWeights = hamstringsWeight.value
  
  console.log(`user id is: ${user_id}`)
  console.log(`date is: ${workout_date}`)
  console.log(`body_type is: ${exercise_group}`)
  console.log(`hamstringsActivity is: ${hamstringsActivity}`)
  console.log(`hamstringsSet is: ${hamstringsSet}`)
  console.log(`hamstringsRep is: ${hamstringsRep}`)
  console.log(`hamstringsWeights is: ${hamstringsWeights}`)
  
  query = "INSERT into exercise(workout_id, name, reps, sets, weight, body_part) VALUES(" + workoutID + ", '" + hamstringsActivity + "', " + hamstringsRep + "," + hamstringsSet + "," + hamstringsWeights + ", 'Legs')"


req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + database + "&query=" + query)

if (req.status == 200) { //transit worked.
        if (req.responseText == 500)    // for our server - this means the insert succeeded
            lblLegsCheck1.value = "Success!"
        else
            lblLegsCheck1.value = "There was a problem!"
    } else // transit error
        lblLegsCheck1.value = "Error: " + req.status
}

calvesDropdown.onclick=function(s){
  if (typeof(s) == "object"){  // means the control was clicked 
    return                     // but no selection made yet so do nothing
  } else {                     // a selection made
    calvesDropdown.value = s     // make dropdown show choice the user made
  }
}

calvesSubmit.onclick=function(){
  let calvesActivity = calvesDropdown.value
  let calvesSet = calvesSets.value
  let calvesRep = calvesReps.value
  let calvesWeights = calvesWeight.value
  
  console.log(`user id is: ${user_id}`)
  console.log(`date is: ${workout_date}`)
  console.log(`body_type is: ${exercise_group}`)
  console.log(`calvesActivity is: ${calvesActivity}`)
  console.log(`calvesSet is: ${calvesSet}`)
  console.log(`calvesRep is: ${calvesRep}`)
  console.log(`calvesWeights is: ${calvesWeights}`)
  
  query = "INSERT into exercise(workout_id, name, reps, sets, weight, body_part) VALUES(" + workoutID + ", '" + calvesActivity + "', " + calvesRep + "," + calvesSet + "," + calvesWeights + ", 'Legs')"


req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + database + "&query=" + query)

if (req.status == 200) { //transit worked.
        if (req.responseText == 500)    // for our server - this means the insert succeeded
            lblLegsCheck2.value = "Success!"
        else
            lblLegsCheck2.value = "There was a problem!"
    } else // transit error
        lblLegsCheck2.value = "Error: " + req.status
}