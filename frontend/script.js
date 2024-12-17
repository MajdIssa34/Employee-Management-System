// Select the form and employee list from the html
const form = document.getElementById("employeeForm");
const employeeList = document.getElementById("employeeList");

// API endpoint for employee management system
const API_URL = "http://127.0.0.1:5000/api/employees";

// Fetch employee data from the backend
async function fetchEmployees() {
    try {
        const response = await fetch("http://127.0.0.1:5000/api/employees");
        const data = await response.json();
        const employees = data.data;

        // Clear the existing list
        employeeList.innerHTML = "";

        // Add each employee to the list
        employees.forEach(employee => {
            const li = document.createElement("li");

            li.innerHTML = `
                <strong>${employee.name}</strong><br>
                Job Title: ${employee.jobTitle}<br>
                Company: ${employee.department}<br>
                Salary: $${employee.salary}<br>
                <button onclick="updateEmployee('${employee._id}')">Edit</button>
                <button onclick="deleteEmployee('${employee._id}')">Delete</button>
            `;
            employeeList.appendChild(li);
        });
    } catch (error) {
        console.error("Error fetching employees:", error);
    }
}

// Add new employee to the backend
async function addEmployee(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const jobTitle = document.getElementById("jobTitle").value;
    const department = document.getElementById("department").value;
    const salary = document.getElementById("salary").value;

    const newEmployee = {
        name,
        jobTitle,
        department,
        salary
    };

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEmployee)
        });

        const data = await response.json();
        if (data.success) {
            alert("Employee added successfully!");
            fetchEmployees(); // Refresh the employee list
            form.reset(); // Clear the form
        } else {
            alert("Failed to add employee.");
        }
    } catch (error) {
        console.error("Error adding employee:", error);
    }
}

// Event listener for form submission
form.addEventListener("submit", addEmployee);

// Fetch employees when the page loads
fetchEmployees();

// Delete an employee
async function deleteEmployee(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "DELETE",  // Use DELETE method
        });

        const data = await response.json();
        if (data.success) {
            alert("Employee deleted successfully!");
            fetchEmployees();  // Refresh the employee list
        } else {
            alert("Failed to delete employee.");
        }
    } catch (error) {
        console.error("Error deleting employee:", error);
    }
}

// Update employee details
async function updateEmployee(id) {
    // Gather updated employee data from the form
    const updatedEmployee = {
        name: document.getElementById("name").value,
        jobTitle: document.getElementById("jobTitle").value,
        department: document.getElementById("department").value,
        salary: document.getElementById("salary").value,
    };

    try {
        // Send the update request to the backend with the PUT method
        const response = await fetch(`${API_URL}/${id}`, {
            method: "PUT",  // Use PUT method for update
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedEmployee)
        });

        const data = await response.json();
        
        if (data.success) {
            alert("Employee updated successfully!");
            fetchEmployees();  // Refresh the list after updating
        } else {
            alert("Failed to update employee.");
        }
    } catch (error) {
        console.error("Error updating employee:", error);
    }
}
