const validator = require('validator')

// User signupValidation 
const signupValidation = (req)=>{

    const {name, email, password} = req.body;
     if (!name) {
                throw new Error("Name is Required");
            }else if (!validator.isEmail(email)) {
                throw new Error("Email is incorrect");
            }else if (!validator.isStrongPassword(password)) {
                throw new Error("Password is not strong enough");
            }
    
}

// User LoginValidation 
const loginValidation = (req)=>{

    const {email, password} = req.body;
       if (!validator.isEmail(email)) {
                throw new Error("Email is incorrected");
            }else if(!validator.isStrongPassword(password)){
               throw new Error("Password is not storng enough");
            }
}


// Admin Signup Validation 
const adminSignupValidation = (req) => {
    const { name, email, password, role, age, gender } = req.body;

    if (!name || name.trim().length < 3) {
        throw new Error("Name is required and must be at least 3 characters");
    }

    if (!email || !validator.isEmail(email)) {
        throw new Error("Email is incorrect");
    }

    if (!password || !validator.isStrongPassword(password)) {
        throw new Error("Password is not strong enough");
    }

    const validRoles = ["super-admin", "admin"];
    if (!role || !validRoles.includes(role)) {
        throw new Error("Role must be either 'super-admin' or 'admin'");
    }

    const validGenders = ["male", "female", "other"];
    if (!gender || !validGenders.includes(gender.toLowerCase())) {
        throw new Error("Gender must be male, female, or other");
    }

    if (!age || isNaN(age) || age < 18 || age > 50) {
        throw new Error("Age must be a number between 18 and 50");
    }

    return true;
};


// Admin Signup Validation 
const adminLoginValidation = (req) => {
    const { email, password, role } = req.body;

    if (!email || !validator.isEmail(email)) {
        throw new Error("Email is incorrect");
    }

    if (!password || !validator.isStrongPassword(password)) {
        throw new Error("Password is not strong enough");
    }

    const validRoles = ["super-admin", "admin"];
    if (!role || !validRoles.includes(role)) {
        throw new Error("Role must be either 'super-admin' or 'admin'");
    }

    return true;
};


    // Add Product Validation  
    const addProductValidation = (req) => {
    const { name, price, description, category, stock } = req.body;

    if (!name || typeof name !== "string" || name.trim().length < 3) {
        throw new Error("Product name must be at least 3 characters long");
    }

    if (price === undefined || price === null || isNaN(price) || Number(price) < 0) {
        throw new Error("Product price must be a positive number");
    }

    if (description && description.length > 500) {
        throw new Error("Description cannot exceed 500 characters");
    }

    if (!category || typeof category !== "string" || category.trim().length === 0) {
        throw new Error("Category is required");
    }

    return true;
};


module.exports = {
   signupValidation,
   loginValidation,
   adminSignupValidation,
   adminLoginValidation,
   addProductValidation
}