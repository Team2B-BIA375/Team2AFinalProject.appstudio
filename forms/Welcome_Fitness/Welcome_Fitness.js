/*let user_id = 1
let netID = 'trp36501'
let pw = 'Forwarding12*'
let database = '375groupa2' */
let workout_date = ' '

let exercise_group = ''
let s = ''
BtnNext.onclick = function(s) {  
  let workout_date = welcomeDate.value
    exercise_group = drpExerciseGroup.value
 query = "INSERT INTO workout (user_id, `date`, body_part)   VALUES ('" + user_id + "', '" + workout_date + "', '" + exercise_group + "')"

req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + database + "&query=" + query)

  if (req.status == 200) { //transit worked.
        if (req.responseText == 500)    // for our server - this means the insert succeeded
            lblMyDateMessage.value = "You have successfully logged your date!"
        else
            lblMyDateMessage.value = "There was a problem with logging your date to the database. Please try again or use the support function to contact us!"
    } else // transit error
        lblMyDateMessage.value = "Error: " + req.status
  
if (drpExerciseGroup.value == "Legs") {
    ChangeForm(Legs)
  } else if (drpExerciseGroup.value == "Upper Body: Push") {
    ChangeForm(Push)
  } else if (drpExerciseGroup.value == "Upper Body: Pull") {
    ChangeForm(Pull)
  } else if (drpExerciseGroup.value == "Abs") {
    ChangeForm(Abs)
  } else  {
    ChangeForm(Cardio)
    }
     
}

drpExerciseGroup.onclick=function(s){
  if (typeof(s) == 'object') {
    return
  } else {
   drpExerciseGroup.value = s
    }
}

