import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { GoogleButton } from '#/components/social-button';
import { Divider, Input, Button, Card, Typography } from 'antd';
import { auth, useAuthentication } from '#/context/auth/AuthProvider';

interface LoginTypes {
  email: string
  password: string
}

export default function Login() {
  const { login, loggedOut } = useAuthentication();
  const navigate = useNavigate();
  const [failed, setFailed] = useState<string | null>();

  const {
    handleSubmit,
  } = useForm<LoginTypes>();

  const handleLogin = (data: LoginTypes) => {
    setFailed(null);
    navigate('/projects');
    const { email, password } = data;
    auth
      .login(email, password, true)
      .then((_response) => login())
      .catch((error) => setFailed(error.message))
  }

  return (
    <main className="mx-auto w-full max-w-md p-6">
      <Card>
        <div className="p-4 sm:px-7 sm:py-8">
          <div className="space-y-2">
            <GoogleButton />
          </div>

          <Divider plain>Or</Divider>

          <form autoComplete="off" onSubmit={handleSubmit(handleLogin)}>
            <div className="grid gap-y-4">
              <div>
                <Typography.Title level={5}>Email address</Typography.Title>
                <Input
                  placeholder="Email address"
                  className="px-4 py-2 text-sm transition rounded-md border border-black/10 dark:border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] dark:shadow-none"
                />
              </div>

              <div>
                <Typography.Title level={5}>Password</Typography.Title>
                <Input
                  placeholder="Password"
                  className="px-4 py-2 text-sm transition rounded-md border border-black/10 dark:border-white/10 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] dark:shadow-none"
                />
              </div>
            </div>
            <div className="mt-6 grid w-full">
              <Button
                type="primary"
                htmlType="submit"
              >
                Sign in
              </Button>
            </div>
          </form>
        </div>
      </Card>
    </main>
  )
}
