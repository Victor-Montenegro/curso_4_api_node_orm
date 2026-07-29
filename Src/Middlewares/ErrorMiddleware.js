import express from 'express';

function HandlerError(exception, _, res, next)
{
    console.log(exception);

    res
    .status(500)
    .json({message: "Ocorreu um erro interno no servidor"});
}

export default HandlerError;