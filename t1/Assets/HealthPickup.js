#pragma strict
var healthvalue : int;
var icon : Texture;
var Gui = GameObject.Find("GUi");

function OnTriggerEnter(object: Collider){


Debug.Log("health pickup!!!!");

	if (object.gameObject.FindGameObjectWithTag("Player")){
	Destroy(this.gameObject);
	
	Gui.SendMessage("AddItem","Health");
	}

}

