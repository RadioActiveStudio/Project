#pragma strict
var AboutBox : GameObject;

function Start () {


}


function OnMouseOver(){

AboutBox.guiText.text = "this is about the item";


}
function OnMouseExit(){

AboutBox.guiText.text = "";


}
function OnMouseDown(){

Destroy(gameObject);
GameObject.Find("HealthBar").SendMessage ("ApplyHealth", 25);
AboutBox.guiText.text ="";
}

function Update () {

}