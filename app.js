const myDB = firebase.firestore()
const cafeList = document.querySelector('#cafe-list')
const form = document.querySelector('#add-cafe-form')

myDB.collection('coffes').get().then((snapshot)=>{
  var items = snapshot.docs;
  items.forEach(
    doc=>{
      console.log(doc.data());
      renderCafe(doc);
    }
  )
}
)

function renderCafe(doc){
  let li = document.createElement('li');
  let type = document.createElement('span');
  let price = document.createElement('span');

  li.setAttribute('data-id', doc.id)
  type.textContent = doc.data().type
  price.textContent = doc.data().price
  li.appendChild(type)
  li.appendChild(price)
  cafeList.appendChild(li)
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
