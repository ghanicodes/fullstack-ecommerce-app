import api  from "../services/api";


// Login function
export const loginUser = (data) => {
  return api.post("/auth/login", data); // backend ka /login endpoint
};


// signup function
export const signinUser = (data) => {
  return api.post("/auth/signup", data); // backend ka /signup endpoint
};


// Admin Login function
export const adminLogin = (data) => {
  return api.post("/admin/adminlogin", data); // backend ka /signup endpoint
};

// Admin Signup function
export const adminSignup = (data) => {
  return api.post("/admin/adminsignup", data); // backend ka /signup endpoint
};
