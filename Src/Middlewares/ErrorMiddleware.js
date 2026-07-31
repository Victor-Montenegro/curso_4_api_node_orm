const express =  require('express');

module.exports = function HandlerError(exception, _, res, next)
{
    console.log(exception);

    res
    .status(500)
    .json({message: "Ocorreu um erro interno no servidor"});
};