const myDB = firebase.firestore()
const cafeList = document.querySelector('#cafe-list')
const form = document.querySelector('#add-cafe-form')

// myDB.collection('coffes').get().then((snapshot)=>{
//   var items = snapshot.docs;
//   items.forEach(doc=>{
//       console.log(doc.data());
//       renderCafe(doc);
//     })
// })


myDB.collection('coffes').onSnapshot((snapshot)=>{
  let changes = snapshot.docChanges();
  changes.forEach(change=>{
    if(change.type=='added'){
      renderCafe(change.doc);
    }else if (true) {
      let li = cafeList.querySelector('[data-id='+change.doc.id+']');
      cafeList.removeChild(li)
    }
    })
})



function renderCafe(doc){
  let li = document.createElement('li');
  let cross = document.createElement('div');
  let type = document.createElement('span');
  let price = document.createElement('span');

  li.setAttribute('data-id', doc.id)
  cross.textContent = 'x';
  cross.style.backgroundColor = "rgba(255, 17, 17, 0.73)";
  type.textContent = doc.data().type
  price.textContent = doc.data().price

  li.appendChild(type)
  li.appendChild(price)
  li.appendChild(cross)
  cafeList.appendChild(li)

  //deleting stuff
  cross.addEventListener('click', (e)=>{
    if (confirm('Sure you want to delete this item?')) {
      e.stopPropagation();
      let id = e.target.parentElement.getAttribute('data-id')
      myDB.collection('coffes').doc(id).delete();
    } else {
      // Do nothing!
    }
  })
}

//saving data
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    if (form.price.value == "" || form.type.value == ""){
      alert("Please fill the input fields")
    }else{
      myDB.collection('coffes').add({
        price: form.price.value,
        type: form.type.value,
      })
    }
})

//
// get_image_name()
