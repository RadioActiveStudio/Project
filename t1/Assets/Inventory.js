#pragma strict
var OriginalItem : GameObject;
var Invent : GameObject;
var itemcount : int;
var heartTex : Texture2D;
var Rowcount : int;
function Start () {

Invent = GameObject.Find("Inventory");

}

function Update () {

}

function AddItem (Item : String){
itemcount += 1;
if (itemcount ==4){
itemcount = 0;
Rowcount += 1;

}
if (Item=="Health"){

var item : GameObject;

item = Instantiate (OriginalItem, Vector3(0, 0, 0), Quaternion.identity);

item.transform.parent = Invent.transform;
item.SetActive(true);
item.guiTexture.texture = heartTex;
item.guiTexture.pixelInset.x = 256.6 +(38.3*itemcount);
item.guiTexture.pixelInset.y = 123.5 -(39.9*Rowcount);
item.guiTexture.pixelInset.width = 38.3;
item.guiTexture.pixelInset.height = 39.9;

}
}