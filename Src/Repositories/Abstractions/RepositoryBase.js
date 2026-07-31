module.exports = class RepositoryBase
{
    _table

    constructor(table)
    {
        this._table = table;
    }

    async FindByIdAsync(id)
    {
        var entity = await this.table.find({where: {id: id}});
    
        return entity;
    }

    async FindAllAsync()
    {
        var entity = this._table.findAll();

        return entity;
    }
}