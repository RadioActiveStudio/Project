#pragma strict

var player : Transform;
var navcomponent : NavMeshAgent = this.transform.GetComponent(NavMeshAgent);
var Damage : float;
var cooldown : int;
var Anim : Animator;
var distanceX:float;
var distanceY:float;
var HP:float;


var hit = false;
var cool= 0;

function Start () {

Damage = 5.0;
}

function Movement(){

distanceX = navcomponent.destination.x - this.transform.position.x;
distanceY = navcomponent.destination.y - this.transform.position.y;
if(player){

navcomponent.SetDestination(player.position);

if (this.transform.position.x < player.position.x){Anim.SetInteger("move",2);}
else if (this.transform.position.x > player.position.x){Anim.SetInteger("move",4);}


if (this.transform.position.z < player.position.z){Anim.SetInteger("move",1);}
else if (this.transform.position.z < player.position.z){Anim.SetInteger("move",3);}

}
}

function Update () {

if (hit){

cool += 1;

if (cool >= cooldown){
hit = false;
cool = 0;
}


}
}
function OnCollisionStay(col : Collision){
	if (col.gameObject.name =="player"){
	
	if (!hit){
	Debug.Log("hit");
	GameObject.Find("HealthBar").SendMessage ("ApplyDamage", Damage);
	
	hit = true;

	}







}


}