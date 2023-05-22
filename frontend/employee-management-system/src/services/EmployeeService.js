import axios from "axios";

const Employee_Base_URL_Get = 'http://localhost:8888/api/employees';
const Employee_Base_URL_Get_By_Id = 'http://localhost:8888/api/employee';
const Employee_Base_URL_Save = 'http://localhost:8888/api/employee/save';
const Employee_Base_URL_Update = 'http://localhost:8888/api/employee/update';
const Employee_Base_URL_Delete = 'http://localhost:8888/api/employee/delete';
class EmployeeService {

    getAllEmployees() {
      return axios.get(Employee_Base_URL_Get)
    }

    createEmployee(employee){
    return axios.post(Employee_Base_URL_Save , employee);
    }

    getEmployeeById(employeeId){
          return axios.get(Employee_Base_URL_Get_By_Id + '/' + employeeId);
    }

    updateEmployee(employeeId , employee){
          return axios.put(Employee_Base_URL_Update + '/' + employeeId , employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(Employee_Base_URL_Delete + '/' + employeeId);
    }
}

export default new EmployeeService();