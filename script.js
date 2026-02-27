
// Outfit Data

const outfits = {

College:{
"Under 1000":["Kurti + Leggings","T-shirt + Jeans","Cotton Dress"],
"1000 - 3000":["Kurti Set","Palazzo Set","Denim Look"],
"3000 - 7000":["Designer Kurti","Co-ord Set","Branded Dress"],
"7000+":["Premium Indo-Western","Luxury Dress"]
},

Office:{
"Under 1000":["Formal Kurti","Cotton Saree","formal shirt with straight fit pants"],
"1000 - 3000":["Office Kurti Set","Crepe Saree","formal bodycon"],
"3000 - 7000":["Silk Kurti","Designer Saree","Blazer and pants"],
"7000+":["Premium Saree","Tailored Suit","single breasted blazer","Satin halter vest and maxi skirt"]
},

Festival:{
"Under 1000":["Printed Kurta","Ethnic Dress"],
"1000 - 3000":["Anarkali","Festive Saree","Sharara","Gharara"],
"3000 - 7000":["Lehenga","Silk Saree","Pakisthani suit","Maxi dress"],
"7000+":["Abaya","Gown"]
},

Wedding:{
"Under 1000":["Simple Saree","simple churidar"],
"1000 - 3000":["Party Saree","Satin churidar","Abaya"],
"3000 - 7000":["Designer Lehenga","Kanchipuram saree","Bhanaras silk half saree"],
"7000+":["Luxury Bridal Wear","Choli","bridal lehanga"]
},

Party:{
"Under 1000":["Top + Skirt","Short Dress","short bodycon dress","croptop and shorts"],
"1000 - 3000":["Bodycon","Jumpsuit","cordset","silky gown"],
"3000 - 7000":["Designer Dress","crochet dress"],
"7000+":["Luxury Gown","silky bodycon"]
},

DailyWear:{
"Under 1000":["Cotton Kurti","Leggings Set","Crop top and jeans","simple short frock","jean and baggy tshirts","shorts and tee"],
"1000 - 3000":["Kurti Set","Casual Dress","bodycon","maxi dress"],
"3000 - 7000":["Premium Cotton Wear","embroiderd dress","chuidar set"],
"7000+":["Luxury Casual Wear","branded jumpsuit","churidar set"]
}

};


// Colors

const colors = {
Fair:["Peach","Pink","Sky Blue","emarald green","sapphire blue","charcoal grey","golden yellow","deep black"],
Medium:["Royal Blue","Emerald","Coral","olive green","deep red","wine red","black"],
Olive:["Mustard","Wine","Olive Green"],
Dusky:["Teal","Gold","Magenta","dark red","brown","offblack"],
Deep:["White","Red","Purple","dark black","navy blue","maroon"]
};


// Shape Tips

const shapeTips = {

Hourglass:"Highlight waist with fitted kurtis","croptops with low waist denim","long bodycon"
Pear:"Wear bright tops and A-line skirts","highwaist skirt and midloose skirt "
Apple:"Choose flowy dresses","v neck and scoop necklines",""
Rectangle:"Use belts and layers",
InvertedTriangle:"Balance shoulders with wide bottoms"

};


// Stores

const stores = {

"Under 1000":["Reliance Trends","Max Fashion"],
"1000 - 3000":["Westside","Biba","Pantaloons"],
"3000 - 7000":["W","Fabindia","Soch"],
"7000+":["Manyavar Mohey","Designer Boutique"]

};



function generateStyle(){

let name = document.getElementById("name").value;
let size = document.getElementById("size").value;
let shape = document.getElementById("shape").value;
let tone = document.getElementById("tone").value;
let vibe = document.getElementById("vibe").value;
let occasion = document.getElementById("occasion").value;
let budget = document.getElementById("budget").value;


if(!name || !size || !shape || !tone || !vibe || !occasion || !budget){
    alert("Please fill all details!");
    return;
}


// Random Select

let outfitList = outfits[occasion][budget];
let outfit = outfitList[Math.floor(Math.random()*outfitList.length)];

let color = colors[tone][Math.floor(Math.random()*3)];

let tip = shapeTips[shape];

let storeList = stores[budget];


// Result

document.getElementById("result").innerHTML = `

<div class="card">

<h4>Hello ${name} 💖</h4>

<p><b>Outfit:</b> ${outfit}</p>
<p><b>Best Color:</b> ${color}</p>
<p><b>Size:</b> ${size}</p>
<p><b>Tip:</b> ${tip}</p>
<p><b>Vibe:</b> ${vibe}</p>
<p class="price">Budget: ₹${budget}</p>

</div>

`;


// Stores

let html="";

storeList.forEach(shop=>{

html += `

<div class="card">
🛍️ ${shop}<br>
📍 Available in India
</div>

`;

});

document.getElementById("stores").innerHTML = html;

}