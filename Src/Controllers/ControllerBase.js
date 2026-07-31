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
            var entities = await this._serviceBase.FindAllAsync();
         
            res
            .status(200)
            .json(entities)
        } 
        catch (exception)
        {
            next(exception);
        }
    }
  
    async CreateAsync(req, res, next)
    {
        try 
        {
            var request = req.body;
            var entity = await this._serviceBase.CreateAsync(request);
         
            res
            .status(201)
            .json(entity)
        } 
        catch (exception)
        {
            next(exception);
        }
    }
}