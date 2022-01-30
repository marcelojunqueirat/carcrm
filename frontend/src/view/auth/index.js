import React from 'react';
import { change, login } from '../../store/actions/auth.action';
import { Redirect } from 'react-router-dom';
import { Typography, TextField, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';

export default function Auth() {
    const dispatch = useDispatch();
    const { credentials, success } = useSelector(state => state.authReducer);
  return (
    <div className='d-flex bg-white min-vh-100'>
        <div className='container mt-5'>
            <div className='row justify-content-center'>
                <div className='col-md-4'>
                    <div className='form-group text-center'>
                        <img src="/logo.png" alt="carCRM" height="48"></img>
                        <Typography
                            className="mt-3"
                            variant="h6"
                            component="h1"
                        >
                            Plataforma para revenda de veiculos
                        </Typography>
                    </div>
                    <TextField 
                        label="Email"
                        type="email"
                        autoComplete='email'
                        margin='normal'
                        value={credentials.email}
                        onChange={text => dispatch(change({email: text.target.value}))}
                    />

                    <TextField 
                        label="Senha"
                        type="password"
                        margin='normal'
                        value={credentials.password}
                        onChange={text => dispatch(change({password: text.target.value}))}
                    />

                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        size="larger"
                        className="mt-4 mb-4"
                        onClick={ () => dispatch(login(credentials)) }
                    >
                        Entrar
                    </Button>

                    {(success) &&
                        <Redirect to="/vehicles"/>
                    }

                </div>
            </div>
        </div>
    </div>
  );
}
