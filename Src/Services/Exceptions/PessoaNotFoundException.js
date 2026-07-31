const { IsNullOrWhiteSpace } = require("../../Helpers/ObjectHelper");

module.exports = class EntityNotFoundException extends Error
{
    constructor(id)
    {
        super();

        this.message = `Nao foi possivel encontrar com a identificação ${id}`;
    }

    static ThrowIfEntityIsNull(entity)
    {
        if(IsNullOrWhiteSpace(entity))
        {
            throw new EntityNotFoundException(entity);
        }
    }
}