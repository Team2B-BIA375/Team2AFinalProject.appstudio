/*
let netID = 'sme89450'
let pw = 'Chocolate-0-'
let database = '375groupa2'
*/

hmbGlobal.onclick=function(s){

  if (typeof(s) == "object") 
    return
  else {
       switch(s) {
          case "Diet":
            ChangeForm(Diet)
            break
          case "Fitness":
            ChangeForm(Welcome_Fitness)
            break
          case "Sleep":
            ChangeForm(SleepWelcomePage)
            break
          case "Log Out":
            ChangeForm(LogIn)
            break
       }  //switch
   } //else
}




btnMySleepSubmit.onclick=function(){
  let InsertSleepDate = inptMySleepDate.value
  let InsertSleepDuration = parseInt(inptMySleepDuration.value)
  let InsertSleepQuality = drpMySleepQuality.value
  
  console.log(`You input these values: date: ${InsertSleepDate}, Duration: ${InsertSleepDuration}, Quality: ${InsertSleepQuality}`)

  query = "INSERT INTO sleep(user_id,`date`, duration, quality) VALUES (" + user_id + ", '" +InsertSleepDate + "', "+ InsertSleepDuration + ", '"+ InsertSleepQuality+ "')"

  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + database + "&query=" + query)

  if (req.status == 200) { //transit worked.
        if (req.responseText == 500)    // for our server - this means the insert succeeded
            lblMySleepMessage.value = "You have successfully logged your sleep!"
        else
            lblMySleepMessage.value = "There was a problem with logging your sleep to the database. Please try again or use the support function to contact us!"
    } else // transit error
        lblMySleepMessage.value = "Error: " + req.status

}

drpMySleepQuality.onclick=function(s){
  if (typeof(s) == "object"){  // means the control was clicked 
    return                     // but no selection made yet so do nothing
  } else {                     // a selection made
    drpMySleepQuality.value = s     // make dropdown show choice the user made
  }
}

btnNextPastSleep.onclick=function(){
  ChangeForm(PastSleep)
}

pgnMySleep.onclick=function(s){
  if (typeof(s) == "object"){  // means the control was clicked 
    return                     // but no selection made yet so do nothing
  } else {                     // a selection made
    pgnMySleep.value = s 
    console.log(`You chose: ${s}`)// make dropdown show choice the user made
  }
  
  
  if (typeof(s) == "object") { // do nothing - they just clicked on the control
       return
    } else {
       switch(s) {
            case "Log Sleep":
                ChangeForm(EnterSleep)
                break
            case "Sleep Log":
                ChangeForm(PastSleep)
                break
            case "Log Dream":
                ChangeForm(Dream)
                break
            case "Dream Log":
                ChangeForm(PastDreams)
                break
            case "Sleep Music":
                ChangeForm(SleepMusic)
                break
       }  //switch
   } //else
}

