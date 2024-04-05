import jwt from 'jsonwebtoken'

export class JwtAdapter {

    static generateToken(payload: any, duration: string = '2h') {

        jwt.sign(payload, "SEED", { expiresIn: duration }, (err, token) => {

        })
    }

    static validateToken(token: string) {


        return

    }

}