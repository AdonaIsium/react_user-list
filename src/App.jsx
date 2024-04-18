import { UserCard } from "./UserCard"
import { UserCardClass } from "./UserCardClass"
import userData from "./user.json"

function App() {
  return (
    <div>
      <UserCard
        name={userData.name}
        age={userData.age}
        phoneNumber={userData.phoneNumber}
        address={userData.address}
      />
      <UserCardClass
        name={userData.name}
        age={userData.age}
        phoneNumber={userData.phoneNumber}
        address={userData.address}
      />
    </div>
  )
}

export default App
