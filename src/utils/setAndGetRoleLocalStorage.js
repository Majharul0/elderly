
// use for set role in local storage when login
export function setRoleInLocalStorage(role) {
    try {
        localStorage.setItem("role", role);
    } catch (e) {
        console.error("Error setting role in localStorage: " + e.message);
        alert("Error setting role in localStorage: " + e.message)
    }
}


// its use for get dashboard user role , its use for -> role based notification
export function getRoleFromLocalStorage() {
    try {
        const role = localStorage.getItem("role");
        if (role !== null) {
            // console.log("Role retrieved from localStorage: " + role);
            return role;
        } else {
            console.error("Role not found in localStorage");
            alert("Role not found in localStorage please login with valid user account")
            return null;
        }
    } catch (e) {
        console.error("Error retrieving role from localStorage: " + e.message);
        return null;
    }
}

// Usage

