//Javascript file for Hangman game in Funquest

let guessButton = document.querySelector('#guess').addEventListener('click', letterGuess);


let hangmanRefresh = document.querySelector('#hangmanRefresh').addEventListener('click', hangmanEvent);


let randomAnimalWord = [];
let randomVegetableWord = [];
let randomMineralWord = [];
let hiddenWord = [];
let displayWord = [];
let attempts = 0;


let hangmanReveal = document.querySelector('#showLetters');
let hangMessages = document.querySelector('#hangmanMessages');

let head = document.querySelector('#head');
let torso = document.querySelector('#torso-image');
let right_arm = document.querySelector('#right-arm-image');
let left_arm = document.querySelector('#left-arm-image');
let right_leg = document.querySelector('#right-leg-image');
let left_leg = document.querySelector('#left-leg-image');



const animal = ['horse','rabbit','spider','giraffe','penguin','dolphin','octopus','hamster',
'ocelot','walrus','beaver','jaguar','panther','zebra','marmot','parrot','bobcat','gazelle','warthog',
'caribou','gopher','badger','orangutan','ostrich','otter','piranha','flamingo','gorilla','elephant', 'alligator', 
'alpaca', 'antelope','armadillo', 'baboon','barracuda','bat','bison','boar','buffalo','butterfly','camel','capybara',
'cat','caterpillar','cheetah','chicken','chimpanzee','chinchilla','cobra','cockroach','cougar','cow','coyote','crab',
'crocodile', 'crow','deer','dog','donkey','dragonfly','duck','eagle','eel','elk','emu','falcon','ferret','finch','fish',
'fox','frog','gazelle','gecko','goat','goose','grasshopper','hare','hawk','hedgehog','heron','hippopotamus',
'hummingbird','hyena','ibis','iguana','jackal','jellyfish','kangaroo','kingfisher','koala','kudu','lemur','leopard',
'lion','llama','lobster','lynx','macaw','manatee','mandrill','meerkat','mole','monkey','moose','mouse','narwhal',
'newt','opossum','owl','ox','panda','peacock','pelican','pig','platypus','porcupine','pufferfish','quail','raccoon',
'ram','rat','reindeer','rhinoceros','rooster','salamander','scorpion','seahorse','seal','shark','sheep','skunk','sloth',
'snake','sparrow','squid','squirrel','starfish','stingray','swan','tiger','tortoise','toucan','tuna','turkey','turtle',
'vulture','warthog','weasel','wallaby','whale','wolf','woodpecker','wombat','yak'];

const vegetable = ['potato','carrot','tomato','radish','turnip','squash','beetroot','spinach','cabbage',
'lettuce','broccoli','cucumber','zucchini','courgette','eggplant','aubergine','artichoke','peppers',
'asparagus','celery','pea','garlic','onion','leek','ginger','chard','kale','fennel','okra','yam','romaine',
'radicchio','arugula','basil','cauliflower','celeriac','chayote','chickpeas','corn','edamame','endive','fiddlehead',
'horseradish','jicama','kohlrabi','komatsuna','mushroom','nopal','parsnip','pepino','pimiento','plantain','pumpkin',
'rapini','rhubarb','rocket','rutabaga','salsify','samphire','scallion','shallot','sorrel','sunchoke','sweetcorn','swede',
'taro','tomatillo','chestnut','watercress','marrow','mashua','olluco','skirret','chervil','agretti','luffa','ramps',
'dulse','oca','manioc','yardlong','gourd','saltwort','calabash'];

const mineral = ['quartz','topaz','opal','garnet',
'agate','jasper','malachite','hematite','galena','mica','olivine','peridot','zircon','pyrite','spinel','talc','barite',
'corundum','amber','feldspar','obsidian','gypsum','tourmaline','lapis','actinolite','albite','almandine','alunite',
'amazonite','amethyst','andalusite','anglesite','anhydrite','annabergite','anthophyllite', 'apatite','apophyllite',
'aquamarine', 'aragonite','arsenopyrite','asbestos','augite','aurichalcite','autunite','azurite','beryl','biotite',
'bornite','bowenite','brucite','calcite','cassiterite','celestite','cerussite','chalcanthite','chalcedony',
'chalcopyrite','chlorite','chrysoberyl','chrysocolla','cinnabar','citrine','clinozoisite', 'coal','colemanite',
'columbite','copper','crocoite','cryolite','cuprite','datolite','diamond','diopside','dolomite','dumortierite',
'epidote','erythrite', 'fluorapatite','fluorite','forsterite','galena','gaspeite','goethite','gold','graphite',
'grossular','halite','haematite','hornblende','howlite','iolite','jadeite','kaolinite','kyanite','labradorite',
'lazurite','lepidolite','magnetite','marcasite','molybdenite','moonstone','muscovite','nephrite','orthoclase',
'pyrrhotite','rhodochrosite','rhodonite','ruby','rutile','selenite','scapolite','scheelite','siderite', 'smithsonite',
'sodalite','spessartine','sphalerite','staurolite','stilbite','sulphur','tanzanite','tetrahedrite','tremolite',
'ulexite','uraninite','vanadinite','vesuvianite','wavellite','witherite','wollastonite','wulfenite','zoisite',
'zincite'];


const animals = document.querySelector('#radio-animal');
const vegetables = document.querySelector('#radio-vegetable');
const minerals = document.querySelector('#radio-mineral');

animals.addEventListener("click", animalEvent);
vegetables.addEventListener("click", vegetableEvent);
minerals.addEventListener("click", mineralEvent);



function letterInputClear(){
    document.querySelector('#letterInput') = ' ';
}

function hangmanEvent(){
    hangmanReveal.textContent = " ";
    hangMessages.textContent = "Please choose a theme";
    animals.checked = false;
    vegetables.checked = false;
    minerals.checked = false;
    head.style.visibility = "hidden";
    torso.style.visibility = "hidden";
    right_arm.style.visibility = "hidden";
    left_arm.style.visibility = "hidden";
    right_leg.style.visibility = "hidden";
    left_leg.style.visibility = "hidden";
    attempts = 0;
    
}

function animalEvent(){
    hangmanReveal.textContent = "Choose a letter";
    const randomAnimalWord = animal[Math.floor(Math.random() * animal.length)];
    hiddenWord = randomAnimalWord
    displayWord = Array(hiddenWord.length).fill("_");
    hangMessages.textContent = ' ';
};


function vegetableEvent(){
    hangmanReveal.textContent = "Choose a letter";
    const randomVegetableWord = vegetable[Math.floor(Math.random() * vegetable.length)];
    hiddenWord = randomVegetableWord
    //Display underscores for each letter of word
    displayWord = Array(hiddenWord.length).fill("_"); 
    hangMessages.textContent = ' ';   
};

function mineralEvent(){
    hangmanReveal.textContent = "Choose a letter";
    const randomMineralWord = mineral[Math.floor(Math.random() * mineral.length)];
    hiddenWord = randomMineralWord
    displayWord = Array(hiddenWord.length).fill("_");
    hangMessages.textContent = ' ';
};

function buildSkeleton(){
    //reveal skeleton with wrong answers
     if(attempts == 1){
    head.style.visibility = "visible";
     }

    else if(attempts == 2){
    torso.style.visibility = "visible";
    }
    else if(attempts == 3){
    right_arm.style.visibility = "visible";
    }
    else if(attempts == 4){
    left_arm.style.visibility = "visible";
    }
    else if(attempts == 5){
    right_leg.style.visibility = "visible";
    }
    else if(attempts == 6){
    left_leg.style.visibility = "visible";
    }
                

 };

function updateHangmanReveal(){
    hangmanReveal.textContent = displayWord.join(" ");
}

function checkGameOver(){
    if (!displayWord.includes("_")){
        hangMessages.textContent = "Congratulations, You Won!";
    } else if (attempts === 6){
        hangMessages.textContent = "Game Over! The word was: "  + hiddenWord ;
    }
}


function letterGuess(){
    let guessedLetter = document.querySelector('#letterInput').value.toLowerCase();
    if(hiddenWord.includes(guessedLetter)){
        for (let i = 0; i < hiddenWord.length; i++){
            if (hiddenWord[i] === guessedLetter){
                displayWord[i] = guessedLetter;
            }
        }
    }
    updateHangmanReveal();
    

    if(!hiddenWord.includes(guessedLetter)){
        attempts++;
        buildSkeleton();
    }
    document.querySelector('#letterInput').value = '';
    
    checkGameOver();
    
};


