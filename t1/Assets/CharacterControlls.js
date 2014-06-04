#pragma strict

var MoveUp : KeyCode;
var MoveDown : KeyCode;
var MoveLeft : KeyCode;
var MoveRight : KeyCode;
var InventoryToggle : KeyCode;

var inventory : GameObject;
var Speed : float = 120;
var playeranim : Animator;
function Start() {

 inventory = GameObject.Find("Inventory");
playeranim = GetComponentInChildren(Animator);

}


function Update () {


if (Input.GetKey(InventoryToggle)){

inventory.SetActive(true);
}
else{inventory.SetActive(false);


}


if (Input.GetKey(MoveUp)){


playeranim.SetBool("up",true);
playeranim.SetBool("down",false);
playeranim.SetBool("left",false);
playeranim.SetBool("right",false);
rigidbody.velocity =Vector3(0,0,Speed * Time.deltaTime);



}
else if (Input.GetKey(MoveDown)){
playeranim.SetBool("down",true);
playeranim.SetBool("up",false);
playeranim.SetBool("left",false);
playeranim.SetBool("right",false);
rigidbody.velocity =Vector3(0,0, -Speed * Time.deltaTime);

}
else if (Input.GetKey(MoveLeft)){
playeranim.SetBool("left",true);
playeranim.SetBool("down",false);
playeranim.SetBool("up",false);
playeranim.SetBool("right",false);
rigidbody.velocity =Vector3(-Speed * Time.deltaTime,0,0);

}
else if (Input.GetKey(MoveRight)){
playeranim.SetBool("right",true);
playeranim.SetBool("down",false);
playeranim.SetBool("left",false);
playeranim.SetBool("up",false);
rigidbody.velocity =Vector3(Speed * Time.deltaTime,0,0);
}

else{
rigidbody.velocity =Vector3(0,0,0);
playeranim.SetBool("up",false);
playeranim.SetBool("down",false);
playeranim.SetBool("left",false);
playeranim.SetBool("right",false);
}

}