// import { useState } from "react";
// import '../Update1.css';
// import { useNavigate } from "react-router-dom";
// import { Modal, Button } from 'react-bootstrap';


// function ProductForm() {
    
//     const [productId, setProductId] = useState("");
//     const [productName, setProductName] = useState("");
//     const [productPrice, setProductPrice] = useState("");
//     const [showModal, setShowModal] = useState(false);
//     const [modalMessage, setModalMessage] = useState("");  
//     const navigate = useNavigate();
   
//     function insertProductId(e) {
//         setProductId(e.target.value);
//     }

//     function insertProductName(e) {
//         setProductName(e.target.value);
//     }

//     function insertProductPrice(e) {
//         setProductPrice(e.target.value);
//     }


//     const onSubmit = async () => {
//         const values = {
//             productId: productId, 
//             productName: productName,
//             productPrice: productPrice
//         };
//         console.log(values); 

//         const config = {
//             method: "POST", 
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(values),
//         };

//         try {
//             const response = await fetch("http://localhost:8000/update", config); 
//             const json = await response.json();
//             console.log(json);
//             if (response.ok) {
//                setModalMessage("Product updated successfully!");
//                 setShowModal(true);
//                 setTimeout(() => {
//                     navigate('/Product1'); 
//                 }, 2000); 
//             } else {
//                 setModalMessage("Error updating product.");
//                 setShowModal(true);
//             }
//         } catch (error) {
//             console.log(error);
//             setModalMessage("Error updating product.");
//             setShowModal(true);
//         }

//     };

//     return (
//         <>

  

//             <form id="productForm">
//                 <label htmlFor="productId">Enter Product ID:</label>
//                 <input
//                     type="text"
//                     id="productId"
//                     name="productId"
//                     value={productId}
//                     onChange={insertProductId}
//                     required
//                 />

//                 <label htmlFor="productName">Enter Product Name:</label>
//                 <input
//                     type="text"
//                     id="productName"
//                     name="productName"
//                     value={productName}
//                     onChange={insertProductName}
//                     required
//                 />

//                 <label htmlFor="productPrice">Enter Product Price:</label>
//                 <input
//                     type="text"
//                     id="productPrice"
//                     name="productPrice"
//                     value={productPrice}
//                     onChange={insertProductPrice}
//                     required
//                 />

//                 <input type="button" value="Update Product" onClick={onSubmit} />
//             </form>
 
//         </>
//     );
// }

// export default ProductForm;

import { useState } from "react";
import '../Update1.css';
import { useNavigate } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap';

function ProductForm() {
    const [productId, setProductId] = useState("");
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");  
    const navigate = useNavigate();
   
    function insertProductId(e) {
        setProductId(e.target.value);
    }

    function insertProductName(e) {
        setProductName(e.target.value);
    }

    function insertProductPrice(e) {
        setProductPrice(e.target.value);
    }

    const onSubmit = async () => {
        const values = {
            productId: productId, 
            productName: productName,
            productPrice: productPrice
        };
        console.log(values); 

        const config = {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
        };

        try {
            const response = await fetch("http://localhost:8000/update", config); 
            const json = await response.json();
            console.log(json);
            if (response.ok) {
               setModalMessage("Product updated successfully!");
               setShowModal(true);
               setTimeout(() => {
                   navigate('/Product1'); 
               }, 4000); 
            } else {
                setModalMessage("Error updating product.");
                setShowModal(true);
            }
        } catch (error) {
            console.log(error);
            setModalMessage("Error updating product.");
            setShowModal(true);
        }
    };

    return (
        <>
            <form id="productForm">
                <label htmlFor="productId">Enter Product ID:</label>
                <input
                    type="text"
                    id="productId"
                    name="productId"
                    value={productId}
                    onChange={insertProductId}
                    required
                />

                <label htmlFor="productName">Enter Product Name:</label>
                <input
                    type="text"
                    id="productName"
                    name="productName"
                    value={productName}
                    onChange={insertProductName}
                    required
                />

                <label htmlFor="productPrice">Enter Product Price:</label>
                <input
                    type="text"
                    id="productPrice"
                    name="productPrice"
                    value={productPrice}
                    onChange={insertProductPrice}
                    required
                />

                <input type="button" value="Update Product" onClick={onSubmit} />
            </form>

         
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Status</Modal.Title>
                </Modal.Header>
                <Modal.Body>{modalMessage}</Modal.Body>
               
            </Modal>
        </>
    );
}

export default ProductForm;
