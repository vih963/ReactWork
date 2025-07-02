import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET

const auth = (req, res, next) => {
    
    console.log (req.header.authorization)
    const token = req.headers.authorization
    console.log(req)

     console.log(token)
    
    if(!token){
        return res.status(401).json({ message: 'Acesso Negado'})
    }

    try {
        const decoded = jwt.verify(token.replace('Bearer ', ''), JWT_SECRET)

        req.userId = decoded.id

        console.log(decoded)
          


    }catch (err){
        return res.status(401).json({ message: 'Token Invalido'})
    }

  next()
}

export default auth