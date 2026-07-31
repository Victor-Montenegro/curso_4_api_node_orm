module.exports = class ControllerBase
{
    _serviceBase

    constructor(serviceBase)
    {
        this._serviceBase = serviceBase;
    }

    async GetByIdAsync(req, res, next)
    {
        try 
        {
            var id = req.params.id;

            console.log('aaaaaaa', id);

            var entity = await this._serviceBase.FindByIdAsync(id);
         
            res
            .status(200)
            .json(entity)
        } 
        catch (exception)
        {
            next(exception);
        }
    }

    async GetAllAsync(req, res, next)
    {
        try 
        {
            var pessoas = await this._serviceBase.FindAllAsync();
         
            res
            .status(200)
            .json(pessoas)
        } 
        catch (exception)
        {
            next(exception);
        }
    }
}