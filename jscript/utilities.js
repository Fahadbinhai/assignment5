
// inner text er number ke string theke number korar ninja function

function getNumberFormString (id){

    const innerText = document.getElementById(id).innerText;
    const convertedInnerText = parseInt(innerText);

        return convertedInnerText;

}