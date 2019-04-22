import * as express from "express";
import * as api from "./api";

export const register = ( app: express.Application ) => {
    const oidc = app.locals.oidc;
    app.get( "/", ( req: any, res ) => {
        res.send( "Hello world new routes!" );
    } );

    api.register( app );
};
