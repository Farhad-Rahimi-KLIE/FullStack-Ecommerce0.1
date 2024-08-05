import React, { useState } from 'react'
import axios from 'axios'
const AddProduct = () => {

    const [image, setImage] = useState();
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const Addproductkaro = ()=>{
        if (!image || !name || !price) {
            alert("Not Valid")
        }else{
            let userId = JSON.parse(localStorage.getItem('users')).data.user._id;
            const data = new FormData();
            data.append('image', image)
            data.append('name', name)
            data.append('price', price)
            data.append('userId', userId)
            axios.post("http://localhost:3000/add", data).then(result => console.log(result)).catch(err => console.log(err))
            // setName('')
            // setPrice('')
            // setCategory('')
            // setCompany('')
        }
        
    }

  return (
    <>
      <div className='product'>
            <h1>Add Product</h1>
            <input type="file" placeholder='Enter image' name='image' className='inputBox'
            onChange={(e)=> setImage(e.target.files[0])}
            />

            <input type="text" placeholder='Enter product name' className='inputBox'
            onChange={(e)=> setName(e.target.value)}
            value={name}
            />

            <input type="text" placeholder='Enter product price' className='inputBox'
            onChange={(e)=> setPrice(e.target.value)}
            value={price}
            />

            <button className='appButton' onClick={Addproductkaro}>Add Product</button>
        </div>
    </>
  )
}

export default AddProduct
