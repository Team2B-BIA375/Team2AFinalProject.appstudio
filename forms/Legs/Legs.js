//let quadsDropdown = ''
//quadsSets = ''
//quadsReps = ''
//quadsWeight = ''

let listLegExercises = ['Leg Extension', 'Lunges', 'Split', 'Squats']

Legs.onshow=function(){
  quadsDropdown.clear()
  for (i = 0; i < listLegExercises.length; i++) 
        quadsDropdown.addItem(listLegExercises[i])
}


legsContinue.onclick = function() {
  ChangeForm(Duration)
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
  
  query = "INSERT into exercise(workout_id, name, reps, sets, weight, body_part) VALUES((SELECT workout.workout_id FROM workout WHERE workout.user_id = " + user_id + " AND `date` = '" + workout_date + "' AND body_part = '" + exercise_group + "'),'" + quadsActivity + "', " + quadsRep + "," + quadsSet + "," + quadsWeights + ", 'Legs')"


req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + database + "&query=" + query)

if (req.status == 200) { //transit worked.
        if (req.responseText == 500)    // for our server - this means the insert succeeded
            lblLegsCheck.value = "Success!"
        else
            lblLegsCheck.value = "There was a problem!"
    } else // transit error
        lblLegsCheck.value = "Error: " + req.status
}
/*
hamstringsSubmit.onclick=function(){
  let hamstringsDropdown = hamstringsDropdown.value
  let hamstringsSets = hamstringsSets.value
  let hamstringsReps = hamstringsReps.value
  let hamstringsWeight = hamstringsWeight.value
  // ATTENTION NEED TO FIX: let query = "INSERT into exercise(name, reps, sets) SELECT exercise_group_id, 'curls', 10, 3 FROM exercise_group EG INNER JOIN workout w ON EG.workout_id = w.workout_idWHERE user_id = 1 AND w.`date`= '04-13-2021';
}

req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + databaseSchema + "&query=" + query)

if (req.status == 200) { //transit worked.
        if (req.responseText == 500)    // for our server - this means the insert succeeded
            lblMyDateMessage.value = "You have successfully logged your date!"
        else
            lblMyDateMessage.value = "There was a problem with logging your date to the database. Please try again or use the support function to contact us!"
    } else // transit error
        lblMyDateMessage.value = "Error: " + req.status

calvesDropdown.onclick=function(){
  let calvesDropdown = calvesDropdown.value
  let calvesSets = calvesSets.value
  let calvesReps = calvesReps.value
  let calvesWeight = calvesWeight.value
  // ATTENTION NEED TO FIX: let query = "INSERT into exercise(name, reps, sets) SELECT exercise_group_id, 'curls', 10, 3 FROM exercise_group EG INNER JOIN workout w ON EG.workout_id = w.workout_idWHERE user_id = 1 AND w.`date`= '04-13-2021';
}

req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + databaseSchema + "&query=" + query)

if (req.status == 200) { //transit worked.
        if (req.responseText == 500)    // for our server - this means the insert succeeded
            lblMyDateMessage.value = "You have successfully logged your date!"
        else
            lblMyDateMessage.value = "There was a problem with logging your date to the database. Please try again or use the support function to contact us!"
    } else // transit error
        lblMyDateMessage.value = "Error: " + req.status



hamstringsDropdown.onclick=function(s){
  if (typeof(s) == 'object') {
    return
  } else {
   hamstringsDropdown.value = s
    }
}

calvesDropdown.onclick=function(s){
  if (typeof(s) == 'object') {
    return
  } else {
   calvesDropdown.value = s
    }
}
*/
