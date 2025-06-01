//RESUELVE TUS EJERCICIOS AQUI


//EJERCICIO 01

// urlBase01 = "https://dog.ceo/api/breeds/list/all"

// const getAllBreeds = async () => {
//     const response = await fetch(`${urlBase01}`);
//     let data;
//     let lista = []
//     if (response.ok) {
//         data = await response.json();
//         let razas = data.message;
//         let llaves = Object.keys(razas);
//         return llaves;
//     }
// }


//EJERCIO 02

const getRandomDog = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");

    let data;
    if (response.ok) {
        data = await response.json();
        let imagen = data.message;
        return imagen;
    }
}

