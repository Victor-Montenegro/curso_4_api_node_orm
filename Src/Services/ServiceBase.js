const PropertyNullException = require("../Exceptions/PropertyNullException");
const EntityNotFoundException = require("./Exceptions/PessoaNotFoundException");

module.exports = class ServiceBase
{
    _repository;

    constructor(repository)
    {
        this._repository = repository;
    }

    async FindByIdAsync(id)
    {
        PropertyNullException.ThrowIfPropertyIsNull(id, 'id');
        
        var entity = this._repository.FindByIdAsync(id);
        
        EntityNotFoundException.ThrowIfPropertyIsNull(entity);

        return entity;
    }

    async FindAllAsync()
    {
        var entities = await this._repository.FindAllAsync();
        
        return entities;
    }
}