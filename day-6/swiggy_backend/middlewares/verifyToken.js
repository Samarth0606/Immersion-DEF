
import 'dotenv/config';

export function verifyToken(req,res,next){
    if( req.headers && 
        req.headers.authorization &&
        req.headers.authorization.split(" ")[0]=== "JWT"
    ){
        let token = req.headers.authorization.split(" ")[1]
        jwt.verify(token, process.env.SECRET, function(err, decoded) {
            console.log(decoded.foo) // bar
          });
    }
}




