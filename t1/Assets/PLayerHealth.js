#pragma strict


function OnTriggerEnter(){

GameObject.Find("HealthBar").SendMessage ("ApplyDamage", 15.0);

}



function Start () {

 




}



function Update () {



}