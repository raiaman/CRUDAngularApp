using CRUDAngularApp.Repository.Interface;
using Microsoft.AspNetCore.Mvc;

namespace CRUDAngularApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class EmployeeController : ControllerBase
    {
        private IEmpRepository empRepository;
        public EmployeeController(IEmpRepository _empRepository)
        {
            empRepository = _empRepository;
        }

        //Get web api to view all employees
        [HttpGet]
        public IEnumerable<EmpModel> Get()
        {
            List<EmpModel> employees = null;
            employees = empRepository.GetAllEmployees();
            if (employees.Count == 0)
            {
                return null;
            }
            else
            {
                return employees;
            }
        }

        //Post web api  for insert record
        [HttpPost]
        public bool Post(EmpModel obj)
        {
            bool flag = false;
            try
            {
                flag = empRepository.AddEmployee(obj);
            }
            catch { }
            return flag;
        }

        //Post web api  for update record
        [HttpPut]
        public bool Put(EmpModel obj)
        {
            bool flag = false;
            try
            {
                flag = empRepository.UpdateEmployee(obj);
            }
            catch (Exception ex) { }
            return flag;
        }

        //Post web api  for delete record
        [HttpDelete]
        public bool Delete(int Id)
        {
            bool flag = false;
            try
            {
                flag = empRepository.DeleteEmployee(Id);
            }
            catch { }
            return flag;
        }
    }
}
