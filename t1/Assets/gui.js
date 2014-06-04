var Health : float;
var maxhealth :float;
var bar : GameObject;
var bartexture ; 
var maxbarlength;
;
function Start () {

 

bartexture = bar.gameObject.guiTexture;
maxbarlength = 173.8;

}



function Update () {


if (Health <= 0){
GameObject.Find("player").transform.position = GameObject.Find("spawn").transform.position;
Health = maxhealth;
}

bar.guiTexture.pixelInset.width = (Health / maxhealth) * maxbarlength;



}

function ApplyHealth ( addition : float) {


Health += addition;
		print (addition);
		
	
	
	}

function ApplyDamage (damage : float) {


Health -= damage;
		print (damage);
	
	
	
	}