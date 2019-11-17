import jwt from 'jsonwebtoken'
import auth from '../../config/auth'

const users = [
  {
    id: 1,
    name: 'user 1',
  },
  {
    id: 2,
    name: 'user 2',
  },
  {
    id: 3,
    name: 'user 3',
  },
  {
    id: 4,
    name: 'user 4',
  },
]

const findUser = (database, id) => {
  return database.find(user => user.id === id)
}

const store = (req, res) => {
  const { id } = req.body

  const user = findUser(users, id)

  if (!user) {
    return res.status(400).json({ error: 'user not found' })
  }

  const token = jwt.sign({ id }, auth.secret, {
    expiresIn: auth.expires,
  })

  return res.json({
    token,
  })
}

export default { store }
