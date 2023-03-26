// export default onSearch = (id) => {
//   const URL_BASE = "https://be-a-rym.up.railway.app/api";
//   const KEY = "2fcb350fe8a7.5de1719a734294cac9da";

//   if (characters.find((char) => char.id === id)) {
//     return alert("Personaje repetido");
//   }

//   fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
//     .then((response) => response.json())
//     .then((data) => {
//       if (data.name) {
//         setCharacters((oldChars) => [...oldChars, data]);
//         //setCharacters([...characters,data]);
//       } else {
//         alert("No se ha encontrado este ID");
//       }
//     });
// };
