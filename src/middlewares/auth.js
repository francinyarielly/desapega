import JWT from "jsonwebtoken";

export const Auth = {
    private: async (req, res, next) => {
        let sucess = false;
        //Fazer verificação
        if(req.headers.authorization) {

            const [ AuthType, token] = req.headers.authorization.split(' ')
            if(AuthType === 'Bearer') {
                try {
                    JWT.verify(token, process.env.JWT_SECRET_KEY);
                    sucess === true;
                } catch (err) {

                }
            }
        }
        if (sucess) {
            next();
        }else {
            res.status(403);
            res.json({ error: 'Não autorizado'});
        }
    }
};