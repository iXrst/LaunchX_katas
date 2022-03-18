const setData = (pokemon) => {
  document.getElementById("name").innerText = pokemon.name;
  let number = pokemon.number.toString();
  if (number.length == 1) {
    number = "#00" + number;
  } else if (number.length == 2) {
    number = "#0" + number;
  } else {
    number = "#" + number;
  }
  document.getElementById("number").innerText = number;
  document.getElementById("img").src = pokemon.img;
  document.getElementById("type").innerHTML = pokemon.type;
  document.getElementById("weight").innerText = pokemon.weight;
  document.getElementById("height").innerText = pokemon.height;
  document.getElementById("move").innerHTML = pokemon.move;
  document.getElementById("hp").innerText = pokemon.hp;
  document.getElementById("atk").innerText = pokemon.attack;
  document.getElementById("def").innerText = pokemon.defense;
  document.getElementById("satk").innerText = pokemon.special_attack;
  document.getElementById("sdef").innerText = pokemon.special_defense;
  document.getElementById("spd").innerText = pokemon.speed;

};

const formatnumber = (number) => {
  if (number.length == 1) {
    return "00" + number;
  } else if (number.length == 2) {
    return "0" + number;
  } else {
    return number;
  }
};

const getData = async () => {
  try {
    let pokesearch = document.getElementById("pokemon").value;
    const data = await fetch(
      "https://pokeapi.co/api/v2/pokemon/" + pokesearch.toLowerCase()
    );
    await data
      .json()
      .then((pokemon) => {
        let newPokemon = {
          name: pokemon.name,
          number: pokemon.id,
          img: pokemon.sprites.other.home.front_default,
          type: pokemon.types.map((typ) => typ.type.name),
          weight: pokemon.weight / 10 + " kg",
          height: pokemon.height / 10 + " m",
          move: pokemon.abilities.map((ab) => ab.ability.name),
          hp: pokemon.stats[0].base_stat,
          attack: pokemon.stats[1].base_stat,
          defense: pokemon.stats[2].base_stat,
          special_attack: pokemon.stats[3].base_stat,
          special_defense: pokemon.stats[4].base_stat,
          speed: pokemon.stats[5].base_stat,
        };
        setData(newPokemon);
      })
      .catch((err) => {
        console.log(err);
        document.getElementById("name").innerText = "Pokemon not found";
        document.getElementById("number").innerText = "-";
        document.getElementById("img").src = "./assets/image/ash_sad.jpg";
        document.getElementById("type").innerHTML = "-";
        document.getElementById("weight").innerText = "-";
        document.getElementById("height").innerText = "-";
        document.getElementById("move").innerHTML = "-";
        document.getElementById("hp").innerText = "-";
        document.getElementById("atk").innerText = "-";
        document.getElementById("def").innerText = "-";
        document.getElementById("satk").innerText = "-";
        document.getElementById("sdef").innerText = "-";
        document.getElementById("spd").innerText = "-";
      });
  } catch (err) {
    console.log(err);
  }
};


