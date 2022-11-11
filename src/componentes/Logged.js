import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMe } from '../redux/actions';
import { Row, Button } from 'react-bootstrap';
import foto from '../assets/imagenes/fotoPerfil.png';

function Logout() {
  const { user, token } = useSelector(({ auth }) => auth);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      dispatch(getMe(token));
    } catch (error) {
      console.error(error);
    }
  }, [token]);

  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
      <Row className='d-flex flex-column justify-content-center w-50'>
        {user ? (
          <div className=''>
            <Row className='m-2'>
              <p className='text-start'>Personal Information</p>
              <div className='col-4'>
                <img className='rounded-circle' src={foto} alt='Futura foto perfil' />
              </div>
              <div className='col-8'>
                <Row className='h-100'>
                  <div className='col-6 d-flex flex-column justify-content-center align-items-center gap-5'>
                    <input
                      className='rounded w-75'
                      name='name'
                      placeholder='Name'
                      value={user.name}
                    />

                    <input className='rounded w-75' name='age' placeholder='Age' value='' />
                  </div>
                  <div className='col-6 d-flex flex-column justify-content-center align-items-center gap-5'>
                    <input
                      className='rounded w-75'
                      name='lastName'
                      placeholder='Last Name'
                      value={user.lastName}
                    />
                    <input
                      className='rounded w-75'
                      name='phone'
                      placeholder='Phone'
                      value={user.phone}
                    />
                  </div>
                </Row>
              </div>
            </Row>
            <Row className='m-2'>
              <p className='text-start'>Work Information</p>

              <Row className='h-100'>
                <div className='col-6 d-flex flex-column justify-content-center align-items-center gap-5'>
                  <input className='rounded w-75' name='role' placeholder='Role' value='' />

                  <input className='rounded w-75' name='project' placeholder='Project' value='' />
                </div>
                <div className='col-6 d-flex flex-column justify-content-center align-items-center gap-5'>
                  <input
                    className='rounded w-75'
                    name='roleInfo'
                    placeholder='Role Description'
                    value=''
                  />
                  <input className='rounded w-75' name='pm' placeholder='PM Assigned' value='' />
                </div>
              </Row>
            </Row>
            <Row className='justify-content-end mt-5'>
              <Button className='w-25'>Edit</Button>
            </Row>
          </div>
        ) : (
          'Algo salio mal'
        )}
      </Row>
    </div>
  );
}

export default Logout;
