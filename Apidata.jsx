export const Apidata = (email, password) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const User = {
          name: "Anshu",
          email: "test@example.com",
          password: "123456"
        };
  
        if (email === User.email && password === User.password) {
          resolve({ success: true, user: User });
        } else {
            reject(new Error("Invalid email or password"));
        }
      }, 1000); 
    });
  };