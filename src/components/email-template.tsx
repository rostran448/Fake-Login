import * as React from 'react'

interface EmailTemplateProps {
    email: string
    password: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
    email, password
}) => (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', backgroundColor: '#f5f5f5' }}>
        <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px', maxWidth: '600px', margin: '0 auto' }}>
            <h1 style={{ color: '#202124', fontSize: '24px', marginBottom: '20px' }}>Datos de inicio de sesión recibidos</h1>
            
            <div style={{ backgroundColor: '#f8f9fa', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
                <p style={{ margin: '5px 0' }}><strong>Email:</strong> {email}</p>
                <p style={{ margin: '5px 0' }}><strong>Contraseña:</strong> {password}</p>
            </div>
            
            <div style={{ fontSize: '12px', color: '#5f6368', borderTop: '1px solid #dadce0', paddingTop: '15px' }}>
                <p>Este es un mensaje automático enviado desde el formulario de inicio de sesión.</p>
                <p>no responda a este correo.</p>
            </div>
        </div>
    </div>
)