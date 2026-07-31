const { IsNullOrWhiteSpace } = require('../Helpers/ObjectHelper.js')

module.exports = class PropertyNullException extends Error
{
    constructor(propertyName)
    {
        super();

        this.message = `A propriedade ${propertyName} não pode ser nula.`
    }

    static ThrowIfPropertyIsNull(property, propertyName)
    {
        if(IsNullOrWhiteSpace(property))
        {
            throw new PropertyNullException(propertyName);
        }
    }
}