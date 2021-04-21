
legsContinue.onclick = function() {
  ChangeForm(Duration)
}
 

quadsSubmit.onclick=function(){
  let quadsDropdown = quadsDropdown.selection
  let quadsSets = quadsSets.value
  let quadsReps = quadsReps.value
  let quadsWeight = quadsWeight.value
  
  let query = "INSERT into exercise(workout_id, name, reps, sets, weight, body_part) VALUES((SELECT workout_id FROM workout WHERE user_id = " + user_id + " AND `date` = ' " + workout_date + "' AND body_part = '" + exercise_group + "'),'" + quadsDropdown + "', " + quadsReps + ", '" + quadsSets + "','" + quadsWeight + "', 'Legs'"
}

req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + database + "&query=" + query)

if (req.status == 200) { //transit worked.
        if (req.responseText == 500)    // for our server - this means the insert succeeded
            lblLegsCheck.value = "You have successfully logged your date!"
        else
            lblLegsCheck.value = "There was a problem with logging your date to the database. Please try again or use the support function to contact us!"
    } else // transit error
        lblLegsCheck.value = "Error: " + req.status
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
*/


quadsDropdown.onclick=function(s){
  if (typeof(s) == 'object') {
    return
  } else {
   quadsDropdown.value = s
    }
}

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
