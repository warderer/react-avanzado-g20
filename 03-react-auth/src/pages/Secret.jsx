import { useAuthContext } from '@/context/AuthContext'

const Secret = () => {
  const { userPayload } = useAuthContext()
  console.log('hola desde secret')
  console.log(userPayload)

  return (
    <>
      <h1>Secret</h1>
      {userPayload?.role === 'ADMIN'
        ? <h2>Hola Admin</h2>
        : <h2>Hola Usuario</h2>}

      {userPayload?.role === 'ADMIN' &&
        <h2>Hola Admin</h2>}

      {userPayload?.role === 'CUSTOMER' &&
        <h2>Hola Customer</h2>}

    </>

  )
}
export default Secret
