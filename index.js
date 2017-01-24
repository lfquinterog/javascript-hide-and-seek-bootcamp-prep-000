function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  //# is used for IDs in selectors, . is used for classNames
  return document.querySelector('#nested .target');
  //return document.getElementById('nested').querySelector('.target');
  //This code also works
}

function increaseRankBy(n){
  const lista = document.querySelectorAll('.ranked-list li');
  for (var i = 0; i < lista.length; i++) {
    var temp = parseInt(lista[i].innerHTML) + n;
    lista[i].innerHTML = temp;
  }
}

function deepestChild(){
	var tree = document.querySelector('#grand-node');
	var tag;
	var lastValid;
	while(tree !== null){
		if(tree !== null){
			lastValid = tree;
			tag = tree.tagName.toLowerCase(); //there is no more tagName, it returns null
		}
		tree = tree.querySelector(tag);
	}
	//alert(lastValid.innerHTML);
	return lastValid;
}
