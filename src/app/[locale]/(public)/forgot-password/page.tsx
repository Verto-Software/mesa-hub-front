import { ForgotPassword } from '@/modules/forgot-password/forgot-password';
import { Metadata } from 'next';

export const metadata: Metadata = {
   title: 'Esqueceu a senha?',
};

export default function ForgotPasswordPage() {
   return <ForgotPassword />;
}
