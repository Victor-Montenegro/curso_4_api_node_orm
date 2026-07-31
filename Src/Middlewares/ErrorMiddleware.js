const express =  require('express');
const EntityNotFoundException = require('../Services/Exceptions/EntityNotFoundException');

module.exports = function HandlerError(exception, _, res, next)
{
    console.log(exception);

    if(exception instanceof EntityNotFoundException)
    {
        res
        .status(404)
        .json({message: exception.message });
           
    }
    res
    .status(500)
    .json({message: "Ocorreu um erro interno no servidor"});
};