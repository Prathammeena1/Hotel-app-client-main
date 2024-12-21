
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const IsAdmin = ({children}) => {

    const isAdmin = useSelector(store => store.user?.user?.isAdmin);
    const navigate = useNavigate();

    useEffect(()=>{
        if(!isAdmin){
            toast.error("You are not an admin");
            return navigate('/');
        }
    },[isAdmin,navigate])


  return isAdmin && children
}

export default IsAdmin