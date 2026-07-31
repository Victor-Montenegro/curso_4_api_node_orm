module.exports = class RepositoryBase
{
    _table

    constructor(table)
    {
        this._table = table;
    }

    async FindByIdAsync(id)
    {
        var entity = await this._table.findByPk(id);
    
        return entity;
    }

    async FindAllAsync()
    {
        var entity = this._table.findAll();

        return entity;
    }
    
    async CreateAsync(entity)
    {
        var createdEntity = await this._table.create(entity);

        return createdEntity;
    }
}