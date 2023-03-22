import { useEffect, useState } from 'react'
import { useAuthContext } from '@/context/AuthContext'
import { getSingleUser } from '@/services/userServices'

const Dashboard = () => {
  const { userPayload } = useAuthContext()
  const [userData, setUserData] = useState({})

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const result = await getSingleUser(userPayload.id)
        if (result.status === 200) {
          setUserData(result.data)
        }
      } catch (error) {
        console.log('Ocurrio un error en Dashboard: ', error.message)
      }
    }
    fetchUserData()
  }, [])

  return (
    <div>
      <h1>Dashboard</h1>
      {
        userData?.first_name && <p className='first_name'> First Name: {userData.first_name}</p>
      }
      {
        userData?.last_name && <p className='last_name'> Last Name: {userData.last_name}</p>
      }
      {
        userData?.gender && <p className='gender'> Gender: {userData.gender}</p>
      }
      {
        userData?.email && <p className='email'> Email: {userData.email}</p>
      }
    </div>

  )
}
export default Dashboard
