btnsubmit.onclick = function() {
    let currentDate = inptCurrentdate.value
    query = "SELECT * FROM diet WHERE date = '" + currentDate + "'"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=375groupa2&query=" + query)
    console.log(`req.responseText is ${req.responseText}`)
    if (req.status == 200) {  
        results = JSON.parse(req.responseText)
        if (results.length == 0)
            lblMessage2.textContent = "There is no entries on the date chosen."
        else {
            let message = ""
            for (i = 0; i < results.length; i++)
                message = message + 'Meal Type: ' + results[i][1]+ '  \n '+ 'Food Type: ' + results[i][8]+ '  \n ' + 'User: ' + results[i][2] + ' \n '+ 'Calories: ' + results[i][5] +' \n '+ 'Proteins: ' + results[i][4] +' \n '+ 'Fats: ' + results[i][6] +' \n '+ 'Carbs: ' + results[i][7] + ' '  + "\n"
            txtaResults.value = message
        }
    } else
        lblMessage2.textContent = "Error code: " + req.status
}

btnbackHomepage.onclick = function() {
    ChangeForm(Diet)
}