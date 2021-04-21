
absContinue.onclick = function() {
  ChangeForm(Duration)
}


absSubmit.onclick=function(){
  let absDropdown = absDropdown.value
  let absSets = absSets.value
  let absReps = absReps.value
  // ATTENTION NEED TO FIX: let query = "INSERT into exercise(name, reps, sets) SELECT exercise_group_id, 'curls', 10, 3 FROM exercise_group EG INNER JOIN workout w ON EG.workout_id = w.workout_idWHERE user_id = 1 AND w.`date`= '04-13-2021';
}

//req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + databaseSchema + "&query=" + query)
