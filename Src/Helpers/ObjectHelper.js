module.exports = class ObjectHelper
{
    static IsNullOrWhiteSpace(object)
    {
        var validation = !object ||
        object == ' ' ||
        object == '' ||
        object == null ||
        object == undefined

        return validation;
    }
}