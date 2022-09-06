
let btn = document.getElementById("btn");
let	fname = document.getElementById("fname");
let list = document.getElementById("list");


let mugesh = function(){
	let p = document.createElement("p")
	if (fname.value){
		p.innerText=fname.value;
		list.appendChild(p);
		fname.value="";
}}

	
	btn.addEventListener("click", function(){
		
			mugesh();
		
});




/*


let data = function firstname(){
	for(let key in box){
		console.log(box[key]);
		let li = document.createElement("li");
		li.innerText = box[key];
		list.appendChild(li);
	}
}
*/



	

