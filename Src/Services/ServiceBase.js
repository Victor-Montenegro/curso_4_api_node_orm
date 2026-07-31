const PropertyNullException = require("../Exceptions/PropertyNullException");
const EntityNotFoundException = require("./Exceptions/EntityNotFoundException");

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
        
        var entity = await this._repository.FindByIdAsync(id);
        
        EntityNotFoundException.ThrowIfEntityIsNull(entity, id);

        return entity;
    }

    async FindAllAsync()
    {
        var entities = await this._repository.FindAllAsync();
        
        return entities;
    }

    async CreateAsync(entityRequest)
    {
        var createdEntity = await this._repository.CreateAsync(entityRequest);

        return createdEntity;
    }
}