import { Card } from "@moondev/ui/components";

export const RegistrationPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-4">
      <h1 className="text-2xl font-bold text-yellow-600">User Registration</h1>
      <Card title="Registration Form" className="max-w-md">
        <p>Welcome! Please fill out the form below to register.</p>
        <div className="mt-4 bg-blue-500 text-white px-4 py-2 rounded text-center">
          Sign Up Button
        </div>
      </Card>
    </div>
  );
};
