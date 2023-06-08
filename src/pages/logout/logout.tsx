import { Button, Box } from '@mui/material';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import { useAuth } from "../../components/authprovider/authProvider";


    const HandleLogout = async () => {
      const { setAuth } = useAuth();
      const response = await fetch('http://localhost:8080/api/logout', {
        credentials: "include"
      });
      
      const resData = await response.json();
      console.log(resData)

      if(resData.sessionDestroyed) {
        console.log('Session destroyed!')
        setAuth(false);
        toast.success('Logout successfully!', {
            position: toast.POSITION.TOP_RIGHT,
            autoClose: 3000, // will stay for 3 sec
        })
      }
    }


export default HandleLogout;