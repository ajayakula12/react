import axios from 'axios';
 
export async function validateUser(loginID, password) {
    console.log('ValidateUser checking')
  if (loginID === 'swapna66677777@gccccc.com' && password === '123456') {
    try {
      const response = await axios.post(
        'http://172.16.111.73:8076/ums/userLogin',
        {
          loginID: loginID,
          password: password,
          tenantID: '10231',
          moduleName: ''
        },
        {
          headers: {
            '34djfyr7459slaqwir974mcnv012lsj84ndrp46do': ''
          }
        }
      );
 
      console.log(response.data);
      return response.data; // Return the response data
      
    } catch (error) {
      console.error('Error logging in:', error);
      throw new Error('Failed to sign in. Please check your credentials.'); // Throw error to handle in calling code
    }
  } else {
    throw new Error('Invalid credentials.'); // Throw error to handle in calling code
  }
}