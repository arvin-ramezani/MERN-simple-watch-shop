import { Box } from '@mui/system';
import { FC, useEffect, useState } from 'react';
import { useForm, Controller, FieldValues, FormState } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from '@mui/material';
import { ArrowBack, Visibility, VisibilityOff } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  Background,
  RegisterContainer,
  GoBack,
  Form,
  PasswordHelperText,
  SubmitButton,
} from './styles';
import { loginSchema, registerSchema } from './yupSchema';
import {
  loginAsync,
  registerAsync,
  selectUserStatus,
} from '../../features/user/userSlice';
import { IRegister } from '../../interfaces/interfaces';
import { ILogin } from '../../interfaces/interfaces';

const Login: FC<{ Register: boolean | null }> = ({ Register }) => {
  const dispatch = useDispatch();
  const userStatus = useSelector(selectUserStatus);
  const [showPassword, setShowPassword] = useState(false);
  const [isRegister, setIsRegister] = useState<boolean>(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({
    resolver: yupResolver(isRegister ? registerSchema : loginSchema),
  });

  const handleClickShowPassword = () =>
    setShowPassword((showPassword) => !showPassword);

  const handleRegisterComponent = () =>
    setIsRegister((isRegister) => !isRegister);

  useEffect(() => {
    Register && setIsRegister(true);
  }, [Register]);

  const submitHandler = (
    data: FormState<FieldValues> & (IRegister | ILogin)
  ) => {
    isRegister
      ? dispatch(registerAsync(data as IRegister))
      : dispatch(loginAsync(data as ILogin));
  };

  return (
    <Background>
      <RegisterContainer
        sx={{ opacity: userStatus === 'loading' ? '.5' : '1' }}
      >
        <GoBack>
          <Link to='/'>
            <ArrowBack /> Go Back
          </Link>
        </GoBack>
        {isRegister ? (
          <>
            <Typography
              mt={4}
              variant='h5'
            >
              CREATE AN ACCOUNT
            </Typography>
            <Typography
              my={3}
              color='GrayText'
              variant='subtitle2'
            >
              In this form I used<b> react-hook-form & yup</b> for validation.
            </Typography>
            <Form onSubmit={handleSubmit(submitHandler)}>
              <Controller
                name='firstname'
                defaultValue=''
                control={control}
                render={({ field }) => (
                  <FormControl
                    fullWidth
                    variant='outlined'
                    {...field}
                  >
                    <TextField
                      margin='normal'
                      name='firstname'
                      size='small'
                      id='firstName'
                      label='First Name'
                      error={!!errors.firstname}
                      helperText={
                        errors.firstname ? errors.firstname?.message : null
                      }
                    />
                  </FormControl>
                )}
              />
              <Controller
                name='lastname'
                control={control}
                defaultValue=''
                render={({ field }) => (
                  <FormControl
                    fullWidth
                    {...field}
                    variant='outlined'
                  >
                    <TextField
                      margin='normal'
                      size='small'
                      name='lastname'
                      id='lastName'
                      label='Last Name'
                      error={!!errors.lastname}
                      helperText={
                        errors.lastname ? errors.lastname.message : null
                      }
                    />
                  </FormControl>
                )}
              />
              <Controller
                control={control}
                name='username'
                defaultValue=''
                render={({ field }) => (
                  <FormControl
                    fullWidth
                    variant='outlined'
                    {...field}
                  >
                    <TextField
                      margin='normal'
                      size='small'
                      name='username'
                      id='userName'
                      label='Username'
                      error={!!errors.username}
                      helperText={
                        errors.username ? errors.username.message : null
                      }
                    />
                  </FormControl>
                )}
              />
              <Controller
                control={control}
                name='email'
                defaultValue=''
                render={({ field }) => (
                  <FormControl
                    fullWidth
                    variant='outlined'
                    {...field}
                  >
                    <TextField
                      margin='normal'
                      size='small'
                      name='email'
                      id='email'
                      label='Email'
                      error={!!errors.email}
                      helperText={errors.email ? errors.email.message : null}
                    />
                  </FormControl>
                )}
              />
              <Controller
                control={control}
                name='password'
                defaultValue=''
                render={({ field }) => (
                  <FormControl
                    fullWidth
                    variant='outlined'
                    {...field}
                  >
                    <InputLabel
                      htmlFor='password'
                      variant='outlined'
                    >
                      Password
                    </InputLabel>
                    <OutlinedInput
                      id='password'
                      type={showPassword ? 'text' : 'password'}
                      error={!!errors.password}
                      endAdornment={
                        <InputAdornment position='end'>
                          <IconButton
                            aria-label='toggle password visibility'
                            onClick={handleClickShowPassword}
                            edge='end'
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label='Password'
                    />
                    <PasswordHelperText>
                      {errors.password ? errors.password.message : null}
                    </PasswordHelperText>
                  </FormControl>
                )}
              />
              <Controller
                control={control}
                name='confirmPassword'
                defaultValue=''
                render={({ field }) => (
                  <FormControl
                    fullWidth
                    variant='outlined'
                    {...field}
                  >
                    <TextField
                      type='password'
                      margin='normal'
                      size='small'
                      name='confirmPassword'
                      id='confirmPassword'
                      label='Confirm Password'
                      error={!!errors.confirmPassword}
                      helperText={
                        errors.confirmPassword
                          ? errors.confirmPassword.message
                          : null
                      }
                    />
                  </FormControl>
                )}
              />
              <SubmitButton type='submit'>Register</SubmitButton>
            </Form>
            <Button
              color='inherit'
              sx={{
                textDecoration: 'underline',
                textAlign: 'left',
                margin: '1rem 2.6rem 0',
                fontWeight: '400',
                fontSize: '.7rem',
                letterSpacing: '1px',
                alignSelf: 'flex-start',
                padding: '4px 6px',
              }}
              variant='text'
              onClick={handleRegisterComponent}
            >
              ALREADY HAVE AN ACCOUNT ?
            </Button>
          </>
        ) : (
          <>
            <Typography
              my={4}
              variant='h5'
            >
              LOGIN
            </Typography>
            <Typography
              color='GrayText'
              variant='subtitle2'
            >
              In this form I used<b> react-hook-form & yup</b> for validation.
            </Typography>
            <Form onSubmit={handleSubmit(submitHandler)}>
              <Controller
                control={control}
                name='username'
                defaultValue=''
                render={({ field }) => (
                  <FormControl
                    margin='normal'
                    fullWidth
                    {...field}
                    variant='outlined'
                    error={!!errors.username}
                  >
                    <TextField
                      helperText={
                        errors.username ? errors.username.message : null
                      }
                      id='username'
                      label='Username'
                      name='username'
                    />
                  </FormControl>
                )}
              />
              <Controller
                control={control}
                name='password'
                defaultValue=''
                render={({ field }) => (
                  <FormControl
                    {...field}
                    margin='normal'
                    fullWidth
                    variant='outlined'
                  >
                    <InputLabel
                      htmlFor='password'
                      variant='outlined'
                    >
                      Password
                    </InputLabel>
                    <OutlinedInput
                      type={showPassword ? 'text' : 'password'}
                      id='password'
                      label='Password'
                      name='password'
                      endAdornment={
                        <InputAdornment position='end'>
                          <IconButton
                            aria-label='toggle password visibility'
                            onClick={handleClickShowPassword}
                            edge='end'
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                    <PasswordHelperText>
                      {errors.password ? errors.password.message : null}
                    </PasswordHelperText>
                  </FormControl>
                )}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    {...register('isAdmin')}
                    defaultChecked
                  />
                }
                label='Login As Admin(for test)'
              />

              <SubmitButton type='submit'>Login</SubmitButton>
              <Box>
                <Button
                  color='inherit'
                  sx={{
                    textDecoration: 'underline',
                    textAlign: 'left',
                    margin: '1rem 0',
                    fontWeight: '400',
                    fontSize: '.7rem',
                    letterSpacing: '1px',
                  }}
                  variant='text'
                  disabled
                >
                  DO NOT REMEMBER YOUR PASSWORD ?
                </Button>
                <Button
                  color='inherit'
                  sx={{ textDecoration: 'underline' }}
                  variant='text'
                  onClick={handleRegisterComponent}
                >
                  CREATE NEW ACCOUNT
                </Button>
              </Box>
            </Form>
          </>
        )}
      </RegisterContainer>
    </Background>
  );
};

export default Login;
