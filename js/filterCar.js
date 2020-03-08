overwriteCount();
function overwriteCount(){
    document.querySelector(".spanBasketProd").innerHTML = cardStore.getProduct().length;
}
let main_menu_ul = document.getElementById('main_menu_ul');
let allIdCatalog = main_menu_ul.querySelectorAll('li.menuLi');//4

document.getElementById("filterAllBtn").addEventListener("click", showActiveCatalog);
document.getElementById("diversity_car").addEventListener("click", showActiveCatalog);
document.getElementById("jeep").addEventListener("click", showActiveCatalog);
document.getElementById("motocircles").addEventListener("click", showActiveCatalog);


let ontFilter = document.getElementById('marka_filter')
let allPfilter = ontFilter.querySelectorAll('p');

allPfilter.forEach(function(element){
    element.addEventListener("click", showActiveCatalog);
});

function showActiveCatalog(){
    document.getElementById("container_catalogAll").style.display = "none";
    document.getElementById("container_catalogAll").style.display = "block";

    let allCatalog = new AllCatalog(".container_catalogAll", ".spanBasketProd", catalogAllCar, this.id, '.marka_filter', this.id);

    // document.getElementById("marka_filter").style.display = "none";
    // document.getElementById("marka_filter").style.display = "block";
console.log(this.id)
}
