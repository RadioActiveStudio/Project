#pragma strict

function Start () {

}

function Update () {

}

function OnTriggerStay(Col : Collider){
if (Col.gameObject.name =="player" ){
GameObject.Find("Enemy").SendMessage ("Movement");
}else{

}
}