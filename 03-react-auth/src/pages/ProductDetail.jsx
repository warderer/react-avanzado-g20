import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleItem } from '@/services/itemServices'

const ProductDetail = () => {
  const [itemData, setItemData] = useState([])
  const { id } = useParams()

  useEffect(() => {
    // Traigo mis items de la API y los almaceno en el estado itemsData
    const fetchItemsData = async () => {
      try {
        const result = await getSingleItem(id)
        if (result.status === 200) {
          setItemData(result.data)
          console.log(result.data)
        }
      } catch (error) {
        console.log('Ocurrio un error al procesar los Items: ', error.message)
      }
    }
    fetchItemsData()
  }, [])
  return (
    <div>
      <h1>Product Detail</h1>
      <h2>{itemData.product_name}</h2>
      <p>{itemData.description}</p>
    </div>
  )
}
export default ProductDetail
