import { Button, Input, Card, CardBody, CardHeader } from "@heroui/react";
import { redirect } from "next/navigation";
import { createSession } from "@/app/utils/daj";

async function handleLogin(formData) {
  'use server';
  const email = formData.get('email');
  const password = formData.get('password');
  if (email === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
    await createSession(email);

    redirect('/admin/fitcheck');
  }
}

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Admin Login
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Sign in to access the admin panel
          </p>
        </div>
        
        <Card className="shadow-lg">
          <CardHeader className="pb-0">
            <h3 className="text-lg font-medium text-gray-900">
              Enter your credentials
            </h3>
          </CardHeader>
          <CardBody>
            <form action={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email address
                </label>
                <Input
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  variant="bordered"
                  size="lg"
                  fullWidth
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  variant="bordered"
                  size="lg"
                  fullWidth
                />
              </div>

              <div>
                <Button
                  type="submit"
                  className="text-white w-full"
                  size="lg"
                  fullWidth
                >
                  Bejelentkezés
                </Button>
              </div>
            </form>
          </CardBody>
        </Card>

        <div className="text-center">
          <p className="text-xs text-gray-500">
            Protected by secure authentication
          </p>
        </div>
      </div>
    </div>
  );
}
