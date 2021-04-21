let netID = "sme89450"
let pw = "Chocolate-0-"
let database = "375groupa2"
let query = ""
let query2 = ""
let user_id = ''
let req = ""
let req2 = ""


submit.onclick = function() {
  let name = userInpt.value
  let pass = passInpt.value

  query = `SELECT password FROM user where username = "${name}";`

  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=375groupa2&query=" + query)
  
  if (req.status == 200) { //transit trip worked.        
    results = JSON.parse(req.responseText)
    if (results == pass) {
      ChangeForm(Welcome)
    }
    else {
    Label3.value = "invalid password"  
    }
  }
  
  
  
  query2 = `SELECT user_id FROM user WHERE username = "${name}" AND password = "${pass}"`

  req2 = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=375groupa2&query=" + query2)
  
  if (req2.status == 200) { //transit trip worked.        
    results2 = parseInt(JSON.parse(req2.responseText))
    console.log(results2)
    user_id = results2
    console.log(`Your user_id is ${user_id}`)
    }
    else {
    Label3.value = "couldn't store user ID"  
    }
  }



Button2.onclick = function() {
  ChangeForm(SignUp)
}