namespace CRUDAngularApp.Repository.Interface
{
    public interface IEmpRepository
    {
        bool AddEmployee(EmpModel obj);
        List<EmpModel> GetAllEmployees();
        bool UpdateEmployee(EmpModel obj);
        bool DeleteEmployee(int Id);
    }
}
