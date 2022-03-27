function thanksCaller() {
    document.getElementById("defaultContent").style.display="none";
    document.getElementById("additionalContent").style.cssText="height: auto; opacity: 1;";
}

function pressTracker(grade)
{
    switch (grade) {

        case 1:
            document.getElementById("gradeOverview").innerHTML = "You selected 1 out of 5"
            break;
        case 2:
            document.getElementById("gradeOverview").innerHTML = "You selected 2 out of 5"
            break;
        case 3:
            document.getElementById("gradeOverview").innerHTML = "You selected 3 out of 5"
            break;
        case 4:
            document.getElementById("gradeOverview").innerHTML = "You selected 4 out of 5"
            break;
        case 5:
            document.getElementById("gradeOverview").innerHTML = "You selected 5 out of 5"
            break;
        default:
            document.getElementById("gradeOverview").innerHTML = "You didn't select the grade"
            break;

    }
}